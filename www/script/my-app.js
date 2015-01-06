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
    var name = page.query.name;
        num = page.query.num;

    $$('.box-title').text(name);

    var arr = new Array();

    for (var i = 1; i <= num*num; i++) {
        var windowwidth = $$(".box-content").width();
        alert(windowwidth);
        $$("#box-content").append("<a class='textbox' width='"+ windowwidth/num+"px' data-text='正常人'>"+ i +"</a>");
        arr.push(i);
    };

    var randomarray = _.sample(arr, 3);
    //alert(randomarray);
    for(var i=0;i<randomarray.length;i++){
        //alert(randomarray[i]);
        $$("#box-content .textbox").eq(randomarray[i]).text('some text');
    }


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