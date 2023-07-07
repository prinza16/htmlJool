/* ===================================================================

 * Q＆A
 
=================================================================== */
$(function(){
	$(".accordionbox dt").on("click", function() {
		$(this).next().slideToggle();	
		// activeが存在する場合
		if ($(this).children(".accordion_icon").hasClass('active')) {			
			// activeを削除
			$(this).children(".accordion_icon").removeClass('active');				
		}
		else {
			// activeを追加
			$(this).children(".accordion_icon").addClass('active');			
		}			
	});
});

/* ===================================================================

 * ハンバーガーメニュー
 
=================================================================== */
$(function() {
    $('.navToggle').click(function(){
      $('header').toggleClass('openNav');
    });
});
/* ===================================================================

 * TOP　メニュー
 
=================================================================== */
$(function() {
$('.navToggle').on('click',function(){
   
    $(this).toggleClass('on');
    if($('.fullnav').hasClass('on')){//fullnavが開いている時
        $('.fullnav').removeClass('on').fadeOut(); 
    }
    else{//fullnavが閉じている時
        $('.fullnav').fadeIn();
        setTimeout(function() {
            $(".fullnav").addClass("on");
        }, 200);
    }
           
});
});
/* ===================================================================

 * Top aboutメニュークリック
 
=================================================================== */
$(function() {
　　$('.about').on('click',function(){
　　　　$('.fullnav').removeClass('on').fadeOut(); 
　　　　$('header').removeClass('openNav');
　　});
});

/* ===================================================================

 * TOP　youtube
 
=================================================================== */
$(function() {
$('.youtube').click(function(){
video = '<iframe src="'+ $(this).attr('data-video') +'" frameborder="0" allowfullscreen width="290" height="255"></iframe>';
$(this).replaceWith(video);
});
});
/* ===================================================================

 * TEXT fade in
 
=================================================================== */
//text fadein
$(function(){
    setTimeout(function(){
var DELAY_SPEED = 50;//文字が流れる速さ
var FADE_SPEED = 500;//表示のアニメーション時間
var str = [];
$(document).ready(function(){
    $('.fadein > span').each(function(i){//セレクタで指定した要素すべて
        $(this).css('opacity','1');//行を不透明にする
        str[i] = $(this).text();//元のテキストをコピーし
        $(this).text('');//テキストを消す
        var no = i;
        var self = this;
        var interval = setInterval(function(){//50ミリ秒毎にチェック
            if(no == 0 || $('.fadein > span').eq(no - 1).children('span:last').css('opacity') == 1){//最初の行または前の行が全文字表示された時
                clearInterval(interval);//チェックを停止
                for (var j = 0; j < str[no].length; j++) {
                    $(self).append('<span>'+str[no].substr(j, 1)+'</span>');//1文字ずつ<span>を付けて
                    $(self).children('span:last').delay(DELAY_SPEED * j).animate({opacity:'1'}, FADE_SPEED);//時間差でフェードインさせる
                }
            }
        }, 50);
    });
});
    },4000);
});