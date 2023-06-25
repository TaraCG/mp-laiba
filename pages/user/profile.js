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
  onLoad: function (options) {
    console.log('inside profile.js, options:', options);
    const id = 1 //userId;
    let page = this;

    // Get API data
    wx.request({
      url: `${getApp().globalData.baseUrl}users/${id}`,
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
            bookingsCount: user.bookings.length
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