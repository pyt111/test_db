<template>
	<div id="qBox">
		<div id="qBoxC">
			<span v-for="item,i in row" :key="item.id" class="quadrangle" ref="rows" :style="{width:item.width+ 'px',height:item.height + 'px'}">
				
				<transition name="slide-fade">
					<span v-if="show" v-for="its,i in item.cargo" :key="item.id" ref="cargos" class="cargos"></span>
					<!-- <chunk /> -->
				</transition>
				<row-line :H="item.height" />
			</span>
			<!-- <span v-for="items,x in col" :key="items.id" class="qMoudle"> -->
			<span v-for="item,i in col" :key="item.id" class="quadrangle" ref="cols" :style="{width:item.width+ 'px',height:item.height + 'px'}">
				<row-line :H="item.height" />
			</span>
			<!-- </span> -->

		</div>
 <button @click="show = !show">
    Toggle render
  </button>
	</div>
</template>

<script>
import rowLine from "./line-module/row_line";
import chunk from "./chunk-module/chunk";

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
			show:true
		};
    },
    render: function() {},
    mounted() {
        // console.log(this.$refs);
        let rowsd = this.$refs.rows;
        let colsd = this.$refs.cols;
        for (let i in rowsd) {
            //给每个横块定位
            rowsd[i].style.left = this.row[i].left + "px";
			rowsd[i].style.top = this.row[i].top + "px";
			
        }
        for (let i in colsd) {
            //给每个横块定位
            colsd[i].style.left = this.col[i].left + "px";
            colsd[i].style.top = this.col[i].top + "px";
        }
        let cargos = this.$refs.cargos;
        console.log(cargos);
    },
    methods: {}
};
</script>

<style lang="less" scoped>
.slide-fade-enter {
    opacity: 0;
}
.slide-fade-enter-active {
  transition: all 1s ease;
}
.slide-fade-leave {
    opacity: 1;
    
}
.slide-fade-leave-active {
  transition: all 2s ;
  transform: translateX(300px);
  opacity: 1;
}
// .slide-fade-leave-active {
//       transition: all 2s ;
    
// }
 .slide-fade-leave-to{
/* .slide-fade-leave-active for below version 2.1.8 */ 
//   transform: translateX(300px);
//   opacity: 0;
}
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
            .cargos {
                width: 30px;
                height: 20px;
                position: absolute;
                background-color: chocolate;
                top: 2px;
                bottom: 0;
                left: 0;
                right: 0;
            }
        }
    }
}
</style>