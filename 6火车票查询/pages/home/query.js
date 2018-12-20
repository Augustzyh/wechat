// pages/home/query.js
Page({

  /**
   * 页面的初始数据
   */
  data: {
    goTime: '',
    endTime: '',
    startTime: '',
    getTime: ''
  },

  /**
   * 生命周期函数--监听页面加载
   */
  onLoad: function (options) {
    this.bornDate()
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

  },

  //出发时间
  goTime(e) {
    this.setData({
      goTime: e.detail.value
    })
  },
  endTime(e) {
    this.setData({
      endTime: e.detail.value
    })
  },

  //动态生成开始结束日期
  bornDate(){
    const date = new Date()
    let startTime = date.getFullYear() + "-" +
      (date.getMonth() >= 10 ? date.getMonth() : '0' + date.getMonth()) + "-" + (date.getDate() >= 10 ? date.getDate() : '0' + date.getDate());
    let getTime = date.getFullYear() + "-" +
      ((date.getMonth() + 1) >= 10 ? (date.getMonth() + 1) : '0' + (date.getMonth() + 1)) + "-" +
      (date.getDate() >= 10 ? date.getDate() : '0' + date.getDate());
    //let getTime = new Date(date.getTime() + 29*24*60*60*1000)
    this.setData({
      startTime,
      getTime
    })
  },

  //提交查询
  query(e){
    let data = e.detail.value
    let values = Object.values(data)
    let bool = true
    values.forEach(v => {
      if(!v) bool = false
    })
    if(bool){
      wx.navigateTo({
        url: "/pages/home/list?" + this.packURL(data)
      })
    }else{
      wx.showToast({
        title: "请完善查询信息",
        icon: "none"
      })
    }
  },

  //打包url
  packURL(obj) {
    return Object.keys(obj).map(item => `${item}=${obj[item]}`).join("&")
  }
})