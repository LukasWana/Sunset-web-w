
<script>
  import BTableColumn from 'buefy/src/components/table/TableColumn'
  import { $action, $get } from 'vuex-dry'

  export default {
    name: 'table-checkbox',
    components: { BTableColumn },
    props: {
      value: { type: Array, required: true },
      table: { type: String, required: true },
      label: { type: String, default: '' }
    },

    async mounted () {
      $action('db/fetchLazily', { table: this.table })
    },

    data () {
      return {
        checkedRows: []
      }
    },

    watch: {
      checkedRows () {
        this.$emit('input', this.checkedRows)
      }
    },

    computed: {
      rows () {
        return $get(`db/${this.table}`)
      }
    }
  }
</script>


<template lang="pug">

  div

    b-table(
      :data="rows"
      :per-page="30"
      detail-key="id"
      narrowed
      hoverable
      checkable
      :checked-rows.sync="checkedRows"
      default-sort="nazev"
      :mobile-cards="false"
    )
      template(v-slot="{row}")
        b-table-column(field="nazev" :label="label" width="200" sortable)
          slot(:row="row")
            pre slot 'default' in table-checkbox {{row}}

      template(v-slot:detail="{row}")
        pre {{row}}



</template>


<style scoped lang="stylus">

</style>
