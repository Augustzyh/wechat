App({
//生命周期函数前三个 后面两个错误处理机制  app.js是全局的

  // 小程序初始化可以接受一个参数，记录页面信息和记录用户是通过哪种形式访问的 切后台看scene
  onLaunch: function (options) {
    // Do something initial when launch.
    console.log("这里是程序初始化")
    console.log(options)
  },

  // 第一个页面显示触发 有可能多次触发
  onShow: function (options) {
    // Do something when show.
    console.log("onshow 显示触发")
  },

  // 切换到后台时触发 关定时器什么的 或者考试系统 都可以重复触发
  onHide: function () {
    // Do something when hide.
    console.log("用户离开咯")
  },

  //报错 请求api时 请求失败时触发 监听小程序发生的错误
  onError: function (msg) {
    //分析小程序的运行状况
    console.log(msg)
  },

  // 页面不存在触发  跳转什么的
  onPageNotFound () {

  },

  globalData: 'I am global data'
})