<template>
<span>
    <span v-for="item,i in lineArr" :key="i" class="row-line" :style="{width:width + 'px',height:height + 'px'}"></span>
</span>
    
</template>

<script>
export default {
    props: {
        H: Number
    },
    data() {
        return {
            width: "100%",
            height: 2,
            lineArr:[]
        };
    },
    mounted() {
        let linecount = parseInt(this.H / (this.height * 2));
        for (let i = 0; i < linecount; i++) {
            this.lineArr.push(i)
        }
    }
};
</script>

<style scoped lang="less">
.row-line {
    // height: 2px;
    // width: 100%;
    border-bottom: 1px solid #ccc;
    display: block;
    margin-bottom: 1px;
}
</style>