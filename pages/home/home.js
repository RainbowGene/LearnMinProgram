//getApp()获取App()产生的实例对象
const app=getApp()
const name = app.globalData.name; //可以在下面Page中使用
const age = app.globalData.age;

Page({

  /**
   * 页面的初始数据
   */
  data: {
    message: 'Gene',
    students: [{
      id: 1,
      name: 'Alice'
    },
    {
      id: 2,
      name: 'Bob'
    },
    {
      id: 3,
      name: 'Jack'
    }
    ],
    counter: 0
  },
  add() {
    //this.data.counter++
    //console.log(this.data.counter)  的确发生了改变，但界面不会刷新

    //要使用 this.setData()
    this.setData({
      counter: this.data.counter + 1
    })
  },
  del() {
    //this.data.counter--
    //console.log(this.data.counter)
    this.setData({
      counter: this.data.counter - 1
    })
  },
  //使用按钮事件获取用户信息
  handleGetUserInfo(event){ //传来 event 事件对象
    console.log(event)
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
    //使用app.js中定义的全局变量
    console.log(name);
    console.log(age);
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