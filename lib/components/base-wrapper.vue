<script>
/**
 *
 * Usage:
 *
 *   export default
 *      computed: {
 *        localProperty: () => 'hello'
 *      },
 *      methods: onClick
 *   }
 *
 * base-wrapper(:message="localProperty" :onClick="onClick")
 *   div(slot-scope="{message, onClick}")
 *    p {{ message }}
 *    button(@onClick="onClick")
 */

export default {
  name: 'base-wrapper',
  render () {
    return this.$scopedSlots.default({
      ...this.$attrs
    })
  }
}
</script>
