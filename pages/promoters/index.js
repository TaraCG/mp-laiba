// pages/promoters/index.js
Page({

  /**
   * Page initial data
   */
  data: {

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
    let page = this;

    // Get API data
    wx.request({
      url: `${getApp().globalData.baseUrl}users/promoters`,
      method: 'GET',
      success(res) {
        // Assuming the response data is an array of promoters
        const promoters = res.data;
        console.log(promoters);
        // Update the data in the component
        page.setData({
          promoters: promoters,
        });
      },
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