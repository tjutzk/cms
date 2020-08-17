import axios from 'axios'
import { Message,MessageBox } from 'element-ui'
import store from '../store'
import { getToken } from './auth'
import router from '@/router';
const service = axios.create({
    baseURL:process.env.NODE_ENV === 'development' ? process.env.VUE_APP_BASE_API : `${window.location.origin}/api/`,
    withCredentials: true, // send cookies when cross-domain requests
    timeout: 1000*60 // request timeout
})
// request interceptor
service.interceptors.request.use(
    config => {
        // do something before request is sent
        config.headers['Content-Type']='application/json'
        config.headers['Access-Control-Allow-Origin']='*'
        if (store.getters.token) {
			config.headers['token'] = getToken()
			config.headers['Authorization']='Cst ' + getToken()
        }
        return config
    },
    error => {
      // do something with request error
      return Promise.reject(error)
    }
  )
  
  // response interceptor
  service.interceptors.response.use(
    response => {
		const res = response.data
		if(Object.prototype.toString.call(res) === '[object Blob]'){
			return res
		}
		if (+ res.code !== 200) {
			if (+res.code === 8001) {
				Message({
				message: "用户密码不正确" || 'error',
				type: 'error',
				duration: 3 * 1000
				})
				return Promise.reject(res.msg || 'error')
			}
			if (+ res.code === 8009 || + res.code === 8003) {
				MessageBox.confirm('您已被登出，请重新登录！', '登录超时', {
					cancelButtonClass:'el-button--info',
					confirmButtonText: '重新登录',
					cancelButtonText: '取消',
					type: 'warning'
				}).then(() => {
					store.dispatch('user/resetToken').then(() => {
					router.push({name:'login'})
					return Promise.reject(res.msg || 'error')
					})
				})
			}
			Message({
				dangerouslyUseHTMLString: true, 
				message: res.msg || 'error',
				type: 'error',
				duration: 3 * 1000
			})
			return Promise.reject(res.msg || 'error')
		} else {
			return res.data 
		}
    },
    error => {
		console.log('err' + error) // for debug
		Message({
			dangerouslyUseHTMLString: true, 
			message: error || 'error',
			type: 'error',
			duration: 3 * 1000
		})
		return Promise.reject(error)
    }
)
export default service