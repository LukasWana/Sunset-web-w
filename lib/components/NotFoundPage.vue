<script>
export default {
  name: 'not-found-page'
}
</script>

<template lang="pug">
  div.pa-3
    h1.title Ooops!
    h3.subtitle Stránka, kterou hledáte tu není
    router-link(:to="{path: '/'}") domů
</template>

<style scoped lang="stylus"></style>
