<template>
    <div>

            <router-view></router-view>

    </div>
</template>

<style scoped>
</style>

<script>
    export default{
        data(){
            return{
                logoStr: G.LOGO,
                mainStyle:{width:'',height:''}
            }
        },

        created(){
            this.screenWatch();
        },

        methods:{
//            获取屏幕可见区域宽高
            screenWatch(){
                this.mainStyle.height = (parseInt(document.body.clientHeight)-72)+'px';  //网页可见区域高
                this.mainStyle.width = document.body.clientWidth+'px';  //网页可见区域宽
            }
        },
    }
</script>