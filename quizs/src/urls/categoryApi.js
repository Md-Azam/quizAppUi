import { BASE_URL } from './baseUrl'
import axios from 'axios';

//Create Category Information .
export const saveCategory = (data) => {
    return axios.post(BASE_URL+"/category", data).then((response) => response.data);
};