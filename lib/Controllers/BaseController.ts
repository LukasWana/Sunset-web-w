import { join } from 'path'
import { capitalizeFirstLetter } from '../utils/capitalizeFirstletter'
import { BaseObject } from '../base/BaseObject'

const controllersCache = {}

declare const $context

export class BaseController extends BaseObject {
  /**
   * @param {string} apiName
   * @return [string, string]
   */
  static parseApiName (apiName) {
    const [controllerName, actionName] = apiName.split('/', 2)
    if (!actionName) {
      throw new Error('Wrong format of actionName, should be <controllerName>/<actionName>')
    }
    return [controllerName, actionName]
  }

  static getControllerPath (controllerClassName) {
    return join(__dirname, `${controllerClassName}Controller.js`)
  }

  static getControllerClassName (controllerName) {
    return `${controllerName}Controller`
  }

  static getControllerNameFromFileName (fileName) {

  }

  static getController (controllerName) {
    if (!controllersCache[controllerName]) {
      controllersCache[controllerName] = this.createController(controllerName)
    }
    return controllersCache[controllerName]
  }

  static createController (controllerName) {
    console.log(controllerName)
    const controllerClassName = this.getControllerClassName(controllerName)
    const controllerPath = this.getControllerPath(controllerName)
    try {
      const ControllerClass = require(controllerPath)[controllerClassName]
      return new ControllerClass()
    } catch (err) {
      throw Error(`Cannot create controller ${controllerClassName}, there is no file ${controllerPath}`)
    }
  }

  actionExists (actionMethodName) {
    return typeof this[actionMethodName] === 'function'
  }

  async callAction ({ action, parameters, auth }) {
    try {
      const actionMethodName = `action${capitalizeFirstLetter(action)}`
      if (!this.actionExists(actionMethodName)) {
        throw Error(`${this.constructor.name}.${actionMethodName} does not exists`)
      }

      // @todo Implementovat autorizaci

      return this[actionMethodName](parameters)
    } catch (err) {
      console.log({ 'err': err })
      return {
        error: true,
        code: 255,
        message: err.toString(),
      }
    }
  }

  static registerApi ({ apiName, controller }) {
    $context.log('BaseController').info(`Registering api ${apiName}`)
    if (controllersCache[apiName]) {
      console.log({ 'API': controllersCache[apiName] })
      throw Error(`Api ${apiName} is already registered.`)
    }
    controllersCache[apiName] = controller
  }

  static async callApi ({ apiName, action, parameters, auth }) {
    const controller = this.getController(apiName)
    return controller.callAction({ action, parameters, auth })
  }

  static getRegistered () {
    return controllersCache
  }
}
