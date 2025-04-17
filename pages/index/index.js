Page({
    onLoad() {
      // 监听加速度传感器变化
      wx.onAccelerometerChange(res => {
        // 判断是否触发摇一摇（阈值可调整）
        if (res.x > 1 || res.y > 1 || res.z > 1) {
          wx.vibrateLong(); // 手机振动
          const x = Math.floor(Math.random() * 6); // 生成0-5的随机数
          wx.reLaunch({
            url: `../result/result?x=${x}`, // 跳转到结果页并传参
          });
        }
      });
    },
    onUnload() {
      wx.offAccelerometerChange(); // 停止监听传感器
    }
  });