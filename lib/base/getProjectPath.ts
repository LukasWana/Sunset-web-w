import { Project } from './Project'
import { ProjectPathType } from './ProjectPathTypes'

export function getProjectPath (project: Project, typeId: ProjectPathType, relative = false): string {
  const path = project.paths.find(path => path.id === typeId)
  if (!path) {
    throw new Error(`No path '${typeId}' found in project`)
  }
  if (relative) {
    return path.path
  }
  return `${path.repository}/${path.path}`
}
