<template>
<div id="read">
    <div class="read-tp" ></div>
    <div class="read-box">
        <div class="read-list"  v-for="list in lists">
                <img :src=list.img   class="list-img">
            <p>{{list.name}}</p>
            <p>{{list.author}}</p>
            <p>{{list.publish}}</p> 
        </div>
        <div style="clear:both"></div>
    </div>
  
</div>
</template>
<script>
export default {
    name:'read',
    data () {
        return {
            lists:[
                {img:'../../static/image/art.jpg',name:"name",author:"stay",publish:"234",type:"分类"},
                {img:'../../static/image/art.jpg',name:"name",author:"stay",publish:"234",type:"分类"},
                {img:'../../static/image/art.jpg',name:"name",author:"stay",publish:"234",type:"分类"},
                {img:'../../static/image/art.jpg',name:"name",author:"stay",publish:"234",type:"分类"},
                {img:'../../static/image/art.jpg',name:"name",author:"stay",publish:"234",type:"分类"}
            ]
        }
    },
    components:{
    },
    methods:{
    }
}
</script>
<style scoped>
    .read{
        position: relative;
        width: 100%;
        transition: all 1s;
    }
    .read-tp{
        width: 100%;
        height: 400px;
        background: url(../../static/image/art.jpg) center no-repeat;
        background-size: cover;
    }
    .read-box{
        width: 1000px;
        margin:40px auto;
    }
    .read-list{
        width: 23%;
        float: left;
        margin:20px 0 0 1.5%;
        border: 1px solid #ccc;
        padding: 20px 0;
    }
    .list-img{
        display:block;
        width: 120px;
        height: 120px;
        border-radius: 50%;
        margin:0 auto;
    }
</style>




