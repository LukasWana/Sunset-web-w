import { readDirRecursively } from './readDirRecursively'
import { expect } from 'chai'
import { relativizePath } from './relativizePath'

declare const __dirname
const PATH = `${__dirname}/__test_assets__/test-dir` //

describe('readDirRecursively', function () {
  it('reads dir', async function () {
    const { dirs, files } = await readDirRecursively(PATH)
    expect(dirs.map(dir => relativizePath(PATH, dir))).to.be.deep.equal(['', 'sub-dir'])
    expect(files.map(file => relativizePath(PATH, file))).to.be.deep.equal([
      'test2.txt',
      'sub-dir/test1.txt'
    ])
  })
})
