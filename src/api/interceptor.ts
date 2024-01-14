import axios from "axios";
import { getContentType } from "./helper";

export const instance = axios.create({
    baseURL: process.env.NEXT_PUBLIC_SERVER_URL,
    headers: getContentType()
});

