const url="http://localhost:8001/api/"
import axios from 'axios'
export default class API{

static async addusuario(data){
        try {
            const res = await axios.post(url+"addusuario",data)
            console.log(res.data)
            return res.data
        } catch (error) {
            return error.respose.data
        }
    }
}
