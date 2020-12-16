<script>
  export default {
    name: 'base-notification',
    inheritAttrs: false,
    props: {
      closable: { type: Boolean, default: false }
    }
  }
</script>


<template lang="pug">
  b-notification(:closable="closable" v-bind="$attrs")
    slot

</template>


<style scoped lang="stylus">

</style>
