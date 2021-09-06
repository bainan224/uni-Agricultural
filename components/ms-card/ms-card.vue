<template>
  <div class="ms-card">
    <div class="box">
      <div class="titleClass">
        <text class="title">{{ options.title }}</text>
      </div>
      <div class="row">
        <!-- <view class="m1" :style="{backgroundImage: 'url('+imageURL+')'}"> -->
		<view class="m1">
			<text class="num1" >1</text>
            <text class="text1">东门门禁</text>
			<!-- <image src="../../static/guest/bg_menjin@3x.png"></image> -->
        </view>
        <view class="m2">
        	<text class="num2">2</text>
           <text class="text2">南门门禁</text>
        </view>
        <view class="m3">
			<text class="num4">3</text>
            <text class="text3">北门门禁</text>
        </view>
      </div>
      <div class="second">
		<view class="m4">
			<text class="num4">4</text>
		    <text class="text4">东门门禁</text>
		</view>
        <view class="m5">
        	<text class="num4">5</text>
            <text class="text4">南门门禁</text>
        </view>
		<view class="m6">
			<text class="num4">6</text>
		    <text class="text4">北门门禁</text>
		</view>
      </div>
	  
    </div>
  </div>
</template>
<script>
export default {
  name: 'MensuoCard',
  props: {
    dataId: {
      type: String,
      default: 'ms-card'
    },
    options: {
      type: Object,
      default: function() {
        return {
          title: '请选择门锁（多选）',
        };
      }
    }
  },
  data() {
    return {
		// imageURL: '/static/guest/bg_menjin@3x.png',
	};
  },
  methods: {}
};
</script>
<style>
.ms-card {
  display: flex;
  align-items: center;
  flex-direction: row;
  justify-content: center;
  width: 360px;
  height: 375px;
}

.box {
  display: flex;
  align-items: flex-start;
  flex-direction: column;
  justify-content: center;
  border-radius: 10px;
  box-shadow: 0px 10px 30px rgba(209, 213, 223, 0.5);
  background-color: #ffffff;
  width: 340px;
  height: 375px;
}

.titleClass {
  box-sizing: border-box;
  display: flex;
  flex-direction: row;
  justify-content: space-between;
  padding-left: 10px;
  width: 370px;
  margin-top: -80px;
}

.title {
  opacity: 1;
  line-height: 5px;
  white-space: pre;
  color: #black;
  font-size: 16px;
  font-weight: 400;
}


.row {
  display: flex;
  flex-direction: row;
  justify-content: center;
  margin-top: 30px;
  width: 350px;
  
}

.m1 {
	margin-left: 15px;
	border-radius: 10px;
	width: 100px;
	height: 80px;
	overflow: hidden;
	border-style: solid;
	border-color: #EEEEEE;
	display: flex;
	flex-direction: column;
	flex-wrap: wrap;
	align-items: center;
	justify-content: center;
	background-image: url(../../static/guest/bg_menjin@3x.png);
	background-size:100% 100px;
	position: relative;
}

.m2 {
	margin-left: 10px;
	border-radius: 10px;
	width: 100px;
	height: 80px;
	overflow: hidden;
	border-style: solid;
	border-color: #EEEEEE;
	display: flex;
	flex-direction: column;
	flex-wrap: wrap;
	align-items: center;
	justify-content: center;
	background-image: url(../../static/guest/bg_menjin@3x.png);
	background-size:100% 100px;
	position: relative;
}

.m3 {
	margin-left: 10px;
	border-radius: 10px;
	width: 100px;
	height: 80px;
	overflow: hidden;
	border-style: solid;
	border-color: #EEEEEE;
	display: flex;
	flex-direction: column;
	flex-wrap: wrap;
	align-items: center;
	justify-content: center;
	background-image: url(../../static/guest/bg_menjin@3x.png);
	background-size:100% 100px;
	position: relative;
}

.second {
  display: flex;
  flex-direction: row;
  justify-content: center;
  margin-top: 10px;
  width: 340px;
  
}

.m4 {
	margin-left: 15px;
	border-radius: 10px;
	width: 100px;
	height: 80px;
	overflow: hidden;
	border-style: solid;
	border-color: #EEEEEE;
	display: flex;
	flex-direction: column;
	flex-wrap: wrap;
	align-items: center;
	justify-content: center;
	background-image: url(../../static/guest/bg_menjin@3x.png);
	background-size:100% 100px;
	position: relative;
}

.m5 {
	margin-left: 10px;
	border-radius: 10px;
	width: 100px;
	height: 80px;
	overflow: hidden;
	border-style: solid;
	border-color: #EEEEEE;
	display: flex;
	flex-direction: column;
	flex-wrap: wrap;
	align-items: center;
	justify-content: center;
	background-image: url(../../static/guest/bg_menjin@3x.png);
	background-size:100% 100px;
	position: relative;
}

.m6 {
	margin-left: 10px;
	border-radius: 10px;
	width: 100px;
	height: 80px;
	overflow: hidden;
	border-style: solid;
	border-color: #EEEEEE;
	display: flex;
	flex-direction: column;
	flex-wrap: wrap;
	align-items: center;
	justify-content: center;
	background-image: url(../../static/guest/bg_menjin@3x.png);
	background-size:100% 100px;
	/* background-color: #FFFFFF; */
	position: relative;
}

</style>
