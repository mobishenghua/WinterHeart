Page({
  onLoad() {
    // 从后台被 scheme 重新打开
    // options.query == {number:1}
    var app=getApp();
    this.setData({
      shownumber:app.data.where
    })
    console.log(this.data.shownumber);
    var time= new Date()
    this.setData({
      startMin:time.getMinutes(),
      startSe:time.getSeconds(),
      startMs:time.getMilliseconds(),
    })
    console.log(this.data.startSe)
    //获取起始时间
  },
  /**
   * 页面的初始数据
   */
  
  data: {
    startMin:0,
    startSe:0,
    nowMin:0,
    nowSe:0,
    diffSe:0,
    //存储时间
    shownumber:0,
    bannerCurrent: 0, // 当前显示的banner
    bannerData: [
      { 'id': 0, 'title':'申奥过程',  
      'content':['&nbsp;&nbsp;&nbsp;&nbsp;第25届冬季奥林匹克运动会（英语：XXV Winter Olympic Games），又称2026年米兰-科尔蒂纳丹佩佐冬季奥运会。\n\n&nbsp;&nbsp;&nbsp;&nbsp;2019年6月24日，托马斯·巴赫宣布2026年冬季奥运会的主办城市是米兰-科尔蒂纳丹佩佐。米兰-科尔蒂纳丹佩佐申办成功后，这将是意大利第四次举办奥运会（不计因第二次世界大战取消的1944年冬季奥运会），也是继2006年都灵冬季奥运会之后时隔整整20年再次由意大利主办的冬季奥运会。\n\n&nbsp;&nbsp;&nbsp;&nbsp;2019年6月24日，在于瑞士洛桑举办的国际奥委会第134次全体会议上，国际奥委会成员投票，选举意大利的米兰和科尔蒂纳丹佩佐为2026年冬季奥运会的举办城市。本届冬奥会将完全遵守国际奥委会2020议程，聚焦长期发展战略和对举办地的各种挑战。',
                 '&nbsp;&nbsp;&nbsp;&nbsp;第24届冬季奥林匹克运动会（英语：The XXIV Olympic Winter Games），又称2022年北京冬季奥运会。\n\n&nbsp;&nbsp;&nbsp;&nbsp;2015年7月31日，托马斯·巴赫宣布2022年冬季奥林匹克运动会主办城市是北京，北京成为第一个举办过夏季奥林匹克运动会和冬季奥林匹克运动会以及亚洲运动会三项国际赛事的城市，也是继1952年挪威的奥斯陆举办后时隔70年的第二个举办冬奥会的首都城市，同时张家口市凭借与北京市共同申办2022北京冬奥会的契机成功获得了2021年国际雪联自由式滑雪和单板滑雪世界锦标赛的举办权与北京市石景山区成为中国第一个获得此项赛事举办权的城市，同时北京与张家口成为中国第一个获得过冬季奥林匹克运动会举办权的城市。',
                 '&nbsp;&nbsp;&nbsp;&nbsp;2018年平昌冬季奥运会（2018 The winter Olympics in Pyeongchang），第23届冬季奥林匹克运动会，简称“平昌冬奥会”，2018年2月9日~25日在韩国平昌郡举行。\n\n&nbsp;&nbsp;&nbsp;&nbsp;2011年7月6日，国际奥委会第123届全会在南非德班举行，投票选定平昌为2018年冬季奥运会的举办城市。',
                 '&nbsp;&nbsp;&nbsp;&nbsp;第22届冬季奥林匹克运动会（2014年索契冬季奥运会“2014 The winter Olympics in Sochi ”），简称“索契冬奥会”，2014年2月7日至2月23日在俄罗斯联邦索契市举行。\n\n&nbsp;&nbsp;&nbsp;&nbsp;2006年6月22日，国际奥委会执委会举行会议，确定了三个城市的最终候选资格，时任国际奥委会主席雅克·罗格宣布俄罗斯索契、奥地利萨尔茨堡和韩国平昌成为候选城市。\n\n&nbsp;&nbsp;&nbsp;&nbsp;2007年7月4日，在危地马拉首都危地马拉城举行的国际奥委会第119次全会确定2014年冬奥会举办地归属，俄罗斯的索契战胜对手韩国的平昌，获得2014年冬季奥林匹克运动会的举办权，两个城市的票差为4票。',
                 '&nbsp;&nbsp;&nbsp;&nbsp;2010年温哥华冬季奥运会（XXI Olympic Winter Games）是第21届冬季奥运会，简称“温哥华冬奥会”，2010年2月12日~2月28日在加拿大温哥华市举办，历时16天。\n\n&nbsp;&nbsp;&nbsp;&nbsp;2003年6月2日的布拉格，温哥华险胜韩国的平昌（第一轮平昌高过温哥华11票，第二轮投萨尔茨堡的委员都转投温哥华，所以获胜）与萨尔茨堡，取得了2010年第21届冬季奥运会的主办权。',
                 '&nbsp;&nbsp;&nbsp;&nbsp;2006都灵冬季奥运会（XX Olympic Winter Games）是第二十届冬季奥运会，2006年2月10日至2006年2月26日在意大利都灵举办。\n\n&nbsp;&nbsp;&nbsp;&nbsp;1999年6月19日，在韩国首尔举行的国际奥林匹克委员会第109次会议上，都灵以53比36的票数击败瑞士锡永取得第二十届冬季奥运会的主办权。会议前原本媒体纷纷看好锡永胜出，因为国际奥委会就位于瑞士，但最终都灵凭借17票的优势胜出。'
    ]
    },
      { 'id': 1, 'title':'比赛场馆', 
        'content':['&nbsp;&nbsp;&nbsp;&nbsp;本届冬奥会将在米兰和科尔蒂纳丹佩佐两地举办，并且93%的场馆为现成或临时场馆。',
                 '&nbsp;&nbsp;&nbsp;&nbsp;北京2022年冬奥运会和冬残奥运开闭幕式计划在北京市区举行，共举办包括滑冰（含短道速滑、速度滑冰、花样滑冰）、冰球、冰壶在内的3个大项5个分项的所有冰上项目比赛，北京赛区一共有5座竞赛场馆，其中4座分别是水立方、国家体育馆、五棵松体育馆和首都体育馆，这4座体育馆将分别举办冰壶、男子冰球、女子冰球、短道速滑和花样滑冰的比赛。冬奥会需要的12个冰上项目场馆，已经有11个是现成的，此外还需要在北京奥林匹克森林公园网球中心南侧新建一个场馆——国家速滑馆。\n\n&nbsp;&nbsp;&nbsp;&nbsp;张家口市将举办跳台滑雪、单板滑雪、自由式滑雪、北欧两项、冬季两项和越野滑雪项目的比赛，2015年1月19日冬奥申委公布了在张家口市拟建奥运场馆的规划情况，将新建改建五个比赛场地，分别是国家跳台滑雪中心、国家越野滑雪中心、国家冬季两项中心、密苑云顶乐园。\n\n&nbsp;&nbsp;&nbsp;&nbsp;位于北京西北部距离市区约90公里的延庆区小海坨山区，将举行雪橇、雪车和滑雪大项中的高山滑雪项目，当初选择延庆，也是考虑到延庆小海坨地区更有利，而这里将有两个竞赛场馆，分别是国家高山滑雪中心和国家雪车雪橇中心。',
                 '&nbsp;&nbsp;&nbsp;&nbsp;冬奥会与冬残奥会的开幕式和闭幕式均在平昌奥林匹克体育场内进行。\n\n&nbsp;&nbsp;&nbsp;&nbsp;同时阿尔卑西亚度假村将进行冬季两项、越野滑雪和跳台滑雪比赛，这是一个能容纳26000人的运动场。',
                 '&nbsp;&nbsp;&nbsp;&nbsp;索契冬奥会的赛事场地众多，有菲施特奥林匹克体育场、波绍伊体育馆、沙伊巴竞技场、冰立方冰壶中心、冰山滑冰宫、阿德勒竞技场、劳拉越野滑雪和冬季两项中心、罗萨-胡特滑雪中心、高尔基俄罗斯跳台滑雪中心、山崎奥林匹克滑行中心以及罗萨-胡特极限公园。',
                 '&nbsp;&nbsp;&nbsp;&nbsp;温哥华市\n\n&nbsp;&nbsp;&nbsp;&nbsp;卑诗体育馆：开幕式、闭幕式、每晚颁奖仪式\n\n&nbsp;&nbsp;&nbsp;&nbsp;奥运选手村\n\n&nbsp;&nbsp;&nbsp;&nbsp;温哥华会议展览中心：媒体中心\n\n&nbsp;&nbsp;&nbsp;&nbsp;通用汽车体育馆：冰球\n\n&nbsp;&nbsp;&nbsp;&nbsp;太平洋体育馆：花式溜冰、短道速滑\n\n&nbsp;&nbsp;&nbsp;&nbsp;山峰公园：冰壶\n\n&nbsp;&nbsp;&nbsp;&nbsp;卑诗大学卑诗大学冬季体育中心：冰球\n\n&nbsp;&nbsp;&nbsp;&nbsp\n\n&nbsp;&nbsp;&nbsp;&nbsp;列治文市\n\n&nbsp;&nbsp;&nbsp;&nbsp;列治文奥运椭圆场馆：速度滑冰\n\n&nbsp;&nbsp;&nbsp;&nbsp;西温区\n\n&nbsp;&nbsp;&nbsp;&nbsp;塞浦勒斯度假区：自由式滑雪、单板滑雪\n\n&nbsp;&nbsp;&nbsp;&nbsp;惠斯勒\n\n&nbsp;&nbsp;&nbsp;&nbsp;惠斯勒奥运及伤残奥运选手村\n\n&nbsp;&nbsp;&nbsp;&nbsp;惠斯勒溪畔：高山滑雪\n\n&nbsp;&nbsp;&nbsp;&nbsp;惠斯勒奥运公园：冬季两项、越野滑雪、跳台滑雪\n\n&nbsp;&nbsp;&nbsp;&nbsp;惠斯勒滑行中心：有舵雪橇、俯式冰撬、无舵雪橇',
                 '&nbsp;&nbsp;&nbsp;&nbsp;都灵奥林匹克体育场(TorinoOlympic) 开闭幕式\n\n&nbsp;&nbsp;&nbsp;&nbsp;埃斯波斯兹奥尼体育馆(Esposizioni) 冰球\n\n&nbsp;&nbsp;&nbsp;&nbsp;奥林匹克帕拉竞技冰球馆(Olympic Palasport) 冰球\n\n&nbsp;&nbsp;&nbsp;&nbsp;奥沃尔-林格托体育馆(Oval Lingotto) 速度滑冰\n\n&nbsp;&nbsp;&nbsp;&nbsp;帕拉维拉体育馆(Palavela) 花样滑冰短道速滑\n\n&nbsp;&nbsp;&nbsp;&nbsp;巴尔多内恰滑雪场(Bardonecchia) 高山滑雪单板滑雪\n\n&nbsp;&nbsp;&nbsp;&nbsp;塞斯特雷-伯加塔滑雪场(Sestriere sub-area Borgata) 高山滑雪\n\n&nbsp;&nbsp;&nbsp;&nbsp;皮内罗洛-帕拉吉亚西奥体育馆(Pinerolo Palaghiaccio) 冰壶\n\n&nbsp;&nbsp;&nbsp;&nbsp;普拉格拉托体育场(Pragelato) 北欧两项跳台滑雪\n\n&nbsp;&nbsp;&nbsp;&nbsp;普拉格拉托-普兰体育场(Pragelato Plan) 北欧两项 越野滑\n\n&nbsp;&nbsp;&nbsp;&nbsp;塞萨纳-圣西卡里奥滑雪场(Cesana San Sicario) 冬季两项\n\n&nbsp;&nbsp;&nbsp;&nbsp;塞萨纳-帕里奥体育场(Cesana Pariol) 雪车俯式冰橇无舵雪橇\n\n&nbsp;&nbsp;&nbsp;&nbsp;圣西卡里奥-弗雷特夫滑雪场(San Sicario Fraiteve) 高山滑雪\n\n&nbsp;&nbsp;&nbsp;&nbsp;塞斯特雷-科勒滑雪场(Sestriere sub-area Colle） 高山滑雪\n\n&nbsp;&nbsp;&nbsp;&nbsp;萨奥兹-杜尔克斯滑雪场(Sauze d Oulx Jouvenceaux) 自由式滑雪'
    ]
    },
      { 'id': 2, 'title':'赛事文化', 
        'content':['&nbsp;&nbsp;&nbsp;&nbsp;会徽\n\n&nbsp;&nbsp;&nbsp;&nbsp;2021年3月31日，2026年米兰-科尔蒂纳丹佩佐冬奥会和残奥会的组织者揭晓了冬奥会会徽。名为“Futura”的设计方案荣誉当选，而这也是奥运会历史上第一次由公众投票决定奥运会徽。\n\n&nbsp;&nbsp;&nbsp;&nbsp;组织者称“Futura”的徽标代表了可持续性，它主要是在白色背景上以一个白色的痕迹显示数字2和6。旨在描绘一个小手势可以改变世界，未来是所有人的胜利这一理念。冬季残奥会的徽标与奥林匹克会徽相似。这些数字将以红色、蓝色和绿色代替白色，以代表国际残奥会委员会的Agitos标志。',
                 '&nbsp;&nbsp;&nbsp;&nbsp;2017年12月15日，国家游泳中心“水立方”，这座传承2008年奥运会元素、又将迎来2022年冬奥会的“双奥”场馆，见证了奥林匹克运动史上的又一重要时刻：2022年北京冬奥会会徽“冬梦”和冬残奥会会徽“飞跃”，在此揭开面纱。\n\n&nbsp;&nbsp;&nbsp;&nbsp;吉祥物\n\n&nbsp;&nbsp;&nbsp;&nbsp;2019年9月17日晚，2022年北京冬奥会和冬残奥会吉祥物在北京市石景山区首钢园区国家冬季运动训练中心冰球馆揭开神秘面纱。北京冬奥会吉祥物名为“冰墩墩”，形象来源于国宝大熊猫。冬残奥会吉祥物“雪容融”，形象来源于中国传统文化符号大红灯笼。\n\n&nbsp;&nbsp;&nbsp;&nbsp;火炬\n\n&nbsp;&nbsp;&nbsp;&nbsp;北京冬奥会火炬“飞扬”外形极具动感和活力，颜色为银色与红色，象征冰火相约，激情飞扬，照亮冰雪，温暖世界。北京冬残奥会火炬则选用银色与金色，寓意辉煌与梦想，体现“勇气、决心、激励、平等”的残奥价值观，火炬最下方一圈刻有“北京2022年冬残奥会”全称的盲文。',
                 '&nbsp;&nbsp;&nbsp;&nbsp;会徽\n\n&nbsp;&nbsp;&nbsp;&nbsp;平昌冬奥会会徽是将韩文中“平昌”两个字的子音加以形象化后完成的。平昌冬奥会会徽包含了在天地合一的平昌雪花与冰凌、冬奥选手和来自全球各地的人们共聚一堂、共庆盛典的含义。会徽的颜色采用了韩国的传统色彩——五方色（青、赤、黄、白、黑五色）。\n\n&nbsp;&nbsp;&nbsp;&nbsp;火炬\n\n&nbsp;&nbsp;&nbsp;&nbsp;平昌冬奥会火炬以白色和金色为主色调，高700毫米，代表平昌700米的海拔高度。火炬点燃后火焰将向5个方向燃烧，这是“*”——平昌的象征，该符号同时刻在火炬的下半部和顶部周围。\n\n&nbsp;&nbsp;&nbsp;&nbsp;奖牌\n\n&nbsp;&nbsp;&nbsp;&nbsp;2017年9月21日，2018年平昌冬奥会奖牌曝光，立体条纹铺满整个奖牌，时代感强。金牌重量为586克、银牌580克、铜牌493克。与2014年索契冬奥会相比，金银牌更重，铜牌更轻',
                 '&nbsp;&nbsp;&nbsp;&nbsp;会徽\n\n&nbsp;&nbsp;&nbsp;&nbsp;2014年索契冬季奥运会会徽采用了俄罗斯国旗上的颜色进行绘制，在会徽上写着“Sochi.ru”几个英文字。下方是奥运五环和2014年的标记，上面还有Gateway to the Future的口号。\n\n&nbsp;&nbsp;&nbsp;&nbsp;口号&nbsp;&nbsp;&nbsp;&nbsp;2014年索契冬季奥运会的主题口号是：“激情冰火属于你（Hot.Cool.Yours）”。主题口号中的“Hot”代表火热的运动激情，也暗指主办地索契的特点。“Cool”指代冬奥会举办的季节，也代表者俄罗斯的传统形象。“Yours”意味着冬奥会是属于全世界体育迷的盛事。',
                 '&nbsp;&nbsp;&nbsp;&nbsp;会徽\n\n&nbsp;&nbsp;&nbsp;&nbsp;该会徽的设计者是爱琳娜·里维拉·麦克格雷格，主体为五块矩形组成的张开双臂的抽象人形，下方是“温哥华2010”字样和奥运五环。主体形象的设计灵感来源于加拿大北部地区土著民族因纽特人(爱斯基摩人)的巨型石刻，这些被雕刻并叠放成人形的巨石常被用做路标和纪念物。人形的主体形象被命名为伊拉纳克，在因纽特语中意为“朋友”。\n\n&nbsp;&nbsp;&nbsp;&nbsp;吉祥物\n\n&nbsp;&nbsp;&nbsp;&nbsp;冬奥会的吉祥物有三个，米加（Miga）的形象来自逆戟鲸与白灵熊，魁特奇（Quatchi）是一只北美大脚野人，这是北美西北山区传说中的怪兽。它因为爱好冰球而与Miga结伴踏上了前往温哥华的旅程。而冬季残奥会的吉祥物则是名叫苏米（Sumi）的精灵，它被设定为一个动物守护神，有着雷鸟之翼与黑熊之足，头上戴着的帽子形象也来自于逆戟鲸。\n\n&nbsp;&nbsp;&nbsp;&nbsp;奥运奖牌\n\n&nbsp;&nbsp;&nbsp;&nbsp;温哥华冬奥会首次使用波浪形奖牌 ，份量最重。奖牌每枚重达500至576克，进入奥运会历史上最重的奖牌之列。奖牌的设计包含丰富的创意，创造了奥运史上的几项第一。',
                 '&nbsp;&nbsp;&nbsp;&nbsp;火炬\n\n&nbsp;&nbsp;&nbsp;&nbsp;北京时间11月27日晚，2006年都灵冬奥会圣火在希腊古奥林匹亚镇被点燃，圣洁的火光驱散了天空的阴郁，火炬接力之路悄然亮起。在随后的日子里，圣火将从希腊一路燃到到意大利，最后抵达主办城市都灵的奥运主会场。\n\n&nbsp;&nbsp;&nbsp;&nbsp;吉祥物\n\n&nbsp;&nbsp;&nbsp;&nbsp;2006年意大利都灵冬季奥运会吉祥物“内韦”和“格利兹”。“内韦”的形象是一个身着红色服装的小女孩，长着一副圆圆的脑袋，形状宛如雪球；“格利兹”则是一个身穿蓝色服装的小男孩，长着一个方脑袋，形状宛如小方冰块。它们象征着冬季奥运会项目中不可缺少的两种元素——雪和冰。\n\n&nbsp;&nbsp;&nbsp;&nbsp;奖牌\n\n&nbsp;&nbsp;&nbsp;&nbsp;奖牌为圆形，中间有一块圆形镂空，这个设计成功地把都灵冬奥会的独特魅力展现出来，奖牌的形状正好体现了意大利最负盛名的“广场”。广场是意大利的标志性形象。中间镂空的奖牌就像一枚奥林匹克的戒指，一枚象征着胜利的戒指，中间空着的一块还象征了我们的胸膛，胸膛下跳动的心脏和生命展示了对伟大的奥运会的热情。'
    ]
    },
      { 'id': 3, 'title':'各方评价',
        'content':['暂无',
                 '&nbsp;&nbsp;&nbsp;&nbsp;中国举办冬奥会，将在世界五分之一的人口中更好地传播奥林匹克团结、友谊、和平的宗旨和理念，将推动13亿中国人以不同方式投身冰雪运动及相关产业，并将为健康中国、国际奥林匹克运动作出新贡献。\n&nbsp;&nbsp;&nbsp;&nbsp;（国家体育总局、中华全国体育总会和中国奥委会在祝贺中表示）\n\n&nbsp;&nbsp;&nbsp;&nbsp;祝贺北京和这座城市的人民赢得2022年冬季奥运会的举办权。英国代表团参加2008年奥运会之后，对那里壮观的体育场馆、友好的人民和无与伦比的盛会留下了美好的印象。我相信北京能够为全世界的运动员举办一届伟大的冬奥会。\n&nbsp;&nbsp;&nbsp;&nbsp;（英国奥委会首席执行官比尔·斯温尼）',
                 '&nbsp;&nbsp;&nbsp;&nbsp;“过去7年的旅程太棒了，而韩国人民应该感到骄傲和自豪，他们成功举办了一届冬奥会，可以说，这是史上最佳的冬奥会。”\n&nbsp;&nbsp;&nbsp;&nbsp;(国际奥委会协调委员会主席古尼拉·林德伯格)',
                 '&nbsp;&nbsp;&nbsp;&nbsp;从各方反应来看，无论是运动员、各国家和地区奥委会、单项联合会、赞助商还是媒体，索契冬奥会都得到了非常积极的评价，听到了不少赞美之词。此外，索契冬奥会对运动员的参赛情况、反兴奋剂、电视转播以及奥运奖学金等工作表示赞扬。\n&nbsp;&nbsp;&nbsp;&nbsp;（国际奥委会主席托马斯·巴赫评）\n\n&nbsp;&nbsp;&nbsp;&nbsp;索契冬奥会无论场馆硬件还是志愿者服务、赛事组织，都是最棒的一届冬季奥运会，索契的许多经验值得北京、张家口在申奥过程中借鉴。索契冬奥会的场馆集中，较为方便，冬奥会后还能作为当地旅游基础设施可以利用。索契各方面包括安保都做得不错，证件的使用也都不重复，值得2022年北京奥申委借鉴学习。\n&nbsp;&nbsp;&nbsp;&nbsp;（中国体育代表团副团长、国家体育总局副局长肖天评）',
                 '&nbsp;&nbsp;&nbsp;&nbsp;这是一届“卓越而友善”的聚会。\n&nbsp;&nbsp;&nbsp;&nbsp;(国际奥委会主席罗格)',
                 '&nbsp;&nbsp;&nbsp;&nbsp;“光有高水平的比赛还是不够的，还应该让别人知道你的比赛，”\n&nbsp;&nbsp;&nbsp;&nbsp;(国际奥委会都灵冬奥会协调委员会主席基利)'
    ]
    },
      { 'id': 4, 'title':'中国队大事记',
        'content':['暂无',
                 '暂无',
                 '中国队以1金2银6铜共计9枚奖牌位列奖牌榜第16名',
                 '中国代表团以3金4银2铜共收获9枚奖牌排名金牌榜第12位，奖牌数位列第11名',
                 '中国代表团以5金2银4铜共收11枚奖牌排名金牌榜第7位，奖牌数位列第8名',
                 '中国代表团以2金4银5铜共收11枚奖牌位列奖牌榜第14位'
    ]
    },
      { 'id': 5, 'title':'♪学习完毕♪'}
    ],
    poster:[
      { 'id': 0, 'img':'../../../icon/milan2.png' },
      { 'id': 1, 'img':'../../../icon/beijing.png' },
      { 'id': 2, 'img':'../../../icon/pychang.jpeg' },
      { 'id': 3, 'img':'../../../icon/suoqi.jpg'},
      { 'id': 4, 'img':'../../../icon/wengehua.jpg'},
      { 'id': 4, 'img':'../../../icon/duling.jpg'}
    ]
  },

     tapName(event) {
    console.log(event)
  },
   bannerSwiper(e) {
    const that = this, bannerCurrent = e.detail.current;
    that.setData({
      bannerCurrent
    })
    var time= new Date()
    this.setData({
      nowMin:time.getMinutes(),
      nowSe:time.getSeconds(),
    })
    console.log(this.data.nowSe)
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
    console.log(this.data.diffSe)
    var app=getApp()
    if((app.globalData.achData[0].pos==0)&&(this.data.diffSe>20)){
      var obj=app.globalData.achData[0]
      obj.pos=1
      app.globalData.achData.splice(0,1,obj)
      dd.alert({ 
        title: '小朋友学习好认真',
        content: '你获得了成就“冬奥会”！',
        buttonText: '好', 
      });
    }
    //浏览时间大于20秒后切换卡牌可以获得成就
  },

  // 卡牌切换
  switchFlip: function (e) {
    const that = this;
    const index = e.currentTarget.dataset.index;
    const bannerData = that.data.bannerData;
    const isOpenFilp = that.data.bannerData[index].isOpenFilp ? false : true;
    bannerData[index].isOpenFilp = isOpenFilp;
    that.setData({
      bannerData
    });

  }



})