$(function(){
    // 팝업 영역
    $('.popup_close').click(function(){
        $('.popup').slideUp(300);
    });

    if((GetCookie('top_popup'))=='close'){
        $('.popup').hide();
    } else {
        $('.popup').show();
    }

    $('#today_close_check').click(function(){
        if($('input[name=today_close]').is(':checked')){
            setCookie('top_popup','close',1);
            $('.popup').slideUp(300);
        } else{
            $('.popup').slideUp(300);
        }
    });


    // 헤더 영역


    $(".gnb li a").mouseenter(function(){
        $(".header_wrap").stop().animate({"height":"337px"},300);
        $(".header_wrap").addClass("on");
    });
    $(".gnb").mouseleave(function(){
        $(".header_wrap").stop().animate({"height":"70px"},300);
        $(".header_wrap").removeClass("on");
    });
    $('.util1 a').click(function(){
        $('.search_on').slideToggle(300);
    });
    $('.search_on fieldset').mouseleave(function(){
        $('.search_on').slideUp(300);
    })


    // 전체 메뉴 영역

    $('.btn_all_menu').click(function(){
        $(".all_menu").fadeIn(300);
    });
    $('.all_menu_close').click(function(){
        $(".all_menu").fadeOut(300);
    });
    $('.all_menu_slide').slick({
        autoplay: true,
        autoplaySpeed: 2000,
        arrows: false,
        dots: true,
    });
    var sw_all_slide = true;
    $('.btn_all_slide').click(function() {
        if(sw_all_slide==true) {
            $('.all_menu_slide').slick('slickPause');
            $('.btn_all_slide').addClass("on");
            sw_all_slide = false;
        }
        else {
            $('.all_menu_slide').slick('slickPlay');
            $('.btn_all_slide').removeClass("on");
            sw_all_slide = true;
        }
    });

      
    


    // 메인 영역
    $('.visual').slick({
        arrows: false,
    });
    $('.slideToInnovation').click(function(){
        $('.visual').slick('slickGoTo',0);
    });
    $('.slideToNews').click(function(){
        $('.visual').slick('slickGoTo',1);
    });
    $('.slideToStory').click(function(){
        $('.visual').slick('slickGoTo',2);
    });


    // 메인 비주얼1 영역



    $('.visual1').slick({
        autoplay: true,
        autoplaySpeed: 3000,
        speed: 1000,
        fade: true,
        arrows: false,
    });
    $('.vod_wrap li a').mouseenter(function(){
        var vodBySlide = $(this).parent().index();
        $(this).parent().addClass('on').siblings().removeClass('on');
        $('.visual1').slick('slickGoTo',vodBySlide);
    });
    $('.vod_wrap li a').click(function(){
        var vod = $(this).parent().index();
        $('.cover').fadeIn(100);
        $('.slide1_modal>div').eq(vod).fadeIn(100);
        $('body').css({"overflow":"hidden"});
    });


    // 비주얼1 모달 영역


    var modalh2 = ['D TOWER','Yi Sun Sin Bridge','Petrochemical Plant'];
    var modalp = ['도시를 개발하다.','세계 6번째 현수교 기술자립국, 세계최고의 기술력, 대림.','1973년 해외플랜트 수출1호, 기본과 원칙으로 쌓아온 플랜트 노하우 43년.']
    var modali = ['https://www.youtube.com/embed/lAJ3SGjbdr4','https://www.youtube.com/embed/U7GoYtXvGvA','https://www.youtube.com/embed/Dhk2zl4FUEw'];


    $('.vod_wrap>li>a').click(function(){
        var vod_open = $(this).parent().index();
        $('.cover').fadeIn(100);
        $('body').css({'overflow':'auto'});
        $('.slide1_modal').fadeIn(100);
        $('.slide1_modal h2').text(modalh2[vod_open]);
        $('.slide1_modal p').text(modalp[vod_open]);
        $('.slide1_modal iframe').attr('src',modali[vod_open]);

        $('.modal_btn_prev').click(function(){
            if(vod_open==0){
                vod_open=2;
            } else{
                vod_open--;
            }
            $('.slide1_modal h2').text(modalh2[vod_open]);
            $('.slide1_modal p').text(modalp[vod_open]);
            $('.slide1_modal iframe').attr('src',modali[vod_open]);
        });
        $('.modal_btn_next').click(function(){
            if(vod_open==2){
                vod_open=0;
            } else{
                vod_open++;
            }
            $('.slide1_modal h2').text(modalh2[vod_open]);
            $('.slide1_modal p').text(modalp[vod_open]);
            $('.slide1_modal iframe').attr('src',modali[vod_open]);
        });

    });
    $('.modal_btn_close').click(function(){
        $('.cover').fadeOut(100);
        $('.slide1_modal').fadeOut(100);
        $('.slide1_modal iframe').attr('src','');
    });




    //  메인 비주얼2 영역



    $('.news_list>li>a').mouseenter(function(){
        $(this).parent().css({"border-bottom":"1px solid #fff"}).siblings().find('a').css({"opacity":0.5});
    });
    $('.news_list>li>a').mouseleave(function(){
        $(this).parent().css({"border-bottom":"1px solid #4a5665"}).siblings().find('a').css({"opacity":1});
    });


    // 푸터 영역

    var family_sw1 = true;
    $('.family_site1').click(function(){
        if(family_sw1==true){
            $('.family_list1').show().siblings().hide();
            $('.family_site1').addClass('on').siblings().removeClass('on');
            family_sw1 = false;
            family_sw2 = true;
        }else{
            $('.family_list1').hide();
            $('.family_site1').removeClass('on');
            family_sw1 = true;
            family_sw2 = true;
        }
    });
    var family_sw2 = true;
    $('.family_site2').click(function(){
        if(family_sw2==true){
            $('.family_list2').show().siblings().hide();
            $('.family_site2').addClass('on').siblings().removeClass('on');
            family_sw1 = true;
            family_sw2 = false;
        }else{
            $('.family_list2').hide();
            $('.family_site2').removeClass('on');
            family_sw1 = true;
            family_sw2 = true;
        }
    });
    $('.family_close').click(function(){
        $(this).parents('.family_list').hide();
        $('.family_site').removeClass("on");
        family_sw1 = true;
        family_sw2 = true;
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