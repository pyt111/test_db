<template>
    <div id="qBox" ref="qBox">
        <div id="qBoxC">
            <span v-for="item,i in row" :key="item.id" class="quadrangle" ref="rows" :style="{width:item.width+ 'px',height:item.height + 'px'}">

                <!-- <transition v-for="its,i in item.cargo" :key="item.id" name="fade" v-on:before-enter="beforeEnter" v-on:after-leave="afterLeave" v-on:leave-cancelled="leaveCancelled" v-on:enter-cancelled="enterCancelled" v-on:after-enter="afterEnter"> -->
                <span v-if="show" v-for="its,i in item.cargo" ref="cargos" class="cargos" :style="{animation: 'mymove '+its.time+'s'+' infinite'}"></span>
                <!-- <chunk /> -->
                <!-- </transition> -->
                <row-line :H="item.height" ref="csc" />
            </span>
            <!-- <span v-for="items,x in col" :key="items.id" class="qMoudle"> -->
            <span v-for="item,i in col" :key="item.id" class="quadrangle" ref="cols" :style="{width:item.width+ 'px',height:item.height + 'px'}">
                <span v-if="show" v-for="its,i in item.cargo" ref="cargos" class="cargos2" :style="{animation:  its.dir+ ' ' +its.time+'s'+' infinite',}"></span>
                <row-line :H="item.height" />
            </span>
            <!-- </span> -->

        </div>
        <button @click="ishow">
            {{show}}
        </button>
    </div>
</template>

