import gitP, { SimpleGit } from 'simple-git/promise'

export function Git (path: string, gitDir: string|null = null) {
  const git: SimpleGit = gitP(path)
  if (gitDir) {
    git.env('GIT_DIR', gitDir)
  }
  return git
}
