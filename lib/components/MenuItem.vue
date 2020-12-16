<script>
  import { get } from 'lodash'
  import isDeveloper from '../mixins/isDeveloper'
  import { isEqual } from '../utils/isEqual'
  import { objectFilter } from '../utils/objectFilter'

  export default {
    name: 'menu-item',
    props: {
      label: { type: String, required: true },
      to: { type: Object, required: true },
      icon: { type: String, default: 'dashboard' }
    },
    mixins: [isDeveloper],
    computed: {
      routeTo () { return this.$router.resolve(this.to) },
      active () {
        // console.log({'this.routeTo.route.params': this.routeTo.route.params})
        const toParams = Object.keys(this.routeTo.route.params).filter(param => this.routeTo.route.params[param] !== undefined)
        let a = this.stripRoute(this.$route, toParams)
        let b = this.stripRoute(this.routeTo.route, toParams)
        // if (this.routeTo.name === 'jidelna-dashboard') {
        // console.log({'toParams': toParams})
        // console.log({'route': a})
        // console.log({'route to': b})
        // }

        return isEqual(a, b)
      },
      isItemForDeveloper () { return get(this.routeTo, 'route.meta.developer', false) },
      show () {
        if (this.isItemForDeveloper === true) {
          return this.isDeveloper
        }
        return true
      }
    },
    methods: {
      stripRoute (route, toParams) {
        return [route.name, objectFilter(route.params, (value, key) => {
          return toParams.includes(key)
        })]
      }
    }
  }
</script>


<template lang="pug">

  v-list-tile(:to="active ? undefined: to" v-if="show" :class="{'is-developer': isItemForDeveloper, active: active}")
    v-list-tile-action
      slot(name="icon")
        v-icon {{icon}}
    v-list-tile-content
      v-list-tile-title
        slot(:label="label" :icon="icon")
          span {{label}}

</template>


<style scoped lang="stylus">
  .active
    background #eee
    *
      font-weight bold
</style>
