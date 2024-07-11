import axios from 'axios'

export const api = axios.create({
    baseURL:'https://fisrtapi.onrender.com',
    headers:{
        'Content-Type': 'application/json'
    }
})
