import { BASE_URL } from './baseUrl'
import axios from 'axios';

//Create Category Information .
export const saveCategory = (data) => {
    return axios.post(BASE_URL+"/category", data).then((response) => response.data);
};


//load all category
export const loadallCat =()=> {
    return axios.get(BASE_URL+`/category/`).then((respone) => {
        return respone.data;
      });
}