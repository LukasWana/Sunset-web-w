import { parseYaml } from '../yaml/parseYaml.js'
import { readDirRecursively } from '../fs/readDirRecursively'
import { readFile } from '../fs/fs'
import { relativizePath } from '../fs/relativizePath'

interface Block {
  key: string;
  yaml: string;
  json: object;
}

type FullPath = {
  namespace: string;
  path: string;
}

export class BlockFileSystemRepository {
  path: string
  private blocks: object[] = []
  private blocksLoaded = false

  constructor (path: string) {
    this.path = path
  }

  async getBlock ({ namespace = '', path = '' }: FullPath) {
    if (!this.blocksLoaded) {
      await this.reload()
    }
  }

  async getBlocks (namespace: string) {
    if (!this.blocksLoaded) {
      await this.reload()
    }
  }

  async loadBlocks (): Promise<object[]> {
    const { files } = await readDirRecursively(this.path)
    const promises = files.map(async file => {
      const content = await readFile(file, { encoding: 'utf-8' })
      return this.createBlockFromFileContent(relativizePath(this.path, file), content)
    })
    const blocks = await Promise.all(promises)
    return blocks
  }
  // comment2
  async reload (): Promise<void> {
    this.blocksLoaded = false
    const blocks = await this.loadBlocks()
    this.blocks = blocks
    this.blocksLoaded = true
  }

  createBlockFromFileContent (key, content: string): Block {
    return {
      key: key,
      yaml: content,
      json: parseYaml(content),
    }
  }

  hello (): string {
    return 'hello world'
  }
}
