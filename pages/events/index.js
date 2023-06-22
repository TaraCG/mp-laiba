// pages/index/index.js
const app = getApp()

Page({
  /**
   * Page initial data
   */
  data: {

  },

  goToShow(e) {
    console.log('function goToShow');
    wx.navigateTo({
      url: `/pages/events/show?index=${e.currentTarget.dataset.index}`,
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
    let page = this;
    // Get api data
    wx.request({
      url: "http://localhost:3000/api/v1/events",
      method: 'GET',
      success(res) {
        const events = res.data.events;

        // Update local data
        page.setData({
          events: events
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
