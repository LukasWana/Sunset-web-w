<script>
/**
 * Chová se jako obyčejný input, jen
 * - přidává ikonku vyhledávání
 * - ikonkus smazání textu
 */
export default {
  name: 'base-search-input',
  props: {
    value: {
      type: String
    }
  }
}
</script>


<template lang="pug">
  b-input.search(
    :value="value"
    v-bind="$attrs"
    placeholder="Hledat..."
    icon="magnify"
    type="search"
    @input="value => $emit('input', value)"
    :icon-right-clickable="true"
    @icon-right-click="() => $emit('input', '')"
    )
</template>


<style scoped lang="stylus">
  .search
    width: 100%
</style>
