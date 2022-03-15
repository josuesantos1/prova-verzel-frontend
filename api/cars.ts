import axios from "axios"

export const All = async () => {
    return await axios.get(process.env.base_url + 'cars/all')
}

export const One = async (id: string | undefined) => {
    return await axios.get(process.env.base_url + 'cars?id=' + id)
}
