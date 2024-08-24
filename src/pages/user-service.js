import axios from "axios"

export const loginUser = (loginDetail) => {
    return axios.post('http://localhost:2000/auth/login',loginDetail).then((response)=>response.data)
}