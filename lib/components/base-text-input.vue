<script>
export default {
  name: 'base-number-input',
  inheritAttrs: false,
  props: {
    value: {
      type: String
    }
  },
  computed: {
    listeners () {
      return {
        ...this.$listeners,
        input: event => {
          this.$emit('input', event.target.value)
        }
      }
    }
  }
}
</script>

<template lang="pug">
  input.input(v-on="listeners" :value="value" v-bind="$attrs")
</template>

<style scoped lang="stylus">
.input
  max-width: 15em
</style>
