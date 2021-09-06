import $store from '@/store/index.js';
export default {
	common: {
		baseUrl: 'http://106.14.246.27:8888',
		
		header: {
			'Content-Type': 'application/json;charset=UTF-8',
		},
		data: {},
		method: 'GET',
		dataType: 'json',
		token: false,
		
	},
	
	request(options = {}) {
		options.url = this.common.baseUrl + options.url;
		options.method = options.method || this.common.method
		options.header = options.header || this.common.header

		// 验证权限 token
		if (options.token) {
			options.header.token = $store.state.token
			if (!options.noCheck && !options.header.token && !options.notoast) {
				return uni.showToast({
					title: '非法token,请重新登录',
					icon: 'none'
				});
			}
		}

		return new Promise((res, rej) => {
			// console.log({...options})
			uni.request({
				...options,
				success: (result) => {
					// 返回原始数据
					console.log('下面时')
					console.log(result);
					if (options.native) {
						return res(result)
					}
					// 请求服务端失败
					if (result.statusCode !== 200 && !options.notoast) {
						uni.showToast({
							title: result.data.msg || '请求失败',
							icon: 'none'
						});
						return rej(result.data)
					}
					// 成功
					res(result.data)
				},
				fail: (error) => {
					uni.showToast({
						title: error.errMsg || '请求失败',
						icon: 'none'
					});
					return rej()
				}
			});
		})
	},
	get(url, data = {}, options = {}) {
		options.url = url
		options.data = data
		options.method = 'GET'
		options.header = {
			'X-Token': $store.state.a
		}
		return this.request(options)
	},
	post(url, data = {}, options = {}) {
		options.url = url
		options.data = data
		options.method = 'POST'
		options.header = {
			'Content-Type': 'application/json;charset=UTF-8',
			'X-Token': $store.state.a
		}
		return this.request(options)
	},
	put(url, data = {}, options = {}) {
		options.url = url
		options.data = data
		options.method = 'PUT'
		options.header = {
			'Content-Type': 'application/json;charset=UTF-8',
			'X-Token': $store.state.a
		}
		return this.request(options)
	},
	upload(url, options = {}) {
		options.url = this.common.baseUrl + url;
		options.header = {
			'X-Token': $store.state.a
		}
		options.header = options.header || {}
		// 验证权限token
		if (options.token) {
			options.header.token = $store.state.a
			if (!options.header.token) {
				return uni.showToast({
					title: '非法token,请重新登录',
					icon: 'none'
				});
			}
		}

		return new Promise((res, rej) => {
			uni.uploadFile({
				...options,
				success: (uploadFileRes) => {
					if (uploadFileRes.statusCode !== 200) {
						return uni.showToast({
							title: '上传图片失败',
							icon: 'none'
						});
					}
					let data = JSON.parse(uploadFileRes.data)
					res(data)
				},
				fail: (err) => {
					rej(err)
				}
			});
		})

	}
}
