import axios from "axios";
import { errorCatch, getContentType } from "./helper";
import { getAccessToken, removeFromStorage } from "@/services/auth/auth.helpers";
import { AuthService } from "@/services/auth/auth.service";

export const instance = axios.create({
    baseURL: process.env.NEXT_PUBLIC_SERVER_URL,
    headers: getContentType()
})



instance.interceptors.request.use(config => {
    const accessToken = getAccessToken()
    if (config && config.headers && accessToken)
        config.headers.Authorization = `Bearer ${accessToken}`
    return config;
})

instance.interceptors.response.use(config => config, async error => {
    const originalRequest = error.config

    if (error.response && (error.response.status === 401 || errorCatch(error) === 'jwt expired' || errorCatch(error) === 'jwt must be provided') && error.config && !error.config._isRetgy) {
        originalRequest._isRetgy = true
        try {
            await AuthService.getNewToken()
            return instance.request(originalRequest)
        } catch (error) {
            if (errorCatch(error) === 'jwt expired')
            removeFromStorage()
        }
    }
})