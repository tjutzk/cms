<template>
	<div id="app">
		<router-view />
	</div>
</template>
<script>
	export default {
		name: 'app',
	}
</script>
<style>
	html,body,#app{
		height: 100%;
	}
	#app {
	width: 100%;
	font-family: 'Microsoft YaHei';
	-webkit-font-smoothing: antialiased;
	-moz-osx-font-smoothing: grayscale;
	}
</style>
