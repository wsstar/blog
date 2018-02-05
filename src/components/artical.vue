<template>
    <div id="artical">
        <!-- <div class="memu" @click="showAside()" :style="{left:sideleft}">memu</div>
        <myaside :style="{left:side}"></myaside> -->
        
        
            <div class="top">
                <div class="topmask">
                    <p class="toptitle" id="typetitle">{{title}}</p>
                    <p>{{time}}·已有{{has}}阅读·{{type}}</p>
                </div>
            </div>
            <div class="articalbox">
                <div class="artxt">
                    {{txt}}
                </div>
                <div class="say">该博文为博主原创作品，主要记录分享自己学习的知识，您可以转载本站的技术文章，转载时请务必以链接形式标明文章原始出处 ，Thank you</div>
                <p class="tip">标签：<span>js</span></p>
                <div class="artnext">
                    <p><span>prevent</span></p>
                    <p><router-link to="/" style="color: rgb(235, 141, 138);">返回首页</router-link></p>
                    <p><span>next</span></p>
                    <div style="clear:both"></div>
                </div>
        </div>
        <talk></talk>
        
    </div>
</template>
<script>
// import Typed from 'typed.js';
import myaside from '../components/header'
import talk from '../components/talking'
export default {
    name:'artical',
    data(){
        return{
            side:'-300px',
            sideleft:'20px',
            isleft:'0px',
            title:"文章标题",
            time:"2017/08/12",
            has:"234",
            type:"分类",
            num:0,
            txt:"安装 npm install v-touch 引入 var VueTouch = require(‘vue-touch’)Vue.use(VueTouch) ps:如果你的项目中已经包含了vue和Hammer.js，那也可以用直接引用; 用法example: Tap me!Swipe me!点击：tap左滑：swipeleft双击：doubletap按住：press捏放：pinch旋转：rotate水平：span（向上滑）左滑：swipe（快速滑动） ps：去掉Windows Phone点击时的高亮效果"
        }

    },
    components: {
        myaside,
        talk
    },
    methods:{
       
        showtitle:function(){       
            var typingafter = document.getElementById('typetitle');//获取标题元素
            if(this.num <= this.title.length){
                typingafter.innerHTML = this.title.slice(0,this.num++)+'|';//将标题内容通过slice()方法返回
                // window.requestAnimationFrame(this.showtitle)
                setTimeout(this.showtitle,150);//每100毫秒执行一次
            }else{
                typingafter.innerHTML = this.title;//当标题内容全部返回后，去掉最后的‘|’
            }
        }
        
    },
    mounted () {
            document.getElementById('typetitle').innerText = "";//将标题内容赋值为空
           
           this.showtitle()
           console.log(this.$route.params)
            
        
    }
   
}
</script>
<style scoped>
     .articalbox{
        width: 800px;
        transition: all 1s; 
        position: relative;

    } 
    .top{
        width: 100%;
        height: 300px;
        background: url(../../static/image/art.jpg) center no-repeat;
        background-size:cover;
    }
    .topmask{
        width:100%;
        height: 100%;
        background: rgba(0, 0, 0, .5);
        color: #fff;
        padding: 100px 0 0 0;
        box-sizing: border-box;
    }
    .toptitle{
        font-size: 20px;
        line-height: 60px;
    }
   
    .artxt{
        width: 100%;
        margin: 40px auto ;
        line-height: 1.5rem;
        text-align: left;
    }
    .artnext{
        width: 100%;
        height: 60px;
        line-height: 60px;
        margin: 40px auto ;
        line-height: 1.5rem;
        text-align: left;
        border-top: 2px dashed #ddd;
        border-bottom: 2px dashed #ddd;
        font-size: 18px;
        font-weight: bolder;
    }
    .artnext>p{
        width: 33.33%;
        float: left;
        text-align: center;
        line-height: 60px;
        color: rgb(235, 141, 138);
    }
    .artnext>p:hover{
        background: #ddd;
    }
    .say{
        width:100%;
        border: 2px dashed rgb(235, 141, 138);
        line-height: 30px;
        padding:10px 20px;
        box-sizing: border-box;
    }
    .tip{
        width: 100%;
        text-align: left;
        margin:20px 0 40px 0;
    }
    .tip>span{
        display: inline-block;
        padding: 5px 20px;
        background: #e9e6e6;
        color: #615c5c;
        border-radius: 2px;
    }
    
</style>


