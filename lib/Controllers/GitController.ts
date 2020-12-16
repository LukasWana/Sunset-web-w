import { BaseController } from './BaseController'
import gitP, { StatusResult } from 'simple-git/promise'
import { BranchSummary } from 'simple-git/typings/response'

export class GitController extends BaseController {
  async actionStatus ({ path }: {path: string}): Promise<StatusResult> {
    const git = gitP(path)
    return git.status()
  }

  async actionGetBranches ({ path }: {path: string}): Promise<BranchSummary> {
    const git = gitP(path)
    return git.branch()
  }
}
