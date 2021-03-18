$(function(){

    // 슬라이드 버튼

    $('.button_list>li').click(function(){
        var num = $(this).index();
        if(num==0){
            $('body,html').stop().animate({'scrollTop':0},1000);
        }
        else if(num==1) {
            $('body,html').stop().animate({'scrollTop':1277},1000);
        }
        else if(num==2) {
            $('body,html').stop().animate({'scrollTop':2305},1000);
        }
        else if(num==3) {
            $('body,html').stop().animate({'scrollTop':3302},1000);
        }
        else if(num==4) {
            $('body,html').stop().animate({'scrollTop':4442},1000);
        }
        else if(num==5) {
            $('body,html').stop().animate({'scrollTop':5482},1000);
        }
        else if(num==6) {
            $('body,html').stop().animate({'scrollTop':6482},1000);
        }
        else if(num==7) {
            $('body,html').stop().animate({'scrollTop':7482},1000);
        }
        else if(num==8) {
            $('body,html').stop().animate({'scrollTop':8467},1000);
        }
        else if(num==9) {
            $('body,html').stop().animate({'scrollTop':9617},1000);
        }
        else if(num==10) {
            $('body,html').stop().animate({'scrollTop':10694},1000);
        }
        else {
            $('body,html').stop().animate({'scrollTop':11834},1000);
        }
    });


    // 다음 페이지 이동


    $('.btn_nextpage1').click(function(){
        $('body,html').stop().animate({'scrollTop':1277},1000);
    });
    $('.btn_nextpage2').click(function(){
        $('body,html').stop().animate({'scrollTop':2302},1000);
    });
    $('.btn_nextpage3').click(function(){
        $('body,html').stop().animate({'scrollTop':3302},1000);
    });
    $('.btn_nextpage4').click(function(){
        $('body,html').stop().animate({'scrollTop':4442},1000);
    });
    $('.btn_nextpage5').click(function(){
        $('body,html').stop().animate({'scrollTop':5482},1000);
    });
    $('.btn_nextpage6').click(function(){
        $('body,html').stop().animate({'scrollTop':6482},1000);
    });
    $('.btn_nextpage7').click(function(){
        $('body,html').stop().animate({'scrollTop':7482},1000);
    });
    $('.btn_nextpage8').click(function(){
        $('body,html').stop().animate({'scrollTop':8467},1000);
    });
    $('.btn_nextpage9').click(function(){
        $('body,html').stop().animate({'scrollTop':9617},1000);
    });
    $('.btn_nextpage10').click(function(){
        $('body,html').stop().animate({'scrollTop':10694},1000);
    });
    $('.btn_nextpage11').click(function(){
        $('body,html').stop().animate({'scrollTop':11834},1000);
    });





    $(window).scroll(function(){
        var num = $(document).scrollTop();
        if(num>1277){
            $('.section2_header').addClass('on');
        } else{
            $('.section2_header').removeClass('on');
        }

        
        if(num>=0&&num<1277){
            $('.button1>a').addClass('on').parent().siblings().find('a').removeClass('on');
        }
        else if(num>=1277&&num<2302){
            $('.button2>a').addClass('on').parent().siblings().find('a').removeClass('on');
        }
        else if(num>=2302&&num<3302){
            $('.button3>a').addClass('on').parent().siblings().find('a').removeClass('on');
        }
        else if(num>=3302&&num<4442){
            $('.button4>a').addClass('on').parent().siblings().find('a').removeClass('on');
        }
        else if(num>=4442&&num<5482){
            $('.button5>a').addClass('on').parent().siblings().find('a').removeClass('on');
        }
        else if(num>=5482&&num<6482){
            $('.button6>a').addClass('on').parent().siblings().find('a').removeClass('on');
        }
        else if(num>=6482&&num<7482){
            $('.button7>a').addClass('on').parent().siblings().find('a').removeClass('on');
        }
        else if(num>=7482&&num<8467){
            $('.button8>a').addClass('on').parent().siblings().find('a').removeClass('on');
        }
        else if(num>=8467&&num<9617){
            $('.button9>a').addClass('on').parent().siblings().find('a').removeClass('on');
        }
        else if(num>=9617&&num<10694){
            $('.button10>a').addClass('on').parent().siblings().find('a').removeClass('on');
        }
        else if(num>=10694&&num<11834){
            $('.button11>a').addClass('on').parent().siblings().find('a').removeClass('on');
        }
        else {
            $('.button12>a').addClass('on').parent().siblings().find('a').removeClass('on');
        }
    
        console.log(num);

        // 섹션 2

        if(num>900&&num<2300){
            $('.m_case').addClass('on');
        }
        else if(num>2800||num==0){
            $('.m_case').removeClass('on');
        }

        // 섹션 3

        if(num>1900&&num<3300){
            $('.section3_inner').addClass('on');
        }
        else if(num>3800||num<1400){
            $('.section3_inner').removeClass('on');
        }

        // 섹션 4

        if(num>2800&&num<4500){
            $('.section4_inner').addClass('on');
        }
        else if(num>5000||num<2300){
            $('.section4_inner').removeClass('on');
        }

        // 섹션 5

        if(num>4000&&num<5500){
            $('.section5_inner').addClass('on');
        }
        else if(num>6000||num<3600){
            $('.section5_inner').removeClass('on');
        }

        // 섹션 6

        if(num>5000&&num<6500){
            $('.section6_inner').addClass('on');
        }
        else if(num>7000||num<4500){
            $('.section6_inner').removeClass('on');
        }

        // 섹션 7

        if(num>5900&&num<7500){
            $('.section7_inner').addClass('on');
        }
        else if(num>8000||num<5400){
            $('.section7_inner').removeClass('on');
        }

        // 섹션9

        if(num>7800&&num<9600){
            $('.section9_inner').addClass('on');
        }
        else if(num>10100||num<7300){
            $('.section9_inner').removeClass('on');
        }

        // 섹션 10

        if(num>9300&&num<10700){
            $('.s10_img_wrap').addClass('on');
        }
        else if(num>11200||num<8400){
            $('.s10_img_wrap').removeClass('on');
        }

        // 섹션 11

        if(num>10300&&num<11800){
            $('.section11_inner').addClass('on');
        }
        else if(num>12300||num<9800){
            $('.section11_inner').removeClass('on');
        }

        // 섹션 12

        if(num>11400&&num<12500){
            $('.s12_img').addClass('on');
        }
        else if(num>13000||num<10900){
            $('.s12_img').removeClass('on');
        }
    });


    // 섹션 8

    $('.s8_slide').slick({
        infinite: true,
        fade: true,
        speed: 1500,
    });



    // 섹션 10


    $('.s10_left>li>a').click(function(){
        $(this).find('span').addClass('on').parents('.s10_left>li').siblings().find('span').removeClass('on');
        $('.s10_right').find('span').removeClass('on');
        var color_left_list = ['./images/mycat_case_iphone6_hotpink_01.png','./images/mycat_case_iphone6_pink_01.png','./images/mycat_case_iphone6_orange_01.png','./images/mycat_case_iphone6_yellow_01.png','./images/mycat_case_iphone6_skyblue_01.png','./images/mycat_case_iphone6_mint_01.png']
        var pon_color_left = $(this).parent().index();
        $('.s10_color').css({'opacity':0.5}).stop().attr('src',color_left_list[pon_color_left]).animate({'opacity':1},1000);
    });
    $('.s10_right>li>a').click(function(){
        $(this).find('span').addClass('on').parents('.s10_right>li').siblings().find('span').removeClass('on');
        $('.s10_left').find('span').removeClass('on');
        var color_right_list = ['./images/mycat_case_iphone6_black_01.png','./images/mycat_case_iphone6_white_01.png','./images/mycat_case_iphone6_darlsiver_01.png','./images/mycat_case_iphone6_gold_01.png']
        var pon_color_right = $(this).parent().index();
        $('.s10_color').css({'opacity':0.5}).stop().attr('src',color_right_list[pon_color_right]).animate({'opacity':1},1000);;
    });
});