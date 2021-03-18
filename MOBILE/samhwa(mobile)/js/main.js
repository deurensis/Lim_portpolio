$(function(){

  // gnb 메뉴 열기/닫기

  $('.header_gnb_open').click(function(){
    $('.gnb').animate({'left':0},300);
  })
  $('.btn_gnb_close').click(function(){
    $('.gnb').animate({'left':'-100%'},300);
  })

  // gnb 메뉴 아코디언

  $('.gnb_list>li').click(function(){
    $(this).find('.depth2').slideToggle(300).parent().siblings().find('.depth2').slideUp(300);
  })

  // 스크롤에 따른 header 변환

  $(window).scroll(function(){
    var num = $(document).scrollTop();
    if(num>774){
      $('#header').addClass('on');
    } else{
      $('#header').removeClass('on');
    }
  });

  // 초기치에 따른 header 변환

  var num = $(window).scrollTop()
  if(num>774){
    $('#header').addClass('on');
  }


  // 검색창 이동

  $('.search_text').click(function(){
    $('body,html').animate({scrollTop:650},500);
    $('.search_input').focus().attr({'placeholder':''});
  });





  // 페인트 아이디어 슬라이더

  const swiper = new Swiper('.paint_slide', {
      // Optional parameters
      direction: 'horizontal',
      loop: true,
      slidesPerView: 'auto',
      centeredSlides: true,
      spaceBetween: 15,
      autoplay: {
          delay: 5000,
      },
      speed: 300,
    
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

});