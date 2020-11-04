import axios from 'axios';
import * as Config from '../..'

export default async function callApi(endpoint, method = 'POST', body) {
    return axios({
        // method: method,
        // url: `${Config.API_URL}/${endpoint}`,
        // headers: {
        //     "Content-type": "application/json",
        // },
        // data: body
    })
};