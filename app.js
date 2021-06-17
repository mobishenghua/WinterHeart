App({
  onLaunch(options) {
    // 第一次打开
    // options.query == {number:1}
    console.info('App onLaunch');
  },
  onShow(options) {
    // 从后台被 scheme 重新打开
    // options.query == {number:1}
  },
   data: {
    where: 1
  },
  globalData:{
    globalIn:['','',''],//accesstoken和用户id
    aNumber:5,//最大成就数量
    stu:[
      {'name':'一一','stuid':'2019210364','score':'100'},
      {'name':'二二','stuid':'2019210364','score':'99'},
      {'name':'三三','stuid':'2019210364','score':'98'},
      {'name':'四四','stuid':'2019210364','score':'97'},
      {'name':'五五','stuid':'2019210364','score':'94'},
      {'name':'六六','stuid':'2019210364','score':'95'},
      {'name':'七七','stuid':'2019210364','score':'96'},
    ],
    achData:[
      {num:0,pos:0,name:'冬奥会'},
      {num:1,pos:0,name:'冰墩墩'},
      {num:2,pos:0,name:'雪容融'},
      {num:3,pos:0,name:'2022北京'},
      {num:4,pos:0,name:'冰墩墩可太厉害啦'},
    ],
    HiddenData: [
      { 'id': 0, 'theme':'2022北京冬奥会', 'img':'https://img1.baidu.com/it/u=3487898657,1763427018&fm=26&fmt=auto&gp=0.jpg' },
      { 'id': 1, 'theme':'我是北京冬奥吉祥物冰墩墩', 'img':'http://5b0988e595225.cdn.sohucs.com/images/20190917/474666f5c2c042e099dbff0e06f1a748.jpeg' },
      { 'id': 2, 'theme':'我是冬残奥吉祥物雪容融', 'img':'https://www.xiwangchina.com/Uploads/Picture/2019/09/18/s5d81f570a6bf7.jpg' },
      { 'id': 3, 'theme':'2008北京奥运会', 'img':'https://img1.baidu.com/it/u=399230068,2059415607&fm=26&fmt=auto&gp=0.jpg' },
      { 'id': 4, 'theme':'凤求凰', 'img':'https://img.zcool.cn/community/01e4f85a9bb163a8012195865e1619.jpg@1280w_1l_2o_100sh.jpg' },
    ],
    listDataHidden:[
      {"code":"01","text":"歪比巴卜","type":100},
      {"code":"02","text":"墨笔生花","type":0},
      {"code":"03","text":"叶约分","type":30},
      {"code":"04","text":"红翼小神","type":70},
      {"code":"05","text":"帅气的助教哥哥","type":90},
      {"code":"06","text":"N墨笔R生花T","type":5},
      {"code":"07","text":"钱荣辉","type":50}
    ],
    swiperImage:[
      {src:"https://p0.ssl.cdn.btime.com/t011507465d81831abb.jpg?size=592x400"},
      {src:"https://img2.baidu.com/it/u=3849320899,4008679388&fm=26&fmt=auto&gp=0.jpg"},
      {src:"http://www.zhibo11.com/uploads/allimg/180330/120G05111-0.jpg"}
    ],
  }
});
