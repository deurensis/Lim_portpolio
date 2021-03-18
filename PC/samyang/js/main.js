$(function(){
    // 팝업 영역
    
    $('.btn_popup_close').click(function(){
        $('.popup').hide();
    });


    // 팝업 쿠키 확인
    if((GetCookie('popup'))=='close'){
        $('.popup').hide();
    } else{
        $('.popup').show();
    }



    // 팝업 쿠키 생성
    
    $('#popup_close_on').click(function(){
        if($('input[name=popup_close]').is(':checked')){
            setCookie('popup','close',1);
            $('.popup').hide(); 
        }else{
            $('.popup').hide(); 
        } 
    });



    // 퀵메뉴 영역

    var lnb = $(".scroll").offset().top;
    $(window).scroll(function(){
        var window = $(this).scrollTop();
        if(lnb <= window){
            $(".quick_menu").addClass("on");
        }
        else {
            $(".quick_menu").removeClass("on");
        }

    });

    // gnb 영역

    $(".gnb").mouseenter(function(){
        $(".header_inner_bottom_wrap").stop().animate({"height":319},300);
        $(".depth2").show(0);
    });

    // 헤더 영역
    
    $(".util_lang a").click(function(){
        $(".util_lang_list").slideDown(500);
    });
    $(".util_lang_list").mouseleave(function(){
        $(".util_lang_list").slideUp(500);
    });
    $("#header").mouseleave(function(){
        $(".header_inner_bottom_wrap").stop().animate({"height":91},300);
        $(".depth2").hide(0);
    });
    $('.slide').slick({
        autoplay: true,
        autoplaySpeed: 2500,
        speed: 1000,
        dots: true,
        fade: true
    });

    // 메인 영역
    // 섹션1 영역

    $('.newbox_inner').slick({
        autoplay: true,
        autoplaySpeed: 2500,
        speed: 1000,
        dots: true,
        arrows: false
    });
    $('.list_slide_inner').slick({
        variableWidth: true,
        autoplay: false,
        speed: 1000,
        infinite: false,
        slidesToShow: 7,
        slidesToScroll: 1,
        dots: true,
        arrows: false,
    });
    $(".list>li>a").click(function(){
        $(this).addClass("on").parent().siblings().children("a").removeClass("on");
        var list = $(this).parent().index()
        $(".list_slide_inner").eq(list).show().siblings().hide();
    });

    // 섹션2 영역

    $('.box2_slide').slick({
        autoplay: true,
        autoplaySpeed: 1000,
        speed: 1000,
        dots: true,
        arrows: false,
    });
    $('.box3 a').mouseenter(function(){
        $(".box3_cover").fadeIn(100);
    });
    $('.box3 a').mouseleave(function(){
        $(".box3_cover").fadeOut(100);
    });
    $('.box3>a').click(function(){
        $(".cover").fadeIn(100);
        $(".box3_modal").fadeIn(100);
        $("body").css({"overflow":"hidden"});
    });
    $('.box3_close').click(function(){
        $(".cover").fadeOut(100);
        $(".box3_modal").fadeOut(100);
        $("body").css({"overflow":"auto"});
    });
    $(".cover").click(function(){
        $(".cover").fadeOut(100);
        $(".box3_modal").fadeOut(100);
        $("body").css({"overflow":"auto"});
    });

    // 푸터

    $(".btn_family").click(function(){
        $(".family_list").slideToggle();
    });
    $(".family_site").mouseleave(function(){
        $(".family_list").slideUp();
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