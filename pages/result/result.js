// 卡片名称数组，对应 images/cards/ 目录下的图片
const cards = ['baofu', 'chengming', 'jinli', 'nixi', 'taohua', 'xingfu'];

Page({
  data: {
    cardName: ''  // 卡片名称，用于拼接图片路径
  },
  onLoad(options) {
    const x = parseInt(options.x || 0); // 接收首页传递的参数
    this.setData({
      cardName: cards[x]  // 根据传入的随机数选择对应的卡片
    });
  },
  backToHome() {
    wx.reLaunch({
      url: '../index/index' // 返回首页
    });
  }
});