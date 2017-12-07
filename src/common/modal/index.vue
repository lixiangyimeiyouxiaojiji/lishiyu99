<script>
    /**
     * props:
     *      title: "标题"
     *      model: 是否显示 true/false
     *      size: 大小 (bs-example-modal-lg)
     *      showFooter: 是否显示footer
     *      keyboard: 是否允许esc关闭
     * events:
     *        show: 打开时出发
     *        shown: 打开后触发
     *        hide: 关闭时触发
     *        hidden: 关闭后触发
     */
    export default {
        name: "sinosoft_modal",
        props: {
            title: {
                type: String,
                default: ""
            },
            showTitle: {
                type: Boolean,
                default: false
            },
            model: {
                type: Boolean,
                default: false
            },
            size: {
                type: String,
                default: 'bs-example-modal-lg'
            },
            showFooter: {
                type: Boolean,
                default: false
            },
            keyboard: {
                type: Boolean,
                default: true
            }
        },

        watch: {
            "model": function(){
                if(this.model){
                    this.open();
                }else{
                    this.close();
                }
            },
            "route": function(){
                this.close();
            }
        },
        data: function(){
            return {
                id: "sinosoft_model_"
            }
        },

        created: function(){
            this.id = this.id + Date.now();
        },

        mounted: function(){
            var self = this;
            jQuery("#" + this.id).on("show.bs.modal", function(){ self.$emit("show"); });
            jQuery("#" + this.id).on("shown.bs.modal", function(){ self.$emit("shown"); });
            jQuery("#" + this.id).on("hide.bs.modal", function(){ self.$emit("hide"); });
            jQuery("#" + this.id).on("hidden.bs.modal", function(){ self.$emit("hidden"); });
        },

        methods: {
            open: function(){
                jQuery("#" + this.id).modal(this.keyboard? { keyboard: this.keyboard } : "show");
            },
            close: function(){
                jQuery("#" + this.id).modal('hide');
            },
            modalClose: function(){
                jQuery("#" + this.id).modal('hide');
            }
        },

        event: {
            show: function(){},
            shown: function(){},
            hide: function(){},
            hidden: function(){
                this.model = false;
            }
        }
    }
</script>

<template>
    <div :id="id" :class="['modal', 'fade', size]" role="dialog" >
        <div class="modal-dialog">
            <div class="modal-content">
                <svg class="icon modal-close" viewBox="0 0 1024 1024" version="1.1" xmlns="http://www.w3.org/2000/svg" p-id="1477"
                     xmlns:xlink="http://www.w3.org/1999/xlink" width="30" height="30" @click="modalClose">
                    <path d="M866.458624 919.858176c-13.41952 0-26.843136-5.13536-37.06368-15.36l-709.571584-709.51936c-20.50048-20.50048-20.50048-53.632 0-74.13248 20.499456-20.499456 53.632-20.499456 74.131456 0L903.4752 830.362624c20.499456 20.499456 20.499456 53.636096 0 74.135552C893.25056 914.77504 879.83104 919.858176 866.458624 919.858176L866.458624 919.858176zM866.458624 919.858176M156.88704 919.858176c-13.420544 0-26.840064-5.13536-37.06368-15.36-20.50048-20.499456-20.50048-53.636096 0-74.135552l709.571584-709.516288c20.496384-20.499456 53.632-20.499456 74.13248 0 20.499456 20.50048 20.499456 53.632 0 74.13248l-709.572608 709.51936C183.7312 914.77504 170.310656 919.858176 156.88704 919.858176L156.88704 919.858176zM156.88704 919.858176"
                          p-id="1478" ></path>
                </svg>
                <!--<span class="glyphicon glyphicon-remove modal-close" @click="modalClose"></span>-->
                <div class="modal-body row">
                    <slot></slot>
                </div>
                <div v-show="showFooter" class="modal-footer">
                    <slot name="footer"></slot>
                </div>
            </div>
        </div>
    </div>
</template>

<style scoped>
    .modal-close{
        font-size:30px;
        position: absolute;
        top:-4px;
        right:-76px;
        cursor: pointer;
        fill:#c9c9c9;
    }
    .modal-close:hover{
        fill:#000;
    }
    .modal-dialog{
        width:500px;
        max-height:700px;
        border-radius: 12px;
        position: absolute;
        top:60px;
        left:50%;
        margin-left:-250px;
    }
</style>