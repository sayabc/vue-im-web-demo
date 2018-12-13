import axios from 'axios';
import gateway from '../_gateway.config.js';
import cookie from '../utils/cookie.js';

const enc = window.encodeURIComponent;
const dec = window.decodeURIComponent;
const {test} = gateway;

export function getToken() {
  return cookie.readCookie('token')
}

//路径获取
export
function getBaseUrl(root) {
    // test接口
    if(root.indexOf('test') !== -1){
      root = root.replace(/\/testApi/, '')
      return root = `${test}${root}`
    }

    return `${test}${root}`

}

export function callApi(apiRoot = '/') {
  const obj = axios.create({
    baseURL: getBaseUrl(apiRoot),
    timeout: 60000,
    headers: {
      'Authorization': getToken()
    }
  })
  obj
    .interceptors
    .request
    .use(config => {
      return config
    }, err => {
      return Promise.reject(err)
    })

  obj
    .interceptors
    .response
    .use(res => {
      const {data} = res
      //如果有code， code不为0或200，是异常情况
      if('code' in data && data.code !== '200' && data.code !== 0 && data.code !=='0') {
        return Promise.reject(data.message || data)
      }
      var newobj = {
        "as_list": "",
        "as_total": ""
      }
      if (data.total >= 0) {
        newobj.as_list = data.data;
        newobj.as_total = data.total
        return newobj;
      }

      let returnData = data.data || data;

      if(typeof returnData === "object") {
        return {
          res,
          ...returnData
        }
      }else {
        return {
          res,
          data:returnData
        }
      }
    }, (err = {}) => {
      const {
        response = {}
      } = err
      const {
        status,
        data = {}
      } = response
      let error = data.message
          ? new Error(data.message)
          : err
      if (~ error.message.indexOf('timeout') || error.message === 'Network Error') {
        error = new Error('网络错误，请检查网络设置')
      }
      return Promise.reject(error)
    })

  return obj
}

export function createSearch(query) {
    if (typeof query !== 'object')
        return ''

    return Object
        .keys(query)
        .filter(key => {
            const value = query[key]
            if (typeof value === 'string')
                return value.trim() && value !== 'undefined'
            return value !== undefined && value !== null
        })
        .map(key => `${key}=${enc(query[key])}`)
        .join('&')
}

export function timeFormat(date, splitter = '-') {
  function appendZero(n) {
    return n < 10
      ? `0${n}`
      : n
  }
  let d = date
  if (!(d instanceof Date)) {
    d = new Date(date)
  }
  return [
    d.getFullYear(),
    d.getMonth() + 1,
    d.getDate()
  ].join(splitter) + ' ' + [
    appendZero(d.getHours()),
    appendZero(d.getMinutes()),
    appendZero(d.getSeconds())
  ].join(':')
}