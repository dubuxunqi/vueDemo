<template>
  <div class="top">
    <div style="margin:0 auto;width:1200px;padding:40px 0 30px 0" class="clearfloat">
        <img class="fl" src="../assets/img/logoNew.png" alt="#">
        <div class="clearfloat fr search">
            <input class="fl" type="text" name="">
            <span style="background-color:#334F74;" class="fr"><img src="../assets/img/searchnew.png" alt="#"></span>
        </div>
    </div>
    <div class="menu">
        <ul class="clearfloat">
            <li class="fl" style="width:120px;"><router-link to="/">首页</router-link></li>
            <li class="fl"><router-link to="/second">政务公开</router-link></li>
            <li class="fl"><router-link to="/second">党建工作</router-link></li>
            <li class="fl"><router-link to="/second">政策法规</router-link></li>
            <li class="fl"><router-link to="/second">服务指南</router-link></li>
            <li class="fl"><router-link to="/second">交易统计</router-link></li>
            <li class="fl"><router-link to="/second">互动交流</router-link></li>
        </ul>
    </div>
  </div>
</template>

<script>
export default {
  name: 'Top',
  data () {
    return {
      msg: ''
    }
  }
}
</script>
<!-- Add "scoped" attribute to limit CSS to this component only -->
<style scoped>

</style>
