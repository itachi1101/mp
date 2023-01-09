import axios from 'axios'
import { getApiUrl } from './URLFile'

export const loginCall = async (userCredentials, type) => {
    try {
        const res = await axios.post(getApiUrl(`${type}/login/`), userCredentials)
        res.data.type = type
        return Promise.resolve(res.data)
    } catch (error) {
        return Promise.reject(error.message)
    }
}


export const registerComplaint = async (config, data) => {
    try {
        console.log(getApiUrl('complaint/create/'))
        const result=await axios.post(getApiUrl('complaint/create/'),data,config)
        return Promise.resolve(result)
    } catch (error) {
        return Promise.reject(error.message)
    }
}