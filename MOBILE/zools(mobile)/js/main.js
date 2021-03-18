$(function(){
  var mySwiper = new Swiper('.swiper-container', {
      // Optional parameters
      direction: 'horizontal',
      loop: true,
      autoplay: {delay:2000},
      speed: 500,
    
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
    $(".header_menu").click(function(){
      $(".slide_gnb").animate({"left":0},500);
      $(".cover").fadeIn(500);
      $("body").css({"overflow":"hidden"});
      $(".slide_gnb").css({"overflow":"auto"});
    });
    $(".slide_close").click(function(){
      $(".slide_gnb").animate({"left":"-100%"},500);
      $(".cover").fadeOut(500);
      $("body").css({"overflow":"auto"});
      $(".slide_gnb").css({"overflow":"hidden"});
    });
    $(".slide_gnb_in>li>a").click(function(){
      $(this).next().slideToggle();
    });
    $(".slide_gnb_depth2>li>a").click(function(){
      $(this).next().slideToggle().parent().siblings().find(".slide_gnb_depth3").slidUp();
    });
    $(".comu>li>a").click(function(){
      $(this).next().slideToggle();
    });
    $(".info>li>a").click(function(){
      $(this).next().slideToggle();
    });
    $(".money>li>a").click(function(){
      $(this).next().slideToggle();
    });
});