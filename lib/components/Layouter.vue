<script>
  import { layoutCalc } from '../layout-calc/layoutCalc'

  export default {
    name: 'layouter',

    mounted () {
      this.isMounted = true
    },

    data () {
      return {
        isMounted: false,
        rand: 0
      }
    },

    props: {
      layout: { type: Object },
      magic: { type: Number, default: 44 },
      browserModuleName: { type: String, default: 'BrowserModule' }
    },

    computed: {
      screen () {
        return {
          width: $context.storeGet(`${this.browserModuleName}/width`),
          height: $context.storeGet(`${this.browserModuleName}/height`)
        }
      },
      toFill () {
        // eslint-disable-next-line no-unused-vars
        const _dummy = this.screen.width
        // eslint-disable-next-line no-unused-vars
        const _dummy2 = this.rand
        const pos = (this.isMounted && this.$refs.box) ? this.$refs.box.getBoundingClientRect().top : 0
        return Math.floor(this.screen.height - pos - this.magic)
      },
      cLayout () {
        return layoutCalc(
          this.layout,
          { height: this.toFill }
        )
      },
      cStyles () {
        const styles = {}
        Object.keys(this.cLayout).forEach(name => {
          styles[name] = {
            height: this.cLayout[name].height + 'px'
            // 'overflow-y': 'auto',
            // 'overflow-x': 'auto'
          }
        })
        return styles
      }
    },

    methods: {
      resized () {
        this.rand = Math.random()
      }
    }
  }
</script>


<template lang="pug">

  div(ref="box" v-resize.initial="resized")
    slot(:cLayout="cLayout" :cStyles="cStyles" :screen="screen")

</template>


<style scoped lang="stylus">

</style>
