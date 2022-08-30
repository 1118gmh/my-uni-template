<script>
	export default {
		onLaunch: function() {
			console.log('App Launch')
		},
		onShow: function() {
			console.log('App Show')
		},
		onHide: function() {
			console.log('App Hide')
		}
	}
</script>

<style lang="scss">
	/*每个页面公共css */
	@import 'colorui/main.css';
	@import 'colorui/icon.css';
	view{
		font-size:28rpx;
	}
	progress, checkbox-group{
		width: 100%;
	}
	form {
		width: 100%;
	}
	.uni-ellipsis {overflow: hidden; white-space: nowrap; text-overflow: ellipsis;}
</style>
