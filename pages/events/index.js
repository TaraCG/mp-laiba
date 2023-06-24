// pages/index/index.js
const utils = require('../../utils/util');

const app = getApp()

function hasBooking(bookings, userId) {
  for (let i = 0; i < bookings.length; i++) {
    if (bookings[i].user_id === userId) {
      return true;
    }
  }
  return false;
}

Page({
  /**
   * Page initial data
   */
  data: {

  },

  hasBooking: hasBooking,

  goToShow(e) {
    const id = e.currentTarget.dataset.id;
    utils.goToShow(id);
  },

  addBooking: function(options) {
    const page = this;
    const eventId = options.currentTarget.dataset.eventid;
    console.log({ eventId })
  
    const events = page.data.events;
    const updatedEvents = events.map(event => {
      if (event.id === eventId) {
        if (event.has_booking) {
          event.has_booking = false; // Cancel the booking
        } else {
          event.has_booking = true; // Add the booking
        }
      }
      return event;
    });
  
    page.setData({ events: updatedEvents });
  
    // Send a request to the server to add/delete the booking
    wx.request({
      url: `${getApp().globalData.baseUrl}events/${eventId}/booking`,
      method: 'POST', // or 'DELETE' depending on the scenario
      data: {
        booking: {
          event_id: eventId,
          user_id: 1
        }
      },
      success(res) {
        // Handle the success response
        console.log(res)
        if (res.statusCode === 200) {
          wx.showToast({
            title: 'Booking updated successfully',
            icon: 'success',
            duration: 2000
          });
        } else {
          wx.showToast({
            title: 'Failed to update booking',
            icon: 'none',
            duration: 2000
          });
        }
      },
      fail(res) {
        // Handle the failure response
        console.log(res);
        wx.showToast({
          title: 'Failed to update booking',
          icon: 'none',
          duration: 2000
        });
      }
    });
  },
  

  /**
   * Lifecycle function--Called when page load
   */
  onLoad(options) {

  let page = this;

  // Get api data
  wx.request({
    url: `${getApp().globalData.baseUrl}events`,
    method: 'GET',
    success(res) {
      const events = res.data.events;
      console.log(events)

      // Update local data
      page.setData({
        events: events
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
