<template>
  <div class="footer">
    我是footer
  </div>
</template>

<script>
export default {
  name: 'footer',
  data () {
    return {
      msg: 'Welcome to Your Vue.js App'
    }
  }
}
</script>

<!-- Add "scoped" attribute to limit CSS to this component only -->
<style scoped>
.footer{
  font-size: 30px;
  color:#fff;
  text-align: center;
  line-height: 150px;
  font-weight: bold;
  width: 100%;
  height: 150px;
  background:#000
}
</style>
