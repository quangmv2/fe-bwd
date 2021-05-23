import { ACCESS_TOKEN } from '@constants'
import axios from 'axios'

const axiosClient = axios.create({
    baseURL: 'http://localhost:4200',
    headers: {
        "access-token": localStorage.getItem(ACCESS_TOKEN)
    }
})

export {
    axiosClient
}