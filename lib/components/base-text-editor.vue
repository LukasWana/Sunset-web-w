<script>
/**
 * @example
 * base-text-editor(v-model="... :value="initialValue")
 */
export default {
  name: 'base-text-editor',
  inheritAttrs: false,
  props: ['value'],
  computed: {
    listeners () {
      return {
        ...this.$listeners,
        input: value => this.$emit('input', value)
      }
    }
  }
}
</script>

<template lang="pug">
  b-input(type="textarea" rows="4" v-bind="$attrs" :value="value" v-on="listeners")
</template>

<style scoped lang="stylus"></style>
