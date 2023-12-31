// pages/user/profile.js
const utils = require('../../utils/util');

Page({

  /**
   * Page initial data
   */
  data: {

  },


  goToShow(e) {
    const id = e.currentTarget.dataset.id;
    utils.goToShow(id);
  },

  /**
   * Lifecycle function--Called when page load
   */
  onLoad() {
  },

  /**
   * Lifecycle function--Called when page is initially rendered
   */
  onReady() {

  },

  /**
   * Lifecycle function--Called when page show
   */
  onShow: function (options) {

    let page = this;
  
    // Get API data
    wx.request({
      url: `${getApp().globalData.baseUrl}users/${getApp().globalData.userId}`,
      method: 'GET',
      success(res) {
        console.log(res);
        const user = res.data;
  
        // Update local data
        page.setData({
          user: user,
          createdEvents: user.events,
          createdEventsCount: user.events.length,
          bookings: user.bookings,
          bookingsCount: user.bookings.length,
          bookedEvents: user.booked_events,
          recievedBookings: user.recieved_bookings.length
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