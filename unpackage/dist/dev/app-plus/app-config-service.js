
var isReady=false;var onReadyCallbacks=[];
var __uniConfig = {"pages":["pages/home/home","pages/book-video/book-video","pages/group/group","pages/market/market","pages/mine/mine","pages/home-page/home-page"],"window":{"navigationBarTextStyle":"white","navigationBarTitleText":"某瓣APP","navigationBarBackgroundColor":"#4fca4f","backgroundColor":"#FFFFFF"},"tabBar":{"color":"#969696","selectedColor":"#505050","borderStyle":"black","backgroundColor":"#F9F9F9","list":[{"pagePath":"pages/home/home","iconPath":"static/tabbar/home.png","selectedIconPath":"static/tabbar/home@eds.png","text":"首页"},{"pagePath":"pages/book-video/book-video","iconPath":"static/tabbar/book.png","selectedIconPath":"static/tabbar/book@ed.png","text":"书影音"},{"pagePath":"pages/group/group","iconPath":"static/tabbar/group.png","selectedIconPath":"static/tabbar/group@ed.png","text":"小组"},{"pagePath":"pages/market/market","iconPath":"static/tabbar/market.png","selectedIconPath":"static/tabbar/market@ed.png","text":"市集"},{"pagePath":"pages/mine/mine","iconPath":"static/tabbar/mine.png","selectedIconPath":"static/tabbar/mine@ed.png","text":"我的"}]},"splashscreen":{"alwaysShowBeforeRender":true,"autoclose":false},"appname":"uni-app-du","compilerVersion":"2.5.11","entryPagePath":"pages/home/home","networkTimeout":{"request":60000,"connectSocket":60000,"uploadFile":60000,"downloadFile":60000}};
var __uniRoutes = [{"path":"/pages/home/home","meta":{"isQuit":true,"isTabBar":true},"window":{"navigationBarTitleText":"首页","enablePullDownRefresh":false,"bounce":"none"}},{"path":"/pages/book-video/book-video","meta":{"isQuit":true,"isTabBar":true},"window":{"navigationBarTitleText":"书影音","enablePullDownRefresh":false,"bounce":"none"}},{"path":"/pages/group/group","meta":{"isQuit":true,"isTabBar":true},"window":{"navigationBarTitleText":"小组","enablePullDownRefresh":false,"bounce":"none"}},{"path":"/pages/market/market","meta":{"isQuit":true,"isTabBar":true},"window":{"navigationBarTitleText":"市集","enablePullDownRefresh":false,"bounce":"none"}},{"path":"/pages/mine/mine","meta":{"isQuit":true,"isTabBar":true},"window":{"navigationBarTitleText":"我的","enablePullDownRefresh":false,"navigationBarTextStyle":"black","navigationBarBackgroundColor":"#FFFFFF","titleNView":{"buttons":[]},"bounce":"none"}},{"path":"/pages/home-page/home-page","meta":{},"window":{"navigationBarTitleText":"个人主页","navigationBarBackgroundColor":"#4fca4f","titleNView":{"buttons":[{"type":"share"}]},"bounce":"none"}}];
__uniConfig.onReady=function(callback){if(__uniConfig.ready){callback()}else{onReadyCallbacks.push(callback)}};Object.defineProperty(__uniConfig,"ready",{get:function(){return isReady},set:function(val){isReady=val;if(!isReady){return}const callbacks=onReadyCallbacks.slice(0);onReadyCallbacks.length=0;callbacks.forEach(function(callback){callback()})}});
service.register("uni-app-config",{create(a,b,c){if(!__uniConfig.viewport){var d=b.weex.config.env.scale,e=b.weex.config.env.deviceWidth,f=Math.ceil(e/d);Object.assign(__uniConfig,{viewport:f,defaultFontSize:Math.round(f/20)})}return{instance:{__uniConfig:__uniConfig,__uniRoutes:__uniRoutes}}}});
