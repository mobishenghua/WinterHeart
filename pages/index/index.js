Page({
  onLoad(query) {
    // 页面加载
    var app=getApp() 
    for (var i=0;i<7;i++){    
      this.data.listData.splice(i,1,app.globalData.listDataHidden[i])
      if (app.globalData.listDataHidden[i].text=="墨笔生花")
      {
        var obj=app.globalData.listDataHidden[i]
        obj.text=app.globalData.globalIn[2]
        console.log(obj.text)
        this.data.listData.splice(i,1,obj)
      }
    }


    

    var array=this.data.listData
    array.sort(function (a, b) {
      if (a.type > b.type) {
        return -1;
      } else if (a.type < b.type) {
        return 1;
      } else {
        return 0;
      }  
    });    
    this.setData({
      listData:array,
      astoken:'https://oapi.dingtalk.com/message/send_to_conversation?access_token='+app.globalData.globalIn[0],
      asname:app.globalData.globalIn[1],
      asstoken:'https://oapi.dingtalk.com/topapi/chat/updategroupnick?access_token='+app.globalData.globalIn[0],
    })
    console.log(this.data.astoken)
    console.log(this.data.asname)
    
    
  },


  onReady() {
    // 页面加载完成
  },
  onShow() {
    var app=getApp()
    this.setData({
      swiperImg:app.globalData.swiperImage
    });
    // 页面显示
  },
  onHide() {
    // 页面隐藏
  },
  onUnload() {
    // 页面被关闭
  },
  onTitleClick() {
    // 标题被点击
  },
  onPullDownRefresh() {
    // 页面被下拉
  },
  onReachBottom() {
    // 页面被拉到底部
  },
  onShareAppMessage() {
    // 返回自定义分享信息
    return {
      title: 'My App',
      desc: 'My App description',
      path: 'pages/index/index',
    };
  },

  //调用全局变量
  data:{
    swiperImg:[],
    listData:["","","","","","",""],
    chatid:"",
    astoken:"",
    asname:"",
    asstoken:"",
  },
  //排行榜
  sortListe(){
    var array=this.data.listData
    array.sort(function (a, b) {
      if (a.type > b.type) {
        return -1;
      } else if (a.type < b.type) {
        return 1;
      } else {
        return 0;
      }  
    });    
    this.setData({
      listData:array
    })
  },
  //进入收藏
  open(){
    dd.navigateTo({
    url: 'collect/collect'
    })
  },
  //向群内发送消息
  sendmeg(){
    //this.getcid()
   // .then(this.send)  
    var app=getApp()
    //获取cid
      dd.chooseChatForNormalMsg({
        isConfirm: true, //是否弹出确认窗口，默认为true
        success: res => {
          console.log(res)
            //请求发送
            dd.httpRequest({
            headers: {
              "Content-Type": "application/json"
            },
              url: this.data.astoken,//改token
              method: 'POST',
              dataType:'json',
              data:JSON.stringify({
                  "sender":this.data.asname,
                  "cid":res.cid,
                  "msg":{
                      "msgtype":"text",
                      "text":{
                        "content":"ଘ(੭ˊᵕˋ)੭我又一次战胜了冰墩墩和雪容融，我已经有"+app.globalData.listDataHidden[1].type+"分啦٩( 'ω' )و"
                      }
                    }
               }),
              success: rev =>{
                console.log("ryh")
                console.log(rev)
              }      
            })
          
        },
       
      })
  },

 /* wuhu(){
    dd.chooseChatForNormalMsg({
        isConfirm: true, //是否弹出确认窗口，默认为true
        success: res => {
          console.log(res)
            //请求发送
    dd.httpRequest({
            headers: {
              "Content-Type": "application/json"
            },
              url: this.data.asstoken,//改token
              method: 'POST',
              dataType:'json',
              data:JSON.stringify({
                  "userid":this.data.asname,
                  "cid":res.cid,
                  "group_nick":"歪比巴卜"
                
               }),
              success: rev =>{
                console.log("yhr")
                console.log(rev)
              }      
            })
  }

  })
  }*/

})
