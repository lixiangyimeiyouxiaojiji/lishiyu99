<script>
    export default {
        name: "sinosoft_file_uploader",
        props: {
            buttonLabel: {
                type: String,
                default: "点击选择图片"
            },
            action: {
                type: String,
                default: ""
            },
            extensions: {
                type: String,
                default: 'gif,jpg,jpeg,bmp,png'
            },
            mimeTypes: {
                type: String,
                default: 'image/jpg,image/jpeg,image/png,image/gif,image/bmp'  //修改image/*以解决chrome上反映过慢问题
            }
        },

        data: function(){
            return {
                id: "sinosoft_uploader_",
                err_code:''
            }
        },

        created: function(){
            this.id = this.id + Date.now();
        },

        mounted: function(){
            this.createdUploader();
        },
        methods: {
            createdUploader: function(){
                var self = this;

                var config = {
                    pick: {
                        id: '#' + self.id,
                        label: self.buttonLabel
                    },
                    swf: '/node_modules/webuploader/dist/Uploader.swf',
                    compress: false,
                    auto: true,
                    server: self.action,
                    formData: { "name": name, "desc": '哦哦'},
                    accept: {
                        extensions: self.extensions,
                        mimeTypes: self.mimeTypes
                    },
                    threads:1,    //文件一次上传允许的最大并发数
                    multiple:false,  //是否开起同时选择多个文件能力
                    fileNumLimit:1,  //验证文件总数量超出则不允许上传
                    fileSingleSizeLimit: 10496000 //不允许超过10M
                };
                var uploader = WebUploader.create(config);
                uploader.on( 'fileQueued', function( file ) {  // webuploader事件.当选择文件后，文件被加载到文件队列中，触发该事件。等效于 uploader.onFileueued = function(file){...} ，类似js的事件定义。
                });
                uploader.on('uploadStart', function (file) {
                  //  uploader.options.formData={'UID':'001','UserName':'张三'};
                });
                uploader.on("uploadSuccess", function(file, res){
                    console.log(res)
                    console.log(res.results.length)
                    self.$emit("success", JSON.parse(res._raw));
                });
                uploader.on('uploadBeforeSend', function (obj, data, headers) {
                    //data.formData= { "name": 'naem', "desc": 'dec'};
                });
                uploader.onError = function( code ) {
                   // console.log(code)
                    this.err_code = code;
                    self.$emit("error", code);
                };
            }
        },
        events: {
            success: function(){
            },
            error: function(XMLHttpRequest, textStatus, errorThrown){
                console.log(XMLHttpRequest)
            }
        }

    }
</script>

<template>
    <div :id="id"></div>
</template>

<style>
</style>