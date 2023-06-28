// pages/create.js
const app = getApp();

Page({
  /**
   * Page initial data
   */
  data: {
    formData: {},
    category: ["art", "food", "sports", "nightlife", "music"],
    resetData: true,
  },
  /**
   * Lifecycle function--Called when page show
   */
  onShow() {
    
    const page = this;
    let {formData} = page.data
    // if (this.data.resetData) this.resetData()
 
    const id = wx.getStorageSync('editedId');

    if (id) {
      console.log('id found');
      wx.request({
        url: `${app.globalData.baseUrl}/events/${id}`,
        success(res) {
          console.log(res);
          page.setData({
            formData: res.data,
            editedId: id
          });
          wx.removeStorageSync('editedId');
        }
      });
    }
  },


  bindCategoryChange(e) {
    console.log(e)
    let page = this
    page.setData({resetData:false})
    let { formData } = this.data;
    formData['categoryIndex'] = e.detail.value;
    this.setData({ formData });
  },

  bindDateChange(e) {
    let {formData} = this.data
    formData[e.currentTarget.dataset.field] = e.detail.value
    this.setData({formData})
  },  

  setInputData(e) {
    console.log(e)
    let { field, value } = e.currentTarget.dataset;
    let { formData } = this.data;
  
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
  

  /**
   * New Event Submission
   */
  save(e) {
    // Post data to API
    const page = this;
    const event = e.detail.value;
    event.user_id = 1;

    if (page.data.editedId !== undefined && page.data.editedId !== null) {
      wx.request({
        url: `${app.globalData.baseUrl}events/${page.data.editedId}`,
        method: 'PUT',
        data: { event: event },
        success(res) {
          console.log(res);
          page.setData({resetData:true})
          wx.switchTab({
            url: '/pages/events/index',
          })
        }
      });
    } else {
      wx.request({
        header: app.globalData.header,
        url: `${app.globalData.baseUrl}events`,
        method: 'POST',
        data: { event: event },
        success(res) {
          console.log(res);
          page.setData({resetData:true})
          wx.switchTab({
            url: '/pages/events/index',
          })
        },
        fail(res) {
          console.log(res);
          // Handle failure response
          console.log(res);
          wx.showToast({
            title: 'Failed to create event',
            icon: 'none',
            duration: 2000
          });
        }
      });
    }
  },

  resetData(){
    this.setData({
      formData: {},
    })
  },
});
