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
                { width: 100, height: 30},
                { width: 50, height: 30 },
                { width: 200, height: 30 }
            ],
            colData: [
                { width: 30, height: 300},
                { width: 30, height: 300},
                { width: 30, height: 300},
                { width: 30, height: 300},
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
}
</style>