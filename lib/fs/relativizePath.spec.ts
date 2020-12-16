/* eslint-env node, mocha, chai */

import { expect } from 'chai'
import { relativizePath } from './relativizePath'

describe('relativizePath', function () {
  it('it relativizes...', function () { //
    expect(relativizePath('C:\\work', 'C:\\work\\dir\\ble.txt')).to.be.equal('dir\\ble.txt')
  })
})
