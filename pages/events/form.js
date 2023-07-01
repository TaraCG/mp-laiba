// pages/pages/create.js
const app = getApp()
Page({
  /**
   * Page initial data
   */
  data: {
    start_time: '2023-00-00', 
    end_time: '2023-00-00', 
    time: '00-00', 
    title: "",
    address:"",
    description: "",
    formData: {},
    src: [],
    categories: ["Food", "Sports", "Music", "Nightlife", "Art"],
  },
  listenerBtnChooseImage: function () {
    const page = this
    // Upload an image
    wx.chooseMedia({
      count: 1,
      mediaType: ['image'],
      sourceType: ['album', 'camera'],
      maxDuration: 30,
      camera: 'back',
      success(res) {
        console.log(res.tempFiles)
        const filePath = res.tempFiles[0].tempFilePath
        wx.uploadFile({
          url:`${app.globalData.baseUrl}events/${id}/upload_image`,
          filePath: filePath,
          name:'file',
          success:function(res){
            console.log(res)
          }
        })
      }
    })
   },
    // adding this line below to have upload function and save images into cloudinary
    //    
  //  },

  imgLongTap: function (){
    // Save image to album
    wx.saveImageToPhotosAlbum({
      filePath: this.data.src,

      success(res) {
        wx.showToast({
          title: 'Save',
          icon: 'success',
          duration: 1500
        })
      console.log('success')
    }
  })
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

  },

  bindDateChange(e) {
    let {formData} = this.data
    formData[e.currentTarget.dataset.field] = e.detail.value
    this.setData({formData})
  },  

  setInputData(e) {
    const { field, value } = e.currentTarget.dataset;
    const { formData } = this.data;
  
    if (field === 'title' && value.length > 50) {
      wx.showToast({
        title: 'Title cannot exceed 50 characters',
        icon: 'none',
        duration: 2000
      });
      return;
    }
  
    if (field === 'description' && value.length > 200) {
      wx.showToast({
        title: 'Description cannot exceed 200 characters',
        icon: 'none',
        duration: 2000
      });
      return;
    }
  
    formData[field] = value;
    this.setData({ formData });
  },
  

    // New Event Submission
  save(e) {
    // Post data to API
    const page = this
    let event = this.data.formData
    event.user_id = 1
    console.log(event)
    wx.request({
      header: app.globalData.header,
      url: `${app.globalData.baseUrl}events`,
      method: 'POST',
      data: {event: event},
      success(res) {
        console.log(res)
        // redirect to index page when done
        if(res.code === 422) {
          wx.showModal({
            title: 'error',
            content: res.data.errors.join(','), 
            showCancel: false,
            confirmText: "OK"
          })
        }
        else {
          wx.switchTab({
          url: "/pages/events/index"})
        }
      } 
    }) 
  },
})