// Initialize app and store it to myApp variable for futher access to its methods
var myApp = new Framework7();

// We need to use custom DOM library, let's save it to $$ variable:
var $$ = Dom7;

// Add view
var mainView = myApp.addView('.view-main', {
    // Because we want to use dynamic navbar, we need to enable it for this view:
    dynamicNavbar: true
});

//about page
myApp.onPageInit('about', function(page) {
    myApp.closePanel();
})

//box page
myApp.onPageInit('box', function(page) {
    var title = page.query.title;
    //$$(".box-title").html(title);
    $$.getJSON('http://meiriyiwen.com/json/random', function(data) {
        $$('.box-title').html(data.title);
        $$('.box-content').html(data.content);
    })
});


//下拉刷新

var ptrContent = $$('.pull-to-refresh-content');

// 添加'refresh'监听器
ptrContent.on('refresh', function(e) {
    // 模拟2s的加载过程
    setTimeout(function() {
        myApp.pullToRefreshDone();
    }, 2000);

});

//登录框

$$(".list-button").on("click", function() {
    myApp.closeModal(".login-screen");
})