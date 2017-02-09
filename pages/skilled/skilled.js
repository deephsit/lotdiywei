var app = getApp();
var textInitData = "以下是您的移民分数：\n";
var textExtraLine = [];
var visaCode;
var resultTemp;
var extraPoint = [];

Page({
    data: {
        visaType: ['点击选择签证类型', "189独立技术移民", "190州担保技术移民", "489偏远地区担保移民"],
        index: 0,
        certificate: ['点这里选择学历', '没有被承认的学历', '境外被认可的学徒', '在澳完成三、四级证书', '在澳完成的学历', '学士和硕士学位', '博士学位'],
        extraPoint: [
            { name: '州政府担保', value: 5 },
            { name: '偏远地区州／亲属担保', value: 10 },
            { name: '在澳洲进行2年的学习', value: 5 },
            { name: '在澳洲偏远地区生活2年', value: 5 },
            { name: '职业年', value: 5 },
            { name: 'NAATI', value: 5 },
            { name: '配偶加分', value: 5, },
        ],
        resultPoint: textInitData
    },
    checkboxChange: function(e) {
        console.log('checkbox发生change事件，携带value值为：', e.detail.value)
    },

    //事件处理函数
    bindvisaPickerChange: function(e) {
        console.log('picker发送选择改变，携带值为', e.detail.value)
        switch (e.detail.value) {
            case '1':
                visaCode = '189';
                break;
            case '2':
                visaCode = '190';
                break;
            case '3':
                visaCode = '489';
                break;

        }
        this.setData({
            index: e.detail.value
        })
    },
    bindcertificatePickerChange: function(e) {
        var certificatePoint;
        switch (e.detail.value) {
            case '1', '2', '3', '4':
                certificatePoint = 10;
                break;
            case '5':
                certificatePoint = 15;
                break;
            case '6':
                certificatePoint = 20;
                break;
            default:
                certificatePoint = 0;
                break;
        }
        console.log('picker发送选择改变，携带值为', certificatePoint)
        this.setData({
            index: e.detail.value
        })
    },
    onLoad: function() {
        console.log('onLoad')
        var that = this
            //调用应用实例的方法获取全局数据
        app.getUserInfo(function(userInfo) {
            //更新数据
            that.setData({
                userInfo: userInfo
            })
        })
    },

    onShareAppMessage: function() {
        return {
            title: '这是我的移民澳洲分数',
            desc: '我的分数是xxxxx，可以技术移民啦',
            path: '/page/skilled/skilled'
        }
    }
})