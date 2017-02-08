var app = getApp();
Page({
  data: {
    motto: '点击头像返回首页',
    userInfo: {}
  },
  //事件处理函数
  bindViewTap: function() {
    wx.navigateTo({
      url: '../index/index'
    })
  },
  onLoad: function () {
    console.log('onLoad')
    var that = this
    //调用应用实例的方法获取全局数据
    app.getUserInfo(function(userInfo){
      //更新数据
      that.setData({
        userInfo:userInfo
      })
    })
  },
  onShareAppMessage: function(){
      return {
        title: '这是我的移民澳洲分数',
        desc: '我的分数是xxxxx，可以技术移民啦',
        path: '/page/visa/visa'
      }
  }
})
