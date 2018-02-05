<template>
    <div id='self'>
        <canvas width="1360" height="620" id="canvas" class="cover"></canvas>
        <div class="all" style="position: fixed;">
            <a href="javascript:history.back();"  id="move"><icon name="remove" class="move"></icon></a>
            <img src="../../static/image/avatar.jpg" class="head">
            <h2>Star</h2>
            <p>生活不只是眼前的苟且，还有诗和远方</p>
            <p>Sometimes it is the people who no one imagines anything of who do the things that no one can imagine.</p>
            <div class="right">
                <icon name="diamond"></icon>
                <h4>程序员</h4>
            </div>
            <div class="right">
                <icon name="map-marker"></icon>
                <h4>杭州</h4>
            </div>
            <div class="clearfix"></div>
        </div>

    </div>
</template>
<script>
import bus from '../assets/eventBus'
export default {
  name:'self',
  data(){
      return{

      }
  },
  mounted:function(){
      this.sendMsg
    let canvas = document.getElementById('canvas');
    let ctx = document.getElementById('canvas').getContext('2d');
    let mousePos = [0,0];
    var easingFactor = 5.0;
    let backgroundColor = "#000";
    let edgeColor = "#fff";
    let nodeColor = "pink";
    // 储存星星和边
    let nodes = [], edges = [];

    // let request = window.requestAnimationFrame ||

    // 构建点
    function constructNodes(){
        for (var i = 0; i < 100; i++) {
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
  },
  methods: {
      sendMsg:function(){
            bus.$emit('showBot',false)
      }
  }
 
}
</script>

<style scoped>
.cover {
    width: 100%;
    height: 100%;
    position: fixed;
    top: 0;
    left: 0;
    z-index: -1;
}

.all {
    position: absolute;
    width: 360px;
    height: 400px;
    background: #fff;
    top:0;
    left: 0;
    right: 0;
    bottom: 0;
    margin:auto;
    text-align: center;
    padding: 30px;
    line-height: 1.5rem;
    box-sizing: border-box;
    border-radius: 6px;
    position: relative;
    transition: all .5s ease-in-out;
}

.head {
    width: 100px;
    height: 100px;
    border-radius: 50%;
}

.right {
    width: 50%;
    float: left;
    text-align: center;
    line-height: 30px;
    margin-top: 15px;
}

.right i {
    font-size: 16px;
}

.all p, h2 {
    margin-top: 15px;
}

.move {
    color: #ccc;
    position: absolute;
    top: 15px;
    right: 15px;
}

@media only screen and (max-width: 728px) {

    .all {
        width: 260px;
        padding-bottom: 20px;
        border-radius: 6px;
    }

    .head {
        width: 50px;
        height: 50px;
    }

    .all h2 {
        font-size: 17px;
        margin-top: 5px;
    }

    .all p {
        font-size: 14px;
    }

    .right {
        margin-top: 20px;
        font-size: 13px;
    }

}
</style>

