$(function(){
    // 슬라이드 영역

    $('.btn_m_gnb').click(function(){
        $('.cover').fadeIn(300);
        $('#m_slide').animate({'left':0},300);
        $('body').css({'overflow':'hidden'});
        $('#m_slide').css({'overflow':'auto'});
    })
    $('.cover').click(function(){
        $('.cover').fadeOut(300);
        $('#m_slide').animate({'left':'-250px'},300);
        $('body').css({'overflow':'auto'});
        $('#m_slide').css({'overflow':'hidden'});
    })


    // 반응형

    $('.visual .slick-dots').hide();
    $(window).resize(function(){
        var num = $(this).width();
        if(num<=750){
            $('.visual .slick-arrow').hide();
            $('.visual .slick-dots').show();
            $('.visual1>a>img').attr('src','./images/visual01_m.jpg');
            $('.visual2>a>img').attr('src','./images/visual02_m.jpg');
            $('.visual3>a>img').attr('src','./images/visual03_m.jpg');
            $('.visual4>a>img').attr('src','./images/visual04_m.jpg');
            $('.s2_inner1>a>img').attr('src','./images/img_story01_m.jpg');
            $('.s2_inner2>a>img').attr('src','./images/img_story02_m.jpg');
            $('.s2_inner3>a>img').attr('src','./images/img_story03_m.jpg');
            $('.s4_slide1>a>img').attr('src','./images/img_blogevent160816_m.jpg');
            $('.s4_slide2>a>img').attr('src','./images/img_facebookevent160816_m.jpg');
            $('.s4_slide3>a>img').attr('src','./images/img_renewalevent1_m.jpg');
            $('.s4_slide4>a>img').attr('src','./images/img_renewalevent2_m.jpg');
        } else{
            $('.visual .slick-arrow').show();
            $('.visual .slick-dots').hide();
            $('.visual1>a>img').attr('src','./images/visual01.jpg');
            $('.visual2>a>img').attr('src','./images/visual02.jpg');
            $('.visual3>a>img').attr('src','./images/visual03.jpg');
            $('.visual4>a>img').attr('src','./images/visual04.jpg');
            $('.s2_inner1>a>img').attr('src','./images/img_story01.jpg');
            $('.s2_inner2>a>img').attr('src','./images/img_story02.jpg');
            $('.s2_inner3>a>img').attr('src','./images/img_story03.jpg');
            $('.s4_slide1>a>img').attr('src','./images/img_blogevent160816.jpg');
            $('.s4_slide2>a>img').attr('src','./images/img_facebookevent160816.jpg');
            $('.s4_slide3>a>img').attr('src','./images/img_renewalevent1.jpg');
            $('.s4_slide4>a>img').attr('src','./images/img_renewalevent2.jpg');
        }
    });


    var num = $(window).width();
    if(num<=750){
        $('.visual .slick-arrow').hide();
            $('.visual .slick-dots').show();
            $('.visual1>a>img').attr('src','./images/visual01_m.jpg');
            $('.visual2>a>img').attr('src','./images/visual02_m.jpg');
            $('.visual3>a>img').attr('src','./images/visual03_m.jpg');
            $('.visual4>a>img').attr('src','./images/visual04_m.jpg');
            $('.s2_inner1>a>img').attr('src','./images/img_story01_m.jpg');
            $('.s2_inner2>a>img').attr('src','./images/img_story02_m.jpg');
            $('.s2_inner3>a>img').attr('src','./images/img_story03_m.jpg');
            $('.s4_slide1>a>img').attr('src','./images/img_blogevent160816_m.jpg');
            $('.s4_slide2>a>img').attr('src','./images/img_facebookevent160816_m.jpg');
            $('.s4_slide3>a>img').attr('src','./images/img_renewalevent1_m.jpg');
            $('.s4_slide4>a>img').attr('src','./images/img_renewalevent2_m.jpg');
    } else{
        $('.visual .slick-arrow').show();
            $('.visual .slick-dots').hide();
            $('.visual1>a>img').attr('src','./images/visual01.jpg');
            $('.visual2>a>img').attr('src','./images/visual02.jpg');
            $('.visual3>a>img').attr('src','./images/visual03.jpg');
            $('.visual4>a>img').attr('src','./images/visual04.jpg');
            $('.s2_inner1>a>img').attr('src','./images/img_story01.jpg');
            $('.s2_inner2>a>img').attr('src','./images/img_story02.jpg');
            $('.s2_inner3>a>img').attr('src','./images/img_story03.jpg');
            $('.s4_slide1>a>img').attr('src','./images/img_blogevent160816.jpg');
            $('.s4_slide2>a>img').attr('src','./images/img_facebookevent160816.jpg');
            $('.s4_slide3>a>img').attr('src','./images/img_renewalevent1.jpg');
            $('.s4_slide4>a>img').attr('src','./images/img_renewalevent2.jpg');
    }

    // 메인

    $('.visual').slick({
        infinite: true,
        autoplay: 2500,
        dots: true,
      });

      $('.s3_list>li').mouseenter(function(){
        var num = $(this).find('img').attr('src');
        var num2 = num.replace('_off','_on');
        $(this).find('img').attr('src',num2);
    });
    $('.s3_list>li').mouseleave(function(){
        var num = $(this).find('img').attr('src');
        var num2 = num.replace('_on','_off');
        $(this).find('img').attr('src',num2);
    });
    
      $('.s4_slide').slick({
        infinite: true,
        autoplay: 2500,
        arrows: false,
        dots: true,
      });


    // 푸터

    $('.btn_top').click(function(){
        $('html').animate({'scrollTop':0});
    });

});