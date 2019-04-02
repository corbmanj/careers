import axios from 'axios'
const baseUrl = 'http://www.mocky.io/v2/'

export const callApi = (queryParam) => {
    const fetchUrl = `${baseUrl}${queryParam}`
    return axios.get(fetchUrl)
			.then(function (response) {
                return response
			})
			.catch(function (error) {
				throw new Error(error)
			});
}