<script>
  /**
   * Zaklapávací menu komponenta.
   * Je otevřená, pokud přímí potomci mají prop 'to', který se kontroluje proti aktuální routě
   */
  export default {
    name: 'menu-group',
    mounted () {
      this.isMounted = true
    },
    props: {
      label: { type: String, required: true },
      icon: { type: String, default: 'dashboard' }
    },
    data () {
      return {
        opened: false,
        isMounted: false
      }
    },
    watch: {
      active: {
        immediate: true,
        handler () {
          this.opened = this.active
        }
      }
    },
    computed: {
      isOpen () {
        return this.opened
      },
      active () {
        if (this.isMounted) {
          return this.$children.some(child => {
            return child['active'] === true && ['menu-item', 'menu-group'].includes(child.$options.name)
          })
        }
      }
    },
    methods: {
      clicked () {
        this.opened = !this.opened
      }
    }
  }
</script>


<template lang="pug">
  div
    v-list-tile(tag="a" @click="clicked" :class="{'title-active': active}")
      v-list-tile-action
        slot(name="icon")
          v-icon {{icon}}
      v-list-tile-content
        v-list-tile-title
          .level
            .level-left
              | {{label}}
              // | active: {{active}}
            .level-right
              b-icon(v-if="isOpen" icon="chevron-down")
              b-icon(v-else icon="chevron-right")


    div(v-show="isOpen").mt-0.mb-3.ml-3
      slot




</template>


<style scoped lang="stylus">
  .title-active >>> a
    font-weight bold !important
</style>
