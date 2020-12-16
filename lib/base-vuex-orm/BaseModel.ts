import { Type, Model } from '@vuex-orm/core'
import { uuid } from '../utils/uuid'

declare const $context: any

type Id = number|string

export class BaseModel extends Model {
  static uuid (): string {
    return uuid()
  }

  static async fetch (filter = {}) {
    console.log(this.entity)
    const response = await $context.callApi('Entity/getByObjectionFilter', {
      entityName: this.entity,
      filter,
    })
    console.log({ [`result fetch ${this.entity}`]: response })
    await this.insertOrUpdate({ data: response.result.rows })
    return response
  }

  static firstIdOrNull (): Id|null {
    const first = this.query().orderBy('nazev').first()
    return first ? first.$id : null
  }

  static async save (entity, columns: string[]|null = null) {
    const response = await $context.callApi('Entity/save', {
      entityName: this.entity,
      data: this.stripEntity(entity),
      columns,
    })
    console.log({ 'API response': response })
    return this.insertOrUpdate({ data: response.result })
  }

  static async patchAttribute (entity, column, value) {
    const updatedUser = entity.clone()
    updatedUser[column] = value
    await this.save(updatedUser, [column])
  }

  static async remove (id: number|string) {
    const response = await $context.callApi('Entity/remove', {
      entityName: this.entity,
      id: id,
    })
    console.log({ 'API response': response })
    console.log({ 'remove id': id })
    await this.delete(id)
  }

  static async removeMultiple (ids: Id[]) {
    await $context.callApi(':user:deleteEntity', {
      entityName: this.entity,
      id: ids,
    })
    this.delete((e: any) => {
      return ids.includes(e.$id)
    })
  }

  /**
   * Removes all properties that starts with $ and related
   * @param entity
   * @returns {{}}
   */
  static stripEntity (entity) {
    let keys = Object.keys(entity).filter(key => {
      const firstLetter = key[0]
      return firstLetter === firstLetter.toLowerCase() && firstLetter !== '$'
    })
    const fields = this.fields()
    keys = keys.filter(key => {
      const field = fields[key]
      return field instanceof Type
    })
    const stripped = {}
    keys.forEach(key => { stripped[key] = entity[key] })
    return stripped
  }

  static state () {
    return {
      loaded: false,
      fetching: false,
    }
  }

  async save () {
    return (this.constructor as any).save(this)
  }

  async patchAttribute (column, value) {
    return (this.constructor as any).patchAttribute(this, column, value)
  }

  strip () {
    return (this.constructor as any).stripEntity(this)
  }

  cloneShallow () {
    const stripped = this.strip()
    console.log({ 'stripped': stripped })
    const clone = new (this.constructor as any)(this.strip())
    clone.$id = this.$id
    return clone
  }

  clone () {
    const clone = new (this.constructor as any)(this.$toJson())
    clone.$id = this.$id
    return clone
  }

  // $cloneAsNew () {
  //   const clone = this.$clone()
  //   clone.$id = this.$id
  // }
}
