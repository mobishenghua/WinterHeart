Page({
  //页面加载
 onLoad(query) {
   //异步逻辑
    
    this.getcode()//获得authCode
    .then(this.gettoken)//获得access_token
    .then(this.getuser)//获得user信息地址
    .then(this.getuserinfo)//通过get方式获取用户name及userid
    .then(this.showLoading)//全部初始化完成后渲染内容
   

    dd.showLoading({
     content: '加载中...',
    });
    
    // 设置加载时间
    setTimeout(() => {
        dd.hideLoading();
    }, 2000)
    
  },

  /**
   * 页面的初始数据
   */
  data: {
    bannerCurrent: 1, // 当前显示的banner
    code:0,
    token:0,
    user:0,
    userid:0,
    name:'',
    loadingHidden: false,
    bannerData: [
      { 'id': 0, 'country':'意大利', 'local':'米兰','time':'2026年02月06日-2026年02月22日','theme':'"Let us wait and see"', 'img':'../../icon/milan2.png' },
      { 'id': 1, 'country':'中国', 'local':'北京','time':'2022年02月04日-2022年02月20日', 'theme':'"纯洁的冰雪,激情的约会"', 'img':'../../icon/beijing.png' },
      { 'id': 2, 'country':'韩国', 'local':'平昌','time':'2018年02月09日-2018年02月25日' ,'theme':'"Passion Connected"', 'img':'../../icon/pychang.jpeg' },
      { 'id': 3, 'country':'俄罗斯', 'local':'索契','time':'2014年02月07日-2014年02月23日','theme':'"Hot. Cool. Yours."', 'img':'../../icon/suoqi.jpg' },
      { 'id': 4, 'country':'加拿大', 'local':'温哥华','time':'2010年02月12日-2010年02月28日','theme':'"With Glowing Hearts"', 'img':'../../icon/wengehua.jpg' },
      { 'id': 5, 'country':'意大利', 'local':'都灵','time':'2006年02月10日-2006年02月26日' ,'theme':'"An Ever Burning Flame"', 'img':'../../icon/duling.jpg' },
    ],
  },

   tapName(event) {
    console.log(event)
  },
  //swiper切换函数
   bannerSwiper(e) {
    const app=getApp();
    app.data.where=e.detail.current;
    const that = this,bannerCurrent = e.detail.current;
    that.setData({
      bannerCurrent
    });
  },
  //开始学习按键
  get(e){
    dd.navigateTo({
      url: 'winterolympics/winterolympics'
    });
  },

  getcode(){
    var that=this;
    var p = new Promise(function (resolve, reject){
    dd.getAuthCode({
    success:function(res){
      that.setData({
        code:res.authCode
      })
      console.log(res.authCode)
    },
    fail:function(err){
    dd.alert({
      title: '错误',
      content: JSON.stringify(res.data),
      buttonText: '刷新页面',
      success: () => {
            that.onLoad()
      },
    });
    }
    });
    setTimeout(function () {
    //注意:一旦你把promise的状态定义了哪他的状态就不会再改变.
    //比如我这里先写的resolve下面又跟着写了reject,reject的代码会执行但是promise的状态是不会变的就是reject
      resolve(that);
      reject("调用失败"); 
    }, 500);
    })
    return p
  },

  gettoken(that){
    var that=that
    var p = new Promise(function (resolve, reject){
    dd.httpRequest({
    url: 'https://oapi.dingtalk.com/gettoken?appkey=dingi62szgwrfzu6pz33&appsecret=iSwejJKIRw22VnVfJC0lCodedEJ9XmBkivgT2ATtJJkE4-fw6P1cN8f-WrOmWDVy',
    method: 'GET',
    dataType: 'json',
    success: function(res) {
      that.setData({
        token:res.data.access_token
      })
    console.log('芜湖'+res.data.access_token)
    var app=getApp()
    app.globalData.globalIn.splice(0,1,res.data.access_token)
    },
    //如果出错就重新刷新页面
    fail: function(res) {
    dd.alert({
      title: '错误',
      content: JSON.stringify(res.data),
      buttonText: '刷新页面',
      success: () => {
            that.onLoad()
      },
    });
    console.log(res)
    }
    });
    setTimeout(function () {
      console.log(that.data.token)
      resolve(that);
    }, 500);
    })
    return p
  },

  getuser(that){
    var that=that
    var p = new Promise(function (resolve, reject){
    that.setData({
      user:'https://oapi.dingtalk.com/user/getuserinfo?access_token='+that.data.token+'&code='+that.data.code
    })
    setTimeout(function () {
      console.log(that.data.user)
      resolve(that);
    }, 100);
    })
    return p
  },

  getuserinfo(that){
    var that=that
    var p = new Promise(function (resolve, reject){
    dd.httpRequest({
    url: that.data.user,
    method: 'GET',
    dataType: 'json',
    success: function(res) {
      that.setData({
        name:res.data.name,
        userid:res.data.userid
      })
      console.log(res)
      
      var app=getApp()
      app.globalData.globalIn.splice(1,1,res.data.userid)
      app.globalData.globalIn.splice(2,1,res.data.name)
      console.log('能不能抓吧'+app.globalData.globalIn)
    },
    fail: function(res) {
    dd.alert({
      title: '错误',
      content: JSON.stringify(res.errorMessage),
      buttonText: '刷新页面',
      success: () => {
            that.onLoad()
      },
    });
    console.log(res)
    }
    });
    setTimeout(function () {
      resolve(that);
    }, 100);
    })
    return p
  },
  showLoading(that){
    var that=that
    var p = new Promise(function (resolve, reject){
      that.setData({
        loadingHidden:true
      })
      setTimeout(function () {
      resolve(that);
    }, 100);
    })
    return p
  },
  
  
})