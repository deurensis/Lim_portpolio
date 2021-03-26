$(function(){
  // 팝업 영역

  // 팝업 쿠키 확인
  if((GetCookie('popup'))=='close'){
    $('.popup').hide();
  } else{
    $('.popup').show();
  }


  // 팝업 쿠키 생성
  $('.popup_close').click(function(){
    if($('input[id=popup_close_1day]').is(':checked')){
      setCookie('popup','close',1);
      $('.popup').hide();
    } else {
      $('.popup').hide();
    }
  });


  $("#header .menu").click(function(){
    $(".m_gnb").animate({"right":0},500);
    $(".hide").fadeIn(500);
  });
  $(".btn_close").click(function(){
    $(".m_gnb").animate({"right":"-100%"},500);
    $(".hide").fadeOut(500);
  });
  $(".gnb>li").click(function(){
    $(".depth2").stop().slideUp();
    $(this).children(".depth2").stop().slideToggle();
  });
});
$(function(){
  var mySwiper = new Swiper('.swiper-container_top', {
    // Optional parameters
    direction: 'horizontal',
    loop: true,
    autoplay: {delay:1000},
    speed: 500,
    slidesPerView: 1,
  
    // If we need pagination
    pagination: {
      el: '.swiper-pagination',
    },
  
    // Navigation arrows
    navigation: {
      nextEl: '.swiper-button-next',
      prevEl: '.swiper-button-prev',
    },
  
    // And if we need scrollbar
    scrollbar: {
      el: '.swiper-scrollbar',
    },
  });




  
  var mySwiper1 = new Swiper('.swiper-container', {
    // Optional parameters
    direction: 'horizontal',
    loop: false,
    observer: true,
    autoplay: {delay:2000},
  
    // If we need pagination
    pagination: {
      el: '.swiper-pagination',
    },
  
    // Navigation arrows
    navigation: {
      nextEl: '.swiper-button-next',
      prevEl: '.swiper-button-prev',
    },

    // And if we need scrollbar
    scrollbar: {
      el: '.swiper-scrollbar',
    },
  });
  $(".btn_tap li a").click(function(){
    $(this).addClass("on").parent().siblings().children("a").removeClass("on");
    var tap = $(this).parent().index();
    $(".swiper>.swiper-container").eq(tap).show().siblings().hide();
  });
});


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