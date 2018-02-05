<template>
    <div id="hole">
        <div class="hole-tp" ></div>
        <div class="hole-box">
            <router-link to="/holelist">
                <div class="hole-list"  v-for="list in lists">
                    <div class="hole-im" :style="{backgroundImage:'url('+list.img+')'}">{{list.type}}</div> 
                    <p class="hole-des">{{list.des}}</p>
                    <p class="hole-times">这里有{{list.times}}个坑</p>
                </div>
            </router-link>
            <div style="clear:both"></div>
        </div>
    </div>

</template>
<script>
export default {
    name:'hole',
    data () {
        return {
            lists:[
                {img:'../../static/image/art.jpg',des:"最流行的前端框架最流行的前端框架最流行的前端框架最流行的前端框架",times:2},
                {img:'../../static/image/bgs5.jpg',des:"name",times:2},
                {img:'../../static/image/art.jpg',des:"name",times:2},
                {img:'../../static/image/art.jpg',des:"name",times:2},
                {img:'../../static/image/art.jpg',des:"name",times:2}
            ]
        }
    },
    components:{
    },
    methods:{
        showAside:function(){
            if(!this.ischange){
                this.side  = '0px';
                this.isleft = '300px';
                this.sideleft = '260px';
                this.ischange = true;
            }else{
                this.side  = '-300px';
                this.isleft = '0px';
                this.sideleft = '20px'
                this.ischange = false;
            }           
        }
    }
    
}
</script>
<style scoped>
    .hole{
        position: relative;
        width: 100%;
        transition: all 1s;
    }
    .hole-tp{
        width: 100%;
        height: 300px;
        background: url(../../static/image/art.jpg) center no-repeat;
        background-size:cover;
    }
    .hole-box{
        width: 1000px;
        margin:40px auto;
    }
    .hole-list{
        width: 23%;
        height: 200px;
        float: left;
        margin:20px 0 0 1.5%;
        border: 1px solid #ccc;
        padding:0 0  20px 0;
        border-radius: 8px;
        color: #333;
        position: relative;
        top: 0;
        transition: all 1s;
    }
    .hole-im{
        width: 100%;
        height: 40px;
        background: lightblue;
        border-radius: 7px 7px  0 0;
        line-height: 40px;
        color: #fff;
        margin-bottom: 20px;
        
    }
    .hole-des{
        width: 80%;
        height: 100px;
        font-size: 14px;
        line-height: 1.5rem;
    }
    .hole-times{
        width: 80%;
        text-align: left;
        margin: 20px auto 0 auto;
        font-size: 12px;
    }
    .hole-list:hover{
        top: -15px;
        box-shadow: 0px 5px 10px rgba(245, 88, 82, 0.5); 
    }
</style>




