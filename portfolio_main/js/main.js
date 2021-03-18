$(function(){
    // 헤더

    $('.btn_home').click(function(){
        let home_scroll = $('#section1_area').offset().top;
        $('body,html').animate({scrollTop:home_scroll},300);
    });
    $('.btn_pc').click(function(){
        let pc_scroll = $('#section2_area').offset().top;
        $('body,html').animate({scrollTop:pc_scroll},300);
    });
    $('.btn_mobile').click(function(){
        let mobile_scroll = $('#section3_area').offset().top;
        $('body,html').animate({scrollTop:mobile_scroll},300);
    });
    $('.btn_respon').click(function(){
        let respon_scroll = $('#section4_area').offset().top;
        $('body,html').animate({scrollTop:respon_scroll},300);
    });
    $('.btn_contact').click(function(){
        let respon_scroll = $('#section5_area').offset().top;
        $('body,html').animate({scrollTop:respon_scroll},300);
    });


    // 위치별 애니메이션

    $(window).scroll(function(){
        let section2_top = $('#section2_area').offset().top;
        if($(this).scrollTop()>=section2_top-300&&$(this).scrollTop()<=section2_top+500){
            $('.s2_inner').addClass('on');
        }

        let section3_top = $('#section3_area').offset().top;
        if($(this).scrollTop()>=section3_top-300&&$(this).scrollTop()<=section3_top+500){
            $('.s3_inner').addClass('on');
        }

        let section4_top = $('#section4_area').offset().top;
        if($(this).scrollTop()>=section4_top-300&&$(this).scrollTop()<=section4_top+500){
            $('.s4_inner').addClass('on');
        }

        let section5_top = $('#section5_area').offset().top;
        if($(this).scrollTop()>=section5_top-300&&$(this).scrollTop()<=section5_top+500){
            $('.stats_list').addClass('on');
        }
    })
});