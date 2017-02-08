var app = getApp();
Page({
data: {
    visaType:["189独立技术移民","190州担保技术移民","489偏远地区担保移民"],
    index:0,
    date:"2016-09-01",
    time:"12:01",
    certificate:["没有被承认的学历","境外被认可的学徒","在澳完成三、四级证书","在澳完成的学历","学士和硕士学位","博士学位"],
  },
  //事件处理函数
bindvisaPickerChange: function(e) {
    console.log('picker发送选择改变，携带值为', e.detail.value)
    this.setData({
      index: e.detail.value
    })
  },
  bindcertificatePickerChange: function(e) {
    console.log('picker发送选择改变，携带值为', e.detail.value)
    this.setData({
      index: e.detail.value
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
        path: '/page/skilled/skilled'
      }
  }
})
