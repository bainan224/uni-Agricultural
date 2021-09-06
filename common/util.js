import $H from './request.js';
export default {
	// 监听网络
	onNetWork(){
		let func = (res)=>{
			if (res.networkType === 'none') {
				uni.showToast({
					title: '当前处于断网状态,请先连接',
					icon: 'none'
				});
			}
		}
		uni.getNetworkType({
		    success:func
		});
		uni.onNetworkStatusChange(func);
	},
	/*
	{
		"msg": "ok",
		"data": {
			"id": 1,
			"url": "http://www.baidu.com",
			"version": "1.0.1",
			"status": 1,
			"create_time": null
		}
	}
	*/
	// 热更新
	update(showToast = false){
		// #ifdef APP-PLUS
		plus.runtime.getProperty(plus.runtime.appid, function(widgetInfo) { 
			$H.post('/update',{
				ver:widgetInfo.version, 
			}).then((data) => {
				// 成功
				if (!data.url){
					// 无需更新
					if(showToast){
						uni.showToast({ title: '无需更新',icon:"none" })
					}
					return 
				}
				
				uni.showModal({
					title: '发现新的版本',
					content: '最新版本：'+data.version,
					cancelText: '放弃更新',
					confirmText: '立即更新',
					success: res => {
						if(!res.confirm) return;
						uni.downloadFile({
							url: data.url,  
							success: (downloadResult) => {  
								if (downloadResult.statusCode === 200) {  
									plus.runtime.install(downloadResult.tempFilePath, {  
										force: false  
									}, function() {  
										console.log('install success...');  
										plus.runtime.restart();  
									}, function(e) {  
										console.error('install fail...');  
									});  
								}  
							}  
						});  
					}
				});
				
			});
			
		});  
		// #endif  
	},
	// 转化公共列表数据
	formatCommonList(v){
		let isFollow = (v.user.fens.length > 0)

		let support = ''
		if(v.support.length > 0){
			support = v.support[0].type === 0 ? 'support' : 'unsupport'
		}
		return {
			id:v.id,
			user_id:v.user_id,
			username:v.user.username,
			userpic:v.user.userpic,
			newstime:v.create_time,
			title:v.title,
			titlepic:v.titlepic,
			isFollow:isFollow,
			support:{
				type:support, // 顶
				support_count:v.ding_count,
				unsupport_count:v.cai_count
			},
			comment_count:v.comment_count,
			share_num:v.sharenum
		}
	},
	// 数组置顶
	__toFirst(arr,index){
		if (index != 0) {
			arr.unshift(arr.splice(index,1)[0]);
		}
		return arr;
	},
	// userinfo格式转换
	formatUserinfo(obj){
		// 第三方登录（已绑定）
		if (obj.user && obj.user_id > 0) {
			return {
				id: obj.user.id,
				username: obj.user.username || obj.nickname,
				userpic: obj.user.userpic || obj.avatarurl,
				phone: obj.user.phone,
				email: obj.user.email,
				status: obj.user.status,
				create_time: obj.user.create_time,
				logintype: obj.logintype,
				password:obj.user.password,
				token: obj.token,
				userinfo: {
					id: obj.user.userinfo.id,
					user_id: obj.user.userinfo.user_id,
					age: obj.user.userinfo.age,
					sex: obj.user.userinfo.sex,
					qg: obj.user.userinfo.qg,
					job: obj.user.userinfo.job,
					path: obj.user.userinfo.path,
					birthday: obj.user.userinfo.birthday,
				}
			}
		}
		// 第三方登录（未绑定）
		return {
			id: obj.user_id,
			username: obj.nickname,
			userpic: obj.avatarurl,
			phone: false,
			email: false,
			status: 1,
			create_time: false,
			logintype: obj.logintype,
			token: obj.token,
			userinfo: false
		}
	},
}

//时间戳
import Vue from 'vue';

function navTo(url) {
	uni.navigateTo({
		url
	})
};
// type 1:将Thu Sep 20 2018 16:23:03 GMT+0800 (中国标准时间)转换为"2018-09-20 16:23:03"日期格式
// type 2:将Thu Sep 20 2018 16:47:52 GMT+0800 (中国标准时间)||2018-09-20 16:23:03||2018-09-20转换为1537433272051时间戳格式
// 不传入参数时，type默认取值1，inputTime默认取值new Date()
function formatDateTime(type = 1, inputTime) {
	if(typeof(inputTime)=='string'){inputTime=inputTime.replace(/-/g, '/')}
	var date = inputTime ? new Date(inputTime) : new Date();
	switch (type) {
		case 1:
			var y = date.getFullYear();
			var m = date.getMonth() + 1;
			m = m < 10 ? ('0' + m) : m;
			var d = date.getDate();
			d = d < 10 ? ('0' + d) : d;
			var h = date.getHours();
			h = h < 10 ? ('0' + h) : h;
			var minute = date.getMinutes();
			var second = date.getSeconds();
			minute = minute < 10 ? ('0' + minute) : minute;
			second = second < 10 ? ('0' + second) : second;
			return y + '-' + m + '-' + d + '-' + h + ':' + minute + ':' + second;
			break;
		case 2:
			// console.log(date,date.getTime())
			return date.getTime()
	}
};
