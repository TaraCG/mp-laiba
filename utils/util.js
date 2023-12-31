const formatTime = date => {
  const year = date.getFullYear()
  const month = date.getMonth() + 1
  const day = date.getDate()
  const hour = date.getHours()
  const minute = date.getMinutes()
  const second = date.getSeconds()

  return `${[year, month, day].map(formatNumber).join('/')} ${[hour, minute, second].map(formatNumber).join(':')}`
}

const formatNumber = n => {
  n = n.toString()
  return n[1] ? n : `0${n}`
}

module.exports = {
  formatTime,
  goToShow,
  goToPromoter
}

function goToShow(id) {
    console.log('ID:', id);
    
    wx.navigateTo({
      url: `/pages/events/show?id=${id}`,
    });
  }

  function goToPromoter(e){

    wx.navigateTo({
      url: `/pages/promoters/show?id=${e}`,
    });
  }


