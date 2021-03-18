$(function(){


  // 헤더
  $(window).scroll(function(){
    var wid = $(window).width();
    var headers = $(document).scrollTop();
    if(headers==0||wid<=999){
      $('.header_inner').slideDown(100);
    } else{
      $('.header_inner').slideUp(100);
    }
  });

  // 헤더 gnb


  $('.gnb_inner>li').mouseenter(function(){
    $(this).find('.depth2_wrap').slideDown(200);
  });
  $('.gnb_inner>li').mouseleave(function(){
    $(this).find('.depth2_wrap').hide();
  });

  $('.btn_m_gnb').mouseenter(function(){
    $(this).addClass('on');
  });
  $('.btn_m_gnb').mouseleave(function(){
    $(this).removeClass('on');
  });


  // 메인

  
  const swiper = new Swiper('#main>.swiper-container', {
    // Optional parameters
    direction: 'horizontal',
    loop: true,
    autoplay: {delay: 4000},
    speed: 1000,
    touchRatio: 0,
    effect: 'fade',
  
    // If we need pagination
    pagination: {
      el: '.swiper-pagination',
      clickable: true,
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

  var sw = true;
  $('.btn_slide_toggle').click(function(){
    if(sw==true){
      swiper.autoplay.stop();
      $('.btn_slide_toggle').addClass('on');
      sw = false;
    } else{
      swiper.autoplay.start();
      $('.btn_slide_toggle').removeClass('on');
      sw = true;
    }
  });


  // 섹션1


  const swiper2 = new Swiper('.section1 .swiper-container2', {
    // Optional parameters
    slidesPerView: 'auto',
    direction: 'horizontal',
    loop: true,
    autoplay: {delay: 8000},
    speed: 500,
  
    // If we need pagination
    pagination: {
      el: '.section1 .swiper-pagination',
      clickable: true,
    },
  
    // Navigation arrows
    navigation: {
      nextEl: '.section1 .swiper-button-next',
      prevEl: '.section1 .swiper-button-prev',
    },
  
    // And if we need scrollbar
    scrollbar: {
      el: '.section1 .swiper-scrollbar',
    },
  });


  // 섹션2



  const swiper3 = new Swiper('.section2 .swiper-container3', {
    // Optional parameters
    direction: 'horizontal',
    loop: true,
    effect: 'fade',
    speed: 1000,
  
    // If we need pagination
    pagination: {
      el: '.section2 .swiper-pagination',
      clickable: true,
    },
  
    // Navigation arrows
    navigation: {
      nextEl: '.section2 .swiper-button-next',
      prevEl: '.section2 .swiper-button-prev',
    },
  
    // And if we need scrollbar
    scrollbar: {
      el: '.section2 .swiper-scrollbar',
    },
  });


  // 섹션3


  const swiper4 = new Swiper('.swiper-container4', {
    // Optional parameters
    direction: 'horizontal',
    loop: true,
    effect: 'fade',
    autoplay: {delay:2000},
    speed: 1000,
  
    // If we need pagination
    pagination: {
      el: '.swiper-pagination',
      clickable: true,
    },
  
    // Navigation arrows
    navigation: {
      nextEl: '.section3 .swiper-button-next',
      prevEl: '.section3 .swiper-button-prev',
    },
  
    // And if we need scrollbar
    scrollbar: {
      el: '.section3 .swiper-scrollbar',
    },
  });
  $('.section3 .swiper-pagination span:nth-child(1)').text('08:00');
  $('.section3 .swiper-pagination span:nth-child(2)').text('10:00');
  $('.section3 .swiper-pagination span:nth-child(3)').text('12:00');
  $('.section3 .swiper-pagination span:nth-child(4)').text('14:00');
  $('.section3 .swiper-pagination span:nth-child(5)').text('16:00');
  $('.section3 .swiper-pagination span:nth-child(6)').text('18:00');
  $('.section3 .swiper-pagination span:nth-child(7)').text('20:00');



  // 반응형 모바일


  $(window).resize(function(){
    var wid = $(this).width();
    if(wid<=999){
    }
  });


  // 모바일 gnb
  $('.btn_m_gnb').click(function(){
    $('.m_gnb').fadeIn(300).css({'overflow':'auto'});
    $('body').css({'overflow':'hidden'});
  });
  $('.btn_m_gnbClose').click(function(){
    $('.m_gnb').fadeOut(300).css({'overflow':'hidden'});
    $('body').css({'overflow':'auto'});
  });


  $('.m_gnb_list>li').click(function(){
    $(this).find('.m_depth2').slideToggle(300).prev().addClass('on').parent().siblings().find('.m_depth2').slideUp(300).prev().removeClass('on');
  });
});