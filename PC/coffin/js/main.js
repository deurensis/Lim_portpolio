$(function(){
// 팝업 영역
    $('.popup_close').click(function(){
        $('.popup').slideUp(500);
    });

    if((GetCookie('top_popup'))=='close'){
      $('.popup').hide();
    }

    $('.popup_close').click(function(){
      setCookie('top_popup','close',1);
      $('.popup').slideUp(500);
    });


// 다음 페이지 이동 버튼 영역

    $('.btn_franchisepage').click(function(){
      $('.main_slide1').animate({'left':'-100%'},500);
      $('.main_slide2').animate({'right':0},500);
      $('#main').css({'height':1663});
      $('.btn_franchisepage').fadeOut(500);
      $('.btn_mainpage').fadeIn(500);
    });
    $('.btn_mainpage').click(function(){
      $('.main_slide1').animate({'left':0},500);
      $('.main_slide2').animate({'right':'-100%'},500);
      $('#main').css({'height':'auto'});
      $('.btn_mainpage').fadeOut(500);
      $('.btn_franchisepage').fadeIn(500);
    });


// 헤더 영역
    $('.header_gnb>li>a').mouseenter(function(){
        $('.header_wrap').stop().animate({'height':'370px'},500);
    });
    $('.header_wrap').mouseleave(function(){
        $('.header_wrap').stop().animate({'height':'103px'},500);
 });

 // 메인 영역




 $('.main1_visual').slick({
    infinite: true,
    autoplay: true,
    autoplaySpeed: 2500,
    dots: true,
  });

 //   섹션5 영역

 $('.s5_wrap>a').click(function(){
    $(this).addClass('on').siblings().removeClass('on');
 });





//  메인2 영역

$('.main2_visual').slick({
    infinite: true,
    autoplay: true,
    autoplaySpeed: 2500,
    dots: true,
    arrows: false,
    vertical: true,
    draggable : false,
  });

  $('.main2_section3_slide').slick({
    infinite: true,
    autoplay: true,
    autoplaySpeed: 2500,
    dots: false,
    arrows: false,
    draggable : false,
  });



});

// GetCookie
function GetCookie(name){
  var value=null, search=name+"=";
  if(document.cookie.length > 0){
    var offset=document.cookie.indexOf(search);
    if(offset != -1){
      offset+=search.length;
      var end=document.cookie.indexOf(";", offset);
      if(end == -1) end=document.cookie.length;
      value=unescape(document.cookie.substring(offset, end));
    }
  } return value;
}
// SetCookie
function setCookie(name, value, days){
  if(days){
    var date=new Date(); 
    date.setTime(date.getTime()+(days*24*60*60*1000));
    var expires="; expires="+date.toGMTString();
  }else{
    var expires=""; 
  }
  document.cookie=name+"="+value+expires+"; path=/";
}