<template>
  <div class="second">
    <div class="content clearfloat">
        <div class="content_left fl">
            <ul class="lv1-ul">
                <li class="lv1-li" v-for="(item,index) in leftMenu" @click="gain(index)">{{item.content}}<i :class="{'i_active':index == count}"></i></span></li>
           </ul>
        </div>
        <div class="content_right fr">
            <div class="position">
                <img src="../assets/img/position.png">
                <span>您现在的位置为：</span>
                <router-link to="/">首页</router-link>
                <span>></span>
                <a href="javascript:void(0)">{{leftMenu[count]["content"]}}</a>
            </div>
            <div class="title">
                <img src="../assets/img/icon_1.jpg">
                <span>{{leftMenu[count]["content"]}}</span>
                <img src="../assets/img/sanjiaoxian.png">
            </div>
            <div class="right_search">
                <div class="first">
                    <span>关键字</span>
                    <input v-model="key" type="text" name="">
                    <span>行业分类</span>
                    <select v-model="industry" style="margin-right: 25px;">
                        <option v-for="item in industryList">{{item}}</option>
                    </select>
                    <span>交易主体</span>
                    <select v-model="deal">
                        <option v-for="item in dealList">{{item}}</option>
                    </select>
                    <input @click="search()"  type="button" name="" value="搜索">
                </div>
            </div>
            <table>
                <tr>
                    <th style="width: 10%;border-top-left-radius: 5px;">序号</th>
                    <th style="width: 70%;">标题</th>
                    <th style="width: 20%;border-top-right-radius: 5px;">时间</th>
                </tr>
                <tr v-for="(item,index) in titleJson">
                    <td>{{item.num}}</td>
                    <td><a href="javascript:void(0)">{{item.title}}</a></td>
                    <td>{{item.time}}</td>
                </tr>
            </table>
            <div class="fr">
                <v-page :total="pageTotal" :size="pageSize" :current="pageCurrent" @pagechange="pagechange"></v-page>
            </div>
        </div>
    </div>
  </div>
</template>
<script>
    import page from "./Page.vue"
    export default{
        name:"second",
        components:{
            "v-page":page
        },
        data(){
            return {
                // leftMenu:[{id:1,content:"交易目录"},{id:2,content:"交易流程"},{id:3,content:"常见问题"},{id:4,content:"办事指南"},{id:5,content:"下载专区"},{id:6,content:"盟市中心指引"}],
                isAdd:false,
                count:0,
                titleJson:[],
                key:"",
                industry:"政府采购",
                deal:"政府采购",
                industryList:["政府采购","工程建設","土地礦權"],
                dealList:["政府采购","工程建設","土地礦權"],
                pageTotal:50,
                pageSize:10,
                pageCurrent:1,
                leftMenu:[]
            }
        },
        methods:{
            gain:function(index){
                this.count=index;
                this.$ajax.get('../static/data/data.json')
                  .then(function (response) {
                    this.titleJson = response.data.data;
                  }.bind(this))
                  .catch(function (error) {
                    
                  }.bind(this));
            },
            search:function(){
                var data = {"key":this.key,"industry":this.industry,"deal":this.deal};
                 this.$ajax.get('../static/data/data2.json')
                    .then(function(response){
                        this.titleJson = response.data.data;
                    }.bind(this))
                    .catch(function(error){

                    }.bind(this));
            },
            pagechange:function(data){
                this.$ajax.get('../static/data/data3.json')
                  .then(function (response) {
                    this.titleJson = response.data.data;
                  }.bind(this))
                  .catch(function (error) {
                    
                  }.bind(this));
            }
        },
        mounted(){
            this.$ajax.get('../static/data/data1.json')
              .then(function (response) {
                this.titleJson = response.data.data;
              }.bind(this))
              .catch(function (error) {
              }.bind(this));
            this.$ajax.get('../static/data/data6.json')
              .then(function (response) {
                this.leftMenu = response.data.data;
              }.bind(this))
              .catch(function (error) {
              }.bind(this));
        }
    }
</script>