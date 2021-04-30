export function getRestServerUrl () {
  return window.localStorage.getItem('restServerUrl') || 'https://sunset-apartment.com'
}
