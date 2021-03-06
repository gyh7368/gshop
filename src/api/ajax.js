/*
ajax请求函数模块
发送请求需要三个条件/参数:1.url 2.请求参数,是一个对象 3.请求方式
返回值: Promise对象(异步返回的数据是: response.data)
*/
import axios from 'axios'
export default function ajax(url='', data={}, type='GET') {
  return new Promise(function(resolve, reject) {
    let promise
    if(type === 'GET') {
      //准备url query 参数数据
      let dataStr = '' //数据拼接字符串
      Object.keys(data).forEach(key => {
        dataStr += key + '=' + data[key] + '&'
      })
      if(dataStr !== '') {
        dataStr = dataStr.substring(0, dataStr.lastIndexOf('&'))
        url = url + '?' + dataStr
      }
      //发送get请求
      promise = axios.get(url)
    }else {
      //发送post请求
      promise = axios.post(url, data)
    }

    promise.then(response => {
      resolve(response.data)
    })
    .catch(error => {
      reject(error)
    })
  })
}
