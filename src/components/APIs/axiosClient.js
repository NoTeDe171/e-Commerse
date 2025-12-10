import axios from 'axios';


const axiosClient = axios.create({
    baseUrl:'https://be-project-reactjs.onrender.com/api/v1',
    timeout:10000,
    headers: {
        'Content_Type': 'application/json',
    }
});

export default axiosClient;