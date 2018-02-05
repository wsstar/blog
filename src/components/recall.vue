<template>
    <div id="recall" class="recall">
        <img src="../../static/image/avatar.jpg" class="blog">
        <div class="list-txt">
            <textarea name="recall" class="recall-txt" v-model="recall"> </textarea>
            <button class="gorecall" @click="gorecall()">发射</button>

            
        </div>
        <div style="clear:both"></div>
           
    </div>
</template>

<script>
export default {
    name:'recall',
    data () {
        return {
            recall:''
        }
    },
    methods:{
        gorecall:function(){
            if(this.recall == ''){
                this.$layer.msg('先说几句再提交吧')
            }
        }
    }
}
</script>

<style>
.recall{
    width: 579px;
    text-align: left;
    border-bottom: 1px solid #ccc;
    margin-left: 80px;
    -webkit-transition: all 1s;
    -moz-transition: all 1s;
    transition: all 1s;
}
.recall-txt{
    width: 100%;
    height: 100px;
    margin-top: 20px;
    resize: none;
    border:1px solid #ccc;
    padding: 10px 10px;
    box-sizing: border-box;
    outline:none;
    border-radius: 4px;
    color: #000;
    font-size: 16px;
    transition: all 0.5s;
}
.gorecall{
    display: block;
    width: 80px;
    height: 40px;
    float: right;
    background: rgba(245, 88, 82, 0.5);
    border:none;
    margin-top: 10px;
    border-radius: 6px;
    font-size: 16px;
    outline: none;
    color: #fff;
    transition: all 1s;
    cursor: pointer;
}
</style>
