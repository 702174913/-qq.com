// property/pages/pay/pay-choose/pay-choose.js
Page({

  /**
   * 页面的初始数据
   */
  data: {
    methods:[
      {price:'60',month:'1'},
      { price: '180', month: '3' },
      { price: '360', month: '6' },
      { price: '720', month: '12' },
    ],
    this:0,
  },
  chooses:function(e){
    let index=e.currentTarget.dataset.index
    this.setData({this:index})
  },

  /**
   * 生命周期函数--监听页面加载
   */
  onLoad: function (options) {

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
})