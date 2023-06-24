// pages/pages/show.js
const app = getApp()
Page({

  /**
   * Page initial data
   */
  data: {
    event: {}
  },
  goToForm(e) {
    const index = e.currentTarget.dataset.index;
  
    // Check if it's an existing event
    if (index) {
      wx.navigateTo({
        url: `/pages/events/form?index=${index}&edit=true`
      });
    }
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
  onLoad(options) {
    console.log("options", options)
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
    const page = this
    this.getData();
  },
   
   getData() {
      const page = this;
      let id = page.options.id
      wx.request({
        url: `${app.globalData.baseURL}/events/${id}`,
        header: app.globalData.header,
        method: 'GET',
        success(res) {
          // const events = res.data.events;
          // Update local data
          const event = res.data
          page.setData({
            event: event
          });
          wx.hideToast();
        }
    })
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
            url: `${app.globalData.baseURL}/events/${id}`,
            header: app.globalData.header,
            method: 'DELETE',
            success(res) {
              wx.showToast({
                title: 'Event deleted!',
                duration: 1000
              })
              // redirect to index page when done
              wx.redirectTo({
                url: '/pages/events/index'
              });
            }
            
          });
        }
      }
    });
  }
})