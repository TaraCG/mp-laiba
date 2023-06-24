// pages/index/index.js
const app = getApp()
Page({
  /**
   * Page initial data
   */
  data: {
    
  },

  goToEvent(e) {
    const id = e.currentTarget.dataset.id
    wx.navigateTo({
      url: `/pages/events/show?id=${id}`,
    });
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
    // Save reference to page
    // Get api data
    this.getData()
  },

  getData() {
    const page = this;
    wx.request({
      url: `${app.globalData.baseURL}/events`,
      header: app.globalData.header,
      method: 'GET',
      success(res) {
        // const events = res.data.events;
        // Update local data
        page.setData({
          events: res.data.events
        });
        wx.hideToast();
      }
    });
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
