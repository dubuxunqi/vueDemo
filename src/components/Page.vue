<template>
    <div class="page clearfloat">
        <span :class="{'endBg':isIndex}"  @click="home()">首頁</span>
        <span :class="{'endBg':isIndex}" @click="prev()">上一頁</span>
        <ul class="clearfloat fl">
            <li @click="skip(item)" v-for="item in pageList" :class="{'bgActive':item == pageinationCurrentPage}">{{item}}</li>
        </ul>
        <span :class="{'endBg':isTrailer}"  @click="next()">下一頁</span>
        <span :class="{'endBg':isTrailer}" @click="trailer()">尾页</span>
    </div>
</template>
<script>
    export default{
        name:"page",
        props:["total","current","size"],
        data(){
            return{
               pageinationTotal: this.total,//总条目数  
               pageinationSize: this.size,//每页显示条目个数    
               pageinationCurrentPage:this.current,//当前页数默认1  
            }
        },
        computed:{
            pageList:function(){
                var pag = [];
                if( this.pageinationCurrentPage <this.pageinationSize){ //如果当前的激活的项 小于要显示的条数
                   //总页数和要显示的条数那个大就显示多少条
                   var i = Math.min(this.pageinationSize,this.pageinationTotal);
                   while(i){
                       pag.unshift(i--);
                   }
                }else{ //当前页数大于显示页数了
                   var middle = this.pageinationCurrentPage - Math.floor(this.pageinationSize / 2 ),//从哪里开始
                       i = this.pageinationSize;
                   if( middle > (this.pageinationTotal - this.pageinationSize)){
                       middle = (this.pageinationTotal - this.pageinationSize) + 1
                   }
                   while(i--){
                       pag.push( middle++ );
                   }
                }
                return pag
            },
            isIndex:function(){
                if(this.pageinationCurrentPage == 1){
                   this.startDisabled = true; 
                }else{
                   this.startDisabled = false; 
                }
                return this.startDisabled;
            },
            isTrailer:function(){
                if(this.pageinationCurrentPage == this.pageinationTotal){
                   this.endDisabled = true; 
                }else{
                   this.endDisabled = false; 
                }
                return this.endDisabled;
            }
        },
        methods:{
            skip:function(present){
                // if(present == this.pageinationCurrentPage) return;
                this.pageinationCurrentPage = present;
                this.$emit('pagechange', this.pageinationCurrentPage);
            },
            home:function(){
              if(this.pageinationCurrentPage != 1){
                this.pageinationCurrentPage = 1;
                this.$emit('pagechange', this.pageinationCurrentPage);
              }
            },
            prev:function(){
              if(this.pageinationCurrentPage != 1){
                this.pageinationCurrentPage = this.pageinationCurrentPage-1;
                this.$emit('pagechange', this.pageinationCurrentPage);
              }
            },
            next:function(){
              if(this.pageinationCurrentPage != this.pageinationTotal){
                this.pageinationCurrentPage = this.pageinationCurrentPage+1;
                this.$emit('pagechange', this.pageinationCurrentPage);
              }
            },
            trailer:function(){
              if(this.pageinationCurrentPage != this.pageinationTotal){
                this.pageinationCurrentPage = this.pageinationTotal;
                this.$emit('pagechange', this.pageinationCurrentPage);
              }
            }
        }
    }
</script>
<style scoped>
    .bgActive{background-color: #274060!important;}
    .endBg{background-color: #A5A5A5!important;}
    .page{margin-top: 20px;}
    .page span{height: 25px;display: inline-block;text-align: center;width: 55px;line-height: 25px;background-color: #2881C6;color: #fff;cursor: pointer;margin-left: 5px;float: left;}
    .page ul li{width: 25px;height: 25px;text-align: center;line-height: 25px;background-color: #2881C6;margin-left: 5px;color: #fff;float: left;cursor: pointer;}
</style>