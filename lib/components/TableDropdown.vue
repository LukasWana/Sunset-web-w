<script>
  import { $action, $get } from 'vuex-dry'
  import BaseDropdown from './BaseDropdown'
  import TableCheckbox from './TableCheckbox'

  function trunc ({ str = '', n = 20, useWordBoundary = false }) {
    if (str.length <= n) {
      return str
    }
    const subString = str.substr(0, n - 1)
    return (useWordBoundary ? subString.substr(0, subString.lastIndexOf(' ')) : subString) + '&hellip;'
  }

  export default {
    name: 'table-dropdown',
    inheritAttrs: false,
    async mounted () {
      $action('db/fetchLazily', { table: this.table })
    },

    components: { TableCheckbox, BaseDropdown },

    props: {
      table: { type: String, required: true },
      value: { type: Array, required: true }
    },

    computed: {
      rows () { return $get(`db/${this.table}`) },
      title () {
        if (this.value.length === 0) { return 'Všechny role' }
        const title = this.value.map(row => this.rowShortTitle(row)).join(', ')
        return trunc({ str: title, n: 25, useWordBoundary: true })
      }
    },
    methods: {
      rowTitle (row) {
        return row.nazev || row.name || row.id
      },
      rowShortTitle (row) {
        return row.zkratka || row.zkracenyNazev || this.rowTitle(row)
      }
    }
  }
</script>


<template lang="pug">

  base-dropdown(:trigger-class="value.length === 0 ? '' : 'has-text-info'")

    template(#title)
      span(v-html="title")

    template(#default="{row}")
      table-checkbox(style="min-width: 25em" :table="table" :value="value" @input="value => $emit('input', value)")
        template(#default="{row}")
          slot(:row="row")
            pre table dropdown #default {{row}}



  //b-dropdown(hoverable aria-role="list" v-bind="$attrs")
    button.button(slot="trigger")
      slot(name="title")
        | slot #title
      b-icon(icon="menu-down").ml-1

    b-dropdown-item(aria-role="menu-item" custom paddingless)
      slot
        | slot #default

</template>


<style scoped lang="stylus">
</style>
