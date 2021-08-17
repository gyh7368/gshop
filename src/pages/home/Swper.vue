<template>
	<div id="Swper">
      <div><img src="./images/nav/1.jpg" /></div>
      <div><img src="./images/nav/2.jpg" /></div>
      <div><img src="./images/nav/3.jpg" /></div>
      <div><img src="./images/nav/4.jpg" /></div>
      <div><img src="./images/nav/5.jpg" /></div>
      <div><img src="./images/nav/6.jpg" /></div>
      <div><img src="./images/nav/7.jpg" /></div>
      <div><img src="./images/nav/8.jpg" /></div>
      <div><img src="./images/nav/9.jpg" /></div>
      <div><img src="./images/nav/10.jpg" /></div>
      <div><img src="./images/nav/11.jpg" /></div>
      <div><img src="./images/nav/12.jpg" /></div>
      <div><img src="./images/nav/13.jpg" /></div>
      <div><img src="./images/nav/14.jpg" /></div>
      <div><img src="./images/nav/14.jpg" /></div>
      <div><img src="./images/nav/14.jpg" /></div>

	</div>
</template>

<script>
	export default {
		data() {
			return {

			}
		},
		mounted() {

		},
	}
</script>

<style lang="scss" scoped>
  #Swper {
    width: 100vw;
    height: 200px;
    overflow: hidden;
    border-bottom: 1px solid #E8E8E8;
    padding: 5px;
    display: flex;
    flex-direction: column
    div{
    flex-wrap: wrap
    }
      img{
        width: 70px;
      }
  }
</style>
