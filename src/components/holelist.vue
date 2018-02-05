<template>
    <div id="holelist">
        <div class="top">
            <div class="topmask">
                <p class="toptitle">{{title}}</p>
                <p>{{des}}</p>
            </div>
        </div>
        <div class="artxt">
            {{txt}}
        </div>
        <div class="much">
            <h2>好多坑</h2>
            <ul v-for="(item,index) in items">
                <li :class="[index == 0?'much-list active':'much-list']" @click="changeActive($event)">{{item.list}}</li>
            </ul>
        </div>    
        <talk></talk>   
    </div>
</template>
<script>
import myaside from '../components/header'
import talk from '../components/talking'
export default {
    name:'holelist',
    data(){
        return{
            side:'-300px',
            sideleft:'20px',
            isleft:'0px',
            title:"文章标题",
            des:"nmikdfkd",
            items:[{list:'list1'},{list:'list2'},{list:'list3'}],
            txt:"安装 npm install v-touch 引入 var VueTouch = require(‘vue-touch’)Vue.use(VueTouch) ps:如果你的项目中已经包含了vue和Hammer.js，那也可以用直接引用; 用法example: Tap me!Swipe me!点击：tap左滑：swipeleft双击：doubletap按住：press捏放：pinch旋转：rotate水平：span（向上滑）左滑：swipe（快速滑动） ps：去掉Windows Phone点击时的高亮效果"
        }

    },
    components: {
        myaside,
        talk
    },
    methods:{
        showAside:function(){
            if(!this.ischange){
                this.side  = '0px';
                this.isleft = '300px'
                this.sideleft = '260px'
                this.ischange = true;
            }else{
                this.side  = '-300px';
                this.isleft = '0px';
                this.sideleft = '20px'
                this.ischange = false;
            }
            
        },
        changeActive:function(event){
            $('.much-list').removeClass('active');
            $(event.currentTarget).addClass('active');
        }
  }
}
</script>
<style scoped>
     .holelistbox{
        width: 100%;
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
        font-size: 18px;
        line-height: 60px;
    }
   
    .artxt{
        width: 60%;
        margin: 40px auto ;
        line-height: 1.5rem;
        text-align: left;
        word-break: break-all;
        word-wrap:break-word;
    }
    .much{
        width: 10%;
        position: fixed;
        top:350px;
        right: 100px;
    }
    h2{
        position: relative;
        animation:shark 1s infinite;
        margin-bottom: 20px;
    }
    @keyframes shark {
        0% {
        transform: translate(0px, 0px) rotate(0deg)
        }
        4% {
        transform: translate(-2px, -2px) rotate(-0.5deg)
        }
        /* 6% {
        transform: translate(0px, 0px) rotate(-10deg)
        } */
        8% {
        transform: translate(0px, -1px) rotate(-0.5deg)
        }
        /* 0.5% {
        transform: translate(-1px, -1px) rotate(-0.5deg)
        } */
        12% {
        transform: translate(0px, 0px) rotate(-0.5deg)
        }
        /* 14% {
        transform: translate(0px, 0px) rotate(-0.5deg)
        } */
        16% {
        transform: translate(0px, -1px) rotate(-0.5deg)
        }
        /* 18% {
        transform: translate(0px, 0px) rotate(-0.5deg)
        } */
        20% {
        transform: translate(-1px, -1px) rotate(-0.5deg)
        }
        /* 22% {
        transform: translate(-1px, -1px) rotate(-0.5deg)
        } */
        24% {
        transform: translate(-1px, -1px) rotate(-0.5deg)
        }
        /* 26% {
        transform: translate(-1px, 0px) rotate(-0.5deg)
        } */
        28% {
        transform: translate(0px, -1px) rotate(-0.5deg)
        }
        /* 30% {
        transform: translate(0px, -1px) rotate(-0.5deg)
        } */
        32% {
        transform: translate(0px, 0px) rotate(-0.5deg)
        }
        /* 34% {
        transform: translate(0px, -1px) rotate(-0.5deg)
        } */
        36% {
        transform: translate(-1px, 0px) rotate(-0.5deg)
        }
        /* 38% {
        transform: translate(-1px, -1px) rotate(-0.5deg)
        } */
        40% {
        transform: translate(0px, 0px) rotate(-0.5deg)
        }
        /* 42% {
        transform: translate(-1px, -1px) rotate(-0.5deg)
        } */
        44% {
        transform: translate(-1px, 0px) rotate(-0.5deg)
        }
        /* 46% {
        transform: translate(-1px, -1px) rotate(-0.5deg)
        } */
        48% {
        transform: translate(0px, -1px) rotate(-0.5deg)
        }
        /* 50% {
        transform: translate(0px, -1px) rotate(-0.5deg)
        } */
        52% {
        transform: translate(0px, 0px) rotate(-0.5deg)
        }
        /* 54% {
        transform: translate(-1px, 0px) rotate(-0.5deg)
        } */
        56% {
        transform: translate(0px, 0px) rotate(-0.5deg)
        }
        /* 58% {
        transform: translate(0px, 0px) rotate(-0.5deg)
        } */
        60% {
        transform: translate(0px, 0px) rotate(-0.5deg)
        }
        /* 62% {
        transform: translate(0px, -1px) rotate(-0.5deg)
        } */
        64% {
        transform: translate(0px, 0px) rotate(-0.5deg)
        }
        /* 66% {
        transform: translate(-1px, -1px) rotate(-0.5deg)
        } */
        68% {
        transform: translate(0px, -1px) rotate(-0.5deg)
        }
        /* 70% {
        transform: translate(0px, 0px) rotate(-0.5deg)
        } */
        72% {
        transform: translate(-1px, -1px) rotate(-0.5deg)
        }
        /* 74% {
        transform: translate(-1px, -1px) rotate(-0.5deg)
        } */
        76% {
        transform: translate(-1px, 0px) rotate(-0.5deg)
        }
        /* 78% {
        transform: translate(0px, 0px) rotate(-0.5deg)
        } */
        80% {
        transform: translate(0px, -1px) rotate(-0.5deg)
        }
        /* 82% {
        transform: translate(-1px, 0px) rotate(-0.5deg)
        } */
        84% {
        transform: translate(-1px, -1px) rotate(-0.5deg)
        }
        /* 86% {
        transform: translate(0px, -1px) rotate(-0.5deg)
        } */
        88% {
        transform: translate(0px, 0px) rotate(-0.5deg)
        }
        /* 90% {
        transform: translate(-1px, -1px) rotate(-0.5deg)
        } */
        92% {
        transform: translate(-1px, 0px) rotate(-0.5deg)
        }
        /* 94% {
        transform: translate(-1px, 0px) rotate(-0.5deg)
        } */
        96% {
        transform: translate(0px, -1px) rotate(-0.5deg)
        }
        100% {
        transform: translate(0px, -1px) rotate(-0.5deg)
        }
    }
    .much-list{
        min-width: 80%;
        height: 30px;
        line-height: 30px;
        border-left:4px solid #ebe4e4;
         color: #F4B0BA; 
        letter-spacing: 3px;
        font-size: 16px;
        font-weight: bolder;
        cursor: pointer;
        
    }
    .active{
        border-left:4px solid #F4B0BA;
        background: #ebe4e4;
    }
</style>


