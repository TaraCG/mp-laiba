// pages/pages/show.js
Page({

  /**
   * Page initial data
   */
  data: {

  },
  goToForm(e) {
    console.log('function goToForm');
    const index = e.currentTarget.dataset.index;
  
    // Check if it's an existing event
    if (index) {
      wx.navigateTo({
        url: `/pages/events/form?index=${index}&edit=true`
      });
    }
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