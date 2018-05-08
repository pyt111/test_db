<template>
    <div class="div-box">
        <quadrangle :row='rwoData' :col="colData" />
    </div>
</template>

<script>
import quadrangle from "./quadrangle";
export default {
  components: {
    quadrangle
  },
  data() {
    return {
      rwoData: [
        { width: 300, height: 25, left: 0, top: 200 },
        { width: 300, height: 25, left: 0, top: 450 },
        { width: 200, height: 25, left: 0, top: 200 }
      ],
      colData: [
        { width: 35, height: 500 },
        { width: 30, height: 300 },
        { width: 30, height: 300 },
        { width: 30, height: 300 }
      ]
    };
  }
};
</script>

<style scoped lang="less">
.div-box {
  width: 100%;
  height: 100%;
  background-color: #1c282b;
  position: relative;
}
</style>