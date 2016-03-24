//Event Handler
function cb_start(){}
function cb_restart(){}
function cb_share(){}
function cb_more(){}

function cb_finishload(){
    $('#xccgame-loading').remove();
    if(myStateObj.fetched) {
        fetched.show()
        fetched.setCouponName(myStateObj.coupon)
    }else {
        notFetched.show()
    }
}
function cb_gameover(score){
    allPause();
    if(score < couponLevel[0].score) {
        failInGame.show();
        failInGame.setScore(score);
    }else if(!myStateObj.fetched){
        var money = 0;
        couponLevel.forEach(function (obj) {
            if(score >= obj.score) {
                money = obj.money
            }
        });
        getCoupon.show();
        getCoupon.setScore(score, money);
    }else{
        fetched.show()
        fetched.setCouponName(myStateObj.coupon)
    }
}

//public method
function checkCoupon(){
    window.location.href = checkCouponAddress;
}

function checkStore(){
    window.location.href = checkStoreAddress;
}

function sendInfo (name, phone) {
    post(postUrl, {
        score: getCoupon.score,
        realName: name,
        mobile: phone
    }, function (res) {
        console.log(res);
        getSuccess.show();
    }, function (xhr, type){
        console.log(xhr, type);
        getFail.show();
    })
}

function showShare(){
    $('.share-tips').show()
}
function hideShare(){
    $('.share-tips').hide()
}

//Dialog class
function Dialog (id, option) {
    this.id = id;
    this.added = false;
    this.delay = 0;
    this.score = 0;
    this.init = function () {
        $('body').append($(this.id + 'Tpl').html())
        this.addTouchEvent();
    };
    this.addTouchEvent = function (){
    };
    this.show = function () {
        if(!this.added) this.init();
        $('.matte').show();
        $(this.id).show()
    };
    this.hide = function () {
        $('.matte').hide();
        $(this.id).hide();
    };
    this.restart = function () {
        allResume();
        restartGame();
        this.hide();
    };
    this.setScore = function(score, money) {
        this.score = score;
        $(this.id).find('.score').text(score);
        $(this.id).find('.money').text(money);
    };
    for(var i in option) {
        this[i] = option[i];
    }
}
//Dialog instances
var notFetched = new Dialog('#notFetched');
var fetched = new Dialog('#fetched', {
    setCouponName: function (coupon) {
        $(this.id).find('.coupon-name').text(coupon);
    }
});
var activityRule = new Dialog('#activityRule', {
    hide: function () {
        $(this.id).hide();
    }
});
var failInGame = new Dialog('#failInGame');
var getCoupon = new Dialog('#getCoupon', {
    showConfirm: function () {
        var name = $(this.id).find('.name').val();
        var phone = $(this.id).find('.phone').val();
        if(!name) {
            alert('请输入名字！');
            return false;
        }else if ( !(/^1[3|4|5|7|8]\d{9}$/.test(phone)) ){
            alert('请输入正确的电话号码！');
            return false;
        }
        sendConfirm.show();
        sendConfirm.setInfo(name, phone);
    }
});
var getSuccess = new Dialog('#getSuccess', {
    setDate: function (data){
        $(this.id).find('.begin-month').text(data.bMonth);
        $(this.id).find('.begin-date').text(data.bDate);
        $(this.id).find('.end-month').text(data.eMonth);
        $(this.id).find('.end-date').text(data.eDate);
    }
});
var getFail = new Dialog('#getFail',{
    hide: function () {
        $(this.id).hide();
    }
});

var sendConfirm = new Dialog('#sendConfirm',{
    hide: function () {
        $(this.id).hide();
    },
    userName: '',
    userPhone: '',
    setInfo: function(name, phone){
        this.userName = name;
        this.userPhone = phone;
        $(this.id).find('.phone').text(phone);

    },
    sendInfo: function () {
        sendInfo(this.userName, this.userPhone)
        this.hide();
    }
});

//orientation change handler
$(window).on("orientationchange",function(){
    if(Math.abs(window.orientation) === 90) {
        $('.orientation-tips').show();
        gameStarted && allPause();
    } else {
        $('.orientation-tips').hide();
        if(gameStarted){
            allResume();
        }else {
            egretStart();
        }
    }
});

//Post data
function post(url, data, onSuccess, onError) {
    $.ajax({
        type: 'POST',
        url: url,
        data: data,
        timeout: '300',
        success: onSuccess,
        error: onError
    });
}
