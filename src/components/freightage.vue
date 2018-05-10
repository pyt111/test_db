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
                { width: 400, height: 25, left: 0, top: 200 ,cargo:[{time:10},{time:3}],},
                { width: 400, height: 25, left: 0, top: 530 ,cargo:[{time:1},{time:4},{time:2}],},
                { width: 1100, height: 25, left: 435, top: 150 ,cargo:[{time:6},{time:10},{time:11}],},
                { width: 1100, height: 25, left: 435, top: 370 ,cargo:[{time:8},{time:12}],},
                { width: 1100, height: 25, left: 435, top: 590 ,cargo:[{time:20},{time:25},{time:17}],}
            ],
            colData: [
                { width: 35, height: 590, left: 400, top: 90 ,cargo:[{time:10,dir:'moveTop'},{time:3,dir:'moveBottom'},{time:9,dir:'moveBottom'}],}, //左上col

                { width: 30, height: 60, left: 50, top: 140 ,cargo:[1]},
                { width: 30, height: 60, left: 150, top: 140 ,cargo:[1]},
                { width: 30, height: 60, left: 250, top: 140 ,cargo:[1]},
                { width: 30, height: 60, left: 50, top: 225 ,cargo:[1]},
                { width: 30, height: 60, left: 150, top: 225 ,cargo:[1]},
                { width: 30, height: 60, left: 250, top: 225 ,cargo:[1]},

                { width: 30, height: 60, left: 50, top: 470 ,cargo:[1]},//左下col
                { width: 30, height: 60, left: 150, top: 470 ,cargo:[1]},
                { width: 30, height: 60, left: 250, top: 470 ,cargo:[1]},
                { width: 30, height: 60, left: 50, top: 555 ,cargo:[1]},
                { width: 30, height: 60, left: 150, top: 555 ,cargo:[1]},
                { width: 30, height: 60, left: 250, top: 555 ,cargo:[1]},

                { width: 30, height: 60, left: 750, top: 90 ,cargo:[1]}, //右上col
                { width: 30, height: 60, left: 900, top: 90 ,cargo:[1]},
                { width: 30, height: 60, left: 1050, top: 90 ,cargo:[1]},
                { width: 30, height: 60, left: 1200, top: 90 ,cargo:[1]},
                { width: 30, height: 60, left: 1350, top: 90 ,cargo:[1]},

                { width: 30, height: 60, left: 750, top: 175 ,cargo:[1]}, 
                { width: 30, height: 60, left: 900, top: 175 ,cargo:[1]},
                { width: 30, height: 60, left: 1050, top: 175 ,cargo:[1]},
                { width: 30, height: 60, left: 1200, top: 175 ,cargo:[1]},
                { width: 30, height: 60, left: 1350, top: 175 ,cargo:[1]},

                { width: 30, height: 60, left: 750, top: 310 ,cargo:[1]}, //右中
                { width: 30, height: 60, left: 900, top: 310 ,cargo:[1]},
                { width: 30, height: 60, left: 1050, top: 310 ,cargo:[1]},
                { width: 30, height: 60, left: 1200, top: 310 ,cargo:[1]},
                { width: 30, height: 60, left: 1350, top: 310 ,cargo:[1]},

                { width: 30, height: 60, left: 750, top: 395 ,cargo:[1]},
                { width: 30, height: 60, left: 900, top: 395 ,cargo:[1]},
                { width: 30, height: 60, left: 1050, top: 395 ,cargo:[1]},
                { width: 30, height: 60, left: 1200, top: 395 ,cargo:[1]},
                { width: 30, height: 60, left: 1350, top: 395 ,cargo:[1]},

                { width: 30, height: 60, left: 750, top: 530 ,cargo:[1]}, //右下
                { width: 30, height: 60, left: 900, top: 530 ,cargo:[1]},
                { width: 30, height: 60, left: 1050, top: 530 ,cargo:[1]},
                { width: 30, height: 60, left: 1200, top: 530 ,cargo:[1]},
                { width: 30, height: 60, left: 1350, top: 530 ,cargo:[1]},

                { width: 30, height: 60, left: 750, top: 615 ,cargo:[1]},
                { width: 30, height: 60, left: 900, top: 615 ,cargo:[1]},
                { width: 30, height: 60, left: 1050, top: 615 ,cargo:[1]},
                { width: 30, height: 60, left: 1200, top: 615 ,cargo:[1]},
                { width: 30, height: 60, left: 1350, top: 615 ,cargo:[1]},
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