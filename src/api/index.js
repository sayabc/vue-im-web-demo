import { callApi, createSearch, timeFormat, getToken} from './util.js';

const axios2 = callApi('/abcrest/api/staff/v1');
const axios_get_search_teacher=callApi('/management/api/v1/teacher/query/info');
const axios = callApi('/teacherManagement/api/v1/im');

const PAGE_SIZE = 15;
let token = getToken();

export function searchTeacherId(id) {
  return axios2.get( `/account/${id}` ,{
    headers:{
      'Authorization': token
    }
  })
}

export function searchTeacherName(query) {
  const { page_no = 1, page_size = PAGE_SIZE, period_id, from_time, date, ...others } = query
  let temDate = date ? timeFormat(+date).split(' ')[0] : null
  let temFromTime = from_time
  const args = {
    ...others,
    pageLimit: page_size,
    pageNo: page_no,
    configId: period_id,
    date: temDate,
    timePeriod: temFromTime
  }
  return axios_get_search_teacher.get(`/list?${createSearch(args)}`,{
      headers:{
        'Authorization': token
      }
  })
}
//根据老师id&会话组查所在群id
export function getGroup(args) {
    return axios.get(`/groupid?${createSearch(args)}`,{
      headers:{
        'Authorization': token
      }
    })
}
//更新群成员
export function getChangeMembers(data) {
    return axios.put('/group/member', data,{
      headers:{
        'Authorization': token
      }
    })
}

export function getAllFollowStatus(data) {
  return axios.post(`follow/groups`,data,{
    headers:{
      'Authorization': token
    }
  })
}

export function getSingFollowStatus(data) {
  return axios.get(`/follow/group?${createSearch(data)}`,{
    headers:{
      'Authorization': token
    }
  })
}

export function follow(data) {
  return axios.put('/follow/group', data,{
    headers:{
      'Authorization': token
    }
  })
}