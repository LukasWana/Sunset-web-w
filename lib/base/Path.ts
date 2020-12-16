import { ProjectPathType } from './ProjectPathTypes'
import { ProjectPathGroup } from './ProjectPathGroup'

export interface Path {
  id: string;
  projectId: string;
  type: ProjectPathType;
  repository: string;
  path: string;
  group: ProjectPathGroup;
}
