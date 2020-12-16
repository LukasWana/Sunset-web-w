<script>
export default {
  name: 'base-table'
}
</script>

<template lang="pug">
  b-table(v-bind="$attrs")
    template(slot-scope="scope")
      slot(v-scope="scope")
</template>

<style scoped lang="stylus"></style>
