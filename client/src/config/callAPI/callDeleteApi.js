import axios from 'axios';
import * as Config from '../..'

export default async function callApi(endpoint, method = 'DELETE', body) {
    return axios({
        // method: method,
        // url: `${Config.API_URL}/${endpoint}`,
        // headers: {
        //     'content' : '',
        // },
        // data: body
    })
};
