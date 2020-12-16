<script>
  export default {
    name: 'menu-divider',
    props: {
      margin: { type: Number, default: 0 }
    }
  }
</script>


<template lang="pug">
  v-divider(:style="`margin-top:${margin}px; margin-bottom:${margin}px`")
</template>


<style scoped lang="stylus">
  /* buefy přidává hr margin, toto je fix */
  hr
    margin 0
</style>
