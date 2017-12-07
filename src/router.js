
var routes = [
  {
    path: '/',
    redirect: '/home/text'
  },
  require("./project/routers/home"),
  
  {//除'/'以外的所有路由，均跳转到404页面
    path: '*',
    name: '404',
    component: require('./base/404')// 加载404页面
  }
];

module.exports = routes;