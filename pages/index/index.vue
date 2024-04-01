<template>
<swiper :indicator-dots="true" :autoplay="true" :interval="3000" :duration="1000" :circular="true">
	<swiper-item class="banner" v-for="item in picture" :key="item.id">  <!-- v-for列表渲染是将该picture列表中的数据用item命名后依次渲染，关键字用其中的id -->
	<image @tap="OnPreViewImage(item.url)" :src="item.url"></image>	<!-- 自定义一个事件传入item.url --> 
	 </swiper-item>
    </swiper>
</template>

<script>
	export default {
		data() {
			return {
				title:'Hello',
				picture:[
					{id:'1',url:"https://pcapi-xiaotuxian-front-devtest.itheima.net/miniapp/uploads/goods_preview_1.jpg"},
					{id:'2',url:"https://pcapi-xiaotuxian-front-devtest.itheima.net/miniapp/uploads/goods_preview_2.jpg"},
					{id:'3',url:"https://pcapi-xiaotuxian-front-devtest.itheima.net/miniapp/uploads/goods_preview_3.jpg"},
					{id:'4',url:"https://pcapi-xiaotuxian-front-devtest.itheima.net/miniapp/uploads/goods_preview_4.jpg"},
					{id:'5',url:"https://pcapi-xiaotuxian-front-devtest.itheima.net/miniapp/uploads/goods_preview_5.jpg"},
				]
			}
		},
		onload(){
			
		},
		methods: {
			OnPreViewImage(url){//事件函数接受上面传入的item.url并写事件方法
				uni.previewImage({
					urls:this.picture.map(v=>v.url),//map实例一个对象v并提取v里面的url，也就是映射，这样就可以不影响原始数据
					current:url//大图预览
				})
			}
		}
	}
</script>

<style>
.banner,
.banner image/* 同时为banner和他底下的image赋样式 */
{
	width: 750px;
	height: 750px;
}

	
</style>
