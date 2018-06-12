<template>
  <div class="home">
    <div class="homeTop">
      <div class="notice"></div>
      <div class="cursor"></div>
      <div class="intro"></div>
    </div>

    <div class="middle">
      <div class="newest"></div>
      <div class="soon"></div>
    </div>

    <div class="grounding"></div>
  </div>
</template>

<script>
export default {
  name: 'home',
  data () {
    return {
      msg: 'Welcome to Your Vue.js App'
    }
  }
}
</script>

<!-- Add "scoped" attribute to limit CSS to this component only -->
<style scoped>

.homeTop{
  height: 310px;
  width: 100%;
  background: blue
}
.homeTop .notice{
  width: 190px;
  height: 100%;
  float: left;
  background: forestgreen;
}
.homeTop .cursor{
  width: 640px;
  height: 100%;
  float: left;
  background: grey;
}
.homeTop.intro{
  width: 370px;
  height: 100%;
  background:fuchsia;
  float: left;
}
.middle{
  width: 100%;
  height: 365px;
  background: rosybrown;
}
.middle .newest{
  width: 345px;
  height: 100%;
  background:#dfdfdf;
  float: left;
}
.middle .soon{
  width: 855px;
  height: 100%;
  float: left;
  background:aqua
}
.grounding{
  height: 390px;
  width: 100%;
  background: salmon
}
</style>
