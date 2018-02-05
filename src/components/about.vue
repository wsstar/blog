<template>
    <div id="artical">    
        <div class="top">
            <div class="aboutmask">
                <img src="../../static/image/avatar.jpg" class="about-my" @mouseover="showQues"/>
                <p>{{ques}}</p>
                <p>{{name}}</p>
            </div>
        </div>
        <div class="artxt">
            <div class="item" data-scroll-reveal="enter left over 0.5s after 0.1s">
                <!-- <img src="<%=_static_url%>/images/security/home_icon_4.png"/> -->
                <div class="item-font">
                    <p class="itmes-tit">联系方式</p>
                    <p>QQ：891482783</p>
                    <p>Email：891482783@qq.com</p>
                </div>
                <div class="clear"></div>
            </div>
            <div class="item" data-scroll-reveal="enter left over 0.7s after 0.1s">
                <img src="<%=_static_url%>/images/security/home_icon_4.png"/>
                <div class="item-font">
                    <p class="itmes-tit">个人信息</p>
                    <p>1993</p>
                    <p>本科</p>
                    <p>博客：<a href="http://www.sunstars.me">http://www.sunstars.me</a></p>
                    <p>Github：<a href="http://github.com/wsstar">http://github.com/wsstar</a></p>
                </div>
                <div class="clear"></div>
            </div>
        </div>
        <talk></talk> 
    </div>
</template>
<script>
import '../../static/js/scrollreveal.min.js';
import talk from '../components/talking'
export default {
    name:'artical',
    data(){
        return{
            name:'',
            ques:'',
            t :0
        }

    },
    components: {
        talk
    },
    methods:{
        showQues:function(){
            var qu = ['我是谁','男 ？ 女','喜欢？'],
                an = ['star','smart girl','you']
            var t = this.t;   
            if(t <= 2){
                this.ques = qu[t];
                this.name = an[t];
                this.t++;
            }else{
                this.t = 0;
                this.ques = qu[0];
                this.name = an[0];
                this.t++;
            }
            
        }
  }
}
</script>
<style scoped>
    .articalbox{
        width: 100%;
        transition: all 1s; 
        position: relative;
    } 
    .top{
        width: 100%;
        height: 400px;
        background: url(../../static/image/art.jpg) center no-repeat;
        background-size:cover;
    }
    .aboutmask{
        width:100%;
        height: 100%;
        background: rgba(0, 0, 0, .5);
        color: #fff;
        padding: 100px 0 0 0;
        box-sizing: border-box;
    }
    .abouttitle{
        font-size: 18px;
        line-height: 60px;
    }
   
    .artxt{
        width:50%;
        margin: 40px auto ;
        line-height: 1.5rem;
        text-align: left;
    }
    .about-my{
        display: block;
        width: 160px;
        margin:15px auto 20px auto;
        border-radius: 50%;
        transition: all 1s; 
        cursor: pointer;
    }
    .about-my:hover{   
        transform: scale(.6);
    }
    .item{
        width: 100%;
    }
    .itmes-tit{
        font-size: 16px;
        font-weight: bolder;
        margin: 30px 0; 
    }
    a{
        color: #1abc9c;
    }
</style>


