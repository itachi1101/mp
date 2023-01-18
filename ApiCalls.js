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
        const result = await axios.post(getApiUrl('complaint/create/'), data, config)
        return Promise.resolve(result)
    } catch (error) {
        return Promise.reject(error.message)
    }
}

export const saveFirebaseToken = async (tokenId, sector,type) => {
    try {
        await axios.post(getApiUrl(`${type}/notification/create/`), { tokenId, sector })
        return Promise.resolve("Successfully saved token")
    } catch (error) {
        return Promise.reject("error in savefirebaseToken", error.message)
    }
}
export const getFirebaseTokens = async (sector,type) => {
    try {
        const {data} = await axios.post(getApiUrl(`${type}/notification/sector/`), {sector})
        const tokens = data.map(res => {
            return res.tokenId
        })
        return Promise.resolve(tokens)
    } catch (error) {
        return Promise.reject("error in getFirebaseToken", error.message)
    }
}

export const sendNotification=async(tokens)=>{
    try {
        await axios.post(getApiUrl("user/notification/send/"),{tokens})
    } catch (error) {
        return Promise.reject("error in send notification",error.message)
    }
}