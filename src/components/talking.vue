<template>
    <div id="talk" class="talk">
        <div class="love">你喜欢 <span class="kind" @click="showHands()">帅气</span><span class="kind" @click="showCute()">蠢萌</span></div>
        <transition name="bounce">
        <div class="account" v-show="ok">
            <input type="text" placeholder="昵称" class="name" id="name" v-model="name">
            <input type="text" placeholder="邮箱" class="name" id="email" v-model="email">
            <input type="text" placeholder="个人网站" class="name" style="width:260px">
            <button type="button" class="login" @click="checkName()">登录</button>
        </div>
        </transition>
        <textarea class="talktxt" :style="{background:bg}" v-model="txt"></textarea>
        <button class="go" @click="go()">{{msg}}</button>
        <div class="all">
            <span class="otherb">{{num}}条评论</span>
            <p class="othern" :class="{active:zao}"  @click="changeZ()">最早</p>
            <p class="othern" :class="{active:newo}" @click="changeN()">最新</p>
        </div>
        <div class="par">
            <div class="par-first">
                <img src="../../static/image/avatar.jpg" alt="" class="blog">
                <div class="par-txt">
                    <p class="blog-name">name</p>
                    <div class="blog-txt">
                        写的评论框很酷哇 \(^o^)/
                    </div>
                    <p style="margin-top:10px;">
                        <span>time</span>&nbsp;&nbsp;&nbsp;
                        <icon name="reply" class="reply"></icon>
                        <span style="cursor:pointer;" @click="recall()">回复</span>
                    </p>
                </div>              
                <div style="clear:both"></div>
                <recall></recall> 
            </div>
            
            <div class="par-list">
                <img src="../../static/image/avatar.jpg" class="blog">
                <div class="list-txt">
                    <p class="blog-name">name</p>
                    <div class="blog-txt">
                        回复{{name}}：写的评论框很酷哇 \(^o^)/
                    </div>
                    <p style="margin-top:10px;">
                        <span>time</span>&nbsp;&nbsp;&nbsp;
                        <icon name="reply" class="reply"></icon>
                        <span style="cursor:pointer;">回复</span>
                    </p>
                    
                </div>
                <div style="clear:both"></div>
            </div>
                
        </div>
    </div>
</template>

<script>
import recall from '../components/recall.vue'
export default {
    name:'talk',
    data () {
        return {
            bg:'url(../../static/image/talk.jpg) no-repeat right top',
            msg:'准备升空',
            name:'',
            email:'',
            web:'',
            ok:true,
            num:13,
            zao:false,
            newo:true,
            txt:''
        }
    },
    methods: {
        showHands:function(){
            this.bg = 'url(../../static/image/talk.jpg) no-repeat right top'
        },
        showCute:function(){
            this.bg = 'url(../../static/image/cute.jpg) no-repeat right top'
        },
        checkName:function(){
            if(this.name == ''){
                this.$layer.msg('留个名呗(*╯3╰) ');
                return           
            }

            if(this.email == ''){
                this.$layer.msg('留个邮箱常联系呗 (*╯3╰) ');
                return;
            }

            this.ok = false          
        },
        changeZ:function(){
            this.zao = true;
            this.newo = false;
        },
        changeN:function(){
            this.zao = false;
            this.newo = true;
        },
        go:function(){
            if(this.txt == ''){
                this.$layer.msg('先说几句再提交吧')
            }
        },
        recall:function(){
            
        }
    },
   components: {
       recall
   }
}
</script>

<style>
    @import '../../static/css/talk.css';
</style>
