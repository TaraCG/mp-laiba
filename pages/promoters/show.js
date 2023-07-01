// pages/promoters/show.js
const app = getApp();

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
    const id = options.id 
    let page = this 

    wx.request({
      url: `${app.globalData.baseUrl}users/${id}`,
      method: 'GET',
      success(res) {
        console.log(res);
        const promoter = res.data;
  
        // Update local data
        page.setData({
          nickname: promoter.nickname,
          recievedBookings: promoter.recieved_bookings,
          events: promoter.events
        });
  
        wx.hideToast();
      }
    });
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