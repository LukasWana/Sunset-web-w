<script>
import { validatePropInArray } from '../utils/validationUtils'

const roles = {
  add: { name: 'plus-box-outline' },
  'all-ok': { name: 'check-circle-outline' },
  'arrow-right': { name: 'arrow-right-bold' },
  'bad-icon': { name: 'alert-octagram' },
  bulb: { name: 'lightbulb-outline' },
  calendar: { name: 'calendar' },
  checked: { name: 'check' },
  close: { name: 'close' },
  'collapsed-left': { name: 'arrow-left-thick' },
  'collapsed-right': { name: 'arrow-right-thick' },
  database: { name: 'database' },
  'delete-button': { name: 'delete' },
  deleted: { name: 'delete' },
  detail: { name: 'eye-outline' },
  denied: { name: 'cancel' },
  doklad: { name: 'file-document' },
  'doklad-ok': { name: 'check-circle-outline', classes: ['has-text-success'] },
  'doklad-nezauctovany': {
    name: 'alert-circle-outline',
    classes: ['has-text-warning']
  },
  editor: { name: 'open-in-new' },
  error: { name: 'thumb-down' },
  grid: { name: 'table' },
  granted: { name: 'arrow-right-bold' },
  'has-errors': { name: 'alert-circle-outline' },
  home: { name: 'home' },
  help: { name: 'help' },
  info: { name: 'information-outline' },
  'link-external': { name: 'open-in-new' },
  lock: { name: 'lock' },
  'new-window': { name: 'arrow-up-bold-circle-outline' },
  next: { name: 'skip-next' },
  password: { name: 'textbox-password' },
  previous: { name: 'skip-previous' },
  point: { name: 'checkbox-blank-circle' },
  play: { name: 'play' },
  print: { name: 'printer' },
  reload: { name: 'reload' },
  'sort-ascending': { name: 'sort-variant', classes: ['mdi-flip-v'] },
  'sort-descending': { name: 'sort-variant' },
  settings: { name: 'settings' },
  surovina: { name: 'food-apple' },
  teamviewer: { name: 'teamviewer' },
  user: { name: 'account' },
  favorite: { name: 'star' },
  warning: { name: 'alert-outline' },
  zbozi: { name: 'cube-outline' }
}
export default {
  name: 'base-icon',
  roles: roles,
  inheritAttrs: false,
  props: {
    /**
     * jméno ikony přímo z mdi icons
     */
    name: { type: String, default: 'menu' },
    /**
     * vlastní role
     */
    role: {
      type: String,
      validator: validatePropInArray({ allowed: Object.keys(roles) })
    },
    /**
     * pokud true, zobrazí místo ikony demo icon
     */
    demo: false,
    /**
     * Další třídy ovlivňující ikony (mdi-flip-v)
     * @see https://bulma.io/documentation/elements/icon/
     */
    classes: { type: Array, default: () => [] },
    size: {
      type: String,
      validator: validatePropInArray({
        allowed: ['is-large', 'is-medium', 'is-small']
      })
    }
  },
  computed: {
    roleDefinition () {
      return roles[this.role] || roles['bad-icon']
    },
    icon () {
      let icon = this.name
      if (this.role) {
        icon = this.roleDefinition.name
      }
      return icon
    },
    allClasses () {
      const cls = [
        [`mdi-${this.icon}`],
        ...(this.roleDefinition.classes || [])
      ]
      if (this.roleDefinition && this.roleDefinition.rotate) {
        cls.push(`mdi-rotate-${this.roleDefinition.rotate}`)
      }
      return [...cls, ...this.classes, this.size]
    }
  }
}
</script>

<template lang="pug">
  span.icon(v-if="!demo" :class="[size]")
    i.mdi(:class="allClasses" v-bind="$attrs")
  span(v-else)
    strong DEMO
    span(v-for="(role, key) in $options.roles")
      base-icon(:role="key" :classes="['mdi-24px']")
      | {{key}}
</template>
