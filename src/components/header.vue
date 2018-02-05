<template>
    <div id='myaside' class="aside" :style="{background:bgs}">
        <router-link to="/self"><img src="../../static/image/avatar.jpg" class="my"/></router-link>
        <p class="myname">star</p>
        
        <p class="searchbox">
            <input type="text" placeholder="search..." class="search"> 
            <icon name="search" class="icon"></icon>
        </p>
        <router-link to="/" class="nav" style="margin-top:30px;" :style="{color:color}">首页</router-link>
        <router-link to="/read" class="nav" :style="{color:color}">阅读计划</router-link>
        <router-link to="/about" class="nav" :style="{color:color}">关于我</router-link>
        <router-link to="/" class="nav" :style="{color:color}">友链</router-link>
        <router-link to="/hole" class="nav" :style="{color:color}">坑点</router-link>
        <div class="bot">
             <p class="bot-icons"><icon name="github"></icon></p>
             <p class="bot-icons"><icon name="music"></icon></p>
             <p class="bot-icons" @click="changeNight()"><icon name="star-o"></icon></p>
             <p class="bot-icons" @click="changeDay()"><icon name="sun-o"></icon></p>
            <!-- <p @click="change()" class="change">change</p>   -->
        </div>
        
    </div>
</template>
<script>
// import bus from '../assets/eventBus.js';
export default {
   name: 'myaside',
    data () {
        return {
            bgs:'',
            color:'rgb(285,88,82)'
        }
    },
    methods:{
        changeDay:function(){
            var b = ['bgd.jpg','bgd2.jpg','bgd3.jpg','bgn3.jpg'],
                t = Math.floor(Math.random()*4);
            this.color='rgb(285,88,82)'
            this.bgs = 'no-repeat center/cover url(../../static/image/'+b[t]+')'
        },
        changeNight:function(){
            var b = ['bg2.png','bgn.jpg','bgn2.jpg'],
                t = Math.floor(Math.random()*3);
            this.bgs = 'no-repeat center/cover url(../../static/image/'+b[t]+')'
            this.color='#fff'
        }
    },
    mounted () {
        var day = new Date();
        var D=day.getHours()      
        if (D<=18 && D > 6)    {      
            this.color='rgb(285,88,82)'
            this.bgs = 'no-repeat center/cover url(../../static/image/bgd.jpg)'
        }   else  {      
            this.bgs = 'no-repeat center/cover url(../../static/image/bgn.jpg)'
            this.color='#fff'
        }      
    }
}
</script>
<style scoped>
    .aside{
        width: 300px;
        height:100%;
        position: fixed;
        top: 0;
        transition: all 1s;       
        color: #333;
        z-index: 1;
    }
    .my{
        display: block;
        width: 120px;
        margin:40px auto 20px auto;
        border-radius: 50%;
    }
    .my:hover{
        box-shadow: 0 0 0 6px rgba(255, 255, 255, 0.5), 0 4px 48px 20px rgba(245, 88, 82, 0.5);
    }
    .myname{
        width: 100%;
        font-size: 18px;
        font-weight: bolder;
        color: pink;
    }
    .change{
        width: 100%;
        line-height: 40px;
        cursor: pointer;
        font-weight: bolder;
        color: #fff;
        font-size: 16px;
    }
    .searchbox{
        width:100%;
        background:#fff;
        padding-right: 10px;
        box-sizing: border-box;
        margin-top: 30px;
    }
    .search{
        width:90%;
        height: 40px;
        border: 0;
        text-align: center;
        outline: none;
    }
    .nav{
        display: block;
        width: 100%;
        height: 60px;
        line-height: 60px;
        font-size: 16px;
        font-weight: bolder;
        letter-spacing: 2px;
    }
    .nav:hover{
        background: rgba(0, 100, 0, .5);
    }
    .bot{
        width: 300px;
        height: 60px;
        /* background: #fff; */
        position: absolute;
        bottom: 20px;
        left: 0;
    }
    .bot-icons{
        width: 40px;
        height: 40px;
        text-align: center;
        line-height: 45px;
        border-radius: 50%;
        background: #ccc;
        float: left;
        margin:15px;
        cursor: pointer;
    }
    .bot-icons .icon{
        margin: 5px;
    }
    
</style>