<script>
import rowLine from "./line-module/row_line";
import chunk from "./chunk-module/chunk";
import "static/css/main.css";
// import chunks from "static/js/aa.js";
export default {
  components: {
    rowLine,
    chunk
  },
  props: {
    row: Array,
    col: Array
  },
  data() {
    return {
      show: true,
      calssA: "cargos",
      cssRule: "",
      mymoveTop: "moveTop",
      mymoveBottom: "moveBottom"
    };
  },
  computed: {
    direction: () => {}
  },
  render: function() {},
  mounted() {
    let rowsd = this.$refs.rows;
    let colsd = this.$refs.cols;
    // let cargos = this.$refs.cargos;
    for (let i in rowsd) {
      //给每个横块定位
      rowsd[i].style.left = this.row[i].left + "px";
      rowsd[i].style.top = this.row[i].top + "px";
    }
    for (let i in colsd) {
      //给每个竖块定位
      colsd[i].style.left = this.col[i].left + "px";
      colsd[i].style.top = this.col[i].top + "px";
    }

    //鼠标拖动

    let qBox = this.$refs.qBox; //获取父div距离浏览器左方与上方的距离,因offsetLeft与offsetTop是获取的是父的距离,所以要将外层的box与浏览器的距离获取到，为了计算拖动对象与浏览器之间的距离，如果需要在限定范围内拖动 可将boxLeft与boxTop设置为零
    let boxLeft = qBox.offsetLeft;
    let boxTop = qBox.offsetTop;

    let cols = this.$refs.cols;

    // let stopeCols = [];
    // console.log(cols);
    let disX = 0;
    let disY = 0;
    let oLeft = 0;
    let oTop = 0;
    for (let i in cols) {
      cols[i].onmousedown = e => {
        let stopeCols = cols.slice(0); //将对象数组克隆给一个新的数组，为了获取他们的位置
        // let stopeCols = cols;
        let oe = e || event;
        // console.log(oe.clientX, cols[i].offsetLeft);
        //鼠标的X坐标减去DIV的左边距就等于disX, 这个disXs是用于确定鼠标移动DIV时鼠标点和DIV之间的左面距离，这个距离是不会变的，通过这个新鼠标的X坐标减去disX就是DIV的Left
        disX = oe.clientX - cols[i].offsetLeft;
        //鼠标的Y坐标减去DIV的左边距就等于disY, 这个disY是用于确定鼠标移动DIV时鼠标点和DIV之间的上面距离，这个距离是不会变的，通过这个新鼠标的Y坐标减去disY就是DIV的Top
        disY = oe.clientY - cols[i].offsetTop;

        // if(cols[i]) {
        stopeCols.splice(i, 1); //获取对象数组中除了被点击对象外所有的对象
        // console.log(stopeCols);
        cols[i].classList.remove("backg-yellow");
        cols[i].classList.add("activeZ"); //将被点击对象层级设为最高
        for (let x in stopeCols) {
          stopeCols[x].classList.remove("activeZ"); //删除
        }

        // }
        // console.log(stopeList);
        document.onmousemove = e => {
          let oe = e || event;
          oLeft = oe.clientX - disX; //新鼠标X坐标减去disX,也就是鼠标移动DIV后的Left
          oTop = oe.clientY - disY; //新鼠标Y坐标减去disY,也就是鼠标移动DIV后的Top
          //是否超出限定范围检测
          if (oLeft < -boxLeft) {
            //当DIV的Left小于0，也就是移出左边
            oLeft = -boxLeft; //就把DIV的Left设置为0，就不能移出左边
          } else if (
            oLeft + boxLeft >
            document.documentElement.clientWidth - cols[i].offsetWidth
          ) {
            //屏幕宽度减去DIV的宽度就得出了DIV到达最右边的宽度，如果Left大于这个像素
            oLeft =
              document.documentElement.clientWidth -
              cols[i].offsetWidth -
              boxLeft; //就把Left设置为这个像素
          }
          if (oTop < -boxTop) {
            //当DIV的To小于0，也就是移出左边
            oTop = -boxTop; //就把DIV的Top设置为-boxTop，就不能移出浏览器上边
          } else if (
            oTop + boxTop >
            document.documentElement.clientHeight - cols[i].offsetHeight
          ) {
            //屏幕高度减去DIV的高度就得出了DIV到达最下面边的像素，如果Top大于这个像素
            oTop =
              document.documentElement.clientHeight -
              cols[i].offsetHeight -
              boxTop; //就把Top设置为这个像素
          }

          cols[i].style.left = oLeft + "px"; //DIV的Left设置为新鼠标X坐标减去disX的值
          cols[i].style.top = oTop + "px"; //DIV的Top设置为新鼠标Y坐标减去disY的值
          //碰撞检测
          let colsLeft = cols[i].offsetLeft, //被点击对象的位置
            colseWidth = cols[i].offsetWidth,
            colsTop = cols[i].offsetTop,
            colsHeigt = cols[i].offsetHeight;
          for (let x in stopeCols) {
            let stopeColsLeft = stopeCols[x].offsetLeft, //被碰撞对象的位置
              stopeColsWidth = stopeCols[x].offsetWidth,
              stopeColsTop = stopeCols[x].offsetTop,
              stopeColsHeight = stopeCols[x].offsetHeight;
            if (
              colsLeft + colseWidth >= stopeColsLeft &&
              colsLeft <= stopeColsLeft + stopeColsWidth &&
              colsTop + colsHeigt >= stopeColsTop &&
              colsTop <= stopeColsTop + stopeColsHeight
            ) {
              //碰撞css位置赋值
              if (
                //判断被电击对象右边是否小于被碰撞对象左边+2/5的被点击对象,如成立则将被点击对象left重置为被撞击对象的left,实现碰撞后无法移动效果,以下判断同理,不做解释
                colsLeft + colseWidth < stopeColsLeft + colseWidth * 2 / 5 &&
                colsTop + colsHeigt > stopeColsTop &&
                colsTop < stopeColsTop + stopeColsHeight
              ) {
                //判断被点击对象的右边是否小于被撞击对象的右边
                let lw = stopeColsWidth - colseWidth; //防止两个对象宽度不一致导致的定位差距
                cols[i].style.left = stopeColsLeft - stopeColsWidth + lw + "px";
              } else if (
                colsLeft >
                  stopeColsLeft + stopeColsWidth - colseWidth * 2 / 5 &&
                colsTop + colsHeigt > stopeColsTop &&
                colsTop < stopeColsTop + stopeColsHeight
              ) {
                //判断被点击对象的左边是否大于被撞击对象的左边(可不做判断)
                cols[i].style.left = stopeColsLeft + stopeColsWidth + "px";
              } else if (
                colsTop + colsHeigt <
                stopeColsTop + colsHeigt * 2 / 5
              ) {
                cols[i].style.top = stopeColsTop - colsHeigt + "px";
              } else if (
                colsTop >
                stopeColsTop + stopeColsHeight - colsHeigt * 2 / 5
              ) {
                cols[i].style.top = stopeColsTop + stopeColsHeight + "px";
              }
              stopeCols[x].classList.add("backg-yellow");
              // cols[i].style.left = stopeCols[x].offsetLeft +stopeCols[x].offsetWidth +1 + "px";
              // cols[i].style.top = stopeCols[x].offsetTop + "px";
              // document.onmousemove = null; //把鼠标移动清楚
              // document.onmouseup = null; //把鼠标松开清楚
            } else {
              stopeCols[x].classList.remove("backg-yellow");
              // cols[i].classList.remove('activeZ');
            }
          }
        };
        document.onmouseup = () => {
          document.onmousemove = null; //把鼠标移动清楚
          document.onmouseup = null; //把鼠标松开清楚
        };
        return false; //阻止FireFox的默认事件 bug
      };
    }
  },
  methods: {
    ishow() {
      this.show = !this.show;
    },
    beforeEnter: function(el) {
      console.log(el.style);
      el.style.opacity = 0;
    },
    enter: function(el, done) {
      done();
    },
    afterEnter: function(el) {
      this.show = false;
    },
    enterCancelled: function(el) {},
    leave: function(el, done) {
      done();
    },
    afterLeave: function(el) {},
    leaveCancelled: function(el) {}
  }
};
</script>
<style lang="less" scoped>
// @import '../../static/less/prefix.less';

#qBox {
  position: absolute;
  width: 80%;
  height: 80%;
  top: 0;
  bottom: 0;
  left: 0;
  right: 0;
  margin: auto;
  //   border: 1px solid #cccccc;
  #qBoxC {
    position: relative;
    .quadrangle {
      overflow: hidden;
      position: absolute;
      display: inline-block;
      background-color: beige;
      .cargos {
        width: 30px;
        height: 20px;
        position: absolute;
        background-color: chocolate;
        top: 2px;
        bottom: 0;
        left: 0;
        right: 0;
        // transition-duration: 5s;
        // animation: mymove 5s infinite;
        // -webkit-animation: mymove 5s infinite;
      }
      .cargos2 {
        width: 20px;
        height: 30px;
        background-color: chocolate;
        position: absolute;
        top: 0;
        bottom: 0;
        left: 0;
        right: 0;
        margin: auto;
        // transition-duration: 5s;
        // animation: mymove 5s infinite;
        // -webkit-animation: mymove 5s infinite;
      }
    }
  }
}
</style>