editedNazev<script>
  import BCheckbox from 'buefy/src/components/checkbox/Checkbox'
  import BCheckboxButton from 'buefy/src/components/checkbox/CheckboxButton'
  import BNotification from 'buefy/src/components/notification/Notification'
  import { $action, $get } from 'vuex-dry'
  import { sortLocale } from '../utils/arrayUtils'
  import { filterByWords } from '../utils/filterByWords'
  import BaseIcon from './base-icon'

  const usageInfo = () => {
    console.warn(
      `
ManagerSmart: Zapomněl jsi props create.
Je to callback (funkce) async create(row) => openModal()')}
`
    )
  }

  export default {
    name: 'table-smart-manager',
    components: { BCheckboxButton, BCheckbox, BNotification, BaseIcon },
    // components: {EditorRoleDefinice, EditorPristupoveRole},

    props: {
      table: { type: String, required: true },
      allowCreate: { type: Boolean, default: true },
      allowDelete: { type: Boolean, default: true },
      labelAdd: { type: String, default: 'Přidat' },
      placeholderNazev: { type: String, default: 'jméno pro nový objekt' },
      create: { type: Function, default: usageInfo },
      checkable: { type: Boolean, default: true },
      modalWidth: { type: Number, default: 600 },
      modalTitle: { type: String, default: 'Nový objekt' },
      filterNazevProp: { type: String, default: 'nazev' },
      knexFilter: { type: Object, default: () => ({}) }
    },

    data () {
      return {
        editedNazev: '',
        checkedRows: [],
        editedSureDelete: false,
        editedNameFilter: '',
        editedCheckable: false,
        detailsOpened: [],
        selectedRow: undefined,
        modalOpen: false
      }
    },

    mounted () {
      $action('db/fetch', { table: this.table, limit: 500, knexFilter: this.knexFilter })
    },

    watch: {
      checkedRows () { this.editedSureDelete = false },
      editedCheckable () { this.checkedRows = [] }
    },

    computed: {
      rows () { return $get(`db/${this.table}`) },
      computedCheckable () {
        return this.checkable && this.editedCheckable
      },
      filteredRows () {
        if (!this.rows) {
          return []
        }
        return sortLocale(this.filterNazevProp, filterByWords(this.rows, this.filterNazevProp, this.editedNameFilter))
      },
      editedNazevIsValid () {
        return this.editedNazev.trim().length > 0 && this.isEditedNazevUnique
      },
      isEditedNazevUnique () {
        return this.rows.find(row => (row.nazev.toLocaleLowerCase() === this.editedNazev.toLocaleLowerCase())) === undefined
      },
      nameMessage () {
        if (this.editedNazev === '') {
          return { type: undefined, text: undefined }
        }
        if (!this.isEditedNazevUnique) {
          return { type: 'is-warning', text: 'tento název již existuje' }
        }
        return { type: 'is-success', text: 'název je v pořádku' }
      }
    },

    methods: {
      /**
       * Smaže z databáze označené řádky
       * @returns {Promise<void>}
       */
      async smazatOznacene () {
        const ids = this.checkedRows.map(row => row.id)
        const result = await $action('db/deleteRows', { table: this.table, ids: ids })
        this.$emit('deleted', result)
        this.checkedRows = []
      },
      async addClicked () { this.modalOpen = true },
      async closeModal () {
        this.editedNazev = ''
        this.modalOpen = false
      }
    }
  }
</script>


<template lang="pug">
  div

    // filtering

    .level.pa-0.ma-0.mb-1

      .level-left
        .level-item
          b-field.search-box(horizontal)
            b-field
              b-input(
              icon="magnify"
              exanded
              placeholder="hledej dle jména..."
              icon-pack="mdi"
              v-model="editedNameFilter")

            b-checkbox.pt-2(v-model="editedCheckable") editační mód
            // slot: filter

            slot(name="filter" :rows="filteredRows")



      .level-right(v-if="allowCreate")
        .level-item
          b-field(horizontal)
            b-field.create-field(
            horizontal
            :message="nameMessage.text"
            :type="nameMessage.type"
            grouped
            )
              b-input(
              v-model="editedNazev"
              :placeholder="placeholderNazev"
              style="width:20em"
              )
            button.button.is-primary(@click="addClicked" :disabled="!editedNazevIsValid") {{labelAdd}}

    b-modal(:active.sync="modalOpen" :width="modalWidth")
      .card
        .card-header
          .card-header-title {{modalTitle}}
          .card-header-icon
            .button(@click="modalOpen=false")
              base-icon(role="close")
        .card-content

          // slot: create

          slot(name="create" :nazev="editedNazev" :closeModal="closeModal")
            b-notification(type="is-warning" :closable="false") Není použit slot #create




    b-table(
    :data="filteredRows"
    detailed
    narrowed
    paginated
    :per-page="15"
    :checkable="computedCheckable"
    :checked-rows.sync="checkedRows"
    :default-sort="['nazev', 'asc']"
    detail-key="id"
    :opened-detailed="detailsOpened"
    :mobile-cards="false"
    focusable
    )

      // slot: columns

      template(slot-scope="{row}")
        slot(name="columns" :row="row" :searchTerm="editedNameFilter")
          b-table-column(label="jméno" field="nazev" sortable)
            strong {{row.nazev}}
            small
              em.ml-3 {{row.popis}}


      template(slot="empty")
        div.ma-3
          .mt-3 žádné položky

      // slot: detail
      template(#detail="{row}")
        slot(name="detail" :row="row")
          pre {{row}}

      template(slot="bottom-left")
        .level
          // .level-left
            b-checkbox.pt-2(v-model="editedCheckable").mr-3 editační mód
          .level-left(v-if="allowDelete")
            .level-item(v-show="checkedRows.length > 0")
              button.button.is-danger(@click="smazatOznacene" :disabled="!editedSureDelete") Smazat označené
            .level-item(v-show="checkedRows.length > 0")
              b-checkbox(v-model="editedSureDelete")
                template(v-if="checkedRows.length > 1") Opravdu chcete smazat #[strong {{checkedRows.length}}] položek?
                template(v-if="checkedRows.length === 1") Opravdu smazat?

</template>

<style lang="stylus">
  .create-field

    p.help
      padding 0 !important
      margin 0 !important

  .search-box
    .field-label
      display none

  .detail-container
    // background: #e9e542
    margin 4px
    padding 0
</style>
