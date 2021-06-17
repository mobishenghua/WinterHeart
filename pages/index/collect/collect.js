Page({

  onLoad(query) {
    // 页面加载
    var replace=getApp()
    for (var i=0;i<5;i++){
      if (replace.globalData.achData[i].pos==1){
        this.data.bannerData.splice(i,1,replace.globalData.HiddenData[i])
      }
    } 
    
  },
  /**
   * 页面的初始数据
   */
  data: {
    logo: '../../assets/icon-logo.png',
    iconFlag: '../../assets/icon-flag.png',
    copyrightText: 'www.duoguyu.com',
    bannerCurrent: 0, // 当前显示的banner
    bannerData: [
      { 'id': 0, 'theme':'这张卡牌你还没有获得哦', 'img':'https://img2.baidu.com/it/u=3849320899,4008679388&fm=26&fmt=auto&gp=0.jpg' },
      { 'id': 1, 'theme':'这张卡牌你还没有获得哦', 'img':'https://img2.baidu.com/it/u=3849320899,4008679388&fm=26&fmt=auto&gp=0.jpg' },
      { 'id': 2, 'theme':'这张卡牌你还没有获得哦', 'img':'https://img2.baidu.com/it/u=3849320899,4008679388&fm=26&fmt=auto&gp=0.jpg' },
      { 'id': 3, 'theme':'这张卡牌你还没有获得哦', 'img':'https://img2.baidu.com/it/u=3849320899,4008679388&fm=26&fmt=auto&gp=0.jpg' },
      { 'id': 4, 'theme':'这张卡牌你还没有获得哦', 'img':'https://img2.baidu.com/it/u=3849320899,4008679388&fm=26&fmt=auto&gp=0.jpg' },
     
    ],
  },
  

   tapName(event) {
    console.log(event)
  },
   bannerSwiper(e) {
    const that = this, bannerCurrent = e.detail.current;
    that.setData({
      bannerCurrent
    })
  },

  get(){
    var app=getApp()
    var a={src:''}
    a.src=this.data.bannerData[this.data.bannerCurrent].img
    app.globalData.swiperImage.splice(1,1,a)
    
  }

})