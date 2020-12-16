export function getRestServerUrl () {
  return window.localStorage.getItem('restServerUrl') || 'https://devel.altisima.cz'
}
