<script>
  import { validationBFieldType, validationMessage } from '../validation/formValidationUtils'

  export default {
    name: 'base-field',
    inheritAttrs: false,
    props: {
      name: { type: String, required: true },
      $v: { type: Object, required: true }
    },
    computed: {
      model () { return this.$v[this.name].$model },
      message () { return validationMessage({ name: this.name, $v: this.$v }) },
      type () { return validationBFieldType({ name: this.name, $v: this.$v }) }
    }
  }
</script>

<template lang="pug">
  b-field(v-bind="$attrs" :message="message" :type="type")
    slot(:model="model")
      | default
      b-input(v-model="model")

</template>

<style scoped lang="stylus">

</style>
