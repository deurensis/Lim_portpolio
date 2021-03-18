$(function(){
  var lnb = $("#scroll").offset().top;
  $(window).scroll(function() {
      var window = $(this).scrollTop();
      if(lnb <= window) {
        $("#header").addClass("on");
      } else {
        $("#header").removeClass("on");
      } 
  }); 
  //슬라이드 메뉴
  var btn_slide = true;
  $(".btn_menu").click(function(){
    if(btn_slide==true){
      $(".m_gnb").stop().animate({"right":0},500);
      $(".m_gnb").css({"overflow":"auto"});
      $("body").css({"overflow":"hidden"});
      $("#header h1 a").addClass("on");
      $(".menu_line").addClass("on").css({"background":"#cacaca"});
      $("#header").css({"background":"none","border-bottom":"none"});
      btn_slide = false;
    }
    else {
      $(".m_gnb").stop().animate({"right":"-100%"},500);
      $(".m_gnb").css({"overflow":"hidden"});
      $("body").css({"overflow":"auto"});
      $("#header h1 a").removeClass("on");
      $(".menu_line").removeClass("on").css({"background":"#fff"});
      $("#header").css({"background":"rgba(0,0,0,0.4)","border-bottom":"1px solid #fff"});
      btn_slide = true;
    }
  });

  //슬라이드 메뉴 언어선택
  $('.m_gnb_lang').click(function(){
    $(".m_lang_gnb").toggleClass("on");
  });

  


  //슬라이드 메뉴 아코디언
  $(".m_gnb_inner>li>a").click(function(){
      $(this).toggleClass("on").next().slideToggle(500).parent().siblings().children("a").removeClass("on").next().slideUp(500);
  });







  $('.s2_slide').slick({
    autoplay: true,
  });
  $('.s3_slide').slick({
    arrows: false,
    slidesToShow: 3,
    slidesToScroll: 1,
    dots: true,
    infinite: false,
  });
  var quick = true;
  $('.quick_menu').click(function(){
    if(quick==true){
      $('.quick_open').addClass("on");
      $('.quick_gnb').addClass("on");
      $(".quick_gnb li a img").addClass("on");
      quick = false;
    }
    else {
      $('.quick_open').removeClass("on");
      $('.quick_gnb').removeClass("on");
      $(".quick_gnb li a img").removeClass("on");
      quick = true;
    }
  });
});