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
    console.log('inside stories/show, options:', options);
    const id = options.id;
    let page = this; // Declare the `page` variable here
  
    // Get api data
    wx.request({
      url: `${getApp().globalData.baseUrl}events/${id}`,
      method: 'GET',
      success(res) {
        console.log(res);
        const event = res.data;
  
        // Update local data
        page.setData({
          event: event,
          bookingsCount: event.bookings_count
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