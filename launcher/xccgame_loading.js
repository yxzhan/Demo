/**
 * Created by joneszhuchinagd on 2015/8/4.
 */
var Xccgame_loading = (function () {
    function Xccgame_loading() {
        this.msgArr = ['设计狮疯狂上色中…', '攻城狮奋力敲出游戏代码…', '产品汪吃力搬运页面元素…', 'xccgame正在擦拭按钮…', '游戏主角正在房间里化妆…', '运营喵撰写得分文案中...', '游戏正在空中赶过来…'];
        this.currentIndex = 0;
        this.styleStr = '';
        this.domStr = '';
        this.init();
        this.changeMsg();
    }

    var prototype = Xccgame_loading.prototype;
    /*初始化*/
    prototype.init = function () {
        this.randEffect();
        var style = document.createElement('style');
        style.innerHTML = this.styleStr;
        document.getElementsByTagName('head')[0].appendChild(style);
        var content;
        content = document.createElement('div');
        content.setAttribute('id', 'xccgame-loading');
        content.innerHTML = this.domStr;
        document.body.appendChild(content);
    };
    /*随机生成样式*/
    prototype.randEffect = function () {
        var effectArr = [
            {
                styleStr: 'body,html{width:100%;height:100%}#xccgame-loading{width:100%;height:100%;background-color:#fff;position:absolute;left:0;top:0}.xccgame-loading-container{width:100%;height:30px;position:absolute;left:0;top:0;bottom:0;right:0;margin:auto;text-align:center}.sk-spinner-cube-grid.sk-spinner{width:30px;height:30px;margin:0 auto}.sk-spinner-cube-grid .sk-cube{width:33%;height:33%;background-color:#333;float:left;-webkit-animation:sk-cubeGridScaleDelay 1.3s infinite ease-in-out;animation:sk-cubeGridScaleDelay 1.3s infinite ease-in-out}.sk-spinner-cube-grid .sk-cube:nth-child(1){-webkit-animation-delay:.2s;animation-delay:.2s}.sk-spinner-cube-grid .sk-cube:nth-child(2){-webkit-animation-delay:.3s;animation-delay:.3s}.sk-spinner-cube-grid .sk-cube:nth-child(3){-webkit-animation-delay:.4s;animation-delay:.4s}.sk-spinner-cube-grid .sk-cube:nth-child(4){-webkit-animation-delay:.1s;animation-delay:.1s}.sk-spinner-cube-grid .sk-cube:nth-child(5){-webkit-animation-delay:.2s;animation-delay:.2s}.sk-spinner-cube-grid .sk-cube:nth-child(6){-webkit-animation-delay:.3s;animation-delay:.3s}.sk-spinner-cube-grid .sk-cube:nth-child(7){-webkit-animation-delay:0s;animation-delay:0s}.sk-spinner-cube-grid .sk-cube:nth-child(8){-webkit-animation-delay:.1s;animation-delay:.1s}.sk-spinner-cube-grid .sk-cube:nth-child(9){-webkit-animation-delay:.2s;animation-delay:.2s}@-webkit-keyframes sk-cubeGridScaleDelay{0%,70%,100%{-webkit-transform:scale3D(1,1,1);transform:scale3D(1,1,1)}35%{-webkit-transform:scale3D(0,0,1);transform:scale3D(0,0,1)}}@keyframes sk-cubeGridScaleDelay{0%,70%,100%{-webkit-transform:scale3D(1,1,1);transform:scale3D(1,1,1)}35%{-webkit-transform:scale3D(0,0,1);transform:scale3D(0,0,1)}}#xccgame-loading-msg{margin-top:36px;color:#555;font-weight:bold;font-size:14px}',
                domStr: '<div class="xccgame-loading-container"><div class="sk-spinner sk-spinner-cube-grid"><div class="sk-cube"></div><div class="sk-cube"></div><div class="sk-cube"></div><div class="sk-cube"></div><div class="sk-cube"></div><div class="sk-cube"></div><div class="sk-cube"></div><div class="sk-cube"></div><div class="sk-cube"></div></div><div id="xccgame-loading-msg"></div></div>'
            }, {
                styleStr: 'body,html{width:100%;height:100%}#xccgame-loading{width:100%;height:100%;background-color:#fff;position:absolute;left:0;top:0}#xccgame-loading-msg{margin-top:36px;color:#555;font-weight:bold;font-size:14px}.xccgame-loading-container{width:100%;height:30px;position:absolute;left:0;top:0;bottom:0;right:0;margin:auto;text-align:center}#xccgame-loading span{display:block;margin:0 auto}span[class*="l-"]{height:4px;width:4px;background:#000;display:inline-block;margin:12px 2px;border-radius:100%;-webkit-border-radius:100%;-moz-border-radius:100%;-webkit-animation:loader 4s infinite;-webkit-animation-timing-function:cubic-bezier(0.030,0.615,0.995,0.415);-webkit-animation-fill-mode:both;-moz-animation:loader 4s infinite;-moz-animation-timing-function:cubic-bezier(0.030,0.615,0.995,0.415);-moz-animation-fill-mode:both;-ms-animation:loader 4s infinite;-ms-animation-timing-function:cubic-bezier(0.030,0.615,0.995,0.415);-ms-animation-fill-mode:both;animation:loader 4s infinite;animation-timing-function:cubic-bezier(0.030,0.615,0.995,0.415);animation-fill-mode:both}span.l-1{-webkit-animation-delay:1s;animation-delay:1s;-ms-animation-delay:1s;-moz-animation-delay:1s}span.l-2{-webkit-animation-delay:.8s;animation-delay:.8s;-ms-animation-delay:.8s;-moz-animation-delay:.8s}span.l-3{-webkit-animation-delay:.6s;animation-delay:.6s;-ms-animation-delay:.6s;-moz-animation-delay:.6s}span.l-4{-webkit-animation-delay:.4s;animation-delay:.4s;-ms-animation-delay:.4s;-moz-animation-delay:.4s}span.l-5{-webkit-animation-delay:.2s;animation-delay:.2s;-ms-animation-delay:.2s;-moz-animation-delay:.2s}span.l-6{-webkit-animation-delay:0;animation-delay:0;-ms-animation-delay:0;-moz-animation-delay:0}@-webkit-keyframes loader{0%{-webkit-transform:translateX(-30px);opacity:0}25%{opacity:1}50%{-webkit-transform:translateX(30px);opacity:0}100%{opacity:0}}@-moz-keyframes loader{0%{-moz-transform:translateX(-30px);opacity:0}25%{opacity:1}50%{-moz-transform:translateX(30px);opacity:0}100%{opacity:0}}@-keyframes loader{0%{-transform:translateX(-30px);opacity:0}25%{opacity:1}50%{-transform:translateX(30px);opacity:0}100%{opacity:0}}@-ms-keyframes loader{0%{-ms-transform:translateX(-30px);opacity:0}25%{opacity:1}50%{-ms-transform:translateX(30px);opacity:0}100%{opacity:0}}',
                domStr: '<div class="xccgame-loading-container"><span class="l-1"></span><span class="l-2"></span><span class="l-3"></span><span class="l-4"></span><span class="l-5"></span><span class="l-6"></span><div id="xccgame-loading-msg">设计狮疯狂上色中…</div></div>'
            },{
                styleStr:'body,html{width:100%;height:100%}#xccgame-loading{width:100%;height:100%;background-color:#fff;position:absolute;left:0;top:0}.xccgame-loading-container{width:100%;height:30px;position:absolute;left:0;top:0;bottom:0;right:0;margin:auto;text-align:center}#xccgame-loading-msg{margin-top:36px;color:#555;font-weight:bold;font-size:14px}.sk-spinner-three-bounce.sk-spinner{margin:0 auto;width:70px;text-align:center}.sk-spinner-three-bounce div{width:18px;height:18px;background-color:#333;border-radius:100%;display:inline-block;-webkit-animation:sk-threeBounceDelay 1.4s infinite ease-in-out;animation:sk-threeBounceDelay 1.4s infinite ease-in-out;-webkit-animation-fill-mode:both;animation-fill-mode:both}.sk-spinner-three-bounce .sk-bounce1{-webkit-animation-delay:-0.32s;animation-delay:-0.32s}.sk-spinner-three-bounce .sk-bounce2{-webkit-animation-delay:-0.16s;animation-delay:-0.16s}@-webkit-keyframes sk-threeBounceDelay{0%,80%,100%{-webkit-transform:scale(0);transform:scale(0)}40%{-webkit-transform:scale(1);transform:scale(1)}}@keyframes sk-threeBounceDelay{0%,80%,100%{-webkit-transform:scale(0);transform:scale(0)}40%{-webkit-transform:scale(1);transform:scale(1)}}',
                domStr:'<div class="xccgame-loading-container"><div class="sk-spinner sk-spinner-three-bounce"><div class="sk-bounce1"></div><div class="sk-bounce2"></div><div class="sk-bounce3"></div></div><div id="xccgame-loading-msg">设计狮疯狂上色中…</div></div>'
            },{
                styleStr:'body,html{width:100%;height:100%}#xccgame-loading{width:100%;height:100%;background-color:#fff;position:absolute;left:0;top:0}.xccgame-loading-container{width:100%;height:30px;position:absolute;left:0;top:0;bottom:0;right:0;margin:auto;text-align:center}#xccgame-loading-msg{margin-top:36px;color:#555;font-weight:bold;font-size:14px}.sk-spinner-chasing-dots.sk-spinner{margin:0 auto;width:40px;height:40px;position:relative;text-align:center;-webkit-animation:sk-chasingDotsRotate 2s infinite linear;animation:sk-chasingDotsRotate 2s infinite linear}.sk-spinner-chasing-dots .sk-dot1,.sk-spinner-chasing-dots .sk-dot2{width:60%;height:60%;display:inline-block;position:absolute;top:0;background-color:#333;border-radius:100%;-webkit-animation:sk-chasingDotsBounce 2s infinite ease-in-out;animation:sk-chasingDotsBounce 2s infinite ease-in-out}.sk-spinner-chasing-dots .sk-dot2{top:auto;bottom:0;-webkit-animation-delay:-1s;animation-delay:-1s}@-webkit-keyframes sk-chasingDotsRotate{100%{-webkit-transform:rotate(360deg);transform:rotate(360deg)}}@keyframes sk-chasingDotsRotate{100%{-webkit-transform:rotate(360deg);transform:rotate(360deg)}}@-webkit-keyframes sk-chasingDotsBounce{0%,100%{-webkit-transform:scale(0);transform:scale(0)}50%{-webkit-transform:scale(1);transform:scale(1)}}@keyframes sk-chasingDotsBounce{0%,100%{-webkit-transform:scale(0);transform:scale(0)}50%{-webkit-transform:scale(1);transform:scale(1)}}',
                domStr:'<div class="xccgame-loading-container"><div class="sk-spinner sk-spinner-chasing-dots"><div class="sk-dot1"></div><div class="sk-dot2"></div></div><div id="xccgame-loading-msg">设计狮疯狂上色中…</div></div>'
            }
        ];
        var index = this.intRand(0, effectArr.length - 1);
        this.styleStr = effectArr[index].styleStr;
        this.domStr = effectArr[index].domStr;
    };
    /*随机改变话术*/
    prototype.changeMsg = function () {
        var mp = document.getElementById('xccgame-loading-msg');
        if (mp) {
            mp.innerHTML = this.msgArr[(this.currentIndex++) % 7];
            var _this = this;
            setTimeout(function () {
                _this.changeMsg();
            }, 2000);
        }
    };
    /*加载结束*/
    prototype.finish = function () {
        var elem;
        return (elem = document.getElementById('xccgame-loading')).parentNode.removeChild(elem);
    };
    /*生成随机数*/
    prototype.intRand = function (min, max) {
        return parseInt(Math.random() * (max - min + 1) + min);
    }
    prototype.__class__ = "Xccgame_loading";
    return Xccgame_loading;
})();

window['xccgame_loading'] = new Xccgame_loading();