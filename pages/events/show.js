// pages/events/show.js
const { goToPromoter } = require('../../utils/util');
const app = getApp();

Page({

  /**
   * Page initial data
   */
  data: {
    event: {}
  },

  goToForm(e) {
    console.log(e)
    let page = this
    wx.setStorageSync('editedId', this.data.event.id);
    wx.switchTab({
      url: '/pages/events/form',
    });
  },
  
  goToPromoter(e) {
    console.log(e)
    const id = e.currentTarget.dataset.id;
    console.log(id)
    goToPromoter(id);
  },

  openFullImage: function () {
    const imageUrl = 'https://images.unsplash.com/photo-1501281668745-f7f57925c3b4?ixlib=rb-4.0.3&ixid=M3wxMjA3fDB8MHxwaG90by1wYWdlfHx8fGVufDB8fHx8fA%3D%3D&auto=format&fit=crop&w=1770&q=80';

    wx.previewImage({
      urls: [imageUrl], 
      current: imageUrl, 
    });
  },
  
  /**
   * Lifecycle function--Called when page load
   */

  onLoad: function (options) {
    console.log('inside events/show, options:', options);
    const id = options.id;
    let page = this; // Declare the `page` variable here
  
    // Get api data
    wx.request({
      url: `${app.globalData.baseUrl}events/${id}`,
      method: 'GET',
      header: app.globalData.header,
      success(res) {
        console.log(res);
        const event = res.data;
  
        // Update local data
        page.setData({
          event: event,
          bookingsCount: event.bookings_count,
          promoter: event.promoter
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

  },

  deleteEvent(e) {
    const id = this.data.event.id
    console.log("this is the event to delete", id)
    // make a DELETE request
    wx.showModal({
      title: 'Are you sure?',
      content: 'Delete this event?',
      success(res) {
        if (res.confirm){
          wx.request({
            url: `${app.globalData.baseUrl}events/${id}`,
            header: app.globalData.header,
            method: 'DELETE',
            success(res) {
              wx.showToast({
                title: 'Event deleted!',
                duration: 1000
              })
              // redirect to index page when done
              wx.switchTab({
                url: '/pages/events/index'
              });
            }
            
          });
        }
      }
    });
  }
})