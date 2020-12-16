import { expect } from 'chai'
import { Git } from './Git'

const TESTREPO = `c:/work/projects/.test-assets/testrepo`
//
describe('Git', () => {
  describe('we can change git dir', () => {
    it('uses param everywhere', async () => {
      const git = Git(TESTREPO)
      const status = await git.status()
      console.log({ 'status': status })
      const diff = await git.diff()
      console.log({ 'diff': diff })
      const gitLog = await git.log()
      console.log({ 'gitLog': gitLog })
      expect(false).to.be.true
    })
  })
})
