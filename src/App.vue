<template>
	<div id="app">
		<router-view />
		<Foot v-show="$route.meta.showF"/>
	</div>
</template>

<script>
	import Foot from './components/foot/Foot.vue'
	export default {
		name: 'App',
		components: {
			Foot
		},
		data() {
			return {

			}
		},
		mounted() {

		},
	}
</script>

<style lang="stylus" rel="stylesheet/stylus">

</style>
