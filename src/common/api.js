import axios from "axios";
import { environment } from "../environments/environment";

const baseUrl = environment.baseUrl

export default {
    generalApi(url = baseUrl){
        return {
            fetchAll: () => axios.get(url),
            fetchById :(id) => axios.get(`${url}/${id}`),
            create : (saveData) => axios.post(url,saveData),
            delete : (id) => axios.delete(url,id),
            update : (id,updateData) => axios.put(url+"/"+id,updateData)
        }
    }
}