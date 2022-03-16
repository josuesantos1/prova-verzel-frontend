import axios from "axios"

export const login = async (email: string, password: string) => {
    return await axios.post( process.env.base_url + 'login', {
        email,
        password
      })
}

export const signup = async (email: string, password: string, name: string) => {
  return await axios.post( process.env.base_url + 'users', {
      email,
      password,
      name
    })
}
