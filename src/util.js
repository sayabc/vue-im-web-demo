import axios from 'axios'
import {session} from './_gateway.config'

export function callApi() {
  const obj = axios.create({
    baseURL: session,
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
      return data
    }, (err = {}) => {
      return Promise.reject(err)
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
export function to(promise)  {
    if(!promise || !Promise.prototype.isPrototypeOf(promise)){
      return new Promise((resolve, reject)=>{
        reject(new Error("requires promises as the param"));
      }).catch((err)=>{
        return [err, null];
      });
    }
    return promise.then(function(){
      return [null, ...arguments];
    }).catch(err => {
      return [err, null];
    });
}