import axiosClient from './axiosClient'
import axios from 'axios'
const getProduct = async () => {
    const res = await axios.get('https://be-project-reactjs.onrender.com/api/v1/Product')
    return res;
   
}

export {getProduct};