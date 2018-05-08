<template>
    <div>
        <span v-for="item,i in row" :key="item.id" class="quadrangle" :style="{width:item.width+ 'px',height:item.height+ 'px'}">
            <row-line :H="item.height" />
        </span>
        <span v-for="item,i in col" :key="item.id" class="quadrangle" :style="{width:item.width+ 'px',height:item.height+ 'px'}">
            <row-line :H="item.height" />
        </span>
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
        // console.log(this.WH);
    },
    methods: {}
};
</script>

<style scoped>
.quadrangle {
    display: inline-block;
    background-color: beige;
}
</style>