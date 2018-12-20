// pages/index/index.js
Page({

  /**
   * 页面的初始数据
   */
  data: {
    msg:"你好啊"
  },

  /**
   * 生命周期函数--监听页面加载  白屏 建议在这请求数据  1
   */
  onLoad: function (options) {
    // 不能网window设置函数
    //this 就是page的实例
    //更新数据
    this.setData({
      msg:"我很好",
      time: "啥？修改？"
    })
  },

  /**
   * 生命周期函数--监听页面初次渲染完成  3
   */
  onReady: function () {

  },

  /**
   * 生命周期函数--监听页面显示  2  还在加载再渲染  先显示后渲染
   */
  onShow: function () {

  },

  /**
   * 生命周期函数--监听页面隐藏
   */
  onHide: function () {

  },

  /**
   * 生命周期函数--监听页面卸载，或者子页面超过5个被卸载
   */
  onUnload: function () {

  },

  /**
   * 页面相关事件处理函数--监听用户下拉动作 重新请求数据
   */
  onPullDownRefresh: function () {

  },

  /**
   * 页面上拉触底事件的处理函数 滚动到底部  免责协议
   */
  onReachBottom: function () {

  },

  /**
   * 用户点击右上角分享
   */
  onShareAppMessage: function () {

  }
})