<template>
    <div class="list" id="list">
        <canvas width="1360" height="620" id="canvas" class="cover"></canvas>
        <div class="artical" v-for="item in items">
             <p class="title">{{item.title}}</p>
            <p class="mess">
                <span>{{item.time}}</span>
                <span>~已有{{item.has}}围观~{{item.type}}</span>
            </p>
            <div class="txt">{{item.txt}}</div> 
            <router-link to="/artical/7" class="read">阅读全文</router-link>
        </div>

        <p class="more">More</p>
    </div>
</template>
<script>
// import bus from '../assets/eventBus.js';

export default {
    name:'list',
    data(){
        return {
            items:[
                {title:"文章标题",time:"2017/08/12",has:"234",type:"分类",txt:"安装 npm install v-touch 引入 var VueTouch = require(‘vue-touch’)Vue.use(VueTouch) ps:如果你的项目中已经包含了vue和Hammer.js，那也可以用直接引用; 用法example: Tap me!Swipe me!点击：tap左滑：swipeleft双击：doubletap按住：press捏放：pinch旋转：rotate水平：span（向上滑）左滑：swipe（快速滑动） ps：去掉Windows Phone点击时的高亮效果"},
                {title:"文章标题",time:"2017/08/12",has:"234",type:"分类",txt:"安装 npm install v-touch 引入 var VueTouch = require(‘vue-touch’)Vue.use(VueTouch) ps:如果你的项目中已经包含了vue和Hammer.js，那也可以用直接引用; 用法example: Tap me!Swipe me!点击：tap左滑：swipeleft双击：doubletap按住：press捏放：pinch旋转：rotate水平：span（向上滑）左滑：swipe（快速滑动） ps：去掉Windows Phone点击时的高亮效果"},
                {title:"文章标题",time:"2017/08/12",has:"234",type:"分类",txt:"安装 npm install v-touch 引入 var VueTouch = require(‘vue-touch’)Vue.use(VueTouch) ps:如果你的项目中已经包含了vue和Hammer.js，那也可以用直接引用; 用法example: Tap me!Swipe me!点击：tap左滑：swipeleft双击：doubletap按住：press捏放：pinch旋转：rotate水平：span（向上滑）左滑：swipe（快速滑动） ps：去掉Windows Phone点击时的高亮效果"}
            ]

        }
    },
    mounted () {
        let canvas = document.getElementById('canvas');
        canvas.width = document.body.clientWidth;
        canvas.height = document.body.clientHeight;
        let ctx = document.getElementById('canvas').getContext('2d');
        let mousePos = [0,0];
        var easingFactor = 5.0;
        let backgroundColor = "#fff";
        let edgeColor = "#89dfb8";
        let nodeColor = "pink";
        // 储存星星和边
        let nodes = [], edges = [];

        // 构建点
        function constructNodes(){
            for (var i = 0; i < 66; i++) {
                let node = {
                    driven : i == 0, /*这个点的位置不会被粒子系统管理，也不会绘制出来，但是它会与其他点连线，这样就实现了鼠标跟随的效果了。*/
                    x : Math.random()*document.getElementById('canvas').width,
                    y : Math.random()*document.getElementById('canvas').height,
                    vx : Math.random()*1-0.5,
                    vy : Math.random()*1-0.5,
                    radius : Math.random() > 0.9 ? 3 + Math.random*3 : 1 + Math.random()*3 /*让绝大部分点都是小半径的，而极少数的点半径比较大，*/
                };
                nodes.push(node);
            };

            nodes.forEach(function(e){
                nodes.forEach(function(e2){
                    if (e == e2) {
                        return;
                    }

                    let edge = {
                        from : e ,
                        to : e2
                    }

                    addEdg(edge);
                })
            })
        }

        // 过滤重复
        function addEdg(edge){
            let ignore = false ;
            // 过滤
            edges.forEach(function(e){
                if (e.from == edge.form & e.to == edge.to) {
                    ignore = true;
                }
                if (e.from == edge.to & e.to == edge.from) {
                    ignore = true;
                }
            });
            if (!ignore) {
                edges.push(edge)
            }
        }

        
        // 动画
        function step() {
            nodes.forEach(function (e) {
                if (e.driven) {
                    return;
                }
    
                e.x += e.vx;
                e.y += e.vy;
        
                function clamp(min, max, value) {
                    if (value > max) {
                    return max;
                    } else if (value < min) {
                    return min;
                    } else {
                    return value;
                    }
                }
        
                if (e.x <= 0 || e.x >= document.getElementById('canvas').width) {
                    e.vx *= -1;
                    e.x = clamp(0, document.getElementById('canvas').width, e.x)
                }
            
                if (e.y <= 0 || e.y >= document.getElementById('canvas').height) {
                    e.vy *= -1;
                    e.y = clamp(0, document.getElementById('canvas').height, e.y)
                }
            });
    
            adjustNodeDrivenByMouse();
            render();
            window.requestAnimationFrame(step);
        }
        
        // 位置的缓动
        function adjustNodeDrivenByMouse() {
            nodes[0].x += (mousePos[0] - nodes[0].x) / easingFactor;
            nodes[0].y += (mousePos[1] - nodes[0].y) / easingFactor;
        }

        // 勾股定律
        function lengthOfEdge(edge) {
            return Math.sqrt(Math.pow((edge.from.x - edge.to.x), 2) + Math.pow((edge.from.y - edge.to.y), 2));
        }

        function render() {
            ctx.fillStyle = backgroundColor;
            ctx.fillRect(0, 0, document.getElementById('canvas').width, document.getElementById('canvas').height);
        
            edges.forEach(function (e) {
                var l = lengthOfEdge(e);
                var threshold = document.getElementById('canvas').width / 8;
        
                if (l > threshold) {
                    return;
                }
        
                ctx.strokeStyle = edgeColor;
                ctx.lineWidth = (1.0 - l / threshold) * 2.5;
                ctx.globalAlpha = 1.0 - l / threshold;
                ctx.beginPath();
                ctx.moveTo(e.from.x, e.from.y);
                ctx.lineTo(e.to.x, e.to.y);
                ctx.stroke();
            });

            ctx.globalAlpha = 1.0;
        
            nodes.forEach(function (e) {
                if (e.driven) {
                    return;
                }
        
                ctx.fillStyle = nodeColor;
                ctx.beginPath();
                ctx.arc(e.x, e.y, e.radius, 0, 2 * Math.PI);
                ctx.fill();
            });
        }

        window.onmousemove = function (e) {
            mousePos[0] = e.clientX;
            mousePos[1] = e.clientY;
        }

        window.onresize = function () {
            document.getElementById('canvas').width = document.body.clientWidth;
            document.getElementById('canvas').height = document.getElementById('canvas').clientHeight;
        
            if (nodes.length == 0) {
            constructNodes();
            }
        
            render();
        };

        window.onresize();
        // canvas动画API
        window.requestAnimationFrame(step);
    }
}
</script>
<style scoped>
    #canvas{
        position: fixed;
        top: 0;
        left:0;
        z-index: -1;
    }
    .list{
        width: calc(100% - 300px);
        transition: all 1s; 
        position: relative;
        z-index: 0;
       
    }
    .artical{
        width: 90%;
        height: auto;
        margin-top: 20px;
        border-bottom: 1px dashed #ccc;
    }
    .title{
        font-size: 20px;
        font-weight: 300;
        line-height: 40px;
    }
    .txt{
        width: 88%;
        text-align: left;
        line-height: 1.5rem;
        margin-top: 20px;
    }
    .read{
        display: block;
        margin: 30px auto;
        width: 150px;   
        height: 40px;
        line-height: 40px;
        border:1px solid #ccc;
        border-radius: 10px;
        color: #333;
        transition: all .5s;
    }
    .read:hover{
        width: 200px;
        background: rgba(245, 88, 82, 0.5);
        color: #fff;
    }
    .more{
        width: 300px;
        height: 60px;
        margin: 60px auto;
        line-height: 60px;
        border:1px solid;
        border-radius: 10px;
        color: #fff;
        background: rgba(245, 88, 82, 0.5);
        cursor: pointer;
        transition: all .5s;
        font-size: 18px;
        font-weight: bolder;
    }
</style>

