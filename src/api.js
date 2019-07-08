import axios from 'axios'

const DOMAIN = 'https://d19lb0v9rjjem3.cloudfront.net/index.json'

export const request = () => {
	return axios.get(DOMAIN).then(res => res.data)
		.catch(res => {
			throw res
		})
}
