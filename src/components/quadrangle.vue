<template>
    <div id="qBox">
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