import { formatDate } from '../utils/dateUtils'

export function vueInstallDateFilters ({ Vue }) {
  Vue.filter('date', formatDate)
  Vue.filter('datetime', (value) => formatDate(value, 'DD.MM.YYYY hh:mm:ss'))
  Vue.filter('time', (value) => formatDate(value, 'hh:mm:ss'))
  Vue.filter('datetimems', (value) => formatDate(value, 'DD.MM.YYYY hh:mm:ss:ms'))
}
