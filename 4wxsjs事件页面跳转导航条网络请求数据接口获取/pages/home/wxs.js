// pages/home/wxs.js
var clickModule = require("../../module/js/list.js")
Page(Object.assign({

  /**
   * 页面的初始数据
   */
  data: {
    posts: [
      {
        "title": "网易未来科技峰会大咖说:人工智能变局 未来掌握谁手",
        "time": "2015-09-10 19:17:30",
  "img":"http://cms-bucket.nosdn.127.net/2018/09/22/fc79cc1b22f24307b86574db89959019.png?imageView&thumbnail=140y88&quality=85"
      },
      {
        "title": "瑞典电视台节目涉辱华 驻瑞使馆:严重挑战人性良知",
        "time": "2015-09-10 19:17:30",
        "img": "http://cms-bucket.nosdn.127.net/2018/09/22/24e5c8040f3c4469bb829450bb728520.png?imageView&thumbnail=140y88&quality=85"
      },
      {
        "title": "黑压压一片!6万蜜蜂＂入侵＂医院大楼 屋顶渗出蜂蜜",
        "time": "2015-09-10 19:17:30",
        "img": "http://cms-bucket.nosdn.127.net/2018/09/22/6f67cfafe2fe4565a38a4adb6db5e1a4.png?imageView&thumbnail=140y88&quality=85"
      }
    ]
  },

  /**
   * 生命周期函数--监听页面加载
   */
  onLoad: function (options) {
    console.log(clickModule)

    console.log(options.query)
  },

  /**
   * 生命周期函数--监听页面初次渲染完成
   */
  onReady: function () {

  },

  /**
   * 生命周期函数--监听页面显示
   */
  onShow: function () {

  },

  /**
   * 生命周期函数--监听页面隐藏
   */
  onHide: function () {

  },

  /**
   * 生命周期函数--监听页面卸载
   */
  onUnload: function () {

  },

  /**
   * 页面相关事件处理函数--监听用户下拉动作
   */
  onPullDownRefresh: function () {

  },

  /**
   * 页面上拉触底事件的处理函数
   */
  onReachBottom: function () {

  },

  /**
   * 用户点击右上角分享
   */
  onShareAppMessage: function () {

  }
},clickModule))