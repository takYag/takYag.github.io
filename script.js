$(function() {
// ロード中のアニメーション
  $(window).on('load', function(){
    $('.load').fadeOut();
    $('.welcome-fadein').fadeIn(2000);
  });
  // $('.welcome').slideDown(2000);

// メニューのclickイベント
  $('.menu').click(function(){
    if($(this).hasClass('active')){
      $(this).removeClass('active');
      $('.header-menu').addClass('slide-left');
    } else{
      $(this).addClass('active');
      $('.header-menu').removeClass('slide-left');
      $('.header-menu').addClass('slide-right');
    }
  });
// メール送信時のモーダル
  $('#send').click(function(){
    $('#contact-modal').fadeIn();
  });
  $('#close').click(function(){
    $('#contact-modal').fadeOut();
  });
// 吹き出しイベント
  $('.modal a').hover(
    function(){
      $('.balloon').fadeIn();
    },
    function() {
      $('.balloon').fadeOut();
    });
// 迷惑メール防止
  const gmail = 'gmail'+'.com';
  const address = '<i class="far fa-envelope"></i> '+'&#121;&#97;&#103;&#101;&#101;&#101;&#101;&#110;&#46;&#117;&#118;&#105;&#99;&#64;'+gmail;
  $('.modal a').html(address);
// メールソフトを自動起動
  $('.modal a').click(function(){
    const name = $('#name').val();
    const inquiry = $('#inquiry').val();
    const subject = $('#subject').val();
    const message = inquiry.replace(/\r?\n/g,'%0D%0A');
    const mail = 'mail'+'to';
    $(this).attr('href', mail+':yageeeen.uvic&#64;'+gmail+'?subject='+subject+' from '+name+'&body='+message);
  });

// 上スクロールでto-top表示
  var startPos = 0,winScrollTop = 0;
  $(window).on('scroll',function(){
    winScrollTop = $(this).scrollTop();
    if (winScrollTop <= startPos) {
        if(winScrollTop >= 100){
          $('.to-top').slideDown();
        }
    } else {
        $('.to-top').slideUp();
    }
    startPos = winScrollTop;
  });
// スクロール量に応じて要素を表示
  $(window).scroll(function(){
    $('.fadeinup').each(function(){
      var elemPos = $(this).offset().top;
      var windowHeight = $(window).height();
      var scroll = $(window).scrollTop();
      if( scroll + windowHeight > elemPos + 100){
        $(this).addClass('scrollin');
      }
    });
  });

 // top-animationのclickイベント
  $('.top-animation').click(function(){
    $('html, body').animate({
      'scrollTop': 0
    },'slow');
  });
// header-menuのclickイベント
  $('.header-menu a').click(function(){
    var id = $(this).attr('href');
    var position = $(id).offset().top;
    $('html,body').animate({
      scrollTop: position-70
    },'slow');
  });
});
