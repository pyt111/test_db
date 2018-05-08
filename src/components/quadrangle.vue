<template>
    <div id="qBox">
        <div id="qBoxC">
             <span v-for="item,i in row" :key="item.id"  class="quadrangle" ref="rows" :style="{width:item.width+ 'px',height:item.height+ 'px'}">
            <row-line :H="item.height" />
            </span>
            <span v-for="item,i in col" :key="item.id" class="quadrangle" ref="cols" :style="{width:item.width+ 'px',height:item.height+ 'px'}">
                <row-line :H="item.height" />
            </span>
        </div>
       
    </div>
</template>

<script>
import rowLine from "./line-module/row_line";
export default {
  components: {
    rowLine
  },
  props: {
    row: Array,
    col: Array
  },
  mounted() {
    // console.log(this.$refs.rows);
    let rows = this.$refs.rows;
    let cols = this.$refs.cols;
    for (let i in rows) {//给每个横块定位
    //   console.log(rows[i]);
      console.log(this.row[i]);
      rows[i].style.left = this.row[i].left + 'px';
      rows[i].style.top = this.row[i].top + 'px';
    //   if(i == 0) {
    //       rows[i].style.left = "0";
    //       rows[i].style.top = "200px";
    //   }else if(i == 1) {
    //       rows[i].style.left = "0";
    //       rows[i].style.top = "450px";
    //   }
    }
    for (let i in cols) {//给每个横块定位
      console.log(cols[i]);
      
      if(i == 0) {
          cols[i].style.left = "300px";
          cols[i].style.top = "100px";
      }else if(i == 1) {
          cols[i].style.left = "0";
          cols[i].style.top = "450px";
      }
    }
  },
  methods: {}
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
    border: 1px solid #cccccc;
  #qBoxC {
   
    position: relative;
    .quadrangle {
      position: absolute;
      display: inline-block;
      background-color: beige;
    }
  }
}
</style>