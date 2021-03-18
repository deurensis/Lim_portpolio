$(function(){
    // m gnb 메뉴


    $('.btn_menu').click(function(){
      $('.cover').fadeIn(300);
      $('#m_gnb').animate({'left':0},300);
      $('body').css({'overflow':'hidden'});
      $('#m_gnb').css({'overflow':'auto'});
    });
    $('.cover').click(function(){
      $('.cover').fadeOut(300);
      $('#m_gnb').animate({'left':'-100%'},300);
      $('body').css({'overflow':'auto'});
      $('#m_gnb').css({'overflow':'hidden'});
    });



    $('.cart').mouseenter(function(){
      $('.cart>img').attr('src','./images/btn_lf_ov.png');
    });
    $('.cart').mouseleave(function(){
      $('.cart>img').attr('src','./images/btn_lf_ot.png');
    });


    $('.gnb>li').mouseenter(function(){
      $(this).find('.depth2').stop().slideDown(300);
    });
    $('.gnb>li').mouseleave(function(){
      $(this).find('.depth2').stop().slideUp(300);
    });


    // 메인

    $('.visual').slick({
        infinite: true,
        autoplay: 2500,
        dots: true,
      });


      
      // 섹션2



    $('.section2_inner>li').mouseenter(function(){
      var s2_img1 = $(this).find('img').attr('src').replace('_ot','_ov');
      $(this).find('img').attr('src',s2_img1);
    });
    $('.section2_inner>li').mouseleave(function(){
      var s2_img2 = $(this).find('img').attr('src').replace('_ov','_ot');
      $(this).find('img').attr('src',s2_img2);
    });


    // 푸터

    var family = true;
    $('.btn_family').click(function(){
      if(family==true){
        $('.familyList').slideDown(300);
        $('.btn_family').addClass('on');
        family = false;
      }
      else {
        $('.familyList').slideUp(300);
        $('.btn_family').removeClass('on');
        family = true;
      }
    });
    


    // 모바일 반응형
    
    
    $(window).resize(function(){
      var num = $(this).width();
      if(num<=750){
        $('.slick-arrow').hide();
        $('.section1_inner>p').html('언제 어디서나 라푸마와 함께라면<br>당신의 액티브한 순간들은 더욱 FREESH하게<br>변화 할 것입니다.')
        $('.visual1>a>img').attr('src','./images/m_visual_a.jpg');
        $('.visual2>a>img').attr('src','./images/m_visual_b.jpg');
        $('.s2_list1>a>img').attr('src','./images/m_catalogue.jpg');
        $('.s2_list2>a>img').attr('src','./images/m_video.jpg');
        $('.s2_list3>a>img').attr('src','./images/m_product.jpg');
        $('.s2_list4>a>img').attr('src','./images/m_athletic.jpg');
        $('.s2_list5>a>img').attr('src','./images/m_camping.jpg');
      } else{
        $('.slick-arrow').show();
        $('.section1_inner>p').html("언제 어디서나 라푸마와 함께라면 당신의 액티브한 순간들은 더욱 FREESH하게 변화 할 것입니다.<br>2016년 라푸마의 <span class='s1_bold'>'리듬컬렉션'</span>과 <span class='s1_bold'>'프레쉬 컬렉션'</span>을 만나보세요.")
        $('.visual1>a>img').attr('src','./images/visual_a.jpg');
        $('.visual2>a>img').attr('src','./images/visual_b.jpg');
        $('.s2_list1>a>img').attr('src','./images/cata_ot.jpg');
        $('.s2_list2>a>img').attr('src','./images/video_ot.jpg');
        $('.s2_list3>a>img').attr('src','./images/product_ot.jpg');
        $('.s2_list4>a>img').attr('src','./images/athletic_ot.jpg');
        $('.s2_list5>a>img').attr('src','./images/camping_ot.jpg');
      }
    });
    var num2 = $(window).width();
    if(num2<=750){
      $('.slick-arrow').hide();
      $('.section1_inner>p').html('언제 어디서나 라푸마와 함께라면<br>당신의 액티브한 순간들은 더욱 FREESH하게<br>변화 할 것입니다.')
      $('.visual1>a>img').attr('src','./images/m_visual_a.jpg');
      $('.visual2>a>img').attr('src','./images/m_visual_b.jpg');
      $('.s2_list1>a>img').attr('src','./images/m_catalogue.jpg');
      $('.s2_list2>a>img').attr('src','./images/m_video.jpg');
      $('.s2_list3>a>img').attr('src','./images/m_product.jpg');
      $('.s2_list4>a>img').attr('src','./images/m_athletic.jpg');
      $('.s2_list5>a>img').attr('src','./images/m_camping.jpg');
    } else{
      $('.slick-arrow').show();
      $('.section1_inner>p').html("언제 어디서나 라푸마와 함께라면 당신의 액티브한 순간들은 더욱 FREESH하게 변화 할 것입니다.<br>2016년 라푸마의 <span class='s1_bold'>'리듬컬렉션'</span>과 <span class='s1_bold'>'프레쉬 컬렉션'</span>을 만나보세요.")
      $('.visual1>a>img').attr('src','./images/visual_a.jpg');
      $('.visual2>a>img').attr('src','./images/visual_b.jpg');
      $('.s2_list1>a>img').attr('src','./images/cata_ot.jpg');
      $('.s2_list2>a>img').attr('src','./images/video_ot.jpg');
      $('.s2_list3>a>img').attr('src','./images/product_ot.jpg');
      $('.s2_list4>a>img').attr('src','./images/athletic_ot.jpg');
      $('.s2_list5>a>img').attr('src','./images/camping_ot.jpg');
    }
});
