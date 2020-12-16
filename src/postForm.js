
import { getRestServerUrl } from 'src/getRestServerUrl'

export async function postForm ({ name, formData }) {
  const axios = require('axios').default
  const url = getRestServerUrl()
  const apiUrl = `${url}/api`
  console.log({ 'url': url })
  console.log({ 'apiUrl': apiUrl })
  const result = await axios.post(
    apiUrl,
    {
      apiName: 'FrontEnd',
      action: 'formSubmitted',
      parameters: {
        name,
        form_data_json: formData
      },
      formData
    }
  )
  console.log({ 'result': result })
  return result
}
