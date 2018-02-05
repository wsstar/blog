<template>
  <div id="app" :style={background:bg,color:acolor}>
    <!-- <p class="line" :style="{width:line}"></p> -->
    <div class="memu" @click="showAside()" :style="{left:sideleft}">memu</div>
    <myaside :style="{left:side}"></myaside>
    <div  :style="{left:isleft}" class="view">
        <router-view></router-view>
        <myfooter v-show="showBot"></myfooter>
    </div>
   
  </div>
</template>

<script>
import '../static/js/jquery-1.8.2.min.js';
import myaside from './components/header';
import myfooter from './components/bottom'
import bus from './assets/eventBus'
export default {
  name: 'app',
  data () {
    return {
      line:'0px',
      scroll:'',
      side:'-300px',
      sideleft:'20px',
      isleft:'0px',
      bg:'#fff',
      acolor:'',
      showBot:true
    }
  },
  methods:{
    onScroll:function(){
      var h =   document.body.clientHeight - window.screen.height + 100;
      this.scroll = document.body.scrollTop;
      this.line = this.scroll / h  * 100 +'%'
    },
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
      
    }
  },
  mounted () {
    window.addEventListener('scroll',this.onScroll);
    bus.$emit('showBot')
        // var day = new Date();
        // var D=day.getHours()      
        // if (D<=18 && D > 6)    {      
        //     // this.color='rgb(285,88,82)'
        //     this.bg = 'rgba(0,0,0,0.6)'
        //     this.acolor = '#fff'
        // }   else  {      
        //     this.bgs = 'no-repeat center/cover url(../../static/image/bgn.jpg)'
        //     // this.color='#fff'
        // }      
  },
  components: {
    myaside,
    myfooter
  }
 
}
</script>

<style>
#app {
  font-family: 'Avenir', Helvetica, Arial, sans-serif;
  -webkit-font-smoothing: antialiased;
  -moz-osx-font-smoothing: grayscale;
  text-align: center;
  
}
.view{
  position: relative;
  transition: all 1s;
}
.line{
  height: 4px;
  background:rgba(245, 88, 82, 0.5);
  position: fixed;
  top: 0;
  left: 0;
  transition: all 1s;
  z-index: 6;
}
.memu{
    width: 80px;
    height: 30px;
    line-height: 30px;
    border: 1px solid #ccc;
    border-radius: 15px;
    position: fixed;
    top: 30px;
    cursor: pointer;
    z-index: 2;
    transition: all 1s;
    background: #fff;
}
</style>

