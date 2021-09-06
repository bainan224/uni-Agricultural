// 处理多次点击
function dianji(fn) {
	let that = this;
	if (that.onoff) {
		that.onoff = false;
		fn();
		uni.showToast({
			title: '签到成功'
		});
		setTimeout(function() {
			that.onoff = true;
		}, 15000000)
	} else {
		console.log("请稍后点击")
		uni.showToast({
			icon: 'none',
			title: '请勿重复签到'
		});

	}
}
export {
	dianji
}
