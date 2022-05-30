import axios from "axios";

import { environment } from "../environments/environment";

const authAxios = axios.create({
    baseURL = environment.baseUrl

})

authAxios.interceptors.request.use((config) =>{
    config.params = config.params || {}
    // to get auth token
    config.params['BearerToken'] = "BearerToken"
    return config
})

export default authAxios;