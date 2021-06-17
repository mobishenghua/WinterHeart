Page({
  data:{
    qNumber:1,//当前题目序号
    qMax:5,//最大题目数量
    cNumber:0,//答对题目数量
    list : [
      {question:'2022年冬奥会在哪个国家举办？',a:'韩国',b:'中国',c:'英国',d:'挪威',rightAnswer:1,timeMin:3,timeMax:7},
      {question:'第十届冬奥会开幕式约有多少名观众到场？',a:'4万',b:'5万',c:'6万',d:'7万',rightAnswer:3,timeMin:3,timeMax:7},
      {question:'第一届冬奥会在哪一年举办？',a:'1920年',b:'1924年',c:'1928年',d:'1932年',rightAnswer:1,timeMin:3,timeMax:7},
      {question:'奥林匹克标志内容不包含？',a:'奥林匹克环',b:'奥林匹克格言',c:'奥林匹克橄榄枝',d:'奥林匹克圣火',rightAnswer:2,timeMin:3,timeMax:7},
      {question:'第一届冬奥会开幕式，东道主作为第几位出场？',a:'9',b:'10',c:'16',d:'17',rightAnswer:2,timeMin:3,timeMax:7},
      {question:'第二十届冬奥会开幕式中国队旗手是谁？',a:'杨扬',b:'姚明',c:'武磊',d:'武大靖',rightAnswer:0,timeMin:3,timeMax:7},
      {question:'未申办第九届冬奥会的国家是？',a:'埃及',b:'奥地利',c:'加拿大',d:'芬兰',rightAnswer:0,timeMin:3,timeMax:7},
    ],//题目以及选项列表,正确答案中0代表A
    rNumber:0,//机器人答对题目数
    listRobot:[

    ],//机器人答题速度存储
    lNumber:0,//机器人答对题目数量
    startMin:0,
    startSe:0,
    nowMin:0,
    nowSe:0,
    diffSe:0,
    //存储时间
    
  },

  onLoad() {
    var arr=this.data.list
    for(let i = 0,len = this.data.list.length; i < len; i++) {
      let currentRandom = parseInt(Math.random() * (len - 1));
      let current = arr[i];
      arr[i] = arr[currentRandom];
      arr[currentRandom] = current;
    }
    //打乱题库
    var time= new Date()
    this.setData({
      startMin:time.getMinutes(),
      startSe:time.getSeconds(),
      startMs:time.getMilliseconds(),
    })
    //获取起始时间
    for(let i = 0,len = 5; i < len; i++) {
      var a = Math.floor(Math.random() *(this.data.list[i].timeMax+1-this.data.list[i].timeMin))+this.data.list[i].timeMin
      if (i==0){
        this.data.listRobot.push(a)
      }
      else{
        this.data.listRobot.push(a+this.data.listRobot[i-1])
      }
    }
  },
  newTime(){
    var time= new Date()
    this.setData({
      nowMin:time.getMinutes(),
      nowSe:time.getSeconds(),
    })
    //获取当前时间
    var diffMine=this.data.nowMin-this.data.startMin
    var diffSee=this.data.nowSe-this.data.startSe
    if (diffSee<0){
      diffMine=diffMine-1
      diffSee=diffSee+60
    }
    if (diffMine<0){
      diffMine=diffMine+60
    }
    this.setData({
      diffSe:diffMine*60+diffSee,
    })
    //计算差值
    if (this.data.diffSe<this.data.listRobot[0]){
      this.setData({
        lNumber:0
      })
    }
    else if (this.data.diffSe<this.data.listRobot[1]){
      this.setData({
        lNumber:1
      })
    }
    else if (this.data.diffSe<this.data.listRobot[2]){
      this.setData({
        lNumber:2
      })
    }
    else if (this.data.diffSe<this.data.listRobot[3]){
      this.setData({
        lNumber:3
      })
    }
    else if (this.data.diffSe<this.data.listRobot[4]){
      this.setData({
        lNumber:4
      })
    }
    else {
      this.setData({
        lNumber:5
      })
    }
  },
  //更新时间
  seeAnswer(){
    this.setData({
      se:this.data.list[qNumber-1].rightAnswer
    })
  },
  //偷看答案
  onSubmit() {
    var a=''
    var b=''
    if(this.data.cNumber==0){
      a='，全错……'
      b='再接再厉'
    }
    else if(this.data.cNumber==1){
      a='，不太好。'
      b='再来一次'
    }
    else if(this.data.cNumber==2){
      a='，马马虎虎。'
      b='好耶！'
    }
    else if(this.data.cNumber==3){
      a='，还不错。'
      b='欢呼'
    }
    else if(this.data.cNumber==4){
      a='，差一点就全对啦。'
      b='下次一定'
    }
    else if(this.data.cNumber==5){
      a='，太强啦。'
      b='就是这么强！'
    }
    var appp=getApp()
    for (var i=0;i<7;i++){
      if(appp.globalData.listDataHidden[i].text==appp.globalData.globalIn[2]){
        var user=appp.globalData.listDataHidden[i]
        user.type=user.type+this.data.cNumber*5
        appp.globalData.listDataHidden.splice(i,1,user)
      }
    }
    if (this.data.cNumber>this.data.lNumber){
      //胜利
        var app = getApp()
        var getC=parseInt(Math.random() * 2)
        var getD=0
        if (getC==0) {
          getD=0  //获取冬奥会
        }
        else{
          getD=1  //获取冰墩墩
        }
        var obj=app.globalData.achData[getD]
        obj.pos=1
        app.globalData.achData.splice(getD,1,obj)
      //随机数
        dd.alert({ 
        title: '小朋友你赢了',
        content: '你用'+this.data.diffSe+'秒，答对了'+this.data.cNumber+'道题'+a+'冰墩墩答对了'+this.data.lNumber+'道题。你抽到了“'+app.globalData.achData[getD].name+'”。',
        buttonText: b, 
      });
    }
    else{
      //失败
      
      var app=getApp()
      if((this.data.lNumber>=3)&&(app.globalData.achData[4].pos==0))
      {
        var obj=app.globalData.achData[4]
        obj.pos=1
        app.globalData.achData.splice(4,1,obj)
        dd.alert({ 
        title: '你达成了隐藏成就',
        content: '被冰墩墩击败了吧。你获得了成就“冰墩墩可太厉害啦”！',
        buttonText: '果然冰墩墩才是最强的', 
      });
      }
      
      dd.alert({ 
        title: '小朋友有点可惜',
        content: '你用'+this.data.diffSe+'秒，答对了'+this.data.cNumber+'道题'+a+'冰墩墩答对了'+this.data.lNumber+'道题。',
        buttonText: b, 
      });
    }
  },
  //答题结束界面

  nextQuestion(answer) {
    var a = this.data.qNumber
    if (a < this.data.qMax) {
      a = a + 1
      this.setData({ 
        qNumber: a
      });  
    }
    else {
      this.onSubmit()
      dd.reLaunch({
        url: '/pages/index/index'
      })
    }
    this.setData({
      se:'偷看答案'
    })
  },
  //函数，跳转至下一题

  bingo(answer){
    if (this.data.list[this.data.qNumber-1].rightAnswer==answer) {
      var a = this.data.cNumber
      a = a + 1
      this.setData({ 
        cNumber: a
      }); 
    }
  },
  //检测答案是否正确

  chooseA(){
    this.bingo(0)
    this.nextQuestion(0)
    this.newTime()
  },
  chooseB(){
    this.bingo(1)
    this.nextQuestion(1)
    this.newTime()
  },
  chooseC(){
    this.bingo(2)
    this.nextQuestion(2)
    this.newTime()
  },
  chooseD(){
    this.bingo(3)
    this.nextQuestion(3)
    this.newTime()
  },

  /*
  myDate.getMinutes(); //获取当前分钟数(0-59)
  myDate.getSeconds(); //获取当前秒数(0-59)
  myDate.getMilliseconds(); //获取当前毫秒数(0-999)
  */
});