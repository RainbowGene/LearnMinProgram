App({

  /**
   * 小程序的生命周期是两小时
   * 当小程序初始化完成时，会触发 onLaunch（全局只触发一次）
   */
  onLaunch: function() {
    //获取用户信息
    wx.getUserInfo({
      success: function(res) {
        //console.log(res)
      }
    })

    // setTimeout(function(){
    //   const err=new Error();
    //   throw err;
    // },3000)
  },

  /**
   * 当小程序启动，或从后台进入前台显示，会触发 onShow，页面显示出来
   * 因此这个方法在一个周期内可能执行多次
   */
  onShow: function(options) {
    //console.log(options);
    //1,可以判断 options.scene 场景值来做不同处理

    //2,可以将用户信息传给服务器 getUserInfo可能未来会被废弃
    wx.getUserInfo({
      success: function(res) {
        //console.log(res)
      }
    })
  },

  /**
   * 当小程序从前台进入后台，会触发 onHide
   */
  onHide: function() {

  },

  /**
   * 当小程序发生脚本错误，或者 api 调用失败时，会触发 onError 并带上错误信息
   */
  onError: function(msg) {
    console.log('发生错误时触发的函数')
  },
  globalData: { //这里定义的全局数据可以全局共享
    name: "Gene",
    age: 18
  }
})