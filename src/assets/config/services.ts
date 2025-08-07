import apiClient from "./apiClient";
import api from '../js/apiUrl'

const services = {

    get:async (url:any,id?:any) => {
        console.log(url);
        
        const res = await apiClient.get(id ? `${url}/${id}` : url)
        return res.data
    },

    login:async (username:any,pass:any) => {
        const res = await apiClient.post(`${api.BASE_URL}/login`,{
            username,
            pass
        })
        return res.data
    }
}
export default services
