<script>
  import BDropdown from 'buefy/src/components/dropdown/Dropdown'
  import BDropdownItem from 'buefy/src/components/dropdown/DropdownItem'
  import { getWindowSize } from '../browser/getWindowSize'

  export default {
    name: 'base-dropdown',
    inheritAttrs: false,
    components: { BDropdownItem, BDropdown },
    mounted () {
      this.isMounted = true
    },
    props: {
      triggerClass: { default: () => [] }
    },
    data () {
      return {
        isMounted: false
      }
    },

    computed: {
      idealPosition () {
        if (this.isMounted) {
          const rect = this.$refs.dropdown.$el.getBoundingClientRect()
          const windowSize = getWindowSize()
          const distanceX = windowSize.width - rect.right
          const distanceY = windowSize.height - rect.top
          let xPos = 'right'
          let yPos = 'bottom'
          if (distanceX < 50) {
            xPos = 'left'
          }
          if (distanceY < 50) {
            yPos = 'top'
          }
          let pos = `is-${yPos}-${xPos}`
          if (pos === 'is-bottom-right') {
            pos = undefined
          }
          console.log({ 'pos': pos })
          return pos
        }
      }
    }
  }
</script>


<template lang="pug">

  b-dropdown(hoverable aria-role="list" v-bind="$attrs" ref="dropdown" :position="idealPosition")

    button.button(slot="trigger" :class="triggerClass")
      slot(name="title")
        | slot #title
      b-icon(icon="menu-down").ml-1


    b-dropdown-item(aria-role="menu-item" custom paddingless)
      slot
        | slot #default

</template>


<style scoped lang="stylus">


</style>
