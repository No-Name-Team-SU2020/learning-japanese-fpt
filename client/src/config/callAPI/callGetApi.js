import axios from 'axios';
import * as Config from '../..'

export default async function callApi(endpoint, method = 'GET', body) {
    return axios({
        // method: method,
        // url: `${Config.API_URL}/${endpoint}`,
        // headers: {
        //     Authorization: "Token " + JSON.parse(localStorage.getItem("tokenLogin"))
        // },
        // data: body
    })
};