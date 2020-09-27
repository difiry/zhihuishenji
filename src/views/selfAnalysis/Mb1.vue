<template>
  <div>
    <iframe id="mobsf" src="http://192.168.101.168:18080/smartbi/vision/index.jsp?user=C3Gm%2BRdmB7w%3D&resid=I1be57c8725d50cc001562682c3c2366e&showtoolbar=true&refresh=true" scrolling="no" frameborder="0" />
  </div>
</template>

<script>
export default {
  name: 'Mb1'
  // mounted() {
  //   /**
  //    * iframe-宽高自适应显示
  //    */
  //   function changeMobsfIframe() {
  //     const mobsf = document.getElementById('mobsf')
  //     const deviceWidth = document.body.clientWidth
  //     const deviceHeight = document.body.clientHeight
  //     mobsf.style.width = (Number(deviceWidth) - 120) + 'px' // 数字是页面布局宽度差值
  //     mobsf.style.height = (Number(deviceHeight) - 80) + 'px' // 数字是页面布局高度差
  //   }

    // changeMobsfIframe()

    // window.onresize = function() {
    //   changeMobsfIframe()
    // }
  // }
}
</script>

<style scoped>

</style>
