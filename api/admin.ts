import axios from "axios"

export const getMe = async () => {
    return await axios.get( process.env.base_url + 'cars/me', {
        headers: {
        'Authorization': 'Bearer ' + localStorage.getItem('token')
        }
    })
}

export const createCar = async (name: string, brand: string, model: string, price: string, photo: string) => {
    return await axios.post( process.env.base_url + 'cars', {
        name,
        brand,
        model,
        price,
        photo
      }, {
        headers: {
          'Authorization': 'Bearer ' + localStorage.getItem('token')
        }
      })
}

export const deleteCar = async (id: string) => {
    return await axios.delete( process.env.base_url + 'cars?id=' + id, {
        headers: {
          'Authorization': 'Bearer ' + localStorage.getItem('token')
        }
      })
}
