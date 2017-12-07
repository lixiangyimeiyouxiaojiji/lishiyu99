<script>
    export default {
        name: "sinosoft_page",
        props: {
            total: {
                type: Number,
                default: 0
            },
            value: {
                type: Number,
                default: 1
            },
            limit: {
                type: Number,
                default: 10
            }
        },

        watch: {
            "value": function(newV, oldV){
                if(this.pageCount){
                    if(newV < 1 || newV > this.pageCount){
                        this.goPage(oldV);
                    }else{
                        if(this.value <= 1){
                            this.preDisabled = true;
                            this.nextDisabled = false;
                        }else if(this.value >= this.pageCount){
                            this.preDisabled = false;
                            this.nextDisabled = true;
                        }else {
                            this.preDisabled = false;
                            this.nextDisabled = false;
                        }
                    }
                }
                this.initButton();
            },
            "total": function(){
                if(!this.total || !this.value || !this.limit){
                    this.isShow = false;
                }else{
                    this.isShow = true;
                }
                this.initButton();
            }
        },
        data: function(){
            return {
                id: "sinosoft_page_",
                pageCount: 0,
                isShow: true,
                preDisabled: true,
                nextDisabled: false,
                isShowpre:false,
                isShowNex:false
            }
        },

        created: function(){
            this.initButton();
            this.id = this.id + Date.now();
            if(!this.total || !this.value || !this.limit){
                this.isShow = false;
                return;
            }

        },
        computed: {
            pageCount() {
                return Math.ceil(this.total / this.limit);
            },
            pageView: {
                get: function(){
                    var array = [];

                    var start = 1;
                    var end = this.pageCount;
                    var p = 2;
                    var current = this.value;

                    if(current - p > 0){
                        start = current - p;
                    }

                    if(current + p <= this.pageCount){
                        end = current + p;
                    }

                    var sc = current - start;
                    var ec = this.pageCount - end;

                    if(sc < p && p < ec){
                        end += (p - (current - 1));
                    }

                    sc = current - 1;
                    ec = this.pageCount - current;

                    if(ec < p && p < sc){
                        start -= (p - (this.pageCount - current));
                    }

                    for(var i = start;i<=end; i++){
                        array.push(i);
                    }
                    return array;
                }
            }
        },

        methods: {
            initButton () {
                if(this.value===this.pageCount){
                    this.isShowpre = true;
                    this.isShowNex = false;
                }else if(this.value===1){
                    this.isShowpre = false;
                    this.isShowNex = true;
                }else{
                    this.isShowpre = true;
                    this.isShowNex = true;
                }
                if(this.pageCount===1){
                    this.isShowpre = false;
                    this.isShowNex = false;
                }
            },
            /** 上一页 **/
            prePage: function(){
                var currentPage = this.value;
                if(currentPage > 1){
                    this.goPage((currentPage - 1));
                }
            },
            /** 下一页 **/
            nextPage: function(){
                var currentPage = this.value;
                if(currentPage < this.pageCount){
                    this.goPage((currentPage + 1));
                }
            },
            /** 跳转页面 **/
            goPage: function(page){

                    this.$emit('input', page);

            }
        }
    }
</script>
<style>
    .pagination {
        padding: 66px 0px 25px 36px;
    }

    .pagination li a{
        cursor: pointer;
        margin: 0 2px;
        min-width: 30px;
        height: 30px;
        line-height:18px;
        text-align: center;
        color:#000;
    }
</style>

<template>
    <nav align="center" v-show="isShow" class="page" :id="id" style="float: left;">
        <ul class="pagination">
            <li><a @click="prePage" :disabled="preDisabled" v-show="isShowpre">《</a></li>

            <li v-if="pageCount > 5 && value>=4" @click="goPage(1)">
                <a>1</a>
            </li>
            <li v-if="pageCount > 5 && value>=5">
                <a style="cursor: not-allowed">…</a>
            </li>

            <li :class="{active: item==value}" v-for="item in pageView" @click="goPage(item)">
                <a>{{item}}</a>
            </li>
            <li v-if="pageCount > 5 && value<pageCount-3" >
                <a style="cursor: not-allowed">…</a>
            </li>
            <li v-if="pageCount > 5 && value<pageCount-2" @click="goPage(pageCount)">
                <a>{{pageCount}}</a>
            </li>
            <li><a @click="nextPage"  :plain="true" :disabled="nextDisabled" v-show="isShowNex">》</a></li>
        </ul>
    </nav>
</template>