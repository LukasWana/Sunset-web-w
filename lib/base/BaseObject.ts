import { createLog } from '../error/Log'

export class BaseObject {
  get log () {
    return createLog(this.createLogName())
  }

  warn () {

  }

  error () {

  }

  getClassName () {
    return this.constructor.name
  }

  createLogName () {
    return 'this.constructor'
  }

  clone () {

  }

  cloneDeep () {

  }

  mockSelf () {
  }
}
