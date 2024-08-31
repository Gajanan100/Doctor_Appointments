import axios from "axios"
import { baseUrl } from "../../lib/helper"

export const locationList = async () => {
    try {
        const { data } = await axios.get(`${baseUrl}/locations?populate=icon`)


        return (data?.data)
    } catch (error) {
        console.log(error.response)
    }
}

export const loginApi = async (values) => {
    try {
        const { data } = await axios.post(`${baseUrl}/auth/local`, values)
        return data
    } catch (error) {
        return error.response
    }
}