import { Repository } from './Repository'
import { Path } from './Path'

export interface Project {
  id: string;
  name: string;
  repositories: Repository[];
  paths: Path[];
}
