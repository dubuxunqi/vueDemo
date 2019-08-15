<template>
  <div class="index">
    <div class="wb-slider" id="slider">      
        <div class="wb-slider-conbox">
           <div class="wb-slider-ctag">
                <router-link to="/third"><img src="../assets/img/logo.png" alt=""></router-link>
           </div>   
           <div class="wb-slider-ctag">
                <router-link to="/third"><img src="../assets/img/logo.png" alt=""></router-link>
            </div>
           <div class="wb-slider-ctag">
                <router-link to="/third"><img src="../assets/img/logo.png" alt=""></router-link>
            </div>
            <div class="wb-slider-ctag">
                <router-link to="/third"><img src="../assets/img/logo.png" alt=""></router-link>
            </div>
            <div class="wb-slider-ctag">
                <router-link to="/third"><img src="../assets/img/logo.png" alt=""></router-link>
            </div>
        </div>
    </div>
    <div class="content">
        <div class="first clearfloat">
            <div class="importantInfo fl">
                <div class="title clearfloat">
                    <div class="titleLeft fl">重要信息</div>
                    <div class="titleRight fr"><a href="javascript:void(0)">更多>></a></div>
                </div>
                <ul>
                    <li v-for="item in info">
                        <router-link to="/third"><span>{{item}}</span></router-link>
                    </li>
                </ul>
            </div>
            <div class="dealInfo fl">
                <div class="title clearfloat">
                    <div class="titleLeft fl">交易信息</div>
                    <div class="titleRight fr"><a href="javascript:void(0)">更多>></a></div>
                </div>
                <ul>
                    <li>政府采购</li>
                    <li>
                        <router-link to="/second">· 招标公告</router-link>
                        <router-link to="/second">· 中标候选人公示</router-link>
                        <router-link to="/second">· 中标公告</router-link>
                    </li>
                    <li>工程建设</li>
                    <li>
                        <router-link to="/second">· 招标公告</router-link>
                        <router-link to="/second">· 中标候选人公示</router-link>
                        <router-link to="/second">· 中标公告</router-link>
                    </li>
                    <li>产权交易</li>
                    <li>
                        <router-link to="/second">· 交易公告</router-link>
                        <router-link to="/second">· 交易结果公告</router-link>
                    </li>
                    <li>土地矿业权</li>
                    <li>
                        <router-link to="/second">· 交易公告</router-link>
                        <router-link to="/second">· 交易结果公告</router-link>
                    </li>
                    <li>其他类型</li>
                    <li>
                        <router-link to="/second">· 交易公告</router-link>
                        <router-link to="/second">· 交易结果公告</router-link>
                    </li>
                </ul>
            </div>
            <div class="opening">
                <div class="title clearfloat">
                    <div class="titleLeft fl">交易信息</div>
                    <div class="titleRight fr"><a href="javascript:void(0)">更多>></a></div>
                </div>
                <table class="tableTil">
                    <tr>
                        <td class="td1">项目名称</td>
                        <td class="td2">时间</td>
                        <td class="td3">场地</td>
                    </tr>
                    <tr v-for="item in deal">
                        <td class="td1"><router-link to="/third">{{item.content}}</router-link></td>
                        <td class="td2">{{item.time}}</td>
                        <td class="td3">{{item.site}}</td>
                    </tr>
                </table>
            </div>
        </div>
    </div>
  </div>
</template>
<script>
    import "../assets/js/jquery.min.js"
    import "../assets/js/slider-min.js"
    import "../assets/css/index.css"
    import "../assets/css/slide.css"
    export default{
        name:"index",
        data(){
            return {
                info:[],
                deal:[]
            }
        },
        mounted(){
           $('#slider').Xslider({
                affect: 'scrollx',//scrollx 水平轮播 scrolly 垂直轮播
                speed: 1000,
                space: 3000,
                conbox: '.wb-slider-conbox',
                ctag: '.wb-slider-ctag',
                switcher: '.wb-slider-switcher',
                stag: '.wb-slider-stag',
                current: 'active',
                trigger: 'click',
                boxWidth: '100%',
                boxHeight: '292'
            }); 
            this.$ajax.get('../static/data/data4.json')
              .then(function (response) {
                this.deal = response.data.data;
              }.bind(this))
              .catch(function (error) {
                
              }.bind(this));
              this.$ajax.get('../static/data/data5.json')
              .then(function (response) {
                this.info = response.data.data;
              }.bind(this))
              .catch(function (error) {
                
              }.bind(this));  
        }
    }
</script>