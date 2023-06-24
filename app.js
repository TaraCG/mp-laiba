// app.js
App({
  onLaunch() {
    const app = this
    wx.login({
      success: res => {
        console.log(res)
        wx.request ({
          //url: 'http://localhost:3000/api/v1/login',
          url: `${app.globalData.baseUrl}/login`,
          method: 'post',
          data: { code: res.code }, // pass code in request body
          success(loginRes) {
            app.globalData.user = loginRes.data.user
            app.globalData.header = loginRes.data.headers
            console.log(loginRes) // { data: { headers: { "X-USER-TOKEN": <User Token> }, user: <User Object> }, ... }
          }
        })
      }
    })
  },
  globalData: {
    userInfo: null,
    user: null,
    header: null,
    baseUrl: 'http://localhost:3000/api/v1'
    //baseUrl: name of our APP
  }
})
