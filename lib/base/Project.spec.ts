import { expect } from 'chai'
import { IdeExampleProject } from '../../ide-server/projects/IdeExampleProject'
import { ProjectPathType } from './ProjectPathTypes'
import { getProjectPath } from './getProjectPath'

const project = IdeExampleProject

describe('Project', function () {
  it('it calculates paths', function () {
    expect(getProjectPath(project, ProjectPathType.backEnd)).to.be.equal('c:/work/projects/altisima-central-server/ide-example-project/backend')
    expect(getProjectPath(project, ProjectPathType.backEnd, true)).to.be.equal('ide-example-project/backend')
    expect(getProjectPath(project, ProjectPathType.frontEnd)).to.be.equal('c:/work/projects/altisima-central-server/ide-example-project/frontend')
    expect(getProjectPath(project, ProjectPathType.frontEnd, true)).to.be.equal('ide-example-project/frontend')
  })
})
