//index.js
//获取应用实例
const app = getApp()

var TxMap = require('../../libs/qqmap-wx-jssdk.min.js');
var txMap = new TxMap({key: 'NE7BZ-EAE6P-JAJDF-VNRHV-ZGNXJ-M4BYJ'})

Page({
  onLoad: () => {

  },

  onShow: function() {
    var that = this;
    wx.getLocation({
      success: function(res) {
        that.setData({
          longitude: res.longitude,
          latitude: res.latitude
        })
      },
    })
  },

  data: {
    controls: [
      {
        id: 'search',
        iconPath: '',
        position: {
          left: 5,
          top: 5,
          width: wx.getSystemInfoSync().windowWidth - 10,
          height: 40
        },
        clickable: true
      }
    ]
  },

  controltap(e) {
    console.log(e.controlId)
  }
})
