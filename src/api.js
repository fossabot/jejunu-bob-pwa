import axios from 'axios'

const DOMAIN = 'https://dsmtnjv05ylzs.cloudfront.net/index.json'

export const request = () => {
	return axios.get(DOMAIN).then(res => res.data)
		.catch(res => {
			throw res
		})
}
