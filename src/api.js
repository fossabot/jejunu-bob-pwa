import { get } from 'axios'

const DOMAIN = 'https://meals-data.muhun.kim'

export const request = () => {
    return get(DOMAIN)
        .then(res => res.data)
        .catch(res => {
            throw res
        })
}
