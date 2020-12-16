<script>
import moment from 'moment'
import { ObserveVisibility } from 'vue-observe-visibility'
import { $action, get } from 'vuex-dry'
import { firstSecond } from '../utils/dateUtils'
import BaseWrapper from './base-wrapper'

export default {

  name: 'base-date',

  components: { BaseWrapper },

  directives: { ObserveVisibility },

  props: {
    shorten: { default: true },
    date: { required: true },
    allowClick: { type: Boolean, default: false }
  },

  data () {
    return {
      ago: undefined,
      visible: false
    }
  },

  computed: {

    /** @var {Date} */
    currentTime: get('time/time'),

    /** @var {Boolean} */
    showRelative: get('time/showRelative'),

    format () {
      if (this.shorten && (firstSecond(this.date).getTime() === firstSecond(new Date()).getTime())) {
        return 'h:mm:ss'
      } else {
        return 'D.M YYYY hh:mm:ss'
      }
    }

  },

  watch: {

    currentTime: {

      immediate: true,

      handler () {
        if (this.visible || this.ago === undefined) {
          this.ago = moment(this.date).from(this.currentTime)
        }
      }
    }
  },

  methods: {
    switchRelative () { $action('time/switchRelative') },

    visibilityChanged (visible) { this.visible = visible }
  }
}
</script>


<template lang="pug">
  span(@click="switchRelative" v-observe-visibility="visibilityChanged").mx-1.has-tooltip
    em(v-if="showRelative")
      span(:key="ago") {{ago}}
    template(v-else)
      span(:key="ago") {{ date |datetime(format) }}


</template>


<style scoped lang="stylus"></style>
