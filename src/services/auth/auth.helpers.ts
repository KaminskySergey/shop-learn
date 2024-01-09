import { ACCESS_TOKEN, REFRESH_TOKEN } from "@/constants/token"
import { IAuthResponse, ITokens } from "@/store/user/user.interface"
import Cookies from "js-cookie"

export const getAccessToken = async () => {
    const accessToken = await Cookies.get(ACCESS_TOKEN)
    return accessToken || null
}

export const getUserFromStorage = async () => {
    return JSON.parse(localStorage.getItem('user') || '{}')
}

export const saveTokensStorage = (data: ITokens) => {
    Cookies.set(ACCESS_TOKEN, data.accessToken)
    Cookies.set(REFRESH_TOKEN, data.refreshToken)
}

export const removeFromStorage = () => {
    Cookies.remove(ACCESS_TOKEN)
    Cookies.remove(REFRESH_TOKEN)
    localStorage.removeItem('user')
}

export const saveToStorage = (data: IAuthResponse) => {
    saveToStorage(data)
    localStorage.setItem('user', JSON.stringify(data.user))
}