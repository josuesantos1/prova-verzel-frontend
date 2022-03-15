import axios from "axios"

export const All = async () => {
    return await axios.get(process.env.base_url + 'cars/all')
}
