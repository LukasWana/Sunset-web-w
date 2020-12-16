<script>
  /** @see https://github.com/greyby/vue-spinner */
  import Spinner from 'vue-spinner/src/BeatLoader'

  export default {
    name: 'base-spinner',
    components: { 'vue-spinner': Spinner },
    props: {
      size: { type: String, default: '12px' }
    }
  }
</script>


<template lang="pug">
  vue-spinner.spinner(:loading="true" :size="size" color="#aaaaaa")
</template>


<style scoped lang="stylus">
  .spinner
    display: inline-block
</style>
