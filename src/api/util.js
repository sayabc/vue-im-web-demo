import axios from 'axios';
import gateway from '../_gateway.config.js';
const enc = window.encodeURIComponent;
const dec = window.decodeURIComponent;
const {management} = gateway;
const {teacherManagement} = gateway;
const {account} = gateway;

//路径获取
export
function getBaseUrl(root) {
  // if (root.indexOf('/gateway')!="-1") {   root = `/gateway/api${root}`   root =
  // root.replace('api/gateway', 'order-dev-9091/api') }else{   if
  // (!~root.indexOf('/abcrest')) {     root = `${account}${root}`   }   // if
  // (isDev) {   //   // a5   //   root = root.replace('api',
  // 'panamera-test-a5-5000/api')   //   //root = root.replace('api',
  // 'order-dev-9091/api')   // } }
  if (root.indexOf('gatecourse') > -1) {
    root = root.replace(/\/gatecourse/, '')
    root = `${course}${root}`
    return root
  }
  if (root.indexOf('apollo') > -1) {
    root = root.replace(/\/apollo/, '')
    root = `${apollo}${root}`
    return root
  }
   // management
   if(root.indexOf('management') !== -1){
    root = root.replace(/\/management/, '')
    return root = `${management}${root}`
  }
  // management
  if(root.indexOf('teacherManagement') !== -1){
    root = root.replace(/\/teacherManagement/, '')
    return root = `${teacherManagement}${root}`
  }
   // wechat
   if(root.indexOf('wechat') !== -1){
    root = root.replace(/\/wechat/, '')
    return root = `${wechat}${root}`
  }
  if(root.indexOf('uploader') !== -1){
    root = root.replace(/\/uploader/, '')
    return root = `${uploader}${root}`
  }
  
  if (root.indexOf('gateway') !==-1) {

    root = root.replace(/\/gateway/, '')
    root = `${order}${root}`
  } else {

    if (root.indexOf('abcrest') !== -1) {
      root = root.replace(/\/abcrest/, '')
    }
    if(root.indexOf('playback') !== -1){
      root = root.replace(/\/playback/, '')
      return root = `${playback}${root}`
    }
     if(root.indexOf('_newClassroom') !== -1){
      root = root.replace(/\/_newClassroom/, '')
      return root = `${newClassroom}${root}`
    }
    // 排班
    if(root.indexOf('classgroup') !== -1){
      root = root.replace(/\/classgroup/, '')
      return root = `${classgroup}${root}`
    }
    // 排班新街口
    if(root.indexOf('newClassgroup') !== -1){
      root = root.replace(/\/newClassgroup/, '')
      return root = `${newClassgroup}${root}`
    }
     // 新加config
     if(root.indexOf('newConfig') !== -1){
      root = root.replace(/\/newConfig/, '')
      return root = `${newConfig}${root}`
    }
    //link
    if(root.indexOf('link') !== -1){
      root = root.replace(/\/link/, '')
      return root = `${link}${root}`
    }
    //student
    if(root.indexOf('studentServer') !== -1){
      root = root.replace(/\/studentServer/, '')
      return root = `${studentServer}${root}`
    }

    // _classroom 组班排课
    if(root.indexOf('_classroom') !== -1){
      root = root.replace(/\/_classroom/, '')
      return root = `${_classroom}${root}`
    }

      // user 园丁
      if(root.indexOf('gardener') !== -1){
        root = root.replace(/\/gardener/, '')
        return root = `${gardener}${root}`
      }

    // libero
    if(root.indexOf('libero') !== -1){
      root = root.replace(/\/libero/, '')
      return root = `${libero}${root}`
    }

    // online-classroom fireman进入教室
    if(root.indexOf('online-classroom') !== -1){
      root = root.replace(/\/online-classroom/, '')
      return root = `${enteroom}${root}`
    }
    // 版本管理新接口
    if(root.indexOf('/pipeline/api/v1') !== -1){
      root = root.replace(/\/pipeline\/api\/v1/, '/api/v1')
      return root = `${versionManage}${root}`
    }

    if (root.indexOf('_serverReferal') > -1) {
      root = root.replace(/\/_serverReferal/, '')
      root = `${_serverReferal}${root}`
      return root
    }
    if(root.indexOf('qos') !== -1){
      root = root.replace(/\/qos/, '')
      return root = `${qos}${root}`
    }
    if(root.indexOf('pipeline') !== -1){
      root = root.replace(/\/pipeline/, '')
      return root = `${pipeline}${root}`
    }
    root = `${account}${root}`
  }
    return root

}

export function callApi(apiRoot = '/') {
  const obj = axios.create({
    baseURL: getBaseUrl(apiRoot),
    timeout: 1200000
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
      const {data: _data} = res
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

//使用async/await时处理报错的方法
export function to(promise) {
    if (!promise || !Promise.prototype.isPrototypeOf(promise)) {
        return new Promise((resolve, reject) => {
            reject(new Error("requires promises as the param"));
        }).catch((err) => {
            return [err, null];
        });
    }
    return promise.then(function () {
        return [null, ...arguments];
    }).catch(err => {
        return [err, null];
    });
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

export function getToken() {
  return "Bearer UW3IB80kUy3t8lip2x7MtujEX3wP33"
}