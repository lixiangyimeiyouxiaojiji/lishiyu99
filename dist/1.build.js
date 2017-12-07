webpackJsonp([1],[
/* 0 */,
/* 1 */,
/* 2 */,
/* 3 */,
/* 4 */,
/* 5 */,
/* 6 */,
/* 7 */,
/* 8 */,
/* 9 */,
/* 10 */
/***/ function(module, exports, __webpack_require__) {

	var __vue_exports__, __vue_options__
	var __vue_styles__ = {}
	
	/* styles */
	__webpack_require__(11)
	
	/* script */
	__vue_exports__ = __webpack_require__(20)
	
	/* template */
	var __vue_template__ = __webpack_require__(58)
	__vue_options__ = __vue_exports__ = __vue_exports__ || {}
	if (
	  typeof __vue_exports__.default === "object" ||
	  typeof __vue_exports__.default === "function"
	) {
	if (Object.keys(__vue_exports__).some(function (key) { return key !== "default" && key !== "__esModule" })) {console.error("named exports are not supported in *.vue files.")}
	__vue_options__ = __vue_exports__ = __vue_exports__.default
	}
	if (typeof __vue_options__ === "function") {
	  __vue_options__ = __vue_options__.options
	}
	__vue_options__.__file = "/Users/sowaylaoli/Desktop/lishiyuBlog/src/project/views/home/textSearch/main.vue"
	__vue_options__.render = __vue_template__.render
	__vue_options__.staticRenderFns = __vue_template__.staticRenderFns
	__vue_options__._scopeId = "data-v-a2361cd6"
	
	/* hot reload */
	if (false) {(function () {
	  var hotAPI = require("vue-hot-reload-api")
	  hotAPI.install(require("vue"), false)
	  if (!hotAPI.compatible) return
	  module.hot.accept()
	  if (!module.hot.data) {
	    hotAPI.createRecord("data-v-a2361cd6", __vue_options__)
	  } else {
	    hotAPI.reload("data-v-a2361cd6", __vue_options__)
	  }
	})()}
	if (__vue_options__.functional) {console.error("[vue-loader] main.vue: functional components are not supported and should be defined in plain js files using render functions.")}
	
	module.exports = __vue_exports__


/***/ },
/* 11 */
/***/ function(module, exports, __webpack_require__) {

	// style-loader: Adds some css to the DOM by adding a <style> tag
	
	// load the styles
	var content = __webpack_require__(12);
	if(typeof content === 'string') content = [[module.id, content, '']];
	// add the styles to the DOM
	var update = __webpack_require__(19)(content, {});
	if(content.locals) module.exports = content.locals;
	// Hot Module Replacement
	if(false) {
		// When the styles change, update the <style> tags
		if(!content.locals) {
			module.hot.accept("!!../../../../../node_modules/css-loader/index.js?sourceMap!../../../../../node_modules/vue-loader/lib/style-rewriter.js?id=data-v-a2361cd6&scoped=true!./main.css", function() {
				var newContent = require("!!../../../../../node_modules/css-loader/index.js?sourceMap!../../../../../node_modules/vue-loader/lib/style-rewriter.js?id=data-v-a2361cd6&scoped=true!./main.css");
				if(typeof newContent === 'string') newContent = [[module.id, newContent, '']];
				update(newContent);
			});
		}
		// When the module is disposed, remove the <style> tags
		module.hot.dispose(function() { update(); });
	}

/***/ },
/* 12 */
/***/ function(module, exports, __webpack_require__) {

	exports = module.exports = __webpack_require__(13)();
	// imports
	
	
	// module
	exports.push([module.id, "\n/*-----------------------------------------1) General--------------------------------------------------*/\n@font-face {\n    font-family: 'Glyphter';\n    src: url(" + __webpack_require__(14) + ");\n    font-weight: normal;\n    font-style: normal;\n}\n*[data-v-a2361cd6],\n  *[data-v-a2361cd6]:after,\n  *[data-v-a2361cd6]:before {\n    -ms-box-sizing: border-box;\n    box-sizing: border-box;\n}\nbody[data-v-a2361cd6],\n  html[data-v-a2361cd6] {\n    left: 0;\n    top: 0;\n    margin: 0px;\n    padding: 0px;\n    overflow-x: hidden;\n    font-family: 'Roboto', sans-serif;\n    height: 100%;\n    width: 100%;\n}\nbody[data-v-a2361cd6] {\n    color: #2f2f2f;\n    font-size: 16px;\n    line-height: 1.7;\n    background-color: #fff;\n}\na[data-v-a2361cd6] {\n    color: #2f2f2f;\n    text-decoration: none;\n    transition: ease .6s;\n    -webkit-transition: ease .6s;\n    -moz-transition: ease .6s;\n    -o-transition: ease .6s;\n    -ms-transition: ease .6s;\n}\na[data-v-a2361cd6]:hover {\n    text-decoration: none;\n    color: #818181;\n}\na[data-v-a2361cd6]:focus {\n    outline: none;\n    color: #999999;\n    text-decoration: none;\n}\niframe[data-v-a2361cd6] {\n    border: none;\n    width: 100%;\n}\nimg[data-v-a2361cd6] { max-width: 100%;\n}\n*[data-v-a2361cd6]:focus {\n    outline: none;\n}\n.copyrights[data-v-a2361cd6]{\n      text-indent:-9999px;\n      height:0;\n      line-height:0;\n      font-size:0;\n      overflow:hidden;\n}\n  /*----------------------------------------- 2) Preloader --------------------------------------------------*/\n#preloader[data-v-a2361cd6] {\n    position: fixed;\n    top: 0;\n    left: 0;\n    right: 0;\n    bottom: 0;\n    background-color: #fff;\n    z-index: 999999;\n}\n#status[data-v-a2361cd6] {\n    width: 200px;\n    height: 200px;\n    position: absolute;\n    left: 50%;\n    top: 50%;\n    background-image: url(" + __webpack_require__(15) + ");\n    background-repeat: no-repeat;\n    background-position: center center;\n    text-align: center;\n    margin: -40px 0 0 -100px;\n}\n#status img[data-v-a2361cd6] {\n    text-align: center;\n    margin-top: -80px;\n}\n  \n  /*----------------------------------------- 3) Helper --------------------------------------------------*/\n.no-pad[data-v-a2361cd6] {padding: 0 !important; margin: 0 !important;\n}\n.pad-80[data-v-a2361cd6] {padding-top: 80px;\n}\n.mar-t-50[data-v-a2361cd6]{margin-top: 50px !important;\n}\n.mar-tm-10[data-v-a2361cd6]{ margin-top: -10px;\n}\n.white-col[data-v-a2361cd6]{\n    background: #ffffff;\n    padding: none;\n}\n  \n  /*---- span -----*/\n.title-small span[data-v-a2361cd6] { position: relative;\n}\n.title-small span[data-v-a2361cd6]:after {\n    content: \"\";\n    position: absolute;\n    bottom: -20px;\n    height: 3px;\n    background: #DEDEDE;\n    width: 28px;\n    left: 0;\n}\n.title-small-center span[data-v-a2361cd6] {position: relative;\n}\n.title-small-center span[data-v-a2361cd6]:after {\n    content: \"\";\n    display: block;\n    margin: 0 auto;\n    margin-top: 20px;\n    height: 3px;\n    background: #DEDEDE;\n    width: 28px;\n    left: 0;\n}\n  /*----- background ------*/\n.grey-bg[data-v-a2361cd6] {\n    background: #f6f6f6;\n    padding: 120px 0;\n    display: block;\n}\n.white-bg[data-v-a2361cd6] {\n    background: #ffffff;\n    padding: 120px 0;\n    display: block;\n}\n  /*-------- content --------*/\n.content-detail[data-v-a2361cd6] {\n    font-weight: 400;\n    margin-top: 70px;\n    line-height: 30px;\n    font-size: 14px;\n    letter-spacing: 0.4px;\n}\n.content-details[data-v-a2361cd6] {\n    font-weight: 400;\n    margin-top: 40px;\n    line-height: 30px;\n    font-size: 14px;\n}\n.pad-bottom[data-v-a2361cd6] {\n    padding-bottom: 80px;\n}\n.text-detail[data-v-a2361cd6] {\n    margin-top: 30px;\n    color: #5f5f5f;\n}\n.listing-item[data-v-a2361cd6]{\n    list-style: none;\n    display: inline-block;\n    width: 100%;\n    padding: 0;\n    margin: 0;\n}\n  \n  /*----------------------------------------- 4) Header --------------------------------------------------*/\n.header[data-v-a2361cd6] {\n    width: 100%;\n    z-index: 9999;\n}\n.for-sticky[data-v-a2361cd6] {\n    position: fixed;\n    z-index: -1;\n    bottom: 0;\n    width: 100%;\n    height: 50px;\n    opacity: 0.8;\n    z-index: 1;\n    top: 0;\n    left: 0;\n    border-bottom: 1px solid #f1f1f1;\n    display: block;\n    padding: 0px 15px 5px 15px;\n    background: #ffffff;\n    transition: all 0.3s;\n}\n.logo-nav[data-v-a2361cd6] {\n    padding: 6px 0 10px 0;\n    transition: all 0.3s;\n    width: 45px;\n    display: block;\n}\n.opacity-nav[data-v-a2361cd6] {\n    opacity: 0.8;\n    z-index: 2;\n}\n  /*----------- panel ----------*/\n.content-wrap[data-v-a2361cd6] {\n    -webkit-overflow-scrolling: touch;\n    height: 100%;\n    width: 100%;\n}\n.content[data-v-a2361cd6] {\n    position: absolute;\n    width: 100%;\n    height: 100%;\n}\n.content[data-v-a2361cd6]::before {\n    position: fixed;\n    top: 0;\n    left: 0;\n    z-index: 10;\n    width: 100%;\n    height: 100%;\n    background: rgba(0, 0, 0, 0.3);\n    content: '';\n    opacity: 0;\n    transform: translate3d(100%, 0, 0);\n    transition: opacity 0.4s, transform 0s 0.4s;\n    transition-timing-function: cubic-bezier(0.7, 0, 0.3, 1);\n}\n  /* Menu Button */\n.menu-button[data-v-a2361cd6] {\n    width: 34px;\n    height: 45px;\n    position: fixed;\n    right: 0;\n    margin-top: 13px;\n    margin-right: 35px;\n    z-index: 1000;\n    padding: 0;\n    cursor: pointer;\n    background: transparent;\n    border: none;\n}\n.menu-button span[data-v-a2361cd6] {\n    display: block;\n    position: absolute;\n    height: 1px;\n    width: 100%;\n    background: #2f2f2f;\n    border-radius: 9px;\n    opacity: 1;\n    left: 0;\n}\n.menu-button span[data-v-a2361cd6]:nth-child(1) {top: 0px;\n}\n.menu-button span[data-v-a2361cd6]:nth-child(2) {top: 9px;\n}\n.menu-button span[data-v-a2361cd6]:nth-child(3) {top: 18px;\n}\n.menu-button[data-v-a2361cd6]:hover {opacity: 0.6;\n}\n  /* Close Button */\n.close-button[data-v-a2361cd6] {\n    width: 1em;\n    height: 1em;\n    position: absolute;\n    right: 1em;\n    top: 1em;\n    overflow: hidden;\n    text-indent: 1em;\n    font-size: 0.75em;\n    border: none;\n    background: transparent;\n    color: transparent;\n}\n.close-button[data-v-a2361cd6]::before,\n  .close-button[data-v-a2361cd6]::after {\n    content: '';\n    position: absolute;\n    width: 3px;\n    height: 100%;\n    top: 0;\n    left: 50%;\n    background: #bdc3c7;\n}\n.close-button[data-v-a2361cd6]::before {\n    transform: rotate(45deg);\n}\n.close-button[data-v-a2361cd6]::after {\n    transform: rotate(-45deg);\n}\n  /* Menu */\n.menu-wrap[data-v-a2361cd6] {\n    position: fixed;\n    z-index: 1001;\n    width: 300px;\n    height: 100%;\n    right: 0;\n    float: right;\n    background: #2f2f2f;\n    padding: 2.5em 1.5em 0;\n    transform: translate3d(300px, 0, 0);\n    transition: transform 0.4s;\n    transition-timing-function: cubic-bezier(0.7, 0, 0.3, 1);\n}\n.menu[data-v-a2361cd6],\n  .menu-list[data-v-a2361cd6] {\n    height: 100%;     \n    overflow-x: auto;\n}\n.menu-list[data-v-a2361cd6] {\n    transform: translate3d(0, 100%, 0);\n}\n.menu-list a[data-v-a2361cd6] {\n    display: block;\n    padding: 1.5em 0;\n    transform: translate3d(0, 500px, 0);\n    color: #a5a5a5;\n    position: relative;\n}\n.menu-list a[data-v-a2361cd6]:hover, .menu-list a:active span[data-v-a2361cd6] {color: #ffffff;\n}\n.menu-list[data-v-a2361cd6],\n  .menu-list a[data-v-a2361cd6] {\n    transition: transform 0s 0.4s;\n    transition-timing-function: cubic-bezier(0.7, 0, 0.3, 1);\n}\n.menu a[data-v-a2361cd6]:nth-child(2) {\n    transform: translate3d(0, 1000px, 0);\n}\n.menu-list a[data-v-a2361cd6]:nth-child(3) {\n    transform: translate3d(0, 1500px, 0);\n}\n.menu-list a[data-v-a2361cd6]:nth-child(4) {\n    transform: translate3d(0, 2000px, 0);\n}\n.menu-list a[data-v-a2361cd6]:nth-child(5) {\n    transform: translate3d(0, 2500px, 0);\n}\n.menu-list a[data-v-a2361cd6]:nth-child(6) {\n    transform: translate3d(0, 3000px, 0);\n}\n.menu-list a span[data-v-a2361cd6]:nth-last-child(1){\n    margin-bottom: 100px;\n}\n.menu-list a span[data-v-a2361cd6] {\n    margin-left: 10px;\n    font-weight: 400;\n    font-size: 12px;\n    letter-spacing: 5px;\n    text-transform: uppercase;\n    z-index: 2;\n    position: absolute;\n    margin-bottom: 20px;\n    padding: 10px;\n}\n.menu-list a span[data-v-a2361cd6]:before{\n    content: '';\n    display: block;\n    width: 0;\n    height: 2px;\n    background: #ffffff;\n    transition: width .3s ease;\n    position: absolute;\n    top: 50%;\n    left: 0;\n    transform: translate(0,-50%);\n    z-index: -1;\n}\n.menu-list a.active span[data-v-a2361cd6]{\n    color: #ffffff !important;\n}\n.menu-list a.active span[data-v-a2361cd6]:before{\n    width: 100%;\n}\n  \n  /* Shown menu */\n.show-menu .menu-wrap[data-v-a2361cd6] {\n    transform: translate3d(0, 0, 0);\n    transition: transform 0.8s;\n    transition-timing-function: cubic-bezier(0.7, 0, 0.3, 1);\n}\n.show-menu .menu-list[data-v-a2361cd6],\n  .show-menu .menu-list a[data-v-a2361cd6] {\n    transform: translate3d(0, 0, 0);\n    transition: transform 0.8s;\n    transition-timing-function: cubic-bezier(0.7, 0, 0.3, 1);\n}\n.show-menu .menu-list a[data-v-a2361cd6] {\n    transition-duration: 0.9s;\n}\n.show-menu .content[data-v-a2361cd6]::before {\n    opacity: 1;\n    transition: opacity 0.8s;\n    transition-timing-function: cubic-bezier(0.7, 0, 0.3, 1);\n    transform: translate3d(0, 0, 0);\n}\n  \n  /*----------------------------------------- 5) Typography --------------------------------------------------*/\nh1[data-v-a2361cd6],\n  h2[data-v-a2361cd6],\n  h3[data-v-a2361cd6],\n  h4[data-v-a2361cd6],\n  h5[data-v-a2361cd6] {\n    letter-spacing: 0.8px;\n    font-family: 'Roboto Slab', serif;\n}\np[data-v-a2361cd6] {\n    letter-spacing: 0.5px;\n    font-size: 13px;\n    line-height: 34px;\n    font-weight: 300;\n}\n#home h1[data-v-a2361cd6] {\n    line-height: 40px;\n    letter-spacing: 0.6px;\n}\n#home .typed[data-v-a2361cd6] {\n    font-weight: 400;\n    font-size: 16px;\n    line-height: 26px;\n    letter-spacing: 1.5px;\n    margin: 0 auto;\n    opacity: 0.6;\n}\n.year[data-v-a2361cd6] {\n    font-size: 26px;\n    font-weight: 500;\n    margin-bottom: 10px;\n    font-family: 'Roboto', sans-serif;\n}\n.job[data-v-a2361cd6] {\n    font-size: 14px;\n    font-weight: 500;\n    line-height: 14px;\n    letter-spacing: 0.4px;\n    text-transform: uppercase;\n    color: #cccccc;\n}\n.company[data-v-a2361cd6] {\n    font-size: 12px;\n    line-height: 14px;\n    border: 1px solid #ececec;\n    color: #cccccc;\n    padding:8px 10px;\n    border-radius: 6px;\n    display: inline-block;\n    margin-top: 5px;\n    font-weight: 400;\n}\n  \n  /*----------------------------------------- 6) Hero --------------------------------------------------*/\n#home[data-v-a2361cd6] {\n    background: url(" + __webpack_require__(16) + ");\n    background-size: cover;\n    min-width: 100%;\n    min-height: 100%;\n    height: 100%;\n    width: 100%;\n    display: block;\n}\n.wrap-hero-content[data-v-a2361cd6]{\n    width: 100%;\n    height: 100%;\n    position: absolute;\n    top: 0;\n    left: 0;\n}\n.hero-content[data-v-a2361cd6]{\n    position: absolute;\n    text-align: center;\n    min-width: 300px;\n    left: 50%;\n    top: 50%;\n    padding: 65px;\n    background: rgba(255, 255, 255, 0.8);\n    outline: 4px double #FFFFFF;\n    outline-offset: 8px;\n    transform: translateX(-50%) translateY(-50%);\n}\n  \n  /*mouse*/\n.mouse-icon[data-v-a2361cd6] {\n    position: absolute;\n    border: 2px solid #2f2f2f;\n    background: #ffffff;\n    opacity: 0.8;\n    border-radius: 13px;\n    height: 40px;\n    width: 30px;\n    margin: 0 auto;\n    display: block;\n    left: 0;\n    right: 0;\n    bottom: 30px;\n    z-index: 100;\n}\n.mouse-icon .scroll[data-v-a2361cd6] {\n    -webkit-animation-name: scrolling;\n    -webkit-animation-duration: 1s;\n    -webkit-animation-timing-function: linear;\n    -webkit-animation-delay: 0s;\n    -webkit-animation-iteration-count: infinite;\n    -webkit-animation-play-state: running;\n    animation-name: scrolling;\n    animation-duration: 1s;\n    animation-timing-function: linear;\n    animation-delay: 0s;\n    animation-iteration-count: infinite;\n    animation-play-state: running;\n}\n.mouse-icon .scroll[data-v-a2361cd6] {\n    position: relative;\n    border-radius: 10px;\n    background: #2f2f2f;\n    width: 4px;\n    height: 8px;\n    top: 4px;\n    margin-left: auto;\n    margin-right: auto;\n}\n@keyframes scrolling  {\n0%   { top:2px;  opacity: 0;\n}\n30%  { top:8px; opacity: 1;\n}\n100% { top:16px; opacity: 0;\n}\n}\n  \n  \n  /*----- typed effect ---*/\n.typed-cursor[data-v-a2361cd6]{ opacity: 0;\n}\n  \n  \n  /*----------------------------------------- 7) Sections --------------------------------------------------*/\n  /*---------- a. portfolio -----------*/\nul.portfolio-image[data-v-a2361cd6] {\n    list-style: none;\n    position: relative;\n    width: 100%;\n    padding: 0;\n    margin: 0;\n}\nul.portfolio-image li[data-v-a2361cd6] {\n    float: left;\n    display: block;\n    list-style: none;\n    position: relative;\n    display: inline-block;\n    overflow: hidden;\n    padding-top: 46%;\n}\nul.portfolio-image li[data-v-a2361cd6]:hover {\n    cursor: pointer;\n}\nul.portfolio-image li:hover img[data-v-a2361cd6] {\n    -webkit-filter: grayscale(20%);\n    transform: scale(1.15);\n}\nul.portfolio-image li:hover .image-bg[data-v-a2361cd6] {opacity: 1;\n}\nul.portfolio-image li:hover .description-wrap[data-v-a2361cd6] {\n    background: rgba(186, 186, 186, 0.6);\n}\nul.portfolio-image li img[data-v-a2361cd6] {\n    position: absolute;\n    width: 100%;\n    height: 100%;\n    left: 0;\n    top: 0;\n    -webkit-filter: grayscale(100%);\n    transition: filter, transform, 0.5s;\n}\nul.portfolio-image li .decription-wrap[data-v-a2361cd6] {\n    position: absolute;\n    width: 100%;\n    height: 100%;\n    top: 0;\n    left: 0;\n    background: rgba(242, 242, 242, 0.4);\n    padding: 20px;\n    transition: background, 0.5s;\n}\nul.portfolio-image li .image-bg[data-v-a2361cd6] {\n    color: #2f2f2f;\n    background: #ffffff;\n    background: rgba(255, 255, 255, 0.9);\n    font-size: 14px;\n    text-transform: uppercase;\n    width: 100%;\n    height: 100%;\n    display: inline-block; /* IE 9 */ /* Chrome, Safari, Opera */\n    transform: translate(-50%, -50%);\n    top: 50%;\n    left: 50%;\n    padding: 10px 0;\n    position: relative;\n    margin: 0 auto;\n    text-align: center;\n    opacity: 0;\n    transition: opacity, 0.5s;\n    letter-spacing: 1.5px;\n    font-weight: 300;\n    color: transparent;\n}\nul.portfolio-image li .desc[data-v-a2361cd6]{\n    position: absolute;\n    z-index: 1;\n    top: 45%;\n    left: 0;\n    display: table-cell;\n    right: 0;\n    text-align: center;\n    color: #2f2f2f;\n    font-size: 14px;\n    font-weight: 700;\n}\n  \n  \n  /*---------- b. service -----------*/\n.icon-use[data-v-a2361cd6] {\n    font-family: 'Glyphter';\n    font-size: 30px;\n    line-height: 20px;\n    color: #818181;\n    margin: 0;\n}\n.head-sm[data-v-a2361cd6] {\n    font-size: 13px;\n    letter-spacing: 1.5px;\n    text-transform: uppercase;\n    margin-top: 10px;\n    margin-bottom: 20px;\n    font-family: 'Roboto', sans-serif;\n    font-weight: 700;\n}\n.text-grey[data-v-a2361cd6] {\n    color: #434343;\n    line-height: 26px;\n    margin-bottom: 60px;\n}\n  /*---------- c. experience -----------*/\n.wrap-card[data-v-a2361cd6] {\n    position: relative;\n    box-shadow: 0px 0px 0px #818181;\n    transition: all 0.2s ease 0s;\n    -webkit-transform: translateY(0px) translateX(0px);\n}\n.wrap-card[data-v-a2361cd6]:before,\n  .wrap-card[data-v-a2361cd6]:after {\n    display: inline-block;\n    position: absolute;\n    content: \" \";\n    width: 100%;\n    height: 3px;\n    background: #818181;\n    -webkit-transform: scaleX(0);\n    transition: all 0.2s ease;\n}\n.wrap-card[data-v-a2361cd6]:before {\n    top: 0;\n    left: 0;\n    -webkit-transform-origin: 0 0;\n}\n.wrap-card[data-v-a2361cd6]:after {\n    bottom: 0;\n    left: 0;\n    -webkit-transform-origin: 100% 0;\n}\n.wrap-card[data-v-a2361cd6]:hover {\n    box-shadow: 20px 20px 0px #818181;\n    -webkit-transform: translateY(-10px) translateX(-10px);\n    transition: all 0.2s ease 0.4s;\n}\n.wrap-card[data-v-a2361cd6]:hover:after,\n  .wrap-card[data-v-a2361cd6]:hover:before {\n    -webkit-transform: scaleX(1);\n}\n.card[data-v-a2361cd6] {\n    background: #ffffff;\n    padding: 30px 35px 45px 35px;\n    margin-bottom: 30px;\n    border: 1px solid rgba(129, 129, 129, 0.1);\n}\n.card[data-v-a2361cd6]:before,\n  .card[data-v-a2361cd6]:after {\n    display: inline-block;\n    position: absolute;\n    content: \" \";\n    width: 3px;\n    height: 100%;\n    background: #818181;\n    -webkit-transform: scaleY(0);\n    transition: all 0.2s ease 0.2s;\n}\n.card[data-v-a2361cd6]:before {\n    top: 0;\n    left: 0;\n    -webkit-transform-origin: 0 100%;\n}\n.card[data-v-a2361cd6]:after {\n    top: 0;\n    right: 0;\n    -webkit-transform-origin: 0 0;\n}\n.card[data-v-a2361cd6]:hover:after,\n  .card[data-v-a2361cd6]:hover:before {\n    -webkit-transform: scaleY(1);\n}\n  /*---------- d. testimonial -----------*/\n#testimonial[data-v-a2361cd6] {\n    background-image: url(" + __webpack_require__(17) + ");\n    background-size: cover;\n    background-repeat: no-repeat;\n    position: relative;\n    padding: 0;\n    margin: 0;\n    width: 100%;\n    height: 550px;\n}\n.list-testimonial[data-v-a2361cd6] {\n    display: block;\n    width: 100%;\n}\n.list-testimonial .content-testimonial[data-v-a2361cd6] {\n    text-align: center;\n    color: #ffffff;\n}\n.list-testimonial .content-testimonial .testi[data-v-a2361cd6] {\n    font-size: 16px;\n    line-height: 46px;\n    letter-spacing: 2px;\n}\n.list-testimonial .content-testimonial .people[data-v-a2361cd6] {\n    font-size: 14px;\n    margin-top: 30px;\n    letter-spacing: 2px;\n    color: #B7B7B7;\n    font-weight: 700;\n}\n.mask-testimonial[data-v-a2361cd6]{\n    background-color: rgba(47, 47, 47, 0.7);\n    height: 100%;\n    left: 0;\n    position: absolute;\n    top: 0;\n    width: 100%;\n}\n.wrap-testimonial[data-v-a2361cd6]{\n    z-index: 1;\n    position: relative;\n}\n  /*-------------- e. blog -------------*/\n.grid[data-v-a2361cd6] {margin-top: 60px;\n}\n.grid[data-v-a2361cd6]:after {\n    content: '';\n    display: block;\n    clear: both;\n}\n.grid-item[data-v-a2361cd6] {\n    width: 33.333%;\n    float: left;\n    top: 0px;\n    left: 0px;\n    overflow: hidden;\n    min-height: 1px;\n    padding-right: 15px;\n    padding-left: 15px;\n    margin-bottom: 30px;\n}\n.grid-item .wrap-article[data-v-a2361cd6] {\n    border: 1px solid rgba(129, 129, 129, 0.1);\n    background: #ffffff;\n    padding: 30px 20px;\n}\n.grid-item .wrap-article img[data-v-a2361cd6] {\n    text-align: center;\n    display: block;\n    margin: 0 auto;\n}\n.grid-item .wrap-article .img-circle[data-v-a2361cd6] {\n    width: 133px;\n    height: 133px;\n}\n.grid-item .wrap-article .fancy[data-v-a2361cd6] {\n    line-height: 0.5;\n    text-align: center;\n    font-size: 16px;\n    margin-top: 40px;\n    color: #818181;\n}\n.grid-item .wrap-article .fancy span[data-v-a2361cd6] {\n    display: inline-block;\n    position: relative;\n}\n.grid-item .wrap-article .fancy span[data-v-a2361cd6]:before,\n  .grid-item .wrap-article .fancy span[data-v-a2361cd6]:after {\n    content: \"\";\n    margin-top: 1px;\n    position: absolute;\n    height: 5px;\n    border-top: 1px solid #dedede;\n    top: 0;\n    width: 60%;\n}\n.grid-item .wrap-article .fancy span[data-v-a2361cd6]:before {\n    right: 100%;\n    margin-right: 5px;\n}\n.grid-item .wrap-article .fancy span[data-v-a2361cd6]:after {\n    left: 100%;\n    margin-left: 5px;\n}\n.grid-item .wrap-article .title[data-v-a2361cd6] {\n    font-size: 16px;\n    padding: 0 10px 0 10px;\n    text-align: center;\n    letter-spacing: 0.1;\n    line-height: 26px;\n    text-transform: uppercase;\n    font-weight: 700;\n}\n.grid-item .wrap-article .title[data-v-a2361cd6]:after {\n    content: \"\";\n    display: block;\n    margin: 0 auto;\n    bottom: -20px;\n    height: 1px;\n    background: #dedede;\n    width: 48px;\n    left: 0;\n    margin-top: 30px;\n}\n.grid-item .wrap-article .content-blog[data-v-a2361cd6] {\n    margin-top: 30px;\n    padding: 0 10px 0 10px;\n    text-align: justify;\n    color: #5f5f5f;\n}\n  /*---------- f. quote -----------*/\n#about[data-v-a2361cd6]{\n    min-height: 650px;\n    display: inline-block;\n    width: 100%;\n}\n.bg-about[data-v-a2361cd6] {\n    background: url(" + __webpack_require__(18) + ");\n    background-size: cover;\n    background-repeat: no-repeat;\n    position: relative;\n    padding: 0;\n    margin: 0;\n    min-height: 660px;\n    width: 100%;\n    height: 100%;\n    float: left;\n}\n.wrap-about[data-v-a2361cd6] {\n    height: 100%;\n    width: 100%;\n    position: relative;\n    display: block;\n    min-height: 480px;\n}\n.wrap-about .w-content[data-v-a2361cd6]{\n    position: absolute;\n    left: 50%;\n    top: 50%;\n    transform: translateX(-50%) translateY(-50%);\n    -webkit-transform: translateX(-50%) translateY(-50%);\n    -moz-transform: translateX(-50%) translateY(-50%);\n    -ms-transform: translateX(-50%);\n}\n.wrap-about .w-content td[data-v-a2361cd6]{\n    font-size: 13px;\n    font-weight: 300;\n}\n.wrap-about .w-content td.title[data-v-a2361cd6]{\n    padding-right: 10px;\n    font-weight: 500;\n}\n.wrap-about .w-content td.break[data-v-a2361cd6]{\n    padding-right: 15px;\n}\n.wrap-about .w-content tr[data-v-a2361cd6]{\n    height: 35px;\n}\n.wrap-about .head-about[data-v-a2361cd6] {\n    font-size: 13px;\n    line-height: 34px;\n    letter-spacing: 0.5px;\n    font-weight: 300;\n}\n.wrap-about .name[data-v-a2361cd6] {\n    margin: 40px 0 20px 0;\n    font-size: 14px;\n}\n  /*---------- g. contact -----------*/\n#contact[data-v-a2361cd6] {padding: 120px 0 200px 0;\n}\n#contact form[data-v-a2361cd6] {\n    margin-top: 25px;\n}\n#contact .slider-masks[data-v-a2361cd6] {\n    background-color: rgba(129, 129, 129, 0.7);\n    height: 100%;\n    left: 0;\n    position: absolute;\n    top: 0;\n    width: 100%;\n}\n#contact .group[data-v-a2361cd6] {\n    position: relative;\n    margin-bottom: 65px;\n}\n#contact input[data-v-a2361cd6],\n  #contact textarea[data-v-a2361cd6] {\n    font-size: 13px;\n    padding: 10px 10px 10px 5px;\n    display: block;\n    width: 100%;\n    border: none;\n    border-bottom: 1px solid #2b2b2b;\n    background: transparent;\n    color: #969696;\n    font-size: 13px;\n}\n#contact input[data-v-a2361cd6]:focus,\n  #contact textarea[data-v-a2361cd6]:focus {\n    outline: none;\n    border-bottom: none;\n}\n#contact label[data-v-a2361cd6] {\n    color: #2b2b2b;\n    font-size: 14px;\n    font-weight: normal;\n    position: absolute;\n    pointer-events: none;\n    left: 5px;\n    top: 10px;\n    transition: 0.2s ease all;\n    -moz-transition: 0.2s ease all;\n    -webkit-transition: 0.2s ease all;\n}\n#contact input:focus ~ label[data-v-a2361cd6],\n  #contact input:valid ~ label[data-v-a2361cd6],\n  #contact textarea:focus ~ label[data-v-a2361cd6],\n  #contact textarea:valid ~ label[data-v-a2361cd6] {\n    top: -25px;\n    font-size: 12px;\n    color: #818181;\n}\n#contact .bar[data-v-a2361cd6] {\n    position: relative;\n    display: block;\n    width: 100%;\n}\n#contact .bar[data-v-a2361cd6]:before,\n  #contact .bar[data-v-a2361cd6]:after {\n    content: '';\n    height: 2px;\n    width: 0;\n    bottom: 1px;\n    position: absolute;\n    background: #818181;\n    transition: 0.2s ease all;\n    -moz-transition: 0.2s ease all;\n    -webkit-transition: 0.2s ease all;\n}\n#contact .bar[data-v-a2361cd6]:before {\n    left: 50%;\n}\n#contact .bar[data-v-a2361cd6]:after {\n    right: 50%;\n}\n#contact input:focus ~ .bar[data-v-a2361cd6]:before,\n  #contact input:focus ~ .bar[data-v-a2361cd6]:after,\n  #contact textarea:focus ~ .bar[data-v-a2361cd6]:after,\n  #contact textarea:focus ~ .bar[data-v-a2361cd6]:before {\n    width: 50%;\n}\n#contact .highlight[data-v-a2361cd6] {\n    position: absolute;\n    height: 60%;\n    width: 100%;\n    top: 25%;\n    left: 0;\n    pointer-events: none;\n    opacity: 0.5;\n}\n#contact input:focus ~ .highlight[data-v-a2361cd6],\n  #contact textarea:focus ~ .highlight[data-v-a2361cd6] {\n    animation: inputHighlighter 0.3s ease;\n}\n#contact input[type=submit][data-v-a2361cd6] {\n    border: 1px solid #2b2b2b !important;\n    color: #2b2b2b;\n    padding: 10px;\n    font-weight: 700;\n    letter-spacing: 0.9px;\n    text-transform: uppercase;\n    transition: 0.2s ease all;\n    -moz-transition: 0.2s ease all;\n    -webkit-transition: 0.2s ease all;\n}\n#contact input[type=submit][data-v-a2361cd6]:hover {\n    background: #2b2b2b;\n    color: #ffffff;\n}\n@keyframes inputHighlighter {\nfrom {\n      background: #818181;\n}\nto {\n      width: 0;\n      background: transparent;\n}\n}\n  /*-------------- h. footer ------------------*/\n.footer-top[data-v-a2361cd6]{\n    width: 100%;\n    text-align: center;\n    color: #cccccc;\n    display: table;\n}\n.socials[data-v-a2361cd6]{\n    width: 100%;\n    margin: 0;\n    padding: 0;\n}\n.socials *[data-v-a2361cd6] {\n    box-sizing: border-box;\n    transition: all 0.35s ease;\n}\n.socials li[data-v-a2361cd6] {\n    display: inline-block;\n    list-style: outside none none;\n    float: left;\n    overflow: hidden;\n    width: 33.33333%;\n    font-size: 13px;\n}\n.socials a[data-v-a2361cd6] {\n    padding: 0.3em 0.8em;\n    color: rgba(255, 255, 255, 0.7);\n    position: relative;\n    display: inline-block;\n    letter-spacing: 1px;\n    margin: 0;\n    text-decoration: none;\n    padding: 25px 0;\n    width: 100%;\n}\n.socials a[data-v-a2361cd6]:before,\n  .socials a[data-v-a2361cd6]:after {\n    position: absolute;\n    transition: all 0.35s ease;\n}\n.socials a[data-v-a2361cd6]:before {\n    bottom: 100%;\n    display: block;\n    height: 3px;\n    width: 100%;\n    content: \"\";\n}\n.socials a[data-v-a2361cd6]:after {\n    padding: 0.3em 0.8em;\n    position: absolute;\n    bottom: 100%;\n    left: 0;\n    content: attr(data-hover);\n    color: white;\n    white-space: nowrap;\n    width: 100%;\n    padding: 25px 0;\n}\n.socials li:hover a[data-v-a2361cd6],\n  .socials .current a[data-v-a2361cd6] {\n    transform: translateY(100%);\n}\n.facebook[data-v-a2361cd6]{\n    background: #969696;\n    /*padding: 20px 0;*/\n}\n.facebook a[data-v-a2361cd6]:after{\n    background-color: #527bbb;\n}\n.twitter[data-v-a2361cd6]{\n    background: #ABABAB;\n}\n.twitter a[data-v-a2361cd6]:after{\n    background-color: #77ccf1;\n}\n.gplus[data-v-a2361cd6]{\n    background: #d8d8d8;\n}\n.gplus a[data-v-a2361cd6]:after{\n    background: #dd4b39;\n}\n.footer-bottom[data-v-a2361cd6]{\n    width: 100%;\n    background: #2f2f2f;\n    padding: 80px 0;\n    color: #636363;\n}\n  \n  \n  /*----------------------------------------- 8) Component --------------------------------------------------*/\n  /*---------------- a. Skills ----------------*/\n.skillst[data-v-a2361cd6] {margin-top: 30px;\n}\n.skillst .skillbar[data-v-a2361cd6] {\n    width: 100%;\n    height: 10px;\n    background-color: #f6f6f6;\n    position: relative;\n    margin-bottom: 60px;\n    padding: 2px;\n    box-sizing: border-box;\n}\n.skillst .count-bar[data-v-a2361cd6] {\n    width: 100%;\n    height: 5px;\n    width: 0px;\n    position: relative;\n}\n.skillst .count-bar[data-v-a2361cd6] {background-color: #818181;\n}\n.skillst .count-bar span[data-v-a2361cd6]{ font-size: 12px;\n}\n.skillst .title[data-v-a2361cd6] {\n    position: absolute;\n    line-height: 25px;\n    top: -35px;\n    left: 0;\n    padding-left: 10px;\n    font-size: 12px !important;\n}\n.skillst .count-bar .count[data-v-a2361cd6] {\n    position: absolute;\n    line-height: 18px;\n    top: -28px;\n    right: -20px;\n    width: 40px;\n    height: 18px;\n    color: #fff;\n    text-align: center;\n    background-color: #2f2f2f;\n}\n.skillst .count-bar .count span[data-v-a2361cd6] {\n    position: relative;\n    display: block;\n}\n.skillst .count-bar .count span[data-v-a2361cd6]:after {\n    position: absolute;\n    left: 50%;\n    margin-left: -4px;\n    top: 18px;\n    content: \"\";\n    border-left: 4px solid transparent;\n    border-right: 4px solid transparent;\n}\n.skillst .count-bar .count[data-v-a2361cd6] { background-color: #818181;\n}\n.skillst .count-bar .count span[data-v-a2361cd6]:after { border-top: 4px solid #818181;\n}", "", {"version":3,"sources":["/./src/project/views/home/textSearch/main.css"],"names":[],"mappings":"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","file":"main.css","sourcesContent":["\n/*-----------------------------------------1) General--------------------------------------------------*/\n@font-face {\n    font-family: 'Glyphter';\n    src: url('../../../../assets/fonts/Glyphter.eot');\n    font-weight: normal;\n    font-style: normal;\n  }\n  *,\n  *:after,\n  *:before {\n    -webkit-box-sizing: border-box;\n    -moz-box-sizing: border-box;\n    -ms-box-sizing: border-box;\n    box-sizing: border-box;\n  }\n  body,\n  html {\n    left: 0;\n    top: 0;\n    margin: 0px;\n    padding: 0px;\n    overflow-x: hidden;\n    font-family: 'Roboto', sans-serif;\n    height: 100%;\n    width: 100%;\n  }\n  body {\n    color: #2f2f2f;\n    font-size: 16px;\n    line-height: 1.7;\n    background-color: #fff;\n  }\n  a {\n    color: #2f2f2f;\n    text-decoration: none;\n    transition: ease .6s;\n    -webkit-transition: ease .6s;\n    -moz-transition: ease .6s;\n    -o-transition: ease .6s;\n    -ms-transition: ease .6s;\n  }\n  a:hover {\n    text-decoration: none;\n    color: #818181;\n  }\n  a:focus {\n    outline: none;\n    color: #999999;\n    text-decoration: none;\n  }\n  iframe {\n    border: none;\n    width: 100%;\n  }\n  img { max-width: 100%; }\n  *:focus {\n    outline: none;\n  }\n  .copyrights{\n      text-indent:-9999px;\n      height:0;\n      line-height:0;\n      font-size:0;\n      overflow:hidden;\n  }\n  /*----------------------------------------- 2) Preloader --------------------------------------------------*/\n  #preloader {\n    position: fixed;\n    top: 0;\n    left: 0;\n    right: 0;\n    bottom: 0;\n    background-color: #fff;\n    z-index: 999999;\n  }\n  #status {\n    width: 200px;\n    height: 200px;\n    position: absolute;\n    left: 50%;\n    top: 50%;\n    background-image: url(../../../../assets/image/loader.gif);\n    background-repeat: no-repeat;\n    background-position: center center;\n    text-align: center;\n    margin: -40px 0 0 -100px;\n  }\n  #status img {\n    text-align: center;\n    margin-top: -80px;\n  }\n  \n  /*----------------------------------------- 3) Helper --------------------------------------------------*/\n  .no-pad {padding: 0 !important; margin: 0 !important;}\n  .pad-80 {padding-top: 80px;}\n  .mar-t-50{margin-top: 50px !important;}\n  .mar-tm-10{ margin-top: -10px;}\n  \n  .white-col{\n    background: #ffffff;\n    padding: none;\n  }\n  \n  /*---- span -----*/\n  .title-small span { position: relative;}\n  .title-small span:after {\n    content: \"\";\n    position: absolute;\n    bottom: -20px;\n    height: 3px;\n    background: #DEDEDE;\n    width: 28px;\n    left: 0;\n  }\n  .title-small-center span {position: relative;}\n  .title-small-center span:after {\n    content: \"\";\n    display: block;\n    margin: 0 auto;\n    margin-top: 20px;\n    height: 3px;\n    background: #DEDEDE;\n    width: 28px;\n    left: 0;\n  }\n  /*----- background ------*/\n  .grey-bg {\n    background: #f6f6f6;\n    padding: 120px 0;\n    display: block;\n  }\n  .white-bg {\n    background: #ffffff;\n    padding: 120px 0;\n    display: block;\n  }\n  /*-------- content --------*/\n  .content-detail {\n    font-weight: 400;\n    margin-top: 70px;\n    line-height: 30px;\n    font-size: 14px;\n    letter-spacing: 0.4px;\n  }\n  .content-details {\n    font-weight: 400;\n    margin-top: 40px;\n    line-height: 30px;\n    font-size: 14px;\n  }\n  .pad-bottom {\n    padding-bottom: 80px;\n  }\n  .text-detail {\n    margin-top: 30px;\n    color: #5f5f5f;\n  }\n  \n  .listing-item{\n    list-style: none;\n    display: inline-block;\n    width: 100%;\n    padding: 0;\n    margin: 0;\n  }\n  \n  /*----------------------------------------- 4) Header --------------------------------------------------*/\n  .header {\n    width: 100%;\n    z-index: 9999;\n  }\n  .for-sticky {\n    position: fixed;\n    z-index: -1;\n    bottom: 0;\n    width: 100%;\n    height: 50px;\n    opacity: 0.8;\n    z-index: 1;\n    top: 0;\n    left: 0;\n    border-bottom: 1px solid #f1f1f1;\n    display: block;\n    padding: 0px 15px 5px 15px;\n    background: #ffffff;\n    -webkit-transition: all 0.3s;\n    -moz-transition: all 0.3s;\n    -ms-transition: all 0.3s;\n    -o-transition: all 0.3s;\n    transition: all 0.3s;\n  }\n  .logo-nav {\n    padding: 6px 0 10px 0;\n    -webkit-transition: all 0.3s;\n    -moz-transition: all 0.3s;\n    -ms-transition: all 0.3s;\n    -o-transition: all 0.3s;\n    transition: all 0.3s;\n    width: 45px;\n    display: block;\n  }\n  .opacity-nav {\n    opacity: 0.8;\n    z-index: 2;\n  }\n  /*----------- panel ----------*/\n  .content-wrap {\n    -webkit-overflow-scrolling: touch;\n    height: 100%;\n    width: 100%;\n  }\n  .content {\n    position: absolute;\n    width: 100%;\n    height: 100%;\n  }\n  .content::before {\n    position: fixed;\n    top: 0;\n    left: 0;\n    z-index: 10;\n    width: 100%;\n    height: 100%;\n    background: rgba(0, 0, 0, 0.3);\n    content: '';\n    opacity: 0;\n    -webkit-transform: translate3d(100%, 0, 0);\n    transform: translate3d(100%, 0, 0);\n    -webkit-transition: opacity 0.4s, -webkit-transform 0s 0.4s;\n    transition: opacity 0.4s, transform 0s 0.4s;\n    -webkit-transition-timing-function: cubic-bezier(0.7, 0, 0.3, 1);\n    transition-timing-function: cubic-bezier(0.7, 0, 0.3, 1);\n  }\n  /* Menu Button */\n  .menu-button {\n    width: 34px;\n    height: 45px;\n    position: fixed;\n    right: 0;\n    margin-top: 13px;\n    margin-right: 35px;\n    z-index: 1000;\n    padding: 0;\n    cursor: pointer;\n    background: transparent;\n    border: none;\n  }\n  .menu-button span {\n    display: block;\n    position: absolute;\n    height: 1px;\n    width: 100%;\n    background: #2f2f2f;\n    border-radius: 9px;\n    opacity: 1;\n    left: 0;\n  }\n  .menu-button span:nth-child(1) {top: 0px;}\n  \n  .menu-button span:nth-child(2) {top: 9px;}\n  \n  .menu-button span:nth-child(3) {top: 18px;}\n  .menu-button:hover {opacity: 0.6;}\n  /* Close Button */\n  .close-button {\n    width: 1em;\n    height: 1em;\n    position: absolute;\n    right: 1em;\n    top: 1em;\n    overflow: hidden;\n    text-indent: 1em;\n    font-size: 0.75em;\n    border: none;\n    background: transparent;\n    color: transparent;\n  }\n  .close-button::before,\n  .close-button::after {\n    content: '';\n    position: absolute;\n    width: 3px;\n    height: 100%;\n    top: 0;\n    left: 50%;\n    background: #bdc3c7;\n  }\n  .close-button::before {\n    -webkit-transform: rotate(45deg);\n    transform: rotate(45deg);\n  }\n  .close-button::after {\n    -webkit-transform: rotate(-45deg);\n    transform: rotate(-45deg);\n  }\n  /* Menu */\n  .menu-wrap {\n    position: fixed;\n    z-index: 1001;\n    width: 300px;\n    height: 100%;\n    right: 0;\n    float: right;\n    background: #2f2f2f;\n    padding: 2.5em 1.5em 0;\n    -webkit-transform: translate3d(300px, 0, 0);\n    transform: translate3d(300px, 0, 0);\n    -webkit-transition: -webkit-transform 0.4s;\n    transition: transform 0.4s;\n    -webkit-transition-timing-function: cubic-bezier(0.7, 0, 0.3, 1);\n    transition-timing-function: cubic-bezier(0.7, 0, 0.3, 1);\n  }\n  .menu,\n  .menu-list {\n    height: 100%;     \n    overflow-x: auto;\n  }\n  .menu-list {\n    -webkit-transform: translate3d(0, 100%, 0);\n    transform: translate3d(0, 100%, 0);\n  }\n  .menu-list a {\n    display: block;\n    padding: 1.5em 0;\n    -webkit-transform: translate3d(0, 500px, 0);\n    transform: translate3d(0, 500px, 0);\n    color: #a5a5a5;\n    position: relative;\n  }\n  .menu-list a:hover, .menu-list a:active span {color: #ffffff;}\n  .menu-list,\n  .menu-list a {\n    -webkit-transition: -webkit-transform 0s 0.4s;\n    transition: transform 0s 0.4s;\n    -webkit-transition-timing-function: cubic-bezier(0.7, 0, 0.3, 1);\n    transition-timing-function: cubic-bezier(0.7, 0, 0.3, 1);\n  }\n  .menu a:nth-child(2) {\n    -webkit-transform: translate3d(0, 1000px, 0);\n    transform: translate3d(0, 1000px, 0);\n  }\n  .menu-list a:nth-child(3) {\n    -webkit-transform: translate3d(0, 1500px, 0);\n    transform: translate3d(0, 1500px, 0);\n  }\n  .menu-list a:nth-child(4) {\n    -webkit-transform: translate3d(0, 2000px, 0);\n    transform: translate3d(0, 2000px, 0);\n  }\n  .menu-list a:nth-child(5) {\n    -webkit-transform: translate3d(0, 2500px, 0);\n    transform: translate3d(0, 2500px, 0);\n  }\n  .menu-list a:nth-child(6) {\n    -webkit-transform: translate3d(0, 3000px, 0);\n    transform: translate3d(0, 3000px, 0);\n  }\n  .menu-list a span:nth-last-child(1){\n    margin-bottom: 100px;\n  }\n  .menu-list a span {\n    margin-left: 10px;\n    font-weight: 400;\n    font-size: 12px;\n    letter-spacing: 5px;\n    text-transform: uppercase;\n    z-index: 2;\n    position: absolute;\n    margin-bottom: 20px;\n    padding: 10px;\n  }\n  .menu-list a span:before{\n    content: '';\n    display: block;\n    width: 0;\n    height: 2px;\n    background: #ffffff;\n    -webkit-transition: width .3s ease;\n    transition: width .3s ease;\n    position: absolute;\n    top: 50%;\n    left: 0;\n    -webkit-transform: translate(0,-50%);\n    -ms-transform: translate(0,-50%);\n    transform: translate(0,-50%);\n    z-index: -1;\n  }\n  .menu-list a.active span{\n    color: #ffffff !important;\n  }\n  .menu-list a.active span:before{\n    width: 100%;\n  }\n  \n  /* Shown menu */\n  .show-menu .menu-wrap {\n    -webkit-transform: translate3d(0, 0, 0);\n    transform: translate3d(0, 0, 0);\n    -webkit-transition: -webkit-transform 0.8s;\n    transition: transform 0.8s;\n    -webkit-transition-timing-function: cubic-bezier(0.7, 0, 0.3, 1);\n    transition-timing-function: cubic-bezier(0.7, 0, 0.3, 1);\n  }\n  .show-menu .menu-list,\n  .show-menu .menu-list a {\n    -webkit-transform: translate3d(0, 0, 0);\n    transform: translate3d(0, 0, 0);\n    -webkit-transition: -webkit-transform 0.8s;\n    transition: transform 0.8s;\n    -webkit-transition-timing-function: cubic-bezier(0.7, 0, 0.3, 1);\n    transition-timing-function: cubic-bezier(0.7, 0, 0.3, 1);\n  }\n  .show-menu .menu-list a {\n    -webkit-transition-duration: 0.9s;\n    transition-duration: 0.9s;\n  }\n  .show-menu .content::before {\n    opacity: 1;\n    -webkit-transition: opacity 0.8s;\n    transition: opacity 0.8s;\n    -webkit-transition-timing-function: cubic-bezier(0.7, 0, 0.3, 1);\n    transition-timing-function: cubic-bezier(0.7, 0, 0.3, 1);\n    -webkit-transform: translate3d(0, 0, 0);\n    transform: translate3d(0, 0, 0);\n  }\n  \n  /*----------------------------------------- 5) Typography --------------------------------------------------*/\n  h1,\n  h2,\n  h3,\n  h4,\n  h5 {\n    letter-spacing: 0.8px;\n    font-family: 'Roboto Slab', serif;\n  }\n  p {\n    letter-spacing: 0.5px;\n    font-size: 13px;\n    line-height: 34px;\n    font-weight: 300;\n  }\n  #home h1 {\n    line-height: 40px;\n    letter-spacing: 0.6px;\n  }\n  #home .typed {\n    font-weight: 400;\n    font-size: 16px;\n    line-height: 26px;\n    letter-spacing: 1.5px;\n    margin: 0 auto;\n    opacity: 0.6;\n  }\n  .year {\n    font-size: 26px;\n    font-weight: 500;\n    margin-bottom: 10px;\n    font-family: 'Roboto', sans-serif;\n  }\n  .job {\n    font-size: 14px;\n    font-weight: 500;\n    line-height: 14px;\n    letter-spacing: 0.4px;\n    text-transform: uppercase;\n    color: #cccccc;\n  }\n  .company {\n    font-size: 12px;\n    line-height: 14px;\n    border: 1px solid #ececec;\n    color: #cccccc;\n    padding:8px 10px;\n    border-radius: 6px;\n    display: inline-block;\n    margin-top: 5px;\n    font-weight: 400;\n  \n  }\n  \n  /*----------------------------------------- 6) Hero --------------------------------------------------*/\n  #home {\n    background: url('../../../../assets/image/hero1.jpeg');\n    -webkit-background-size: cover;\n    -moz-background-size: cover;\n    -o-background-size: cover;\n    background-size: cover;\n    min-width: 100%;\n    min-height: 100%;\n    height: 100%;\n    width: 100%;\n    display: block;\n  }\n  .wrap-hero-content{\n    width: 100%;\n    height: 100%;\n    position: absolute;\n    top: 0;\n    left: 0;\n  }\n  .hero-content{\n    position: absolute;\n    text-align: center;\n    min-width: 300px;\n    left: 50%;\n    top: 50%;\n    padding: 65px;\n    background: rgba(255, 255, 255, 0.8);\n    outline: 4px double #FFFFFF;\n    outline-offset: 8px;\n    -webkit-transform: translateX(-50%) translateY(-50%);\n    transform: translateX(-50%) translateY(-50%);\n  }\n  \n  /*mouse*/\n  .mouse-icon {\n    position: absolute;\n    border: 2px solid #2f2f2f;\n    background: #ffffff;\n    opacity: 0.8;\n    border-radius: 13px;\n    height: 40px;\n    width: 30px;\n    margin: 0 auto;\n    display: block;\n    left: 0;\n    right: 0;\n    bottom: 30px;\n    z-index: 100;\n  }\n  \n  .mouse-icon .scroll {\n    -webkit-animation-name: scrolling;\n    -webkit-animation-duration: 1s;\n    -webkit-animation-timing-function: linear;\n    -webkit-animation-delay: 0s;\n    -webkit-animation-iteration-count: infinite;\n    -webkit-animation-play-state: running;\n    animation-name: scrolling;\n    animation-duration: 1s;\n    animation-timing-function: linear;\n    animation-delay: 0s;\n    animation-iteration-count: infinite;\n    animation-play-state: running;\n  }\n  .mouse-icon .scroll {\n    position: relative;\n    border-radius: 10px;\n    background: #2f2f2f;\n    width: 4px;\n    height: 8px;\n    top: 4px;\n    margin-left: auto;\n    margin-right: auto;\n  }\n  \n  @-webkit-keyframes scrolling  {\n    0%   { top:2px;  opacity: 0;}\n    30%  { top:8px; opacity: 1;}\n    100% { top:16px; opacity: 0;}\n  }\n  \n  @keyframes scrolling  {\n    0%   { top:2px;  opacity: 0;}\n    30%  { top:8px; opacity: 1;}\n    100% { top:16px; opacity: 0;}\n  }\n  \n  \n  /*----- typed effect ---*/\n  .typed-cursor{ opacity: 0;}\n  \n  \n  /*----------------------------------------- 7) Sections --------------------------------------------------*/\n  /*---------- a. portfolio -----------*/\n  ul.portfolio-image {\n    list-style: none;\n    position: relative;\n    width: 100%;\n    padding: 0;\n    margin: 0;\n  }\n  ul.portfolio-image li {\n    float: left;\n    display: block;\n    list-style: none;\n    position: relative;\n    display: inline-block;\n    overflow: hidden;\n    padding-top: 46%;\n  }\n  ul.portfolio-image li:hover {\n    cursor: pointer;\n  }\n  ul.portfolio-image li:hover img {\n    -webkit-filter: grayscale(20%);\n    transform: scale(1.15);\n  }\n  ul.portfolio-image li:hover .image-bg {opacity: 1;}\n  ul.portfolio-image li:hover .description-wrap {\n    background: rgba(186, 186, 186, 0.6);\n  }\n  ul.portfolio-image li img {\n    position: absolute;\n    width: 100%;\n    height: 100%;\n    left: 0;\n    top: 0;\n    -webkit-filter: grayscale(100%);\n    transition: filter, transform, 0.5s;\n  }\n  ul.portfolio-image li .decription-wrap {\n    position: absolute;\n    width: 100%;\n    height: 100%;\n    top: 0;\n    left: 0;\n    background: rgba(242, 242, 242, 0.4);\n    padding: 20px;\n    transition: background, 0.5s;\n  }\n  ul.portfolio-image li .image-bg {\n    color: #2f2f2f;\n    background: #ffffff;\n    background: rgba(255, 255, 255, 0.9);\n    font-size: 14px;\n    text-transform: uppercase;\n    width: 100%;\n    height: 100%;\n    display: inline-block;\n    -ms-transform: translate(-50%, -50%); /* IE 9 */\n    -webkit-transform: translate(-50%, -50%); /* Chrome, Safari, Opera */\n    transform: translate(-50%, -50%);\n    top: 50%;\n    left: 50%;\n    padding: 10px 0;\n    position: relative;\n    margin: 0 auto;\n    text-align: center;\n    opacity: 0;\n    transition: opacity, 0.5s;\n    letter-spacing: 1.5px;\n    font-weight: 300;\n    color: transparent;\n  }\n  ul.portfolio-image li .desc{\n    position: absolute;\n    z-index: 1;\n    top: 45%;\n    left: 0;\n    display: table-cell;\n    right: 0;\n    text-align: center;\n    color: #2f2f2f;\n    font-size: 14px;\n    font-weight: 700;\n  }\n  \n  \n  /*---------- b. service -----------*/\n  .icon-use {\n    font-family: 'Glyphter';\n    font-size: 30px;\n    line-height: 20px;\n    color: #818181;\n    margin: 0;\n  }\n  .head-sm {\n    font-size: 13px;\n    letter-spacing: 1.5px;\n    text-transform: uppercase;\n    margin-top: 10px;\n    margin-bottom: 20px;\n    font-family: 'Roboto', sans-serif;\n    font-weight: 700;\n  }\n  .text-grey {\n    color: #434343;\n    line-height: 26px;\n    margin-bottom: 60px;\n  }\n  /*---------- c. experience -----------*/\n  .wrap-card {\n    position: relative;\n    box-shadow: 0px 0px 0px #818181;\n    transition: all 0.2s ease 0s;\n    -webkit-transform: translateY(0px) translateX(0px);\n  }\n  .wrap-card:before,\n  .wrap-card:after {\n    display: inline-block;\n    position: absolute;\n    content: \" \";\n    width: 100%;\n    height: 3px;\n    background: #818181;\n    -webkit-transform: scaleX(0);\n    transition: all 0.2s ease;\n  }\n  .wrap-card:before {\n    top: 0;\n    left: 0;\n    -webkit-transform-origin: 0 0;\n  }\n  .wrap-card:after {\n    bottom: 0;\n    left: 0;\n    -webkit-transform-origin: 100% 0;\n  }\n  .wrap-card:hover {\n    box-shadow: 20px 20px 0px #818181;\n    -webkit-transform: translateY(-10px) translateX(-10px);\n    transition: all 0.2s ease 0.4s;\n  }\n  .wrap-card:hover:after,\n  .wrap-card:hover:before {\n    -webkit-transform: scaleX(1);\n  }\n  .card {\n    background: #ffffff;\n    padding: 30px 35px 45px 35px;\n    margin-bottom: 30px;\n    border: 1px solid rgba(129, 129, 129, 0.1);\n  }\n  .card:before,\n  .card:after {\n    display: inline-block;\n    position: absolute;\n    content: \" \";\n    width: 3px;\n    height: 100%;\n    background: #818181;\n    -webkit-transform: scaleY(0);\n    transition: all 0.2s ease 0.2s;\n  }\n  .card:before {\n    top: 0;\n    left: 0;\n    -webkit-transform-origin: 0 100%;\n  }\n  .card:after {\n    top: 0;\n    right: 0;\n    -webkit-transform-origin: 0 0;\n  }\n  .card:hover:after,\n  .card:hover:before {\n    -webkit-transform: scaleY(1);\n  }\n  /*---------- d. testimonial -----------*/\n  #testimonial {\n    background-image: url(../../../../assets/image/testimonial-bg.jpg);\n    -webkit-background-size: cover;\n    -moz-background-size: cover;\n    -o-background-size: cover;\n    background-size: cover;\n    background-repeat: no-repeat;\n    position: relative;\n    padding: 0;\n    margin: 0;\n    width: 100%;\n    height: 550px;\n  }\n  .list-testimonial {\n    display: block;\n    width: 100%;\n  }\n  .list-testimonial .content-testimonial {\n    text-align: center;\n    color: #ffffff;\n  }\n  .list-testimonial .content-testimonial .testi {\n    font-size: 16px;\n    line-height: 46px;\n    letter-spacing: 2px;\n  }\n  .list-testimonial .content-testimonial .people {\n    font-size: 14px;\n    margin-top: 30px;\n    letter-spacing: 2px;\n    color: #B7B7B7;\n    font-weight: 700;\n  }\n  .mask-testimonial{\n    background-color: rgba(47, 47, 47, 0.7);\n    height: 100%;\n    left: 0;\n    position: absolute;\n    top: 0;\n    width: 100%;\n  }\n  .wrap-testimonial{\n    z-index: 1;\n    position: relative;\n  }\n  /*-------------- e. blog -------------*/\n  .grid {margin-top: 60px;}\n  .grid:after {\n    content: '';\n    display: block;\n    clear: both;\n  }\n  .grid-item {\n    width: 33.333%;\n    float: left;\n    top: 0px;\n    left: 0px;\n    overflow: hidden;\n    min-height: 1px;\n    padding-right: 15px;\n    padding-left: 15px;\n    margin-bottom: 30px;\n  }\n  .grid-item .wrap-article {\n    border: 1px solid rgba(129, 129, 129, 0.1);\n    background: #ffffff;\n    padding: 30px 20px;\n  }\n  .grid-item .wrap-article img {\n    text-align: center;\n    display: block;\n    margin: 0 auto;\n  }\n  .grid-item .wrap-article .img-circle {\n    width: 133px;\n    height: 133px;\n  }\n  .grid-item .wrap-article .fancy {\n    line-height: 0.5;\n    text-align: center;\n    font-size: 16px;\n    margin-top: 40px;\n    color: #818181;\n  }\n  .grid-item .wrap-article .fancy span {\n    display: inline-block;\n    position: relative;\n  }\n  .grid-item .wrap-article .fancy span:before,\n  .grid-item .wrap-article .fancy span:after {\n    content: \"\";\n    margin-top: 1px;\n    position: absolute;\n    height: 5px;\n    border-top: 1px solid #dedede;\n    top: 0;\n    width: 60%;\n  }\n  .grid-item .wrap-article .fancy span:before {\n    right: 100%;\n    margin-right: 5px;\n  }\n  .grid-item .wrap-article .fancy span:after {\n    left: 100%;\n    margin-left: 5px;\n  }\n  .grid-item .wrap-article .title {\n    font-size: 16px;\n    padding: 0 10px 0 10px;\n    text-align: center;\n    letter-spacing: 0.1;\n    line-height: 26px;\n    text-transform: uppercase;\n    font-weight: 700;\n  }\n  .grid-item .wrap-article .title:after {\n    content: \"\";\n    display: block;\n    margin: 0 auto;\n    bottom: -20px;\n    height: 1px;\n    background: #dedede;\n    width: 48px;\n    left: 0;\n    margin-top: 30px;\n  }\n  .grid-item .wrap-article .content-blog {\n    margin-top: 30px;\n    padding: 0 10px 0 10px;\n    text-align: justify;\n    color: #5f5f5f;\n  }\n  /*---------- f. quote -----------*/\n  #about{\n    min-height: 650px;\n    display: inline-block;\n    width: 100%;\n  }\n  .bg-about {\n    background: url('../../../../assets/image/reza.jpg');\n    -webkit-background-size: cover;\n    -moz-background-size: cover;\n    -o-background-size: cover;\n    background-size: cover;\n    background-repeat: no-repeat;\n    position: relative;\n    padding: 0;\n    margin: 0;\n    min-height: 660px;\n    width: 100%;\n    height: 100%;\n    float: left;\n  }\n  .wrap-about {\n    height: 100%;\n    width: 100%;\n    position: relative;\n    display: block;\n    min-height: 480px;\n  }\n  .wrap-about .w-content{\n    position: absolute;\n    left: 50%;\n    top: 50%;\n    transform: translateX(-50%) translateY(-50%);\n    -webkit-transform: translateX(-50%) translateY(-50%);\n    -moz-transform: translateX(-50%) translateY(-50%);\n    -ms-transform: translateX(-50%); \n  }\n  \n  .wrap-about .w-content td{\n    font-size: 13px;\n    font-weight: 300;\n  }\n  .wrap-about .w-content td.title{\n    padding-right: 10px;\n    font-weight: 500;\n  }\n  .wrap-about .w-content td.break{\n    padding-right: 15px;\n  }\n  .wrap-about .w-content tr{\n    height: 35px;\n  }\n  .wrap-about .head-about {\n    font-size: 13px;\n    line-height: 34px;\n    letter-spacing: 0.5px;\n    font-weight: 300;\n  }\n  .wrap-about .name {\n    margin: 40px 0 20px 0;\n    font-size: 14px;\n  }\n  /*---------- g. contact -----------*/\n  #contact {padding: 120px 0 200px 0;}\n  #contact form {\n    margin-top: 25px;\n  }\n  #contact .slider-masks {\n    background-color: rgba(129, 129, 129, 0.7);\n    height: 100%;\n    left: 0;\n    position: absolute;\n    top: 0;\n    width: 100%;\n  }\n  #contact .group {\n    position: relative;\n    margin-bottom: 65px;\n  }\n  #contact input,\n  #contact textarea {\n    font-size: 13px;\n    padding: 10px 10px 10px 5px;\n    display: block;\n    width: 100%;\n    border: none;\n    border-bottom: 1px solid #2b2b2b;\n    background: transparent;\n    color: #969696;\n    font-size: 13px;\n  }\n  #contact input:focus,\n  #contact textarea:focus {\n    outline: none;\n    border-bottom: none;\n  }\n  #contact label {\n    color: #2b2b2b;\n    font-size: 14px;\n    font-weight: normal;\n    position: absolute;\n    pointer-events: none;\n    left: 5px;\n    top: 10px;\n    transition: 0.2s ease all;\n    -moz-transition: 0.2s ease all;\n    -webkit-transition: 0.2s ease all;\n  }\n  #contact input:focus ~ label,\n  #contact input:valid ~ label,\n  #contact textarea:focus ~ label,\n  #contact textarea:valid ~ label {\n    top: -25px;\n    font-size: 12px;\n    color: #818181;\n  }\n  #contact .bar {\n    position: relative;\n    display: block;\n    width: 100%;\n  }\n  #contact .bar:before,\n  #contact .bar:after {\n    content: '';\n    height: 2px;\n    width: 0;\n    bottom: 1px;\n    position: absolute;\n    background: #818181;\n    transition: 0.2s ease all;\n    -moz-transition: 0.2s ease all;\n    -webkit-transition: 0.2s ease all;\n  }\n  #contact .bar:before {\n    left: 50%;\n  }\n  #contact .bar:after {\n    right: 50%;\n  }\n  #contact input:focus ~ .bar:before,\n  #contact input:focus ~ .bar:after,\n  #contact textarea:focus ~ .bar:after,\n  #contact textarea:focus ~ .bar:before {\n    width: 50%;\n  }\n  #contact .highlight {\n    position: absolute;\n    height: 60%;\n    width: 100%;\n    top: 25%;\n    left: 0;\n    pointer-events: none;\n    opacity: 0.5;\n  }\n  #contact input:focus ~ .highlight,\n  #contact textarea:focus ~ .highlight {\n    -webkit-animation: inputHighlighter 0.3s ease;\n    -moz-animation: inputHighlighter 0.3s ease;\n    animation: inputHighlighter 0.3s ease;\n  }\n  #contact input[type=submit] {\n    border: 1px solid #2b2b2b !important;\n    color: #2b2b2b;\n    padding: 10px;\n    font-weight: 700;\n    letter-spacing: 0.9px;\n    text-transform: uppercase;\n    transition: 0.2s ease all;\n    -moz-transition: 0.2s ease all;\n    -webkit-transition: 0.2s ease all;\n  }\n  #contact input[type=submit]:hover {\n    background: #2b2b2b;\n    color: #ffffff;\n  }\n  @-webkit-keyframes inputHighlighter {\n    from {\n      background: #5264AE;\n    }\n    to {\n      width: 0;\n      background: transparent;\n    }\n  }\n  @-moz-keyframes inputHighlighter {\n    from {\n      background: #818181;\n    }\n    to {\n      width: 0;\n      background: transparent;\n    }\n  }\n  @keyframes inputHighlighter {\n    from {\n      background: #818181;\n    }\n    to {\n      width: 0;\n      background: transparent;\n    }\n  }\n  /*-------------- h. footer ------------------*/\n  .footer-top{\n    width: 100%;\n    text-align: center;\n    color: #cccccc;\n    display: table;\n  }\n  \n  .socials{\n    width: 100%;\n    margin: 0;\n    padding: 0;\n  }\n  \n  .socials * {\n    box-sizing: border-box;\n    -webkit-transition: all 0.35s ease;\n    transition: all 0.35s ease;\n  }\n  \n  .socials li {\n    display: inline-block;\n    list-style: outside none none;\n    float: left;\n    overflow: hidden;\n    width: 33.33333%;\n    font-size: 13px;\n  }\n  \n  .socials a {\n    padding: 0.3em 0.8em;\n    color: rgba(255, 255, 255, 0.7);\n    position: relative;\n    display: inline-block;\n    letter-spacing: 1px;\n    margin: 0;\n    text-decoration: none;\n    padding: 25px 0;\n    width: 100%;\n  }\n  \n  .socials a:before,\n  .socials a:after {\n    position: absolute;\n    -webkit-transition: all 0.35s ease;\n    transition: all 0.35s ease;\n  }\n  \n  .socials a:before {\n    bottom: 100%;\n    display: block;\n    height: 3px;\n    width: 100%;\n    content: \"\";\n  }\n  \n  .socials a:after {\n    padding: 0.3em 0.8em;\n    position: absolute;\n    bottom: 100%;\n    left: 0;\n    content: attr(data-hover);\n    color: white;\n    white-space: nowrap;\n    width: 100%;\n    padding: 25px 0;\n  }\n  \n  .socials li:hover a,\n  .socials .current a {\n    transform: translateY(100%);\n  }\n  \n  .facebook{\n    background: #969696;\n    /*padding: 20px 0;*/\n  }\n  .facebook a:after{\n    background-color: #527bbb;\n  }\n  .twitter{\n    background: #ABABAB;\n  }\n  .twitter a:after{\n    background-color: #77ccf1;\n  }\n  .gplus{\n    background: #d8d8d8;\n  }\n  .gplus a:after{\n    background: #dd4b39;\n  }\n  \n  .footer-bottom{\n    width: 100%;\n    background: #2f2f2f;\n    padding: 80px 0;\n    color: #636363;\n  }\n  \n  \n  /*----------------------------------------- 8) Component --------------------------------------------------*/\n  /*---------------- a. Skills ----------------*/\n  .skillst {margin-top: 30px;}\n  .skillst .skillbar {\n    width: 100%;\n    height: 10px;\n    background-color: #f6f6f6;\n    position: relative;\n    margin-bottom: 60px;\n    padding: 2px;\n    box-sizing: border-box;\n  }\n  .skillst .count-bar {\n    width: 100%;\n    height: 5px;\n    width: 0px;\n    position: relative;\n  }\n  .skillst .count-bar {background-color: #818181;}\n  .skillst .count-bar span{ font-size: 12px;}\n  .skillst .title {\n    position: absolute;\n    line-height: 25px;\n    top: -35px;\n    left: 0;\n    padding-left: 10px;\n    font-size: 12px !important;\n  }\n  .skillst .count-bar .count {\n    position: absolute;\n    line-height: 18px;\n    top: -28px;\n    right: -20px;\n    width: 40px;\n    height: 18px;\n    color: #fff;\n    text-align: center;\n    background-color: #2f2f2f;\n  }\n  .skillst .count-bar .count span {\n    position: relative;\n    display: block;\n  }\n  .skillst .count-bar .count span:after {\n    position: absolute;\n    left: 50%;\n    margin-left: -4px;\n    top: 18px;\n    content: \"\";\n    border-left: 4px solid transparent;\n    border-right: 4px solid transparent;\n  }\n  .skillst .count-bar .count { background-color: #818181;}\n  .skillst .count-bar .count span:after { border-top: 4px solid #818181;}"],"sourceRoot":"webpack://"}]);
	
	// exports


/***/ },
/* 13 */
/***/ function(module, exports) {

	/*
		MIT License http://www.opensource.org/licenses/mit-license.php
		Author Tobias Koppers @sokra
	*/
	// css base code, injected by the css-loader
	module.exports = function() {
		var list = [];
	
		// return the list of modules as css string
		list.toString = function toString() {
			var result = [];
			for(var i = 0; i < this.length; i++) {
				var item = this[i];
				if(item[2]) {
					result.push("@media " + item[2] + "{" + item[1] + "}");
				} else {
					result.push(item[1]);
				}
			}
			return result.join("");
		};
	
		// import a list of modules into the list
		list.i = function(modules, mediaQuery) {
			if(typeof modules === "string")
				modules = [[null, modules, ""]];
			var alreadyImportedModules = {};
			for(var i = 0; i < this.length; i++) {
				var id = this[i][0];
				if(typeof id === "number")
					alreadyImportedModules[id] = true;
			}
			for(i = 0; i < modules.length; i++) {
				var item = modules[i];
				// skip already imported module
				// this implementation is not 100% perfect for weird media query combinations
				//  when a module is imported multiple times with different media queries.
				//  I hope this will never occur (Hey this way we have smaller bundles)
				if(typeof item[0] !== "number" || !alreadyImportedModules[item[0]]) {
					if(mediaQuery && !item[2]) {
						item[2] = mediaQuery;
					} else if(mediaQuery) {
						item[2] = "(" + item[2] + ") and (" + mediaQuery + ")";
					}
					list.push(item);
				}
			}
		};
		return list;
	};


/***/ },
/* 14 */
/***/ function(module, exports, __webpack_require__) {

	module.exports = __webpack_require__.p + "0a7d58acb648255f64cf24fd4edc8ac9.eot";

/***/ },
/* 15 */
/***/ function(module, exports, __webpack_require__) {

	module.exports = __webpack_require__.p + "static/imgs/loader.044748c.gif";

/***/ },
/* 16 */
/***/ function(module, exports, __webpack_require__) {

	module.exports = __webpack_require__.p + "static/imgs/hero1.4880452.jpeg";

/***/ },
/* 17 */
/***/ function(module, exports, __webpack_require__) {

	module.exports = __webpack_require__.p + "static/imgs/testimonial-bg.f0ada13.jpg";

/***/ },
/* 18 */
/***/ function(module, exports, __webpack_require__) {

	module.exports = __webpack_require__.p + "static/imgs/reza.7292188.jpg";

/***/ },
/* 19 */
/***/ function(module, exports, __webpack_require__) {

	/*
		MIT License http://www.opensource.org/licenses/mit-license.php
		Author Tobias Koppers @sokra
	*/
	var stylesInDom = {},
		memoize = function(fn) {
			var memo;
			return function () {
				if (typeof memo === "undefined") memo = fn.apply(this, arguments);
				return memo;
			};
		},
		isOldIE = memoize(function() {
			return /msie [6-9]\b/.test(window.navigator.userAgent.toLowerCase());
		}),
		getHeadElement = memoize(function () {
			return document.head || document.getElementsByTagName("head")[0];
		}),
		singletonElement = null,
		singletonCounter = 0,
		styleElementsInsertedAtTop = [];
	
	module.exports = function(list, options) {
		if(false) {
			if(typeof document !== "object") throw new Error("The style-loader cannot be used in a non-browser environment");
		}
	
		options = options || {};
		// Force single-tag solution on IE6-9, which has a hard limit on the # of <style>
		// tags it will allow on a page
		if (typeof options.singleton === "undefined") options.singleton = isOldIE();
	
		// By default, add <style> tags to the bottom of <head>.
		if (typeof options.insertAt === "undefined") options.insertAt = "bottom";
	
		var styles = listToStyles(list);
		addStylesToDom(styles, options);
	
		return function update(newList) {
			var mayRemove = [];
			for(var i = 0; i < styles.length; i++) {
				var item = styles[i];
				var domStyle = stylesInDom[item.id];
				domStyle.refs--;
				mayRemove.push(domStyle);
			}
			if(newList) {
				var newStyles = listToStyles(newList);
				addStylesToDom(newStyles, options);
			}
			for(var i = 0; i < mayRemove.length; i++) {
				var domStyle = mayRemove[i];
				if(domStyle.refs === 0) {
					for(var j = 0; j < domStyle.parts.length; j++)
						domStyle.parts[j]();
					delete stylesInDom[domStyle.id];
				}
			}
		};
	}
	
	function addStylesToDom(styles, options) {
		for(var i = 0; i < styles.length; i++) {
			var item = styles[i];
			var domStyle = stylesInDom[item.id];
			if(domStyle) {
				domStyle.refs++;
				for(var j = 0; j < domStyle.parts.length; j++) {
					domStyle.parts[j](item.parts[j]);
				}
				for(; j < item.parts.length; j++) {
					domStyle.parts.push(addStyle(item.parts[j], options));
				}
			} else {
				var parts = [];
				for(var j = 0; j < item.parts.length; j++) {
					parts.push(addStyle(item.parts[j], options));
				}
				stylesInDom[item.id] = {id: item.id, refs: 1, parts: parts};
			}
		}
	}
	
	function listToStyles(list) {
		var styles = [];
		var newStyles = {};
		for(var i = 0; i < list.length; i++) {
			var item = list[i];
			var id = item[0];
			var css = item[1];
			var media = item[2];
			var sourceMap = item[3];
			var part = {css: css, media: media, sourceMap: sourceMap};
			if(!newStyles[id])
				styles.push(newStyles[id] = {id: id, parts: [part]});
			else
				newStyles[id].parts.push(part);
		}
		return styles;
	}
	
	function insertStyleElement(options, styleElement) {
		var head = getHeadElement();
		var lastStyleElementInsertedAtTop = styleElementsInsertedAtTop[styleElementsInsertedAtTop.length - 1];
		if (options.insertAt === "top") {
			if(!lastStyleElementInsertedAtTop) {
				head.insertBefore(styleElement, head.firstChild);
			} else if(lastStyleElementInsertedAtTop.nextSibling) {
				head.insertBefore(styleElement, lastStyleElementInsertedAtTop.nextSibling);
			} else {
				head.appendChild(styleElement);
			}
			styleElementsInsertedAtTop.push(styleElement);
		} else if (options.insertAt === "bottom") {
			head.appendChild(styleElement);
		} else {
			throw new Error("Invalid value for parameter 'insertAt'. Must be 'top' or 'bottom'.");
		}
	}
	
	function removeStyleElement(styleElement) {
		styleElement.parentNode.removeChild(styleElement);
		var idx = styleElementsInsertedAtTop.indexOf(styleElement);
		if(idx >= 0) {
			styleElementsInsertedAtTop.splice(idx, 1);
		}
	}
	
	function createStyleElement(options) {
		var styleElement = document.createElement("style");
		styleElement.type = "text/css";
		insertStyleElement(options, styleElement);
		return styleElement;
	}
	
	function addStyle(obj, options) {
		var styleElement, update, remove;
	
		if (options.singleton) {
			var styleIndex = singletonCounter++;
			styleElement = singletonElement || (singletonElement = createStyleElement(options));
			update = applyToSingletonTag.bind(null, styleElement, styleIndex, false);
			remove = applyToSingletonTag.bind(null, styleElement, styleIndex, true);
		} else {
			styleElement = createStyleElement(options);
			update = applyToTag.bind(null, styleElement);
			remove = function() {
				removeStyleElement(styleElement);
			};
		}
	
		update(obj);
	
		return function updateStyle(newObj) {
			if(newObj) {
				if(newObj.css === obj.css && newObj.media === obj.media && newObj.sourceMap === obj.sourceMap)
					return;
				update(obj = newObj);
			} else {
				remove();
			}
		};
	}
	
	var replaceText = (function () {
		var textStore = [];
	
		return function (index, replacement) {
			textStore[index] = replacement;
			return textStore.filter(Boolean).join('\n');
		};
	})();
	
	function applyToSingletonTag(styleElement, index, remove, obj) {
		var css = remove ? "" : obj.css;
	
		if (styleElement.styleSheet) {
			styleElement.styleSheet.cssText = replaceText(index, css);
		} else {
			var cssNode = document.createTextNode(css);
			var childNodes = styleElement.childNodes;
			if (childNodes[index]) styleElement.removeChild(childNodes[index]);
			if (childNodes.length) {
				styleElement.insertBefore(cssNode, childNodes[index]);
			} else {
				styleElement.appendChild(cssNode);
			}
		}
	}
	
	function applyToTag(styleElement, obj) {
		var css = obj.css;
		var media = obj.media;
		var sourceMap = obj.sourceMap;
	
		if (media) {
			styleElement.setAttribute("media", media);
		}
	
		if (sourceMap) {
			// https://developer.chrome.com/devtools/docs/javascript-debugging
			// this makes source maps inside style tags work properly in Chrome
			css += '\n/*# sourceURL=' + sourceMap.sources[0] + ' */';
			// http://stackoverflow.com/a/26603875
			css += "\n/*# sourceMappingURL=data:application/json;base64," + btoa(unescape(encodeURIComponent(JSON.stringify(sourceMap)))) + " */";
		}
	
		if (styleElement.styleSheet) {
			styleElement.styleSheet.cssText = css;
		} else {
			while(styleElement.firstChild) {
				styleElement.removeChild(styleElement.firstChild);
			}
			styleElement.appendChild(document.createTextNode(css));
		}
	}


/***/ },
/* 20 */
/***/ function(module, exports, __webpack_require__) {

	'use strict';
	
	Object.defineProperty(exports, "__esModule", {
	    value: true
	});
	
	var _main = __webpack_require__(21);
	
	var _main2 = _interopRequireDefault(_main);
	
	var _typed = __webpack_require__(26);
	
	var _typed2 = _interopRequireDefault(_typed);
	
	function _interopRequireDefault(obj) { return obj && obj.__esModule ? obj : { default: obj }; }
	
	//
	//
	//
	//
	//
	//
	//
	//
	//
	//
	//
	//
	//
	//
	//
	//
	//
	//
	//
	//
	//
	//
	//
	//
	//
	//
	//
	//
	//
	//
	//
	//
	//
	//
	//
	//
	//
	//
	//
	//
	//
	//
	//
	//
	//
	//
	//
	//
	//
	//
	//
	//
	//
	//
	//
	//
	//
	//
	//
	//
	//
	//
	//
	//
	//
	//
	//
	//
	//
	//
	//
	//
	//
	//
	//
	//
	//
	//
	//
	//
	//
	//
	//
	//
	//
	//
	//
	//
	//
	//
	//
	//
	//
	//
	//
	//
	//
	//
	//
	//
	//
	//
	//
	//
	//
	//
	//
	//
	//
	//
	//
	//
	//
	//
	//
	//
	//
	//
	//
	//
	//
	//
	//
	//
	//
	//
	//
	//
	//
	//
	//
	//
	//
	//
	//
	//
	//
	//
	//
	//
	//
	//
	//
	//
	//
	//
	//
	//
	//
	//
	//
	//
	//
	//
	//
	//
	//
	//
	//
	//
	//
	//
	//
	//
	//
	//
	//
	//
	//
	//
	//
	//
	//
	//
	//
	//
	//
	//
	//
	//
	//
	//
	//
	//
	//
	//
	//
	//
	//
	//
	//
	//
	//
	//
	//
	//
	//
	//
	//
	//
	//
	//
	//
	//
	//
	//
	//
	//
	//
	//
	//
	//
	//
	//
	//
	//
	//
	//
	//
	//
	//
	//
	//
	//
	//
	//
	//
	//
	//
	//
	//
	//
	//
	//
	//
	//
	//
	//
	//
	//
	//
	//
	//
	//
	//
	//
	//
	//
	//
	//
	//
	//
	//
	//
	//
	//
	//
	//
	//
	//
	//
	//
	//
	//
	//
	//
	//
	//
	//
	//
	//
	//
	//
	//
	//
	//
	//
	//
	//
	//
	//
	//
	//
	//
	//
	//
	//
	//
	//
	//
	//
	//
	//
	//
	//
	//
	//
	//
	//
	//
	//
	//
	//
	//
	//
	//
	//
	//
	//
	//
	//
	//
	//
	//
	//
	//
	//
	//
	//
	//
	//
	//
	//
	//
	//
	//
	//
	//
	//
	//
	//
	//
	//
	//
	//
	//
	//
	//
	//
	//
	//
	//
	//
	//
	//
	//
	//
	//
	//
	//
	//
	//
	//
	//
	//
	//
	//
	//
	//
	//
	//
	//
	//
	//
	//
	//
	//
	//
	//
	//
	//
	//
	//
	//
	//
	//
	//
	//
	//
	//
	//
	//
	//
	//
	//
	//
	//
	//
	//
	//
	//
	//
	//
	//
	//
	//
	//
	//
	//
	//
	//
	//
	//
	//
	//
	//
	//
	//
	//
	//
	//
	//
	//
	//
	//
	//
	//
	//
	//
	//
	//
	//
	//
	//
	//
	//
	//
	//
	//
	//
	//
	//
	//
	//
	//
	//
	//
	//
	//
	//
	//
	//
	//
	//
	//
	//
	//
	//
	//
	//
	//
	//
	//
	//
	//
	//
	//
	//
	//
	//
	//
	//
	//
	//
	//
	//
	//
	//
	//
	//
	//
	//
	//
	//
	//
	//
	//
	//
	//
	//
	//
	//
	//
	//
	//
	//
	//
	//
	//
	//
	//
	//
	//
	//
	//
	//
	//
	//
	//
	//
	//
	//
	//
	//
	//
	//
	//
	//
	//
	//
	//
	//
	//
	//
	//
	//
	//
	//
	//
	//
	//
	//
	//
	//
	//
	//
	//
	//
	//
	//
	//
	//
	//
	//
	//
	//
	//
	//
	//
	//
	//
	//
	//
	//
	//
	//
	//
	//
	//
	//
	//
	//
	//
	//
	//
	//
	//
	//
	//
	//
	//
	//
	//
	//
	//
	//
	//
	//
	//
	//
	//
	//
	//
	//
	//
	//
	//
	//
	//
	//
	//
	//
	//
	//
	//
	//
	//
	//
	//
	//
	//
	//
	//
	//
	//
	//
	//
	//
	//
	//
	//
	//
	//
	//
	//
	//
	//
	//
	//
	//
	//
	//
	//
	//
	//
	//
	//
	//
	//
	//
	//
	//
	//
	//
	//
	//
	//
	//
	//
	//
	//
	//
	//
	//
	//
	//
	//
	//
	//
	//
	//
	//
	//
	//
	//
	//
	//
	//
	//
	//
	//
	//
	//
	//
	//
	//
	//
	//
	//
	//
	//
	//
	//
	//
	//
	//
	//
	//
	//
	//
	//
	//
	//
	//
	//
	//
	//
	//
	//
	//
	//
	//
	//
	//
	//
	//
	//
	//
	//
	//
	//
	//
	//
	//
	//
	//
	//
	//
	//
	//
	//
	//
	//
	//
	//
	//
	//
	//
	//
	//
	//
	//
	//
	//
	//
	//
	//
	//
	//
	//
	//
	//
	//
	//
	//
	//
	//
	//
	//
	//
	//
	//
	//
	//
	//
	//
	//
	//
	//
	//
	//
	//
	//
	//
	//
	//
	//
	//
	//
	//
	//
	//
	//
	//
	//
	//
	//
	//
	//
	//
	//
	//
	//
	//
	//
	//
	//
	//
	//
	//
	//
	//
	//
	//
	//
	//
	//
	//
	//
	//
	//
	//
	//
	//
	//
	//
	//
	//
	//
	//
	//
	//
	//
	//
	//
	//
	//
	//
	//
	//
	//
	//
	//
	//
	//
	//
	//
	//
	//
	//
	//
	//
	//
	//
	//
	//
	//
	//
	//
	//
	//
	//
	//
	//
	//
	//
	//
	//
	//
	//
	//
	//
	//
	//
	//
	//
	//
	//
	//
	//
	//
	//
	//
	//
	//
	//
	//
	//
	//
	//
	//
	//
	//
	//
	//
	//
	//
	//
	//
	//
	//
	//
	//
	//
	//
	//
	//
	//
	//
	//
	//
	//
	//
	//
	//
	//
	//
	//
	//
	//
	//
	//
	//
	//
	//
	//
	//
	//
	//
	//
	//
	//
	//
	//
	//
	//
	//
	//
	//
	//
	//
	//
	
	exports.default = {
	    data: function data() {
	        return {};
	    },
	
	
	    components: {},
	
	    created: function created() {
	        this.init();
	    },
	
	
	    watch: {},
	
	    methods: {
	        init: function init() {}
	    }
	};

/***/ },
/* 21 */
/***/ function(module, exports, __webpack_require__) {

	"use strict";
	
	var _defineProperty2 = __webpack_require__(22);
	
	var _defineProperty3 = _interopRequireDefault(_defineProperty2);
	
	function _interopRequireDefault(obj) { return obj && obj.__esModule ? obj : { default: obj }; }
	
	(function ($) {
	  "use strict";
	
	  $(window).on("load", function () {
	    // makes sure the whole site is loaded
	    //preloader
	    $("#status").fadeOut(); // will first fade out the loading animation
	    $("#preloader").delay(450).fadeOut("slow"); // will fade out the white DIV that covers the website.
	
	    //masonry
	    $('.grid').masonry({
	      itemSelector: '.grid-item'
	
	    });
	  });
	
	  $(document).ready(function () {
	    var _$$owlCarousel;
	
	    //active menu
	    $(document).on("scroll", onScroll);
	
	    $('a[href^="#"]').on('click', function (e) {
	      e.preventDefault();
	      $(document).off("scroll");
	
	      $('a').each(function () {
	        $(this).removeClass('active');
	      });
	      $(this).addClass('active');
	
	      var target = this.hash;
	      $target = $(target);
	      $('html, body').stop().animate({
	        'scrollTop': $target.offset().top + 2
	      }, 500, 'swing', function () {
	        window.location.hash = target;
	        $(document).on("scroll", onScroll);
	      });
	    });
	
	    //scroll js
	    smoothScroll.init({
	      selector: '[data-scroll]', // Selector for links (must be a valid CSS selector)
	      selectorHeader: '[data-scroll-header]', // Selector for fixed headers (must be a valid CSS selector)
	      speed: 500, // Integer. How fast to complete the scroll in milliseconds
	      easing: 'easeInOutCubic', // Easing pattern to use
	      updateURL: true, // Boolean. Whether or not to update the URL with the anchor hash on scroll
	      offset: 0, // Integer. How far to offset the scrolling anchor location in pixels
	      callback: function callback(toggle, anchor) {} // Function to run after scrolling
	    });
	
	    //menu
	    var bodyEl = document.body,
	        content = document.querySelector('.content-wrap'),
	        openbtn = document.getElementById('open-button'),
	        closebtn = document.getElementById('close-button'),
	        isOpen = false;
	
	    function inits() {
	      initEvents();
	    }
	
	    function initEvents() {
	      //openbtn.addEventListener( 'click', toggleMenu );
	      if (closebtn) {
	        closebtn.addEventListener('click', toggleMenu);
	      }
	
	      // close the menu element if the target it´s not the menu element or one of its descendants..
	      // content.addEventListener( 'click', function(ev) {
	      //   var target = ev.target;
	      //   if( isOpen && target !== openbtn ) {
	      //     toggleMenu();
	      //   }
	      // } );
	    }
	
	    function toggleMenu() {
	      if (isOpen) {
	        classie.remove(bodyEl, 'show-menu');
	      } else {
	        classie.add(bodyEl, 'show-menu');
	      }
	      isOpen = !isOpen;
	    }
	
	    inits();
	
	    //typed js
	    $(".typed").typed({
	      strings: ["My Name is M.Reza", "I'm a Web Designer", "Love Simplicity"],
	      typeSpeed: 100,
	      backDelay: 900,
	      // loop
	      loop: true
	    });
	
	    //owl carousel
	    $('.owl-carousel').owlCarousel({
	      autoPlay: 3000, //Set AutoPlay to 3 seconds
	
	      items: 1,
	      itemsDesktop: [1199, 1],
	      itemsDesktopSmall: [979, 1],
	      itemsTablet: [768, 1],
	      itemsMobile: [479, 1],
	
	      // CSS Styles
	      baseClass: "owl-carousel",
	      theme: "owl-theme"
	    });
	
	    $('.owl-carousel2').owlCarousel((_$$owlCarousel = {
	      autoPlay: 3000, //Set AutoPlay to 3 seconds
	
	      items: 1,
	      itemsDesktop: [1199, 1],
	      itemsDesktopSmall: [979, 1],
	      itemsTablet: [768, 1],
	      itemsMobile: [479, 1]
	    }, (0, _defineProperty3.default)(_$$owlCarousel, "autoPlay", false), (0, _defineProperty3.default)(_$$owlCarousel, "baseClass", "owl-carousel"), (0, _defineProperty3.default)(_$$owlCarousel, "theme", "owl-theme"), _$$owlCarousel));
	
	    //contact
	    $('input').blur(function () {
	
	      // check if the input has any value (if we've typed into it)
	      if ($(this).val()) $(this).addClass('used');else $(this).removeClass('used');
	    });
	
	    //pop up porfolio
	    $('.portfolio-image li a').magnificPopup({
	      type: 'image',
	      gallery: {
	        enabled: true
	      }
	      // other options
	    });
	
	    //Skill
	    jQuery('.skillbar').each(function () {
	      jQuery(this).appear(function () {
	        jQuery(this).find('.count-bar').animate({
	          width: jQuery(this).attr('data-percent')
	        }, 3000);
	        var percent = jQuery(this).attr('data-percent');
	        jQuery(this).find('.count').html('<span>' + percent + '</span>');
	      });
	    });
	  });
	
	  //header
	  function inits() {
	    window.addEventListener('scroll', function (e) {
	      var distanceY = window.pageYOffset || document.documentElement.scrollTop,
	          shrinkOn = 300,
	          header = document.querySelector(".for-sticky");
	      if (distanceY > shrinkOn) {
	        classie.add(header, "opacity-nav");
	      } else {
	        if (classie.has(header, "opacity-nav")) {
	          classie.remove(header, "opacity-nav");
	        }
	      }
	    });
	  }
	
	  window.onload = inits();
	
	  //nav-active
	  function onScroll(event) {
	    var scrollPosition = $(document).scrollTop();
	    $('.menu-list a').each(function () {
	      var currentLink = $(this);
	      var refElement = $(currentLink.attr("href"));
	      if (refElement.position().top <= scrollPosition && refElement.position().top + refElement.height() > scrollPosition) {
	        $('.menu-list a').removeClass("active");
	        currentLink.addClass("active");
	      } else {
	        currentLink.removeClass("active");
	      }
	    });
	  }
	})(jQuery);

/***/ },
/* 22 */
/***/ function(module, exports, __webpack_require__) {

	"use strict";
	
	exports.__esModule = true;
	
	var _defineProperty = __webpack_require__(23);
	
	var _defineProperty2 = _interopRequireDefault(_defineProperty);
	
	function _interopRequireDefault(obj) { return obj && obj.__esModule ? obj : { default: obj }; }
	
	exports.default = function (obj, key, value) {
	  if (key in obj) {
	    (0, _defineProperty2.default)(obj, key, {
	      value: value,
	      enumerable: true,
	      configurable: true,
	      writable: true
	    });
	  } else {
	    obj[key] = value;
	  }
	
	  return obj;
	};

/***/ },
/* 23 */
/***/ function(module, exports, __webpack_require__) {

	module.exports = { "default": __webpack_require__(24), __esModule: true };

/***/ },
/* 24 */
/***/ function(module, exports, __webpack_require__) {

	var $ = __webpack_require__(25);
	module.exports = function defineProperty(it, key, desc){
	  return $.setDesc(it, key, desc);
	};

/***/ },
/* 25 */
/***/ function(module, exports) {

	var $Object = Object;
	module.exports = {
	  create:     $Object.create,
	  getProto:   $Object.getPrototypeOf,
	  isEnum:     {}.propertyIsEnumerable,
	  getDesc:    $Object.getOwnPropertyDescriptor,
	  setDesc:    $Object.defineProperty,
	  setDescs:   $Object.defineProperties,
	  getKeys:    $Object.keys,
	  getNames:   $Object.getOwnPropertyNames,
	  getSymbols: $Object.getOwnPropertySymbols,
	  each:       [].forEach
	};

/***/ },
/* 26 */
/***/ function(module, exports, __webpack_require__) {

	"use strict";
	
	var _typeof2 = __webpack_require__(27);
	
	var _typeof3 = _interopRequireDefault(_typeof2);
	
	function _interopRequireDefault(obj) { return obj && obj.__esModule ? obj : { default: obj }; }
	
	// The MIT License (MIT)
	
	// Typed.js | Copyright (c) 2014 Matt Boldt | www.mattboldt.com
	
	// Permission is hereby granted, free of charge, to any person obtaining a copy
	// of this software and associated documentation files (the "Software"), to deal
	// in the Software without restriction, including without limitation the rights
	// to use, copy, modify, merge, publish, distribute, sublicense, and/or sell
	// copies of the Software, and to permit persons to whom the Software is
	// furnished to do so, subject to the following conditions:
	
	// The above copyright notice and this permission notice shall be included in
	// all copies or substantial portions of the Software.
	
	// THE SOFTWARE IS PROVIDED "AS IS", WITHOUT WARRANTY OF ANY KIND, EXPRESS OR
	// IMPLIED, INCLUDING BUT NOT LIMITED TO THE WARRANTIES OF MERCHANTABILITY,
	// FITNESS FOR A PARTICULAR PURPOSE AND NONINFRINGEMENT. IN NO EVENT SHALL THE
	// AUTHORS OR COPYRIGHT HOLDERS BE LIABLE FOR ANY CLAIM, DAMAGES OR OTHER
	// LIABILITY, WHETHER IN AN ACTION OF CONTRACT, TORT OR OTHERWISE, ARISING FROM,
	// OUT OF OR IN CONNECTION WITH THE SOFTWARE OR THE USE OR OTHER DEALINGS IN
	// THE SOFTWARE.
	
	
	!function ($) {
	
	    "use strict";
	
	    var Typed = function Typed(el, options) {
	
	        // chosen element to manipulate text
	        this.el = $(el);
	
	        // options
	        this.options = $.extend({}, $.fn.typed.defaults, options);
	
	        // attribute to type into
	        this.isInput = this.el.is('input');
	        this.attr = this.options.attr;
	
	        // show cursor
	        this.showCursor = this.isInput ? false : this.options.showCursor;
	
	        // text content of element
	        this.elContent = this.attr ? this.el.attr(this.attr) : this.el.text();
	
	        // html or plain text
	        this.contentType = this.options.contentType;
	
	        // typing speed
	        this.typeSpeed = this.options.typeSpeed;
	
	        // add a delay before typing starts
	        this.startDelay = this.options.startDelay;
	
	        // backspacing speed
	        this.backSpeed = this.options.backSpeed;
	
	        // amount of time to wait before backspacing
	        this.backDelay = this.options.backDelay;
	
	        // div containing strings
	        this.stringsElement = this.options.stringsElement;
	
	        // input strings of text
	        this.strings = this.options.strings;
	
	        // character number position of current string
	        this.strPos = 0;
	
	        // current array position
	        this.arrayPos = 0;
	
	        // number to stop backspacing on.
	        // default 0, can change depending on how many chars
	        // you want to remove at the time
	        this.stopNum = 0;
	
	        // Looping logic
	        this.loop = this.options.loop;
	        this.loopCount = this.options.loopCount;
	        this.curLoop = 0;
	
	        // for stopping
	        this.stop = false;
	
	        // custom cursor
	        this.cursorChar = this.options.cursorChar;
	
	        // shuffle the strings
	        this.shuffle = this.options.shuffle;
	        // the order of strings
	        this.sequence = [];
	
	        // All systems go!
	        this.build();
	    };
	
	    Typed.prototype = {
	
	        constructor: Typed,
	
	        init: function init() {
	            // begin the loop w/ first current string (global self.strings)
	            // current string will be passed as an argument each time after this
	            var self = this;
	            self.timeout = setTimeout(function () {
	                for (var i = 0; i < self.strings.length; ++i) {
	                    self.sequence[i] = i;
	                } // shuffle the array if true
	                if (self.shuffle) self.sequence = self.shuffleArray(self.sequence);
	
	                // Start typing
	                self.typewrite(self.strings[self.sequence[self.arrayPos]], self.strPos);
	            }, self.startDelay);
	        },
	
	        build: function build() {
	            var self = this;
	            // Insert cursor
	            if (this.showCursor === true) {
	                this.cursor = $("<span class=\"typed-cursor\">" + this.cursorChar + "</span>");
	                this.el.after(this.cursor);
	            }
	            if (this.stringsElement) {
	                self.strings = [];
	                this.stringsElement.hide();
	                var strings = this.stringsElement.find('p');
	                $.each(strings, function (key, value) {
	                    self.strings.push($(value).html());
	                });
	            }
	            this.init();
	        }
	
	        // pass current string state to each function, types 1 char per call
	
	        , typewrite: function typewrite(curString, curStrPos) {
	            // exit when stopped
	            if (this.stop === true) {
	                return;
	            }
	
	            // varying values for setTimeout during typing
	            // can't be global since number changes each time loop is executed
	            var humanize = Math.round(Math.random() * (100 - 30)) + this.typeSpeed;
	            var self = this;
	
	            // ------------- optional ------------- //
	            // backpaces a certain string faster
	            // ------------------------------------ //
	            // if (self.arrayPos == 1){
	            //  self.backDelay = 50;
	            // }
	            // else{ self.backDelay = 500; }
	
	            // contain typing function in a timeout humanize'd delay
	            self.timeout = setTimeout(function () {
	                // check for an escape character before a pause value
	                // format: \^\d+ .. eg: ^1000 .. should be able to print the ^ too using ^^
	                // single ^ are removed from string
	                var charPause = 0;
	                var substr = curString.substr(curStrPos);
	                if (substr.charAt(0) === '^') {
	                    var skip = 1; // skip atleast 1
	                    if (/^\^\d+/.test(substr)) {
	                        substr = /\d+/.exec(substr)[0];
	                        skip += substr.length;
	                        charPause = parseInt(substr);
	                    }
	
	                    // strip out the escape character and pause value so they're not printed
	                    curString = curString.substring(0, curStrPos) + curString.substring(curStrPos + skip);
	                }
	
	                if (self.contentType === 'html') {
	                    // skip over html tags while typing
	                    var curChar = curString.substr(curStrPos).charAt(0);
	                    if (curChar === '<' || curChar === '&') {
	                        var tag = '';
	                        var endTag = '';
	                        if (curChar === '<') {
	                            endTag = '>';
	                        } else {
	                            endTag = ';';
	                        }
	                        while (curString.substr(curStrPos).charAt(0) !== endTag) {
	                            tag += curString.substr(curStrPos).charAt(0);
	                            curStrPos++;
	                        }
	                        curStrPos++;
	                        tag += endTag;
	                    }
	                }
	
	                // timeout for any pause after a character
	                self.timeout = setTimeout(function () {
	                    if (curStrPos === curString.length) {
	                        // fires callback function
	                        self.options.onStringTyped(self.arrayPos);
	
	                        // is this the final string
	                        if (self.arrayPos === self.strings.length - 1) {
	                            // animation that occurs on the last typed string
	                            self.options.callback();
	
	                            self.curLoop++;
	
	                            // quit if we wont loop back
	                            if (self.loop === false || self.curLoop === self.loopCount) return;
	                        }
	
	                        self.timeout = setTimeout(function () {
	                            self.backspace(curString, curStrPos);
	                        }, self.backDelay);
	                    } else {
	
	                        /* call before functions if applicable */
	                        if (curStrPos === 0) self.options.preStringTyped(self.arrayPos);
	
	                        // start typing each new char into existing string
	                        // curString: arg, self.el.html: original text inside element
	                        var nextString = curString.substr(0, curStrPos + 1);
	                        if (self.attr) {
	                            self.el.attr(self.attr, nextString);
	                        } else {
	                            if (self.isInput) {
	                                self.el.val(nextString);
	                            } else if (self.contentType === 'html') {
	                                self.el.html(nextString);
	                            } else {
	                                self.el.text(nextString);
	                            }
	                        }
	
	                        // add characters one by one
	                        curStrPos++;
	                        // loop the function
	                        self.typewrite(curString, curStrPos);
	                    }
	                    // end of character pause
	                }, charPause);
	
	                // humanized value for typing
	            }, humanize);
	        },
	
	        backspace: function backspace(curString, curStrPos) {
	            // exit when stopped
	            if (this.stop === true) {
	                return;
	            }
	
	            // varying values for setTimeout during typing
	            // can't be global since number changes each time loop is executed
	            var humanize = Math.round(Math.random() * (100 - 30)) + this.backSpeed;
	            var self = this;
	
	            self.timeout = setTimeout(function () {
	
	                // ----- this part is optional ----- //
	                // check string array position
	                // on the first string, only delete one word
	                // the stopNum actually represents the amount of chars to
	                // keep in the current string. In my case it's 14.
	                // if (self.arrayPos == 1){
	                //  self.stopNum = 14;
	                // }
	                //every other time, delete the whole typed string
	                // else{
	                //  self.stopNum = 0;
	                // }
	
	                if (self.contentType === 'html') {
	                    // skip over html tags while backspacing
	                    if (curString.substr(curStrPos).charAt(0) === '>') {
	                        var tag = '';
	                        while (curString.substr(curStrPos).charAt(0) !== '<') {
	                            tag -= curString.substr(curStrPos).charAt(0);
	                            curStrPos--;
	                        }
	                        curStrPos--;
	                        tag += '<';
	                    }
	                }
	
	                // ----- continue important stuff ----- //
	                // replace text with base text + typed characters
	                var nextString = curString.substr(0, curStrPos);
	                if (self.attr) {
	                    self.el.attr(self.attr, nextString);
	                } else {
	                    if (self.isInput) {
	                        self.el.val(nextString);
	                    } else if (self.contentType === 'html') {
	                        self.el.html(nextString);
	                    } else {
	                        self.el.text(nextString);
	                    }
	                }
	
	                // if the number (id of character in current string) is
	                // less than the stop number, keep going
	                if (curStrPos > self.stopNum) {
	                    // subtract characters one by one
	                    curStrPos--;
	                    // loop the function
	                    self.backspace(curString, curStrPos);
	                }
	                // if the stop number has been reached, increase
	                // array position to next string
	                else if (curStrPos <= self.stopNum) {
	                        self.arrayPos++;
	
	                        if (self.arrayPos === self.strings.length) {
	                            self.arrayPos = 0;
	
	                            // Shuffle sequence again
	                            if (self.shuffle) self.sequence = self.shuffleArray(self.sequence);
	
	                            self.init();
	                        } else self.typewrite(self.strings[self.sequence[self.arrayPos]], curStrPos);
	                    }
	
	                // humanized value for typing
	            }, humanize);
	        }
	        /**
	         * Shuffles the numbers in the given array.
	         * @param {Array} array
	         * @returns {Array}
	         */
	        , shuffleArray: function shuffleArray(array) {
	            var tmp,
	                current,
	                top = array.length;
	            if (top) while (--top) {
	                current = Math.floor(Math.random() * (top + 1));
	                tmp = array[current];
	                array[current] = array[top];
	                array[top] = tmp;
	            }
	            return array;
	        }
	
	        // Start & Stop currently not working
	
	        // , stop: function() {
	        //     var self = this;
	
	        //     self.stop = true;
	        //     clearInterval(self.timeout);
	        // }
	
	        // , start: function() {
	        //     var self = this;
	        //     if(self.stop === false)
	        //        return;
	
	        //     this.stop = false;
	        //     this.init();
	        // }
	
	        // Reset and rebuild the element
	
	        , reset: function reset() {
	            var self = this;
	            clearInterval(self.timeout);
	            var id = this.el.attr('id');
	            this.el.after('<span id="' + id + '"/>');
	            this.el.remove();
	            if (typeof this.cursor !== 'undefined') {
	                this.cursor.remove();
	            }
	            // Send the callback
	            self.options.resetCallback();
	        }
	
	    };
	
	    $.fn.typed = function (option) {
	        return this.each(function () {
	            var $this = $(this),
	                data = $this.data('typed'),
	                options = (typeof option === "undefined" ? "undefined" : (0, _typeof3.default)(option)) == 'object' && option;
	            if (!data) $this.data('typed', data = new Typed(this, options));
	            if (typeof option == 'string') data[option]();
	        });
	    };
	
	    $.fn.typed.defaults = {
	        strings: ["These are the default values...", "You know what you should do?", "Use your own!", "Have a great day!"],
	        stringsElement: null,
	        // typing speed
	        typeSpeed: 0,
	        // time before typing starts
	        startDelay: 0,
	        // backspacing speed
	        backSpeed: 0,
	        // shuffle the strings
	        shuffle: false,
	        // time before backspacing
	        backDelay: 500,
	        // loop
	        loop: false,
	        // false = infinite
	        loopCount: false,
	        // show cursor
	        showCursor: true,
	        // character for cursor
	        cursorChar: "|",
	        // attribute to type (null == text)
	        attr: null,
	        // either html or text
	        contentType: 'html',
	        // call when done callback function
	        callback: function callback() {},
	        // starting callback function before each string
	        preStringTyped: function preStringTyped() {},
	        //callback for every typed string
	        onStringTyped: function onStringTyped() {},
	        // callback for reset
	        resetCallback: function resetCallback() {}
	    };
	}(window.jQuery);

/***/ },
/* 27 */
/***/ function(module, exports, __webpack_require__) {

	"use strict";
	
	var _Symbol = __webpack_require__(28)["default"];
	
	exports["default"] = function (obj) {
	  return obj && obj.constructor === _Symbol ? "symbol" : typeof obj;
	};
	
	exports.__esModule = true;

/***/ },
/* 28 */
/***/ function(module, exports, __webpack_require__) {

	module.exports = { "default": __webpack_require__(29), __esModule: true };

/***/ },
/* 29 */
/***/ function(module, exports, __webpack_require__) {

	__webpack_require__(30);
	__webpack_require__(57);
	module.exports = __webpack_require__(36).Symbol;

/***/ },
/* 30 */
/***/ function(module, exports, __webpack_require__) {

	'use strict';
	// ECMAScript 6 symbols shim
	var $              = __webpack_require__(25)
	  , global         = __webpack_require__(31)
	  , has            = __webpack_require__(32)
	  , DESCRIPTORS    = __webpack_require__(33)
	  , $export        = __webpack_require__(35)
	  , redefine       = __webpack_require__(39)
	  , $fails         = __webpack_require__(34)
	  , shared         = __webpack_require__(42)
	  , setToStringTag = __webpack_require__(43)
	  , uid            = __webpack_require__(45)
	  , wks            = __webpack_require__(44)
	  , keyOf          = __webpack_require__(46)
	  , $names         = __webpack_require__(51)
	  , enumKeys       = __webpack_require__(52)
	  , isArray        = __webpack_require__(53)
	  , anObject       = __webpack_require__(54)
	  , toIObject      = __webpack_require__(47)
	  , createDesc     = __webpack_require__(41)
	  , getDesc        = $.getDesc
	  , setDesc        = $.setDesc
	  , _create        = $.create
	  , getNames       = $names.get
	  , $Symbol        = global.Symbol
	  , $JSON          = global.JSON
	  , _stringify     = $JSON && $JSON.stringify
	  , setter         = false
	  , HIDDEN         = wks('_hidden')
	  , isEnum         = $.isEnum
	  , SymbolRegistry = shared('symbol-registry')
	  , AllSymbols     = shared('symbols')
	  , useNative      = typeof $Symbol == 'function'
	  , ObjectProto    = Object.prototype;
	
	// fallback for old Android, https://code.google.com/p/v8/issues/detail?id=687
	var setSymbolDesc = DESCRIPTORS && $fails(function(){
	  return _create(setDesc({}, 'a', {
	    get: function(){ return setDesc(this, 'a', {value: 7}).a; }
	  })).a != 7;
	}) ? function(it, key, D){
	  var protoDesc = getDesc(ObjectProto, key);
	  if(protoDesc)delete ObjectProto[key];
	  setDesc(it, key, D);
	  if(protoDesc && it !== ObjectProto)setDesc(ObjectProto, key, protoDesc);
	} : setDesc;
	
	var wrap = function(tag){
	  var sym = AllSymbols[tag] = _create($Symbol.prototype);
	  sym._k = tag;
	  DESCRIPTORS && setter && setSymbolDesc(ObjectProto, tag, {
	    configurable: true,
	    set: function(value){
	      if(has(this, HIDDEN) && has(this[HIDDEN], tag))this[HIDDEN][tag] = false;
	      setSymbolDesc(this, tag, createDesc(1, value));
	    }
	  });
	  return sym;
	};
	
	var isSymbol = function(it){
	  return typeof it == 'symbol';
	};
	
	var $defineProperty = function defineProperty(it, key, D){
	  if(D && has(AllSymbols, key)){
	    if(!D.enumerable){
	      if(!has(it, HIDDEN))setDesc(it, HIDDEN, createDesc(1, {}));
	      it[HIDDEN][key] = true;
	    } else {
	      if(has(it, HIDDEN) && it[HIDDEN][key])it[HIDDEN][key] = false;
	      D = _create(D, {enumerable: createDesc(0, false)});
	    } return setSymbolDesc(it, key, D);
	  } return setDesc(it, key, D);
	};
	var $defineProperties = function defineProperties(it, P){
	  anObject(it);
	  var keys = enumKeys(P = toIObject(P))
	    , i    = 0
	    , l = keys.length
	    , key;
	  while(l > i)$defineProperty(it, key = keys[i++], P[key]);
	  return it;
	};
	var $create = function create(it, P){
	  return P === undefined ? _create(it) : $defineProperties(_create(it), P);
	};
	var $propertyIsEnumerable = function propertyIsEnumerable(key){
	  var E = isEnum.call(this, key);
	  return E || !has(this, key) || !has(AllSymbols, key) || has(this, HIDDEN) && this[HIDDEN][key]
	    ? E : true;
	};
	var $getOwnPropertyDescriptor = function getOwnPropertyDescriptor(it, key){
	  var D = getDesc(it = toIObject(it), key);
	  if(D && has(AllSymbols, key) && !(has(it, HIDDEN) && it[HIDDEN][key]))D.enumerable = true;
	  return D;
	};
	var $getOwnPropertyNames = function getOwnPropertyNames(it){
	  var names  = getNames(toIObject(it))
	    , result = []
	    , i      = 0
	    , key;
	  while(names.length > i)if(!has(AllSymbols, key = names[i++]) && key != HIDDEN)result.push(key);
	  return result;
	};
	var $getOwnPropertySymbols = function getOwnPropertySymbols(it){
	  var names  = getNames(toIObject(it))
	    , result = []
	    , i      = 0
	    , key;
	  while(names.length > i)if(has(AllSymbols, key = names[i++]))result.push(AllSymbols[key]);
	  return result;
	};
	var $stringify = function stringify(it){
	  if(it === undefined || isSymbol(it))return; // IE8 returns string on undefined
	  var args = [it]
	    , i    = 1
	    , $$   = arguments
	    , replacer, $replacer;
	  while($$.length > i)args.push($$[i++]);
	  replacer = args[1];
	  if(typeof replacer == 'function')$replacer = replacer;
	  if($replacer || !isArray(replacer))replacer = function(key, value){
	    if($replacer)value = $replacer.call(this, key, value);
	    if(!isSymbol(value))return value;
	  };
	  args[1] = replacer;
	  return _stringify.apply($JSON, args);
	};
	var buggyJSON = $fails(function(){
	  var S = $Symbol();
	  // MS Edge converts symbol values to JSON as {}
	  // WebKit converts symbol values to JSON as null
	  // V8 throws on boxed symbols
	  return _stringify([S]) != '[null]' || _stringify({a: S}) != '{}' || _stringify(Object(S)) != '{}';
	});
	
	// 19.4.1.1 Symbol([description])
	if(!useNative){
	  $Symbol = function Symbol(){
	    if(isSymbol(this))throw TypeError('Symbol is not a constructor');
	    return wrap(uid(arguments.length > 0 ? arguments[0] : undefined));
	  };
	  redefine($Symbol.prototype, 'toString', function toString(){
	    return this._k;
	  });
	
	  isSymbol = function(it){
	    return it instanceof $Symbol;
	  };
	
	  $.create     = $create;
	  $.isEnum     = $propertyIsEnumerable;
	  $.getDesc    = $getOwnPropertyDescriptor;
	  $.setDesc    = $defineProperty;
	  $.setDescs   = $defineProperties;
	  $.getNames   = $names.get = $getOwnPropertyNames;
	  $.getSymbols = $getOwnPropertySymbols;
	
	  if(DESCRIPTORS && !__webpack_require__(56)){
	    redefine(ObjectProto, 'propertyIsEnumerable', $propertyIsEnumerable, true);
	  }
	}
	
	var symbolStatics = {
	  // 19.4.2.1 Symbol.for(key)
	  'for': function(key){
	    return has(SymbolRegistry, key += '')
	      ? SymbolRegistry[key]
	      : SymbolRegistry[key] = $Symbol(key);
	  },
	  // 19.4.2.5 Symbol.keyFor(sym)
	  keyFor: function keyFor(key){
	    return keyOf(SymbolRegistry, key);
	  },
	  useSetter: function(){ setter = true; },
	  useSimple: function(){ setter = false; }
	};
	// 19.4.2.2 Symbol.hasInstance
	// 19.4.2.3 Symbol.isConcatSpreadable
	// 19.4.2.4 Symbol.iterator
	// 19.4.2.6 Symbol.match
	// 19.4.2.8 Symbol.replace
	// 19.4.2.9 Symbol.search
	// 19.4.2.10 Symbol.species
	// 19.4.2.11 Symbol.split
	// 19.4.2.12 Symbol.toPrimitive
	// 19.4.2.13 Symbol.toStringTag
	// 19.4.2.14 Symbol.unscopables
	$.each.call((
	  'hasInstance,isConcatSpreadable,iterator,match,replace,search,' +
	  'species,split,toPrimitive,toStringTag,unscopables'
	).split(','), function(it){
	  var sym = wks(it);
	  symbolStatics[it] = useNative ? sym : wrap(sym);
	});
	
	setter = true;
	
	$export($export.G + $export.W, {Symbol: $Symbol});
	
	$export($export.S, 'Symbol', symbolStatics);
	
	$export($export.S + $export.F * !useNative, 'Object', {
	  // 19.1.2.2 Object.create(O [, Properties])
	  create: $create,
	  // 19.1.2.4 Object.defineProperty(O, P, Attributes)
	  defineProperty: $defineProperty,
	  // 19.1.2.3 Object.defineProperties(O, Properties)
	  defineProperties: $defineProperties,
	  // 19.1.2.6 Object.getOwnPropertyDescriptor(O, P)
	  getOwnPropertyDescriptor: $getOwnPropertyDescriptor,
	  // 19.1.2.7 Object.getOwnPropertyNames(O)
	  getOwnPropertyNames: $getOwnPropertyNames,
	  // 19.1.2.8 Object.getOwnPropertySymbols(O)
	  getOwnPropertySymbols: $getOwnPropertySymbols
	});
	
	// 24.3.2 JSON.stringify(value [, replacer [, space]])
	$JSON && $export($export.S + $export.F * (!useNative || buggyJSON), 'JSON', {stringify: $stringify});
	
	// 19.4.3.5 Symbol.prototype[@@toStringTag]
	setToStringTag($Symbol, 'Symbol');
	// 20.2.1.9 Math[@@toStringTag]
	setToStringTag(Math, 'Math', true);
	// 24.3.3 JSON[@@toStringTag]
	setToStringTag(global.JSON, 'JSON', true);

/***/ },
/* 31 */
/***/ function(module, exports) {

	// https://github.com/zloirock/core-js/issues/86#issuecomment-115759028
	var global = module.exports = typeof window != 'undefined' && window.Math == Math
	  ? window : typeof self != 'undefined' && self.Math == Math ? self : Function('return this')();
	if(typeof __g == 'number')__g = global; // eslint-disable-line no-undef

/***/ },
/* 32 */
/***/ function(module, exports) {

	var hasOwnProperty = {}.hasOwnProperty;
	module.exports = function(it, key){
	  return hasOwnProperty.call(it, key);
	};

/***/ },
/* 33 */
/***/ function(module, exports, __webpack_require__) {

	// Thank's IE8 for his funny defineProperty
	module.exports = !__webpack_require__(34)(function(){
	  return Object.defineProperty({}, 'a', {get: function(){ return 7; }}).a != 7;
	});

/***/ },
/* 34 */
/***/ function(module, exports) {

	module.exports = function(exec){
	  try {
	    return !!exec();
	  } catch(e){
	    return true;
	  }
	};

/***/ },
/* 35 */
/***/ function(module, exports, __webpack_require__) {

	var global    = __webpack_require__(31)
	  , core      = __webpack_require__(36)
	  , ctx       = __webpack_require__(37)
	  , PROTOTYPE = 'prototype';
	
	var $export = function(type, name, source){
	  var IS_FORCED = type & $export.F
	    , IS_GLOBAL = type & $export.G
	    , IS_STATIC = type & $export.S
	    , IS_PROTO  = type & $export.P
	    , IS_BIND   = type & $export.B
	    , IS_WRAP   = type & $export.W
	    , exports   = IS_GLOBAL ? core : core[name] || (core[name] = {})
	    , target    = IS_GLOBAL ? global : IS_STATIC ? global[name] : (global[name] || {})[PROTOTYPE]
	    , key, own, out;
	  if(IS_GLOBAL)source = name;
	  for(key in source){
	    // contains in native
	    own = !IS_FORCED && target && key in target;
	    if(own && key in exports)continue;
	    // export native or passed
	    out = own ? target[key] : source[key];
	    // prevent global pollution for namespaces
	    exports[key] = IS_GLOBAL && typeof target[key] != 'function' ? source[key]
	    // bind timers to global for call from export context
	    : IS_BIND && own ? ctx(out, global)
	    // wrap global constructors for prevent change them in library
	    : IS_WRAP && target[key] == out ? (function(C){
	      var F = function(param){
	        return this instanceof C ? new C(param) : C(param);
	      };
	      F[PROTOTYPE] = C[PROTOTYPE];
	      return F;
	    // make static versions for prototype methods
	    })(out) : IS_PROTO && typeof out == 'function' ? ctx(Function.call, out) : out;
	    if(IS_PROTO)(exports[PROTOTYPE] || (exports[PROTOTYPE] = {}))[key] = out;
	  }
	};
	// type bitmap
	$export.F = 1;  // forced
	$export.G = 2;  // global
	$export.S = 4;  // static
	$export.P = 8;  // proto
	$export.B = 16; // bind
	$export.W = 32; // wrap
	module.exports = $export;

/***/ },
/* 36 */
/***/ function(module, exports) {

	var core = module.exports = {version: '1.2.6'};
	if(typeof __e == 'number')__e = core; // eslint-disable-line no-undef

/***/ },
/* 37 */
/***/ function(module, exports, __webpack_require__) {

	// optional / simple context binding
	var aFunction = __webpack_require__(38);
	module.exports = function(fn, that, length){
	  aFunction(fn);
	  if(that === undefined)return fn;
	  switch(length){
	    case 1: return function(a){
	      return fn.call(that, a);
	    };
	    case 2: return function(a, b){
	      return fn.call(that, a, b);
	    };
	    case 3: return function(a, b, c){
	      return fn.call(that, a, b, c);
	    };
	  }
	  return function(/* ...args */){
	    return fn.apply(that, arguments);
	  };
	};

/***/ },
/* 38 */
/***/ function(module, exports) {

	module.exports = function(it){
	  if(typeof it != 'function')throw TypeError(it + ' is not a function!');
	  return it;
	};

/***/ },
/* 39 */
/***/ function(module, exports, __webpack_require__) {

	module.exports = __webpack_require__(40);

/***/ },
/* 40 */
/***/ function(module, exports, __webpack_require__) {

	var $          = __webpack_require__(25)
	  , createDesc = __webpack_require__(41);
	module.exports = __webpack_require__(33) ? function(object, key, value){
	  return $.setDesc(object, key, createDesc(1, value));
	} : function(object, key, value){
	  object[key] = value;
	  return object;
	};

/***/ },
/* 41 */
/***/ function(module, exports) {

	module.exports = function(bitmap, value){
	  return {
	    enumerable  : !(bitmap & 1),
	    configurable: !(bitmap & 2),
	    writable    : !(bitmap & 4),
	    value       : value
	  };
	};

/***/ },
/* 42 */
/***/ function(module, exports, __webpack_require__) {

	var global = __webpack_require__(31)
	  , SHARED = '__core-js_shared__'
	  , store  = global[SHARED] || (global[SHARED] = {});
	module.exports = function(key){
	  return store[key] || (store[key] = {});
	};

/***/ },
/* 43 */
/***/ function(module, exports, __webpack_require__) {

	var def = __webpack_require__(25).setDesc
	  , has = __webpack_require__(32)
	  , TAG = __webpack_require__(44)('toStringTag');
	
	module.exports = function(it, tag, stat){
	  if(it && !has(it = stat ? it : it.prototype, TAG))def(it, TAG, {configurable: true, value: tag});
	};

/***/ },
/* 44 */
/***/ function(module, exports, __webpack_require__) {

	var store  = __webpack_require__(42)('wks')
	  , uid    = __webpack_require__(45)
	  , Symbol = __webpack_require__(31).Symbol;
	module.exports = function(name){
	  return store[name] || (store[name] =
	    Symbol && Symbol[name] || (Symbol || uid)('Symbol.' + name));
	};

/***/ },
/* 45 */
/***/ function(module, exports) {

	var id = 0
	  , px = Math.random();
	module.exports = function(key){
	  return 'Symbol('.concat(key === undefined ? '' : key, ')_', (++id + px).toString(36));
	};

/***/ },
/* 46 */
/***/ function(module, exports, __webpack_require__) {

	var $         = __webpack_require__(25)
	  , toIObject = __webpack_require__(47);
	module.exports = function(object, el){
	  var O      = toIObject(object)
	    , keys   = $.getKeys(O)
	    , length = keys.length
	    , index  = 0
	    , key;
	  while(length > index)if(O[key = keys[index++]] === el)return key;
	};

/***/ },
/* 47 */
/***/ function(module, exports, __webpack_require__) {

	// to indexed object, toObject with fallback for non-array-like ES3 strings
	var IObject = __webpack_require__(48)
	  , defined = __webpack_require__(50);
	module.exports = function(it){
	  return IObject(defined(it));
	};

/***/ },
/* 48 */
/***/ function(module, exports, __webpack_require__) {

	// fallback for non-array-like ES3 and non-enumerable old V8 strings
	var cof = __webpack_require__(49);
	module.exports = Object('z').propertyIsEnumerable(0) ? Object : function(it){
	  return cof(it) == 'String' ? it.split('') : Object(it);
	};

/***/ },
/* 49 */
/***/ function(module, exports) {

	var toString = {}.toString;
	
	module.exports = function(it){
	  return toString.call(it).slice(8, -1);
	};

/***/ },
/* 50 */
/***/ function(module, exports) {

	// 7.2.1 RequireObjectCoercible(argument)
	module.exports = function(it){
	  if(it == undefined)throw TypeError("Can't call method on  " + it);
	  return it;
	};

/***/ },
/* 51 */
/***/ function(module, exports, __webpack_require__) {

	// fallback for IE11 buggy Object.getOwnPropertyNames with iframe and window
	var toIObject = __webpack_require__(47)
	  , getNames  = __webpack_require__(25).getNames
	  , toString  = {}.toString;
	
	var windowNames = typeof window == 'object' && Object.getOwnPropertyNames
	  ? Object.getOwnPropertyNames(window) : [];
	
	var getWindowNames = function(it){
	  try {
	    return getNames(it);
	  } catch(e){
	    return windowNames.slice();
	  }
	};
	
	module.exports.get = function getOwnPropertyNames(it){
	  if(windowNames && toString.call(it) == '[object Window]')return getWindowNames(it);
	  return getNames(toIObject(it));
	};

/***/ },
/* 52 */
/***/ function(module, exports, __webpack_require__) {

	// all enumerable object keys, includes symbols
	var $ = __webpack_require__(25);
	module.exports = function(it){
	  var keys       = $.getKeys(it)
	    , getSymbols = $.getSymbols;
	  if(getSymbols){
	    var symbols = getSymbols(it)
	      , isEnum  = $.isEnum
	      , i       = 0
	      , key;
	    while(symbols.length > i)if(isEnum.call(it, key = symbols[i++]))keys.push(key);
	  }
	  return keys;
	};

/***/ },
/* 53 */
/***/ function(module, exports, __webpack_require__) {

	// 7.2.2 IsArray(argument)
	var cof = __webpack_require__(49);
	module.exports = Array.isArray || function(arg){
	  return cof(arg) == 'Array';
	};

/***/ },
/* 54 */
/***/ function(module, exports, __webpack_require__) {

	var isObject = __webpack_require__(55);
	module.exports = function(it){
	  if(!isObject(it))throw TypeError(it + ' is not an object!');
	  return it;
	};

/***/ },
/* 55 */
/***/ function(module, exports) {

	module.exports = function(it){
	  return typeof it === 'object' ? it !== null : typeof it === 'function';
	};

/***/ },
/* 56 */
/***/ function(module, exports) {

	module.exports = true;

/***/ },
/* 57 */
/***/ function(module, exports) {



/***/ },
/* 58 */
/***/ function(module, exports, __webpack_require__) {

	module.exports={render:function (){var _vm=this;var _h=_vm.$createElement;var _c=_vm._self._c||_h;
	  return _c('div', [_vm._m(0), _vm._v(" "), _vm._m(1), _vm._v(" "), _c('div', {
	    staticClass: "content-wrap"
	  }, [_c('div', {
	    staticClass: "content"
	  }, [_vm._m(2), _vm._v(" "), _c('section', {
	    attrs: {
	      "id": "about"
	    }
	  }, [_vm._m(3), _vm._v(" "), _c('div', {
	    staticClass: "col-md-6 col-sm-12 col-xs-12 white-col"
	  }, [_c('div', {
	    staticClass: "row"
	  }, [_c('div', {
	    staticClass: "owl-carousel2"
	  }, [_vm._m(4), _vm._v(" "), _c('div', {
	    staticClass: "col-md-12 col-sm-12 col-xs-12 white-col"
	  }, [_c('div', {
	    staticClass: "row"
	  }, [_c('div', {
	    staticClass: "col-md-8 col-md-offset-2 col-sm-8 col-sm-offset-2 col-xs-12"
	  }, [_c('div', {
	    staticClass: "wrap-about"
	  }, [_c('table', {
	    staticClass: "w-content"
	  }, [_vm._m(5), _vm._v(" "), _vm._m(6), _vm._v(" "), _vm._m(7), _vm._v(" "), _vm._m(8), _vm._v(" "), _vm._m(9), _vm._v(" "), _vm._m(10), _vm._v(" "), (0) ? _c('tr', [_c('td', {
	    staticClass: "title"
	  }, [_vm._v("Behance")]), _vm._v(" "), _c('td', {
	    staticClass: "break"
	  }, [_vm._v(":")]), _vm._v(" "), _c('td', [_vm._v(" m-reza")])]) : _vm._e()])])])])])])])])]), _vm._v(" "), _vm._m(11), _vm._v(" "), _vm._m(12), _vm._v(" "), _vm._m(13), _vm._v(" "), _vm._m(14), _vm._v(" "), _vm._m(15), _vm._v(" "), _vm._m(16), _vm._v(" "), _vm._m(17), _vm._v(" "), _vm._m(18), _vm._v(" "), _vm._m(19), _vm._v(" "), _vm._m(20)])])])
	},staticRenderFns: [function (){var _vm=this;var _h=_vm.$createElement;var _c=_vm._self._c||_h;
	  return _c('div', {
	    attrs: {
	      "id": "preloader"
	    }
	  }, [_c('div', {
	    attrs: {
	      "id": "status"
	    }
	  }, [_c('img', {
	    attrs: {
	      "alt": "logo",
	      "src": __webpack_require__(59)
	    }
	  })])])
	},function (){var _vm=this;var _h=_vm.$createElement;var _c=_vm._self._c||_h;
	  return _c('div', {
	    staticClass: "header"
	  }, [_c('div', {
	    staticClass: "for-sticky"
	  }, [_c('div', {
	    staticClass: "col-md-2 col-xs-6 logo"
	  }, [_c('a', {
	    attrs: {
	      "href": "index.html"
	    }
	  }, [_c('img', {
	    staticClass: "logo-nav",
	    attrs: {
	      "alt": "logo",
	      "src": __webpack_require__(60)
	    }
	  })])])]), _vm._v(" "), _c('div', {
	    staticClass: "menu-wrap"
	  }, [_c('nav', {
	    staticClass: "menu"
	  }, [_c('div', {
	    staticClass: "menu-list"
	  }, [_c('a', {
	    staticClass: "active",
	    attrs: {
	      "data-scroll": "",
	      "href": "#home"
	    }
	  }, [_c('span', [_vm._v("Home")])]), _vm._v(" "), _c('a', {
	    attrs: {
	      "data-scroll": "",
	      "href": "#about"
	    }
	  }, [_c('span', [_vm._v("About")])]), _vm._v(" "), _c('a', {
	    attrs: {
	      "data-scroll": "",
	      "href": "#work"
	    }
	  }, [_c('span', [_vm._v("Work")])]), _vm._v(" "), _c('a', {
	    attrs: {
	      "data-scroll": "",
	      "href": "#services"
	    }
	  }, [_c('span', [_vm._v("Services")])]), _vm._v(" "), _c('a', {
	    attrs: {
	      "data-scroll": "",
	      "href": "#employement"
	    }
	  }, [_c('span', [_vm._v("Employement")])]), _vm._v(" "), _c('a', {
	    attrs: {
	      "data-scroll": "",
	      "href": "#skill"
	    }
	  }, [_c('span', [_vm._v("Skills")])]), _vm._v(" "), _c('a', {
	    attrs: {
	      "data-scroll": "",
	      "href": "#education"
	    }
	  }, [_c('span', [_vm._v("Education")])]), _vm._v(" "), _c('a', {
	    attrs: {
	      "data-scroll": "",
	      "href": "#testimonial"
	    }
	  }, [_c('span', [_vm._v("Testimonial")])]), _vm._v(" "), _c('a', {
	    attrs: {
	      "data-scroll": "",
	      "href": "#blog"
	    }
	  }, [_c('span', [_vm._v("Blog")])]), _vm._v(" "), _c('a', {
	    attrs: {
	      "data-scroll": "",
	      "href": "#contact"
	    }
	  }, [_c('span', [_vm._v("Contact")])])])]), _vm._v(" "), _c('button', {
	    staticClass: "close-button",
	    attrs: {
	      "id": "close-button"
	    }
	  }, [_vm._v("Close Menu")])]), _vm._v(" "), _c('button', {
	    staticClass: "menu-button",
	    attrs: {
	      "id": "open-button"
	    }
	  }, [_c('span'), _vm._v(" "), _c('span'), _vm._v(" "), _c('span')])])
	},function (){var _vm=this;var _h=_vm.$createElement;var _c=_vm._self._c||_h;
	  return _c('section', {
	    attrs: {
	      "id": "home"
	    }
	  }, [_c('div', {
	    staticClass: "container"
	  }, [_c('div', {
	    staticClass: "row"
	  }, [_c('div', {
	    staticClass: "wrap-hero-content"
	  }, [_c('div', {
	    staticClass: "hero-content"
	  }, [_c('h1', [_vm._v("Hello")]), _vm._v(" "), _c('br'), _vm._v(" "), _c('span', {
	    staticClass: "typed"
	  })])]), _vm._v(" "), _c('div', {
	    staticClass: "mouse-icon margin-20"
	  }, [_c('div', {
	    staticClass: "scroll"
	  })])])])])
	},function (){var _vm=this;var _h=_vm.$createElement;var _c=_vm._self._c||_h;
	  return _c('div', {
	    staticClass: "col-md-6 col-xs-12 no-pad"
	  }, [_c('div', {
	    staticClass: "bg-about"
	  })])
	},function (){var _vm=this;var _h=_vm.$createElement;var _c=_vm._self._c||_h;
	  return _c('div', {
	    staticClass: "col-md-12"
	  }, [_c('div', {
	    staticClass: "wrap-about"
	  }, [_c('div', {
	    staticClass: "w-content"
	  }, [_c('p', {
	    staticClass: "head-about"
	  }, [_vm._v("\n                      Design is the method of putting form and content together. Design, just as art, has multiple definitions there is no single definition. Design can be art. Design can be aesthetics. Design is so simple, that's why it is so complicated.\n                    ")]), _vm._v(" "), _c('h5', {
	    staticClass: "name"
	  }, [_vm._v("\n                      M. Reza\n                    ")]), _vm._v(" "), _c('img', {
	    attrs: {
	      "alt": "signature",
	      "src": __webpack_require__(61)
	    }
	  })])])])
	},function (){var _vm=this;var _h=_vm.$createElement;var _c=_vm._self._c||_h;
	  return _c('tr', [_c('td', {
	    staticClass: "title"
	  }, [_vm._v("Name ")]), _vm._v(" "), _c('td', {
	    staticClass: "break"
	  }, [_vm._v(":")]), _vm._v(" "), _c('td', [_vm._v(" 李世宇")])])
	},function (){var _vm=this;var _h=_vm.$createElement;var _c=_vm._self._c||_h;
	  return _c('tr', [_c('td', {
	    staticClass: "title"
	  }, [_vm._v("Phone ")]), _vm._v(" "), _c('td', {
	    staticClass: "break"
	  }, [_vm._v(":")]), _vm._v(" "), _c('td', [_vm._v(" 183XXXXXXXX")])])
	},function (){var _vm=this;var _h=_vm.$createElement;var _c=_vm._self._c||_h;
	  return _c('tr', [_c('td', {
	    staticClass: "title"
	  }, [_vm._v("Email ")]), _vm._v(" "), _c('td', {
	    staticClass: "break"
	  }, [_vm._v(":")]), _vm._v(" "), _c('td', [_vm._v(" sowayli@gmail.com")])])
	},function (){var _vm=this;var _h=_vm.$createElement;var _c=_vm._self._c||_h;
	  return _c('tr', [_c('td', {
	    staticClass: "title"
	  }, [_vm._v("Address ")]), _vm._v(" "), _c('td', {
	    staticClass: "break"
	  }, [_vm._v(":")]), _vm._v(" "), _c('td', [_vm._v(" 北京")])])
	},function (){var _vm=this;var _h=_vm.$createElement;var _c=_vm._self._c||_h;
	  return _c('tr', [_c('td', {
	    staticClass: "title"
	  }, [_vm._v("Skype ")]), _vm._v(" "), _c('td', {
	    staticClass: "break"
	  }, [_vm._v(":")]), _vm._v(" "), _c('td', [_vm._v(" lishiyu")])])
	},function (){var _vm=this;var _h=_vm.$createElement;var _c=_vm._self._c||_h;
	  return _c('tr', [_c('td', {
	    staticClass: "title"
	  }, [_vm._v("QQ ")]), _vm._v(" "), _c('td', {
	    staticClass: "break"
	  }, [_vm._v(":")]), _vm._v(" "), _c('td', [_vm._v(" 1506085633")])])
	},function (){var _vm=this;var _h=_vm.$createElement;var _c=_vm._self._c||_h;
	  return _c('section', {
	    staticClass: "grey-bg mar-tm-10",
	    attrs: {
	      "id": "work"
	    }
	  }, [_c('div', {
	    staticClass: "container"
	  }, [_c('div', {
	    staticClass: "row"
	  }, [_c('div', {
	    staticClass: "col-md-3"
	  }, [_c('h3', {
	    staticClass: "title-small"
	  }, [_c('span', [_vm._v("Work")])]), _vm._v(" "), _c('p', {
	    staticClass: "content-detail"
	  }, [_vm._v("\n                Ut wisi enim ad minim veniam, quis nostrud exerci tation ullamcorper suscipit lobortis nisl ut aliquip ex ea commodo consequat. "), _c('br'), _c('br'), _vm._v("Duis autem vel eum iriure dolor in hendrerit in vulputate velit esse molestie consequat, vel illum dolore eu feugiat nulla facilisis at vero eros.\n              ")])]), _vm._v(" "), _c('div', {
	    staticClass: "col-md-9 content-right"
	  }, [_c('ul', {
	    staticClass: "portfolio-image"
	  }, [_c('li', {
	    staticClass: "col-md-6"
	  }, [_c('a', {
	    attrs: {
	      "href": "../../../../assets/image/bw-1.png"
	    }
	  }, [_c('img', {
	    attrs: {
	      "alt": "image",
	      "src": __webpack_require__(62)
	    }
	  }), _vm._v(" "), _c('div', {
	    staticClass: "decription-wrap"
	  }, [_c('div', {
	    staticClass: "image-bg"
	  }, [_c('p', {
	    staticClass: "desc"
	  }, [_vm._v("My Resume")])])])])]), _vm._v(" "), _c('li', {
	    staticClass: "col-md-6"
	  }, [_c('a', {
	    attrs: {
	      "href": "../../../../assets/image/bw-2.png"
	    }
	  }, [_c('img', {
	    attrs: {
	      "alt": "image",
	      "src": __webpack_require__(63)
	    }
	  }), _vm._v(" "), _c('div', {
	    staticClass: "decription-wrap"
	  }, [_c('div', {
	    staticClass: "image-bg"
	  }, [_c('p', {
	    staticClass: "desc"
	  }, [_vm._v("\n                          Pangirutan\n                        ")])])])])]), _vm._v(" "), _c('li', {
	    staticClass: "col-md-6"
	  }, [_c('a', {
	    attrs: {
	      "href": "../../../../assets/image/bw-3.png"
	    }
	  }, [_c('img', {
	    attrs: {
	      "alt": "image",
	      "src": __webpack_require__(64)
	    }
	  }), _vm._v(" "), _c('div', {
	    staticClass: "decription-wrap"
	  }, [_c('div', {
	    staticClass: "image-bg"
	  }, [_c('p', {
	    staticClass: "desc"
	  }, [_vm._v("\n                          Black Mug\n                        ")])])])])]), _vm._v(" "), _c('li', {
	    staticClass: "col-md-6"
	  }, [_c('a', {
	    attrs: {
	      "href": "../../../../assets/image/bw-4.png"
	    }
	  }, [_c('img', {
	    attrs: {
	      "alt": "image",
	      "src": __webpack_require__(65)
	    }
	  }), _vm._v(" "), _c('div', {
	    staticClass: "decription-wrap"
	  }, [_c('div', {
	    staticClass: "image-bg"
	  }, [_c('p', {
	    staticClass: "desc"
	  }, [_vm._v("\n                          Notebook Mockup\n                        ")])])])])]), _vm._v(" "), _c('li', {
	    staticClass: "col-md-6"
	  }, [_c('a', {
	    attrs: {
	      "href": "../../../../assets/image/bw-5.png"
	    }
	  }, [_c('img', {
	    attrs: {
	      "alt": "image",
	      "src": __webpack_require__(66)
	    }
	  }), _vm._v(" "), _c('div', {
	    staticClass: "decription-wrap"
	  }, [_c('div', {
	    staticClass: "image-bg"
	  }, [_c('p', {
	    staticClass: "desc"
	  }, [_vm._v("\n                          Presentation\n                        ")])])])])]), _vm._v(" "), _c('li', {
	    staticClass: "col-md-6"
	  }, [_c('a', {
	    attrs: {
	      "href": "../../../../assets/image/bw-6.png"
	    }
	  }, [_c('img', {
	    attrs: {
	      "alt": "image",
	      "src": __webpack_require__(67)
	    }
	  }), _vm._v(" "), _c('div', {
	    staticClass: "decription-wrap"
	  }, [_c('div', {
	    staticClass: "image-bg"
	  }, [_c('p', {
	    staticClass: "desc"
	  }, [_vm._v("\n                          Letter Branding\n                        ")])])])])])])])])])])
	},function (){var _vm=this;var _h=_vm.$createElement;var _c=_vm._self._c||_h;
	  return _c('section', {
	    staticClass: "white-bg",
	    attrs: {
	      "id": "services"
	    }
	  }, [_c('div', {
	    staticClass: "container"
	  }, [_c('div', {
	    staticClass: "row"
	  }, [_c('div', {
	    staticClass: "col-md-3"
	  }, [_c('h3', {
	    staticClass: "title-small"
	  }, [_c('span', [_vm._v("Services")])]), _vm._v(" "), _c('p', {
	    staticClass: "content-detail"
	  }, [_vm._v("\n                Lorem ipsum dolor sit amet, consectetuer adipiscing elit, sed diam nonummy nibh euismod tincidunt ut laoreet dolore magna aliquam erat volutpat.\n              ")])]), _vm._v(" "), _c('div', {
	    staticClass: "col-md-9 content-right"
	  }, [_c('div', {
	    staticClass: "row"
	  }, [_c('ul', {
	    staticClass: "listing-item"
	  }, [_c('li', [_c('div', {
	    staticClass: "col-md-4 col-sm-4"
	  }, [_c('h3', {
	    staticClass: "icon-use"
	  }, [_vm._v("\n                        c\n                      ")]), _vm._v(" "), _c('p', {
	    staticClass: "head-sm"
	  }, [_vm._v("\n                        MARKETING\n                      ")]), _vm._v(" "), _c('p', {
	    staticClass: "text-grey"
	  }, [_vm._v("\n                        Typi non habent claritatem insitam est usus legentis in iis qui facit eorum claritatem. \n                      ")])])]), _vm._v(" "), _c('li', [_c('div', {
	    staticClass: "col-md-4 col-sm-4"
	  }, [_c('h3', {
	    staticClass: "icon-use"
	  }, [_vm._v("\n                        b\n                      ")]), _vm._v(" "), _c('p', {
	    staticClass: "head-sm"
	  }, [_vm._v("\n                        WEB DESIGN\n                      ")]), _vm._v(" "), _c('p', {
	    staticClass: "text-grey"
	  }, [_vm._v("\n                        Typi non habent claritatem insitam est usus legentis in iis qui facit eorum claritatem. \n                      ")])])]), _vm._v(" "), _c('li', [_c('div', {
	    staticClass: "col-md-4 col-sm-4"
	  }, [_c('h3', {
	    staticClass: "icon-use"
	  }, [_vm._v("\n                        d\n                      ")]), _vm._v(" "), _c('p', {
	    staticClass: "head-sm"
	  }, [_vm._v("\n                        UI\n                      ")]), _vm._v(" "), _c('p', {
	    staticClass: "text-grey"
	  }, [_vm._v("\n                        Typi non habent claritatem insitam est usus legentis in iis qui facit eorum claritatem. \n                      ")])])])]), _vm._v(" "), _c('ul', {
	    staticClass: "listing-item"
	  }, [_c('li', [_c('div', {
	    staticClass: "col-md-4 col-sm-4"
	  }, [_c('p', {
	    staticClass: "icon-use"
	  }, [_vm._v("\n                        f\n                      ")]), _vm._v(" "), _c('p', {
	    staticClass: "head-sm"
	  }, [_vm._v("\n                        DIRECTOR\n                      ")]), _vm._v(" "), _c('p', {
	    staticClass: "text-grey"
	  }, [_vm._v("\n                        Typi non habent claritatem insitam est usus legentis in iis qui facit eorum claritatem. \n                      ")])])]), _vm._v(" "), _c('li', [_c('div', {
	    staticClass: "col-md-4 col-sm-4"
	  }, [_c('h3', {
	    staticClass: "icon-use"
	  }, [_vm._v("\n                        p\n                      ")]), _vm._v(" "), _c('p', {
	    staticClass: "head-sm"
	  }, [_vm._v("\n                        UX DESIGN\n                      ")]), _vm._v(" "), _c('p', {
	    staticClass: "text-grey"
	  }, [_vm._v("\n                        Typi non habent claritatem insitam est usus legentis in iis qui facit eorum claritatem. \n                      ")])])]), _vm._v(" "), _c('li', [_c('div', {
	    staticClass: "col-md-4 col-sm-4"
	  }, [_c('h3', {
	    staticClass: "icon-use"
	  }, [_vm._v("\n                        m\n                      ")]), _vm._v(" "), _c('p', {
	    staticClass: "head-sm"
	  }, [_vm._v("\n                        FRONT END\n                      ")]), _vm._v(" "), _c('p', {
	    staticClass: "text-grey"
	  }, [_vm._v("\n                        Typi non habent claritatem insitam est usus legentis in iis qui facit eorum claritatem. \n                      ")])])])])])])])])])
	},function (){var _vm=this;var _h=_vm.$createElement;var _c=_vm._self._c||_h;
	  return _c('section', {
	    staticClass: "grey-bg",
	    attrs: {
	      "id": "employement"
	    }
	  }, [_c('div', {
	    staticClass: "container"
	  }, [_c('div', {
	    staticClass: "row"
	  }, [_c('div', {
	    staticClass: "col-md-3"
	  }, [_c('h3', {
	    staticClass: "title-small"
	  }, [_c('span', [_vm._v("Employement")])]), _vm._v(" "), _c('p', {
	    staticClass: "content-detail"
	  }, [_vm._v("\n                Lorem ipsum dolor sit amet, consectetuer adipiscing elit, sed diam nonummy nibh euismod tincidunt ut laoreet dolore magna aliquam erat volutpat.\n              ")])]), _vm._v(" "), _c('div', {
	    staticClass: "col-md-9 content-right"
	  }, [_c('div', {
	    staticClass: "row"
	  }, [_c('ul', {
	    staticClass: "listing-item"
	  }, [_c('li', [_c('div', {
	    staticClass: "col-md-6 col-sm-6"
	  }, [_c('div', {
	    staticClass: "wrap-card"
	  }, [_c('div', {
	    staticClass: "card"
	  }, [_c('h2', {
	    staticClass: "year"
	  }, [_vm._v("\n                            2007 - 2009\n                          ")]), _vm._v(" "), _c('p', {
	    staticClass: "job"
	  }, [_vm._v("\n                            web designer\n                          ")]), _vm._v(" "), _c('p', {
	    staticClass: "company"
	  }, [_vm._v("\n                            Corp Project\n                          ")]), _vm._v(" "), _c('hr'), _vm._v(" "), _c('div', {
	    staticClass: "text-detail"
	  }, [_c('p', [_vm._v("\n                              Claritas est etiam processus dynamicus, qui sequitur mutationem consuetudium lectorum. Mirum est notare quam littera gothica, quam nunc putamus parum claram, anteposuerit litterarum formas humanita per seacula quarta decima et quinta decima. Eodem modo typi, qui nunc nobis videntur parum clari, fiant sollemnes.\n                            ")])])])])])]), _vm._v(" "), _c('li', [_c('div', {
	    staticClass: "col-md-6 col-sm-6"
	  }, [_c('div', {
	    staticClass: "wrap-card"
	  }, [_c('div', {
	    staticClass: "card"
	  }, [_c('h2', {
	    staticClass: "year"
	  }, [_vm._v("\n                            2009 - 2010\n                          ")]), _vm._v(" "), _c('p', {
	    staticClass: "job"
	  }, [_vm._v("\n                            web designer\n                          ")]), _vm._v(" "), _c('p', {
	    staticClass: "company"
	  }, [_vm._v("\n                            Google inc\n                          ")]), _vm._v(" "), _c('hr'), _vm._v(" "), _c('div', {
	    staticClass: "text-detail"
	  }, [_c('p', [_vm._v("\n                              Claritas est etiam processus dynamicus, qui sequitur mutationem consuetudium lectorum. Mirum est notare quam littera gothica, quam nunc putamus parum claram, anteposuerit litterarum formas humanita per seacula quarta decima et quinta decima. Eodem modo typi, qui nunc nobis videntur parum clari, fiant sollemnes.\n                            ")])])])])])])]), _vm._v(" "), _c('ul', {
	    staticClass: "listing-item"
	  }, [_c('li', [_c('div', {
	    staticClass: "col-md-6 col-sm-6"
	  }, [_c('div', {
	    staticClass: "wrap-card"
	  }, [_c('div', {
	    staticClass: "card"
	  }, [_c('h2', {
	    staticClass: "year"
	  }, [_vm._v("\n                            2010 - 2014\n                          ")]), _vm._v(" "), _c('p', {
	    staticClass: "job"
	  }, [_vm._v("\n                            crative director \n                          ")]), _vm._v(" "), _c('p', {
	    staticClass: "company"
	  }, [_vm._v("\n                            41 studio\n                          ")]), _vm._v(" "), _c('hr'), _vm._v(" "), _c('div', {
	    staticClass: "text-detail"
	  }, [_c('p', [_vm._v("\n                              Claritas est etiam processus dynamicus, qui sequitur mutationem consuetudium lectorum. Mirum est notare quam littera gothica, quam nunc putamus parum claram, anteposuerit litterarum formas humanita per seacula quarta decima et quinta decima. Eodem modo typi, qui nunc nobis videntur parum clari, fiant sollemnes.\n                            ")])])])])])]), _vm._v(" "), _c('li', [_c('div', {
	    staticClass: "col-md-6 col-sm-6"
	  }, [_c('div', {
	    staticClass: "wrap-card"
	  }, [_c('div', {
	    staticClass: "card"
	  }, [_c('h2', {
	    staticClass: "year"
	  }, [_vm._v("\n                            2014 - NOW\n                          ")]), _vm._v(" "), _c('p', {
	    staticClass: "job"
	  }, [_vm._v("\n                            fullstack designer\n                          ")]), _vm._v(" "), _c('p', {
	    staticClass: "company"
	  }, [_vm._v("\n                            Freelance\n                          ")]), _vm._v(" "), _c('hr'), _vm._v(" "), _c('div', {
	    staticClass: "text-detail"
	  }, [_c('p', [_vm._v("\n                              Claritas est etiam processus dynamicus, qui sequitur mutationem consuetudium lectorum. Mirum est notare quam littera gothica, quam nunc putamus parum claram, anteposuerit litterarum formas humanita per seacula quarta decima et quinta decima. Eodem modo typi, qui nunc nobis videntur parum clari, fiant sollemnes.\n                            ")])])])])])])])])])])])])
	},function (){var _vm=this;var _h=_vm.$createElement;var _c=_vm._self._c||_h;
	  return _c('div', {
	    staticClass: "copyrights"
	  }, [_vm._v("Collect from "), _c('a', {
	    attrs: {
	      "href": "http://www.cssmoban.com/"
	    }
	  }, [_vm._v("手机网站模板")])])
	},function (){var _vm=this;var _h=_vm.$createElement;var _c=_vm._self._c||_h;
	  return _c('section', {
	    staticClass: "white-bg",
	    attrs: {
	      "id": "skill"
	    }
	  }, [_c('div', {
	    staticClass: "container"
	  }, [_c('div', {
	    staticClass: "row"
	  }, [_c('div', {
	    staticClass: "col-md-3"
	  }, [_c('h3', {
	    staticClass: "title-small"
	  }, [_c('span', [_vm._v("Skills")])]), _vm._v(" "), _c('p', {
	    staticClass: "content-detail"
	  }, [_vm._v("\n                Lorem ipsum dolor sit amet, consectetuer adipiscing elit, sed diam nonummy nibh euismod tincidunt ut laoreet dolore magna aliquam erat volutpat.\n              ")])]), _vm._v(" "), _c('div', {
	    staticClass: "col-md-9 content-right"
	  }, [_c('div', {
	    staticClass: "skillst"
	  }, [_c('div', {
	    staticClass: "skillbar",
	    attrs: {
	      "data-percent": "68%"
	    }
	  }, [_c('div', {
	    staticClass: "title head-sm"
	  }, [_vm._v("\n                    HTML 5\n                  ")]), _vm._v(" "), _c('div', {
	    staticClass: "count-bar"
	  }, [_c('div', {
	    staticClass: "count"
	  })])]), _vm._v(" "), _c('div', {
	    staticClass: "skillbar",
	    attrs: {
	      "data-percent": "71%"
	    }
	  }, [_c('div', {
	    staticClass: "title head-sm"
	  }, [_vm._v("\n                    CSS 4\n                  ")]), _vm._v(" "), _c('div', {
	    staticClass: "count-bar"
	  }, [_c('div', {
	    staticClass: "count"
	  })])]), _vm._v(" "), _c('div', {
	    staticClass: "skillbar",
	    attrs: {
	      "data-percent": "58%"
	    }
	  }, [_c('div', {
	    staticClass: "title head-sm"
	  }, [_vm._v("\n                    jQuery\n                  ")]), _vm._v(" "), _c('div', {
	    staticClass: "count-bar"
	  }, [_c('div', {
	    staticClass: "count"
	  })])]), _vm._v(" "), _c('div', {
	    staticClass: "skillbar",
	    attrs: {
	      "data-percent": "83%"
	    }
	  }, [_c('div', {
	    staticClass: "title head-sm"
	  }, [_vm._v("\n                    Node\n                  ")]), _vm._v(" "), _c('div', {
	    staticClass: "count-bar"
	  }, [_c('div', {
	    staticClass: "count"
	  })])]), _vm._v(" "), _c('div', {
	    staticClass: "skillbar",
	    attrs: {
	      "data-percent": "75%"
	    }
	  }, [_c('div', {
	    staticClass: "title head-sm"
	  }, [_vm._v("\n                    Vue\n                  ")]), _vm._v(" "), _c('div', {
	    staticClass: "count-bar"
	  }, [_c('div', {
	    staticClass: "count"
	  })])])])])])])])
	},function (){var _vm=this;var _h=_vm.$createElement;var _c=_vm._self._c||_h;
	  return _c('section', {
	    staticClass: "grey-bg",
	    attrs: {
	      "id": "education"
	    }
	  }, [_c('div', {
	    staticClass: "container"
	  }, [_c('div', {
	    staticClass: "row"
	  }, [_c('div', {
	    staticClass: "col-md-3"
	  }, [_c('h3', {
	    staticClass: "title-small"
	  }, [_c('span', [_vm._v("Education")])]), _vm._v(" "), _c('p', {
	    staticClass: "content-detail"
	  }, [_vm._v("\n                Lorem ipsum dolor sit amet, consectetuer adipiscing elit, sed diam nonummy nibh euismod tincidunt ut laoreet dolore magna aliquam erat volutpat.\n              ")])]), _vm._v(" "), _c('div', {
	    staticClass: "col-md-9 content-right"
	  }, [_c('div', {
	    staticClass: "row"
	  }, [_c('ul', {
	    staticClass: "listing-item"
	  }, [_c('li', [_c('div', {
	    staticClass: "col-md-6 col-sm-6"
	  }, [_c('div', {
	    staticClass: "wrap-card"
	  }, [_c('div', {
	    staticClass: "card"
	  }, [_c('h2', {
	    staticClass: "year"
	  }, [_vm._v("\n                            2002 - 2005\n                          ")]), _vm._v(" "), _c('p', {
	    staticClass: "job"
	  }, [_vm._v("\n                            Information System\n                          ")]), _vm._v(" "), _c('p', {
	    staticClass: "company"
	  }, [_vm._v("\n                            Telkom University\n                          ")]), _vm._v(" "), _c('hr'), _vm._v(" "), _c('div', {
	    staticClass: "text-detail"
	  }, [_c('p', [_vm._v("\n                              Claritas est etiam processus dynamicus, qui sequitur mutationem consuetudium lectorum. Mirum est notare quam littera gothica, quam nunc putamus parum claram, anteposuerit litterarum formas humanita per seacula quarta decima et quinta decima. Eodem modo typi, qui nunc nobis videntur parum clari, fiant sollemnes.\n                            ")])])])])])]), _vm._v(" "), _c('li', [_c('div', {
	    staticClass: "col-md-6 col-sm-6"
	  }, [_c('div', {
	    staticClass: "wrap-card"
	  }, [_c('div', {
	    staticClass: "card"
	  }, [_c('h2', {
	    staticClass: "year"
	  }, [_vm._v("\n                            2005 - 2007\n                          ")]), _vm._v(" "), _c('p', {
	    staticClass: "job"
	  }, [_vm._v("\n                            DKV\n                          ")]), _vm._v(" "), _c('p', {
	    staticClass: "company"
	  }, [_vm._v("\n                            UNIKOM\n                          ")]), _vm._v(" "), _c('hr'), _vm._v(" "), _c('div', {
	    staticClass: "text-detail"
	  }, [_c('p', [_vm._v("\n                              Claritas est etiam processus dynamicus, qui sequitur mutationem consuetudium lectorum. Mirum est notare quam littera gothica, quam nunc putamus parum claram, anteposuerit litterarum formas humanita per seacula quarta decima et quinta decima. Eodem modo typi, qui nunc nobis videntur parum clari, fiant sollemnes.\n                            ")])])])])])])]), _vm._v(" "), _c('ul', {
	    staticClass: "listing-item"
	  }, [_c('li', [_c('div', {
	    staticClass: "col-md-6 col-sm-6"
	  }, [_c('div', {
	    staticClass: "wrap-card"
	  }, [_c('div', {
	    staticClass: "card"
	  }, [_c('h2', {
	    staticClass: "year"
	  }, [_vm._v("\n                            2007 - 2009\n                          ")]), _vm._v(" "), _c('p', {
	    staticClass: "job"
	  }, [_vm._v("\n                            Magister DKV \n                          ")]), _vm._v(" "), _c('p', {
	    staticClass: "company"
	  }, [_vm._v("\n                            ITB\n                          ")]), _vm._v(" "), _c('hr'), _vm._v(" "), _c('div', {
	    staticClass: "text-detail"
	  }, [_c('p', [_vm._v("\n                              Claritas est etiam processus dynamicus, qui sequitur mutationem consuetudium lectorum. Mirum est notare quam littera gothica, quam nunc putamus parum claram, anteposuerit litterarum formas humanita per seacula quarta decima et quinta decima. Eodem modo typi, qui nunc nobis videntur parum clari, fiant sollemnes.\n                            ")])])])])])]), _vm._v(" "), _c('li', [_c('div', {
	    staticClass: "col-md-6 col-sm-6"
	  }, [_c('div', {
	    staticClass: "wrap-card"
	  }, [_c('div', {
	    staticClass: "card"
	  }, [_c('h2', {
	    staticClass: "year"
	  }, [_vm._v("\n                            2009 - 2010\n                          ")]), _vm._v(" "), _c('p', {
	    staticClass: "job"
	  }, [_vm._v("\n                            Typhography Magister\n                          ")]), _vm._v(" "), _c('p', {
	    staticClass: "company"
	  }, [_vm._v("\n                            Florida University\n                          ")]), _vm._v(" "), _c('hr'), _vm._v(" "), _c('div', {
	    staticClass: "text-detail"
	  }, [_c('p', [_vm._v("\n                              Claritas est etiam processus dynamicus, qui sequitur mutationem consuetudium lectorum. Mirum est notare quam littera gothica, quam nunc putamus parum claram, anteposuerit litterarum formas humanita per seacula quarta decima et quinta decima. Eodem modo typi, qui nunc nobis videntur parum clari, fiant sollemnes.\n                            ")])])])])])])])])])])])])
	},function (){var _vm=this;var _h=_vm.$createElement;var _c=_vm._self._c||_h;
	  return _c('section', {
	    attrs: {
	      "id": "testimonial"
	    }
	  }, [_c('div', {
	    staticClass: "container"
	  }, [_c('div', {
	    staticClass: "row wrap-testimonial"
	  }, [_c('div', {
	    staticClass: "col-md-10 col-md-offset-1"
	  }, [_c('div', {
	    staticClass: "owl-carousel"
	  }, [_c('div', {
	    staticClass: "list-testimonial"
	  }, [_c('div', {
	    staticClass: "content-testimonial"
	  }, [_c('h3', {
	    staticClass: "testi"
	  }, [_vm._v("\n                      “ Reza did a phenominal job setting up my a website for my product He performed the task very quickly and efficiently. We know we have the superior topical pain relief cream on the market and he has helped us communicate that message via the website he built from scratch. Thanks! ”\n                    ")]), _vm._v(" "), _c('p', {
	    staticClass: "people"
	  }, [_vm._v("\n                      Darin Cohen - Active10\n                    ")])])]), _vm._v(" "), _c('div', {
	    staticClass: "list-testimonial"
	  }, [_c('div', {
	    staticClass: "content-testimonial"
	  }, [_c('h3', {
	    staticClass: "testi"
	  }, [_vm._v("\n                      “ Another successful project working with Reza. He has great design skills, is very responsive and professional. Looking forward to the next opportunity to work together. ”\n                    ")]), _vm._v(" "), _c('p', {
	    staticClass: "people"
	  }, [_vm._v("\n                      Marko Milicevic\n                    ")])])]), _vm._v(" "), _c('div', {
	    staticClass: "list-testimonial"
	  }, [_c('div', {
	    staticClass: "content-testimonial"
	  }, [_c('h3', {
	    staticClass: "testi"
	  }, [_vm._v("\n                      “ Great designer! I like his sense of design, especially the color scheme. Quick turnaround. Look forward to work with him again. Thanks!! ”\n                    ")]), _vm._v(" "), _c('p', {
	    staticClass: "people"
	  }, [_vm._v("\n                      JK Thang\n                    ")])])])])])])]), _vm._v(" "), _c('div', {
	    staticClass: "mask-testimonial"
	  })])
	},function (){var _vm=this;var _h=_vm.$createElement;var _c=_vm._self._c||_h;
	  return _c('section', {
	    staticClass: "grey-bg",
	    attrs: {
	      "id": "blog"
	    }
	  }, [_c('div', {
	    staticClass: "container"
	  }, [_c('div', {
	    staticClass: "row"
	  }, [_c('div', {
	    staticClass: "col-md-12"
	  }, [_c('h3', {
	    staticClass: "title-small-center text-center"
	  }, [_c('span', [_vm._v("Blog")])]), _vm._v(" "), _c('div', {
	    staticClass: "row"
	  }, [_c('div', {
	    staticClass: "col-md-6 col-md-offset-3"
	  }, [_c('p', {
	    staticClass: "content-details text-center"
	  }, [_vm._v("\n                    Lorem ipsum dolor sit amet consectetuer adipiscing elit, sed diam nonummy nibh euismod tincidunt. \n                  ")])])]), _vm._v(" "), _c('div', {
	    staticClass: "grid"
	  }, [_c('div', {
	    staticClass: "grid-item"
	  }, [_c('div', {
	    staticClass: "wrap-article"
	  }, [_c('img', {
	    staticClass: "img-circle text-center",
	    attrs: {
	      "alt": "blog-1",
	      "src": __webpack_require__(68)
	    }
	  }), _vm._v(" "), _c('p', {
	    staticClass: "subtitle fancy"
	  }, [_c('span', [_vm._v("09/01/2015")])]), _vm._v(" "), _c('a', {
	    attrs: {
	      "href": "#"
	    }
	  }, [_c('h3', {
	    staticClass: "title"
	  }, [_vm._v("\n                        Popular Design in 2015 \n                      ")])]), _vm._v(" "), _c('p', {
	    staticClass: "content-blog"
	  }, [_vm._v("\n                      Lorem ipsum dolor sit amet, consectetuer adipiscing elit, sed diam nonummy nibh euismod tincidunt ut laoreet dolore magna aliquam erat volutpat. Ut wisi enim ad minim veniam, quis nostrud exerci tation.\n                    ")])])]), _vm._v(" "), _c('div', {
	    staticClass: "grid-item"
	  }, [_c('div', {
	    staticClass: "wrap-article"
	  }, [_c('img', {
	    staticClass: "img-circle text-center",
	    attrs: {
	      "alt": "blog-4",
	      "src": __webpack_require__(69)
	    }
	  }), _vm._v(" "), _c('p', {
	    staticClass: "subtitle fancy"
	  }, [_c('span', [_vm._v("08/20/2015")])]), _vm._v(" "), _c('a', {
	    attrs: {
	      "href": "#"
	    }
	  }, [_c('h3', {
	    staticClass: "title"
	  }, [_vm._v("\n                        Just Start\n                      ")])]), _vm._v(" "), _c('p', {
	    staticClass: "content-blog"
	  }, [_vm._v("\n                      Lorem ipsum dolor sit amet, consectetuer adipiscing elit, sed diam nonummy nibh euismod tincidunt ut laoreet dolore magna aliquam erat volutpat. \n                    ")])])]), _vm._v(" "), _c('div', {
	    staticClass: "grid-item"
	  }, [_c('div', {
	    staticClass: "wrap-article"
	  }, [_c('img', {
	    staticClass: "img-circle text-center",
	    attrs: {
	      "alt": "blog6",
	      "src": __webpack_require__(70)
	    }
	  }), _vm._v(" "), _c('p', {
	    staticClass: "subtitle fancy"
	  }, [_c('span', [_vm._v("08/11/2015")])]), _vm._v(" "), _c('a', {
	    attrs: {
	      "href": "#"
	    }
	  }, [_c('h3', {
	    staticClass: "title"
	  }, [_vm._v("\n                        The Huffington Post\n                      ")])]), _vm._v(" "), _c('p', {
	    staticClass: "content-blog"
	  }, [_vm._v("\n                     Lorem ipsum dolor sit amet, consectetuer adipiscing elit, sed diam nonummy nibh euismod tincidunt ut laoreet dolore magna aliquam erat volutpat. \n                    ")])])]), _vm._v(" "), _c('div', {
	    staticClass: "grid-item"
	  }, [_c('div', {
	    staticClass: "wrap-article"
	  }, [_c('img', {
	    staticClass: "img-circle text-center",
	    attrs: {
	      "alt": "blog2",
	      "src": __webpack_require__(71)
	    }
	  }), _vm._v(" "), _c('p', {
	    staticClass: "subtitle fancy"
	  }, [_c('span', [_vm._v("08/03/2015")])]), _vm._v(" "), _c('a', {
	    attrs: {
	      "href": "#"
	    }
	  }, [_c('h3', {
	    staticClass: "title"
	  }, [_vm._v("\n                        Manuk!\n                      ")])]), _vm._v(" "), _c('p', {
	    staticClass: "content-blog"
	  }, [_vm._v("\n                      Lorem ipsum dolor sit amet, consectetuer adipiscing elit, sed diam nonummy nibh euismod tincidunt ut laoreet dolore magna aliquam erat volutpat. \n                    ")])])]), _vm._v(" "), _c('div', {
	    staticClass: "grid-item"
	  }, [_c('div', {
	    staticClass: "wrap-article"
	  }, [_c('img', {
	    staticClass: "img-circle text-center",
	    attrs: {
	      "alt": "blog5",
	      "src": __webpack_require__(72)
	    }
	  }), _vm._v(" "), _c('p', {
	    staticClass: "subtitle fancy"
	  }, [_c('span', [_vm._v("07/26/2015")])]), _vm._v(" "), _c('a', {
	    attrs: {
	      "href": "#"
	    }
	  }, [_c('h3', {
	    staticClass: "title"
	  }, [_vm._v("\n                        Do Web Designer Really Need To Know UI/UX Design and Backend Code too?\n                      ")])]), _vm._v(" "), _c('p', {
	    staticClass: "content-blog"
	  }, [_vm._v("\n                      Lorem ipsum dolor sit amet, consectetuer adipiscing elit, sed diam nonummy nibh euismod tincidunt ut laoreet dolore magna aliquam erat volutpat. \n                    ")])])]), _vm._v(" "), _c('div', {
	    staticClass: "grid-item"
	  }, [_c('div', {
	    staticClass: "wrap-article"
	  }, [_c('img', {
	    staticClass: "img-circle text-center",
	    attrs: {
	      "alt": "blog-3",
	      "src": __webpack_require__(73)
	    }
	  }), _vm._v(" "), _c('p', {
	    staticClass: "subtitle fancy"
	  }, [_c('span', [_vm._v("08/03/2015")])]), _vm._v(" "), _c('a', {
	    attrs: {
	      "href": "#"
	    }
	  }, [_c('h3', {
	    staticClass: "title"
	  }, [_vm._v("\n                        Somewhere Place\n                      ")])]), _vm._v(" "), _c('p', {
	    staticClass: "content-blog"
	  }, [_vm._v("\n                      Lorem ipsum dolor sit amet, consectetuer adipiscing elit. Ut wisi enim ad minim veniam, quis nostrud exerci tation ullamcorper suscipit.\n                    ")])])])])])])])])
	},function (){var _vm=this;var _h=_vm.$createElement;var _c=_vm._self._c||_h;
	  return _c('section', {
	    staticClass: "white-bg",
	    attrs: {
	      "id": "contact"
	    }
	  }, [_c('div', {
	    staticClass: "container"
	  }, [_c('div', {
	    staticClass: "row"
	  }, [_c('div', {
	    staticClass: "col-md-3"
	  }, [_c('h3', {
	    staticClass: "title-small"
	  }, [_c('span', [_vm._v("Contact")])]), _vm._v(" "), _c('p', {
	    staticClass: "content-detail"
	  }, [_vm._v("\n                Lorem ipsum dolor sit amet, consectetuer adipiscing elit, sed diam nonummy nibh euismod tincidunt ut laoreet dolore magna aliquam erat volutpat.\n              ")])]), _vm._v(" "), _c('div', {
	    staticClass: "col-md-9 content-right"
	  }, [_c('form', [_c('div', {
	    staticClass: "group"
	  }, [_c('input', {
	    attrs: {
	      "required": "",
	      "type": "text"
	    }
	  }), _c('span', {
	    staticClass: "highlight"
	  }), _c('span', {
	    staticClass: "bar"
	  }), _c('label', [_vm._v("Name")])]), _vm._v(" "), _c('div', {
	    staticClass: "group"
	  }, [_c('input', {
	    attrs: {
	      "required": "",
	      "type": "email"
	    }
	  }), _c('span', {
	    staticClass: "highlight"
	  }), _c('span', {
	    staticClass: "bar"
	  }), _c('label', [_vm._v("Email")])]), _vm._v(" "), _c('div', {
	    staticClass: "group"
	  }, [_c('textarea', {
	    attrs: {
	      "required": ""
	    }
	  }), _c('span', {
	    staticClass: "highlight"
	  }), _c('span', {
	    staticClass: "bar"
	  }), _c('label', [_vm._v("Message")])]), _vm._v(" "), _c('input', {
	    attrs: {
	      "id": "sendMessage",
	      "name": "sendMessage",
	      "type": "submit",
	      "value": "Send Message"
	    }
	  })])])])])])
	},function (){var _vm=this;var _h=_vm.$createElement;var _c=_vm._self._c||_h;
	  return _c('footer', [_c('div', {
	    staticClass: "footer-top"
	  }, [_c('ul', {
	    staticClass: "socials"
	  }, [_c('li', {
	    staticClass: "facebook"
	  }, [_c('a', {
	    attrs: {
	      "href": "#",
	      "data-hover": "Facebook"
	    }
	  }, [_vm._v("Facebook")])]), _vm._v(" "), _c('li', {
	    staticClass: "twitter"
	  }, [_c('a', {
	    attrs: {
	      "href": "#",
	      "data-hover": "Twitter"
	    }
	  }, [_vm._v("Twitter")])]), _vm._v(" "), _c('li', {
	    staticClass: "gplus"
	  }, [_c('a', {
	    attrs: {
	      "href": "#",
	      "data-hover": "Google +"
	    }
	  }, [_vm._v("Google +")])])])]), _vm._v(" "), _c('div', {
	    staticClass: "footer-bottom"
	  }, [_c('div', {
	    staticClass: "container"
	  }, [_c('div', {
	    staticClass: "row"
	  }, [_c('img', {
	    staticClass: "center-block",
	    attrs: {
	      "src": __webpack_require__(74),
	      "alt": "logo bottom"
	    }
	  }), _vm._v("More Templates "), _c('a', {
	    attrs: {
	      "href": "http://www.cssmoban.com/",
	      "target": "_blank",
	      "title": "模板之家"
	    }
	  }, [_vm._v("模板之家")]), _vm._v(" - Collect from "), _c('a', {
	    attrs: {
	      "href": "http://www.cssmoban.com/",
	      "title": "网页模板",
	      "target": "_blank"
	    }
	  }, [_vm._v("网页模板")])])])])])
	}]}
	if (false) {
	  module.hot.accept()
	  if (module.hot.data) {
	     require("vue-hot-reload-api").rerender("data-v-a2361cd6", module.exports)
	  }
	}

/***/ },
/* 59 */
/***/ function(module, exports) {

	module.exports = "data:image/png;base64,iVBORw0KGgoAAAANSUhEUgAAAJYAAAB3CAYAAADhGbnFAAAAGXRFWHRTb2Z0d2FyZQBBZG9iZSBJbWFnZVJlYWR5ccllPAAAAyRpVFh0WE1MOmNvbS5hZG9iZS54bXAAAAAAADw/eHBhY2tldCBiZWdpbj0i77u/IiBpZD0iVzVNME1wQ2VoaUh6cmVTek5UY3prYzlkIj8+IDx4OnhtcG1ldGEgeG1sbnM6eD0iYWRvYmU6bnM6bWV0YS8iIHg6eG1wdGs9IkFkb2JlIFhNUCBDb3JlIDUuMy1jMDExIDY2LjE0NTY2MSwgMjAxMi8wMi8wNi0xNDo1NjoyNyAgICAgICAgIj4gPHJkZjpSREYgeG1sbnM6cmRmPSJodHRwOi8vd3d3LnczLm9yZy8xOTk5LzAyLzIyLXJkZi1zeW50YXgtbnMjIj4gPHJkZjpEZXNjcmlwdGlvbiByZGY6YWJvdXQ9IiIgeG1sbnM6eG1wPSJodHRwOi8vbnMuYWRvYmUuY29tL3hhcC8xLjAvIiB4bWxuczp4bXBNTT0iaHR0cDovL25zLmFkb2JlLmNvbS94YXAvMS4wL21tLyIgeG1sbnM6c3RSZWY9Imh0dHA6Ly9ucy5hZG9iZS5jb20veGFwLzEuMC9zVHlwZS9SZXNvdXJjZVJlZiMiIHhtcDpDcmVhdG9yVG9vbD0iQWRvYmUgUGhvdG9zaG9wIENTNiAoTWFjaW50b3NoKSIgeG1wTU06SW5zdGFuY2VJRD0ieG1wLmlpZDowQzMyNUYwRTdFM0ExMUU1OUUzNTkyRjZGNTIyRkI1RCIgeG1wTU06RG9jdW1lbnRJRD0ieG1wLmRpZDowQzMyNUYwRjdFM0ExMUU1OUUzNTkyRjZGNTIyRkI1RCI+IDx4bXBNTTpEZXJpdmVkRnJvbSBzdFJlZjppbnN0YW5jZUlEPSJ4bXAuaWlkOkUzRDAwRjg5N0UzODExRTU5RTM1OTJGNkY1MjJGQjVEIiBzdFJlZjpkb2N1bWVudElEPSJ4bXAuZGlkOkUzRDAwRjhBN0UzODExRTU5RTM1OTJGNkY1MjJGQjVEIi8+IDwvcmRmOkRlc2NyaXB0aW9uPiA8L3JkZjpSREY+IDwveDp4bXBtZXRhPiA8P3hwYWNrZXQgZW5kPSJyIj8+5Fl4GwAAFAFJREFUeNrsnQd3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"

/***/ },
/* 60 */
/***/ function(module, exports) {

	module.exports = "data:image/png;base64,iVBORw0KGgoAAAANSUhEUgAAAPIAAADACAYAAAA+2j4CAAAAGXRFWHRTb2Z0d2FyZQBBZG9iZSBJbWFnZVJlYWR5ccllPAAAAyRpVFh0WE1MOmNvbS5hZG9iZS54bXAAAAAAADw/eHBhY2tldCBiZWdpbj0i77u/IiBpZD0iVzVNME1wQ2VoaUh6cmVTek5UY3prYzlkIj8+IDx4OnhtcG1ldGEgeG1sbnM6eD0iYWRvYmU6bnM6bWV0YS8iIHg6eG1wdGs9IkFkb2JlIFhNUCBDb3JlIDUuMy1jMDExIDY2LjE0NTY2MSwgMjAxMi8wMi8wNi0xNDo1NjoyNyAgICAgICAgIj4gPHJkZjpSREYgeG1sbnM6cmRmPSJodHRwOi8vd3d3LnczLm9yZy8xOTk5LzAyLzIyLXJkZi1zeW50YXgtbnMjIj4gPHJkZjpEZXNjcmlwdGlvbiByZGY6YWJvdXQ9IiIgeG1sbnM6eG1wPSJodHRwOi8vbnMuYWRvYmUuY29tL3hhcC8xLjAvIiB4bWxuczp4bXBNTT0iaHR0cDovL25zLmFkb2JlLmNvbS94YXAvMS4wL21tLyIgeG1sbnM6c3RSZWY9Imh0dHA6Ly9ucy5hZG9iZS5jb20veGFwLzEuMC9zVHlwZS9SZXNvdXJjZVJlZiMiIHhtcDpDcmVhdG9yVG9vbD0iQWRvYmUgUGhvdG9zaG9wIENTNiAoTWFjaW50b3NoKSIgeG1wTU06SW5zdGFuY2VJRD0ieG1wLmlpZDpEOUJCNzdGQjdDQkExMUU1QUIwQUE1OUQyODQ5ODMxQSIgeG1wTU06RG9jdW1lbnRJRD0ieG1wLmRpZDpEOUJCNzdGQzdDQkExMUU1QUIwQUE1OUQyODQ5ODMxQSI+IDx4bXBNTTpEZXJpdmVkRnJvbSBzdFJlZjppbnN0YW5jZUlEPSJ4bXAuaWlkOkQ5QkI3N0Y5N0NCQTExRTVBQjBBQTU5RDI4NDk4MzFBIiBzdFJlZjpkb2N1bWVudElEPSJ4bXAuZGlkOkQ5QkI3N0ZBN0NCQTExRTVBQjBBQTU5RDI4NDk4MzFBIi8+IDwvcmRmOkRlc2NyaXB0aW9uPiA8L3JkZjpSREY+IDwveDp4bXBtZXRhPiA8P3hwYWNrZXQgZW5kPSJyIj8+3+4GMAAACQBJREFUeNrs3fFR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"

/***/ },
/* 61 */
/***/ function(module, exports) {

	module.exports = "data:image/png;base64,iVBORw0KGgoAAAANSUhEUgAAAMEAAAA5CAYAAACPg0/oAAAAGXRFWHRTb2Z0d2FyZQBBZG9iZSBJbWFnZVJlYWR5ccllPAAAA2hpVFh0WE1MOmNvbS5hZG9iZS54bXAAAAAAADw/eHBhY2tldCBiZWdpbj0i77u/IiBpZD0iVzVNME1wQ2VoaUh6cmVTek5UY3prYzlkIj8+IDx4OnhtcG1ldGEgeG1sbnM6eD0iYWRvYmU6bnM6bWV0YS8iIHg6eG1wdGs9IkFkb2JlIFhNUCBDb3JlIDUuMy1jMDExIDY2LjE0NTY2MSwgMjAxMi8wMi8wNi0xNDo1NjoyNyAgICAgICAgIj4gPHJkZjpSREYgeG1sbnM6cmRmPSJodHRwOi8vd3d3LnczLm9yZy8xOTk5LzAyLzIyLXJkZi1zeW50YXgtbnMjIj4gPHJkZjpEZXNjcmlwdGlvbiByZGY6YWJvdXQ9IiIgeG1sbnM6eG1wTU09Imh0dHA6Ly9ucy5hZG9iZS5jb20veGFwLzEuMC9tbS8iIHhtbG5zOnN0UmVmPSJodHRwOi8vbnMuYWRvYmUuY29tL3hhcC8xLjAvc1R5cGUvUmVzb3VyY2VSZWYjIiB4bWxuczp4bXA9Imh0dHA6Ly9ucy5hZG9iZS5jb20veGFwLzEuMC8iIHhtcE1NOk9yaWdpbmFsRG9jdW1lbnRJRD0ieG1wLmRpZDo5NDIxQTJDNjU0MEVFNDExODdFN0Q2Mjg2Njc3RUQzNiIgeG1wTU06RG9jdW1lbnRJRD0ieG1wLmRpZDo3RTVBQzIwRDVBRUUxMUU1QTIxQjk0Qzc2OTc4QTU3NyIgeG1wTU06SW5zdGFuY2VJRD0ieG1wLmlpZDo3RTVBQzIwQzVBRUUxMUU1QTIxQjk0Qzc2OTc4QTU3NyIgeG1wOkNyZWF0b3JUb29sPSJBZG9iZSBQaG90b3Nob3AgQ1M2IChNYWNpbnRvc2gpIj4gPHhtcE1NOkRlcml2ZWRGcm9tIHN0UmVmOmluc3RhbmNlSUQ9InhtcC5paWQ6MDI4MDExNzQwNzIwNjgxMTgwODNCQTAwNUVDRjVFNjYiIHN0UmVmOmRvY3VtZW50SUQ9InhtcC5kaWQ6OTQyMUEyQzY1NDBFRTQxMTg3RTdENjI4NjY3N0VEMzYiLz4gPC9yZGY6RGVzY3Jp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"

/***/ },
/* 62 */
/***/ function(module, exports, __webpack_require__) {

	module.exports = __webpack_require__.p + "static/imgs/bw-1.fa4ff4a.png";

/***/ },
/* 63 */
/***/ function(module, exports, __webpack_require__) {

	module.exports = __webpack_require__.p + "static/imgs/bw-2.c144fea.png";

/***/ },
/* 64 */
/***/ function(module, exports, __webpack_require__) {

	module.exports = __webpack_require__.p + "static/imgs/bw-3.7809ba4.png";

/***/ },
/* 65 */
/***/ function(module, exports, __webpack_require__) {

	module.exports = __webpack_require__.p + "static/imgs/bw-4.704a5a8.png";

/***/ },
/* 66 */
/***/ function(module, exports, __webpack_require__) {

	module.exports = __webpack_require__.p + "static/imgs/bw-5.2a02472.png";

/***/ },
/* 67 */
/***/ function(module, exports, __webpack_require__) {

	module.exports = __webpack_require__.p + "static/imgs/bw-6.3e28742.png";

/***/ },
/* 68 */
/***/ function(module, exports, __webpack_require__) {

	module.exports = __webpack_require__.p + "static/imgs/blog-1.185644c.png";

/***/ },
/* 69 */
/***/ function(module, exports, __webpack_require__) {

	module.exports = __webpack_require__.p + "static/imgs/blog-4.3974d68.jpg";

/***/ },
/* 70 */
/***/ function(module, exports, __webpack_require__) {

	module.exports = __webpack_require__.p + "static/imgs/blog-6.f047569.jpg";

/***/ },
/* 71 */
/***/ function(module, exports, __webpack_require__) {

	module.exports = __webpack_require__.p + "static/imgs/blog-2.347befa.jpg";

/***/ },
/* 72 */
/***/ function(module, exports, __webpack_require__) {

	module.exports = __webpack_require__.p + "static/imgs/blog-5.02836fe.jpg";

/***/ },
/* 73 */
/***/ function(module, exports, __webpack_require__) {

	module.exports = __webpack_require__.p + "static/imgs/blog-3.d85db4d.jpg";

/***/ },
/* 74 */
/***/ function(module, exports) {

	module.exports = "data:image/png;base64,iVBORw0KGgoAAAANSUhEUgAAAJYAAAB3CAYAAADhGbnFAAAAGXRFWHRTb2Z0d2FyZQBBZG9iZSBJbWFnZVJlYWR5ccllPAAAAyRpVFh0WE1MOmNvbS5hZG9iZS54bXAAAAAAADw/eHBhY2tldCBiZWdpbj0i77u/IiBpZD0iVzVNME1wQ2VoaUh6cmVTek5UY3prYzlkIj8+IDx4OnhtcG1ldGEgeG1sbnM6eD0iYWRvYmU6bnM6bWV0YS8iIHg6eG1wdGs9IkFkb2JlIFhNUCBDb3JlIDUuMy1jMDExIDY2LjE0NTY2MSwgMjAxMi8wMi8wNi0xNDo1NjoyNyAgICAgICAgIj4gPHJkZjpSREYgeG1sbnM6cmRmPSJodHRwOi8vd3d3LnczLm9yZy8xOTk5LzAyLzIyLXJkZi1zeW50YXgtbnMjIj4gPHJkZjpEZXNjcmlwdGlvbiByZGY6YWJvdXQ9IiIgeG1sbnM6eG1wPSJodHRwOi8vbnMuYWRvYmUuY29tL3hhcC8xLjAvIiB4bWxuczp4bXBNTT0iaHR0cDovL25zLmFkb2JlLmNvbS94YXAvMS4wL21tLyIgeG1sbnM6c3RSZWY9Imh0dHA6Ly9ucy5hZG9iZS5jb20veGFwLzEuMC9zVHlwZS9SZXNvdXJjZVJlZiMiIHhtcDpDcmVhdG9yVG9vbD0iQWRvYmUgUGhvdG9zaG9wIENTNiAoTWFjaW50b3NoKSIgeG1wTU06SW5zdGFuY2VJRD0ieG1wLmlpZDo5NzcwQzM3QTdDQUYxMUU1QUIwQUE1OUQyODQ5ODMxQSIgeG1wTU06RG9jdW1lbnRJRD0ieG1wLmRpZDo5NzcwQzM3QjdDQUYxMUU1QUIwQUE1OUQyODQ5ODMxQSI+IDx4bXBNTTpEZXJpdmVkRnJvbSBzdFJlZjppbnN0YW5jZUlEPSJ4bXAuaWlkOjk3NzBDMzc4N0NBRjExRTVBQjBBQTU5RDI4NDk4MzFBIiBzdFJlZjpkb2N1bWVudElEPSJ4bXAuZGlkOjk3NzBDMzc5N0NBRjExRTVBQjBBQTU5RDI4NDk4MzFBIi8+IDwvcmRmOkRlc2NyaXB0aW9uPiA8L3JkZjpSREY+IDwveDp4bXBtZXRhPiA8P3hwYWNrZXQgZW5kPSJyIj8+DdwAxAAAFHZJREFUeNrsnflz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"

/***/ }
]);
//# sourceMappingURL=1.build.js.map