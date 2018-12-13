import { callApi } from './util.js';

const axios = callApi('/test/api/');

//更新群成员
export function getChangeMembers(data) {
    return axios.put('/group/member', data)
}
