<script>
import BCheckbox from 'buefy/src/components/checkbox/Checkbox'
import BCheckboxButton from 'buefy/src/components/checkbox/CheckboxButton'
import BNotification from 'buefy/src/components/notification/Notification'
import { sortLocale } from '../utils/arrayUtils'
import { filterByWords } from '../utils/filterByWords'
import BaseIcon from './base-icon'
import BaseNotification from './base-notification'
import BaseSearchInput from './base-search-input'

const usageInfo = () => {
  console.warn(
    `
ManagerSmart: Zapomněl jsi props create.
Je to callback (funkce) async create(row) => openModal()')}
`
  )
}

export default {
  name: 'data-smart-manager',
  components: { BaseSearchInput, BaseNotification, BCheckboxButton, BCheckbox, BNotification, BaseIcon },
  // components: {EditorRoleDefinice, EditorPristupoveRole},

  props: {
    data: { type: Array, required: true },
    detailKey: { type: String, default: 'id' },
    allowCreate: { type: Boolean, default: true },
    allowDelete: { type: Boolean, default: true },
    labelAdd: { type: String, default: 'Přidat' },
    placeholderNazev: { type: String, default: 'jméno pro nový objekt' },
    create: { type: Function, default: usageInfo },
    checkable: { type: Boolean, default: true },
    paginated: { type: Boolean, default: true },
    perPage: { type: Number, default: 25 },
    modalWidth: { type: Number, default: 1400 },
    modalTitle: { type: String, default: 'Nový objekt' },
    filterNazevProp: { type: String, default: 'nazev' },
    knexFilter: { type: Object, default: () => ({}) },
    defaultSort: { type: Array, default: () => ['nazev', 'asc'] }
  },

  data () {
    return {
      editedNazev: '',
      checkedRows: [],
      editedSureDelete: false,
      editedNameFilter: '',
      editedCheckable: false,
      selectedRow: undefined,
      modalOpen: false,
      detailsOpened: []
    }
  },

  watch: {
    checkedRows () { this.editedSureDelete = false },
    editedCheckable () { this.checkedRows = [] },

    filteredRows (filteredRows, oldFilteredRows) {
      if (filteredRows.length === oldFilteredRows.length) {
        return
      }
      if (this.filteredRows.length === 1) {
        this.detailsOpened = [this.filteredRows[0][this.detailKey]]
      } else {
        this.detailsOpened = []
      }
    }
  },

  computed: {
    rows () { return this.data },

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
      // const ids = this.checkedRows.map(row => row[this.detailKey])
      // this.checkedRows = []
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
    .is-flex
      base-search-input(v-model="editedNameFilter")
      div
        slot(name="filter" :rows="filteredRows")
      button.button.is-primary(v-if="$slots.create" @click="addClicked") {{labelAdd}}

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
      :paginated="paginated"
      :per-page="perPage"
      :opened-detailed="detailsOpened"
      :checkable="computedCheckable"
      :checked-rows.sync="checkedRows"
      :default-sort="defaultSort"
      :detail-key="detailKey"
      :custom-row-key="detailKey"
      :mobile-cards="false"
    )

      // slot: columns

      template(slot-scope="{row}")
        slot(name="columns" :row="row" :searchTerm="editedNameFilter")
          b-table-column(label="jméno" field="nazev" sortable)
            strong {{row.nazev}}
            small
              em.ml-3 {{row.popis}}
        // b-table-column(field="shit" label="defaultOpened") {{defaultOpened}}


      template(slot="empty")
        div
          .has-text-warning.has-text-weight-medium.has-text-centered.is-size-4 :-( Nic tu není...

      // slot: detail
      template(#detail="{row}")
        slot(name="detail" :row="row")
          pre {{row}}

      template(slot="bottom-left")
        .flex.q-gutter-lg.items-center
          b-checkbox.pt-2(v-if="checkable" v-model="editedCheckable") vyber více řádků
          template(v-if="allowDelete")
            button.button.is-danger(v-show="checkedRows.length > 0" @click="smazatOznacene" :disabled="!editedSureDelete") Smazat označené
            b-checkbox(v-model="editedSureDelete" v-show="checkedRows.length > 0")
              template(v-if="checkedRows.length > 1") Opravdu chcete smazat #[strong {{checkedRows.length}}] položek?
              template(v-if="checkedRows.length === 1") Opravdu smazat?

</template>

<style lang="stylus">

  .table-wrapper
    margin-bottom 0 !important

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
