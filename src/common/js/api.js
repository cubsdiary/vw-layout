/**
 * Created by long on 2017/7/5.
 */
import Vue from 'vue'
import axios from 'axios'
import store from '../../store'

// F6 接口使用 headersOther , 本地接口用headersCommon
Vue.prototype.gt1Header = {
  'Content-Type': 'application/x-www-form-urlencoded; charset=utf-8;'
}
Vue.prototype.f6Header = function (token) {
  return {
    'Authorization': token,
    'Content-Type': 'application/json'
  }
}
Vue.prototype.f6Header2 = function (token) {
  return {
    'Authorization': token
  }
}

Vue.prototype.handleRrror = function (error) {
  if (error.response) {
    switch (error.response.code) {
      case 401:
        console.log('token 过期')
        break
      case 405:
        console.log('接口请求方法不支持')
        break
      case 404:
        console.log('请求的接口不存在')
        break
      case 500:
        console.log('接口异常')
        break
      case 503:
        console.log('服务器异常')
    }
  }
}

Vue.prototype.$get = function (url, headersCode, callback = function () {}, params = {}) {
  var _self = this
  axios.get(url, {
    headers: headersCode,
    params: params
  }).then((response) => {
    callback(response.data)
  }).catch(function (error) {
    _self.handleRrror(error)
  })
}

Vue.prototype.$post = function (url, headersCode, callback = function () {}, params = {}) {
  var _self = this
  axios({
    url: url,
    method: 'post',
    data: params,
    headers: headersCode,
    transformRequest: [function (data) {
      // Do whatever you want to transform the data
      let ret = ''
      for (let it in data) {
        ret += encodeURIComponent(it) + '=' + encodeURIComponent(data[it]) + '&'
      }
      return ret
    }]
  }).then((response) => {
    callback(response.data)
  }).catch(function (error) {
    if (!error.response) {
      Vue.prototype.$Toast({
        position: 'bottom',
        message: '服务器错误'
      })
    } else {
      _self.handleRrror(error)
    }
  })
}

Vue.prototype.$f6post = function (url, headersCode, callback = function () {}, params = {}) {
  var _self = this
  axios({
    url: url,
    method: 'post',
    data: params,
    headers: headersCode
  }).then((response) => {
    callback(response.data)
  }).catch(function (error) {
    _self.handleRrror(error)
  })
}

Vue.prototype.$put = function (url, headersCode, callback = function () {}, params = {}) {
  var _self = this
  axios.put(url, params, {
    headers: headersCode
  }).then((response) => {
    callback(response.data)
  }).catch(function (error) {
    _self.handleRrror(error)
  })
}

Vue.prototype.$patch = function (url, headersCode, callback = function () {}, params = {}) {
  var _self = this
  axios.patch(url, params, {
    headers: headersCode
  }).then((response) => {
    callback(response.data)
  }).catch(function (error) {
    _self.handleRrror(error)
  })
}

Vue.prototype.$delete = function (url, headersCode, callback = function () {}, params = {}) {
  var _self = this
  axios.delete(url, {
    headers: headersCode,
    data: params
  }).then((response) => {
    callback(response.data)
  }).catch(function (error) {
    _self.handleRrror(error)
  })
}

Vue.prototype.$file = function (url, fromData, callback = function () {}, params = {}) {
  let _self = this
  axios({
    url: url,
    method: 'post',
    data: fromData
  }).then((response) => {
    callback(response.data)
  }).catch(function (error) {
    _self.handleRrror(error)
  })
}
axios.interceptors.request.use((config) => {
  // console.log('在发送请求之前做些什么', config)
  store.commit('SET_LOADING_STATE', true)
  return config
}, function (error) {
  // console.log('对请求错误做些什么', error)
  store.commit('SET_LOADING_STATE', false)
  return Promise.reject(error)
})
axios.interceptors.response.use(function (response) {
  // console.log('对响应数据做点什么 -- response', response)
  if (response.status === 200) {
    store.commit('SET_LOADING_STATE', false)
  }
  return response
}, function (error) {
  // console.log('对响应错误做点什么 -- error', error)
  store.commit('SET_LOADING_STATE', false)
  return Promise.reject(error)
})
