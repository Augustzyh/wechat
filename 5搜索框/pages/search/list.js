// pages/search/list.js
//搜索链接 word="" pn =0 rn=30
let url = "https://image.baidu.com/search/acjson?tn=resultjson_com&ipn=rj"
Page({

  /**
   * 页面的初始数据
   */
  data: {
    word: '', //搜索内容
    page: 1,   //页数
    row: 30,   //每页加载多少个
    list: 3,
    orgin: [],
    imgs: [],
    height:[]
  },

  /**
   * 生命周期函数--监听页面加载
   */
  onLoad: function (options) {
    this.createContainer()
    this.data.imgs[0].push(1)
    this.data.word = options.q || "猫"
    this.showPage()

    //分页加载

    //word


    //容器
  },

  //创建显示容器
  createContainer() {
    this.data.height = new Array(this.data.list).fill(0)
    this.data.imgs = new Array(this.data.list).fill(0).map(() => [])
  },

  //显示页面
  showPage() {
    this.query()
      .then(res => {
        let codeData = this.codeData(res.data.data)
        this.show(codeData)
        //console.log(this.data.imgs)
      })
      ;
  },

  //打包url
  codeUrl(){
    let codeUrl = url + "&word=" + this.data.word 
                + "&pn=" + (this.data.page*this.data.row -this.data.row)
                + "&rn=" + this.data.row;
    return codeUrl; 
  },
  //打包数据
  codeData(data) {
    let codeData = []
    data.forEach(img => {
      if(img.objURL){
        codeData.push(Object.assign({
          thumb: img.thumbURL,
          middle: img.middleURL,
          obj: img.objURL
        },this.zoom(img)))
      }
    })
    return codeData
  },
  // 缩放宽高比一致
  zoom(img) {
    let zoom = 100 / img.width;
    return {
      width: img.width*zoom,
      height: img.height*zoom
    }
  },
  //数据筛选放入左右数组
  show(data){
    this.data.orgin.push(...data)
    data.forEach(img => {
      // [0,0,0]
      let min = Math.min(...this.data.height)
      let index = this.data.height.findIndex(i => min === i)
      this.data.imgs[index].push(img)

      this.data.height[index] += img.height
    })
    //console.log(this.data)
    // data.forEach(img => {
    //     if(this.data.height.left <= this.data.height.right){
    //       this.data.imgs.left.push(img)
    //       this.data.height.left += img.height
    //     }else{
    //       this.data.imgs.right.push(img)
    //       this.data.height.right += img.height
    //     }
    // })
    this.setData({
      imgs: this.data.imgs,
      height: this.data.height
    })
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

  more () {

  },

  query(){
    //请求url
    let queryUrl = this.codeUrl();
    //请求
    return new Promise((reslove,reject) => {
      wx.request({
        url: queryUrl,
        success: reslove,
        fail: reject
      })
    })
  },

  //加载更多
  more() {
    this.data.page++;
    this.showPage()
  },

  //下载图片
  download(e) {
    //console.log(e.currentTarget.dataset.src)
    wx.showModal({
      title: "决定吧",
      content: "确定要下载吗？",
      showCancel: true,
      confirmText: "下",
      confirmColor: "#1aad19",
      cancelText: "不下了",
      cancelColor: "#bbb",
      success(res) {
        if(res.confirm){
          wx.downloadFile({
            url: e.currentTarget.dataset.src,
            success(res){
              wx.saveImageToPhotosAlbum({
                filePath: res.tempFilePath
              })
            }
          })
        }
      }
    })
  },

  //查看大图
  showImage(e) {
    let urls = [...this.data.orgin].map(item => item.middle)
    wx.previewImage({
      urls,
      current: e.currentTarget.dataset.src
    })
  },

  //返回
  back() {
    wx.navigateBack({
      delta: 1,
    })
  }
})