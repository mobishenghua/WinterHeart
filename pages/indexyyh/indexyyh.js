Page({
  onLoad(query) {
    // 页面加载
    
    console.info(`Page onLoad with query: ${JSON.stringify(query)}`);
  },
  onReady() {
    // 页面加载完成
  },
  onShow() {
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
  
  openAnswer1(){   
    dd.navigateTo({
    url: 'answer1/answer1'
    })
  },
  openAnswer2(){   
    dd.navigateTo({
    url: 'answer2/answer2'
    })
  },
  
  show1(){
    dd.previewImage({
      urls: [
        'https://i0.hdslb.com/bfs/article/5f8e3428e9d9c5f49cd391e767ed92c95fc1504f.png@1320w_1868h.webp',
      ],
    });
  },

  show2(){
    dd.previewImage({
      urls: [
        'https://i0.hdslb.com/bfs/article/a3ce7b116b2646f56be44c273cbffc540d9ff942.png@1320w_1868h.webp',
      ],
    });
  }
  
});
