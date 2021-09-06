<template>
	<view>
		<view class="content-card" @click="open">
			
			<view class="content-layout flex flex-row">
				<image class="person-img" :src="info.imageUrl"></image>
				<view class="tx-1 pt-2 flex flex-column">
					<text class="t-1">{{info.title.substr(0,17) + '......'}}</text>
					<text class="t-t text-muted mt-1">{{ info.createTime.substr(0,10) }}</text>
				</view>
			</view>
		</view>
	</view>
</template>

<script>
	export default {
		props:['info'],
		
		methods:{
			open() {
				console.log("click");
				//在子组件my-card.vue中将点击事件传回父组件index.vue
				this.$emit('open');
			}
		}
	}
</script>

<style>
.content-card {
		height: 90px;
		width: 95%;
		margin: auto;
		display: flex;
		flex: 1;
		background-color: white;
	}
	.person-img {
		height: 90px;
		width: 100px;
		margin-right: 20px;
		/* background-color: #00D478; */
	}
	.tx-1{
		height: 30px;
		width: 210px;
		/* background-color: #4E93DC; */
	}
</style>
