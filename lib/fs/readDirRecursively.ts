import { read } from 'recursive-fs'

export async function readDirRecursively (path: string): Promise<{ dirs: string[]; files: string[] }> {
  return read(path)
}
