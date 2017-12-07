const home = resolve => require(['../../views/home/main'], resolve);

module.exports = {
    path: "/home",
    component: home,
    children: [
        require("./textSearch"),
    ],
    redirect: '/home/text'
};