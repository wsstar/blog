<template>
    <div id="myfooter" v-show="msg">
        <div class="info">
            <p>苯宝宝已存活<span id="footer-birthday" style="color:#eb8d8a"></span></p><br/>
            <p>&copy; 2017 StarCode 浙ICP备 17008472号</p><br/>
            <!-- <span>服务器使用 <img src="/public/static/index/images/aliyun.png" height="20" />，存储使用 <img src="/public/static/index/images/qiniu.png" height="25" />，由 <img src="/public/static/index/images/youmeng+.png" height="25" /> 提供统计服务</span> -->
        </div>
        <p>{{msg}}</p>
    </div>
</template>

<script>
import bus from '../assets/eventBus'
export default {
    name:'myfooter',
    data () {
        return {
            msg:true
        }
    },
    methods: {
        show_date_time:function(){
            window.setTimeout(this.show_date_time, 1000);
            var BirthDay = new Date("2/14/2017 12:00:00");
            var today = new Date;
            var timeold = today.getTime() - BirthDay.getTime();
            var msPerDay = 864e5;
            var e_daysold = timeold / msPerDay;
            var daysold = Math.floor(e_daysold);
            var e_hrsold = 24 * (e_daysold - daysold);
            var hrsold = Math.floor(e_hrsold);
            var e_minsold = 60 * (e_hrsold - hrsold);
            var minsold = Math.floor(60 * (e_hrsold - hrsold));
            var seconds = Math.floor(60 * (e_minsold - minsold));
            document.getElementById('footer-birthday').innerHTML = " " + daysold + " 天 " + hrsold + " 小时 " + minsold + " 分 " + seconds + " 秒";
        }
    },
    mounted(){
        this.show_date_time()
        var self = this
        bus.$on('showBot',function(msg){
            self.msg = msg
            console.log(msg)
           
        })
    }
}
</script>

<style scoped>
  .info{
      width: 100%;
      margin-top: 100px;
  }

</style>
