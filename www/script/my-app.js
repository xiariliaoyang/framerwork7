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

    $$('.box-title').text(num*num + "人在活动");

    var arr = new Array();
    var boxbg = ['#b7f8ff','#fcffb7','#ffa3aa','#ff6051','#81a4ff','#fd7cff','#ffbf59'];
    //alert(boxbg);

    for (var i = 1; i <= num*num; i++) {
        var bg = _.sample(boxbg, 1);
        //alert(bg);
        $$("#box-content").append("<a class='gamebox' data-text='正常人' style='background:"+ bg +";'></a>");
        arr.push(i);
    };

    var gameboxwidth = 100/num + '%';
    $$(".gamebox").css({
        "width": gameboxwidth
    });

    var gameboxheight = $$(".gamebox").width();
    $$(".gamebox").css({
        "font-size":"18px",
        "height":$$(".gamebox").width() + 'px',
        "line-height":$$(".gamebox").width() + 'px',
    });
    
    var randomarray = _.sample(arr, num);
    //alert(randomarray);
    for(var i=0;i<randomarray.length;i++){
        //alert(randomarray[i]);
        $$("#box-content .gamebox").eq(randomarray[i]).attr("data-text","脑残");
    }

    $$(".gamebox").each(function() {
        $$(this).click(function(event) {
            var text = $$(this).attr("data-text");
            if (text == "正常人") {
                var step = $$(".step-to-sick").text();
                var step = step*1 +1;
                $$(".step-to-sick").text(step);
                $$(this).hide();
            };
            if (text == "脑残") {
                var step = $$(".step-to-sick").text();
                myApp.alert("你在"+ num*num +"人中行动"+ step +"次容易暴露自己的智商",$$('input[name=username]').val() + "智商已暴露！",function(){
                    mainView.router.back();
                });
            };
        });
    });

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
    var name = $$('input[name=username]').val();
    if(name == 0){
        myApp.alert("名字不能为空，智商不足可请人代填。","智商不足已填写表单！")
    }else{
        myApp.closeModal(".login-screen");
    }
    
})