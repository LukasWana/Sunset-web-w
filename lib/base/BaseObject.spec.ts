/* eslint-env node, mocha, chai */

import { BaseObject } from './BaseObject'
import { setupEntitySystemTestContext } from '../../ide-server/entity-system/tests/setupEntitySystemTestContext'
import { expect } from 'chai'

setupEntitySystemTestContext()

class SomeChildClass extends BaseObject {}

describe('BaseObject', function () {
  it('it has method getClassName', function () {
    const someChildClass = new SomeChildClass()
    expect(someChildClass.getClassName()).to.be.equal('SomeChildClass')
  })
})
