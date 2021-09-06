<!-- 
展示屏幕文字滚动效果
 
使用方法：

 -->
<!-- 
展示屏幕文字滚动效果

usage:
 list:数组数据
 @getCurrentIndex  获取当前swiper的下标
 <textscroll :list="list" @getCurrentIndex="getIndex"/>

 -->

<template>
	<view class="_notice">
		<swiper class="_swiper tc" @change="slideChange" autoplay="true" :interval="interval" circular="true"
		 display-multiple-items="2" :duration="duration" vertical="true">
			<swiper-item v-for="(item,index) in list" :key="index">
				<view class="swiper-item">{{item.substr(0,20) + '......'}}</view>
			</swiper-item>
		</swiper>
	</view>
</template>

<script>
	export default {
		props: {
			//显示数据
			list: {
				type: Array,
				defual:function(){
					return [];
				}
			},
		},
		data() {
			return {
				interval:5000,
				duration:1200,
			};
		},
		methods:{
			slideChange(e){
				this.$emit('getCurrentIndex',e.detail.current); 
				
			}
		}

	};
</script>

<style lang="scss">
	._notice {
		// position: fixed;
		left: 0;
		top: 0;
		/* #ifdef H5 */
		top: 88upx;
		/* #endif */
		z-index: 9;
		width: 100%;
		// background: rgba(72, 1, 1, 0.3);
		font-size: 20upx;
		height: 44upx;
		// color: #ffffff;
		color: #000000;
		border-radius: 6upx;
		overflow: hidden;
		box-sizing: border-box;

	}

	._swiper {
		line-height: 44upx;
	}
</style>
