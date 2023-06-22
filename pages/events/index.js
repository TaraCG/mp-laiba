// pages/pages/index.js
const app = getApp()

Page({

  /**
   * Page initial data
   */
  data: {
    events: [
      {title: "Event 01"},
      {title: "Event 02"},
    ]
  },

  goToShow(e) {
    console.log('function goToShow')
    wx.navigateTo({
      url: `/pages/events/show?index=${e.currentTarget.dataset.index}`
    })
  },
  
  /**
   * Lifecycle function--Called when page load
   */
  onLoad(options) {

  },

  /**
   * Lifecycle function--Called when page is initially rendered
   */
  onReady() {

  },

  /**
   * Lifecycle function--Called when page show
   */

  onShow() {
    const id = parseInt(this.options.id)
    console.log("onShow: id",id)
    const story = app.globalData.stories[id]
    this.setData(story)
    this.setData({id: id })
  },

  /**
   * Lifecycle function--Called when page hide
   */
  onHide() {

  },

  /**
   * Lifecycle function--Called when page unload
   */
  onUnload() {

  },

  /**
   * Page event handler function--Called when user drop down
   */
  onPullDownRefresh() {

  },

  /**
   * Called when page reach bottom
   */
  onReachBottom() {

  },

  /**
   * Called when user click on the top right corner to share
   */
  onShareAppMessage() {

  }
})