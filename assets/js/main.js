$(document).ready(function() {
  $("#loading-screen").fadeIn(1000);
  setTimeout(function() {
    $('.loading-rectangle').addClass('fade-in');
    setTimeout(function() {
      $('.loading-rectangle::before, .loading-rectangle::after').addClass('fade-in');
    }, 1000); // 0.3秒後に擬似要素

    // $('.l-wrapper').fadeIn();

    // .loading-rectangleと擬似要素のfade-in, bodyのloadingを消す
    setTimeout(function() {
      $('.loading-rectangle').removeClass('fade-in');
      // $('.loading-rectangle::before, .loading-rectangle::after').removeClass('fade-in');
      $('body').removeClass('loading');
      $("#loading-screen").fadeOut(1000);
    }, 2000);
  }, 1000);


//   // 一定時間後に要素の表示を開始
  setTimeout(() => {
    $(".p-scroll__content").addClass("_isActiveFadeIn");
  }, 600);
  // setTimeout(() => {
  //   $("h1, .c-top__subTitle").addClass("_isActiveFadeIn");
  // }, 1200);


//   setTimeout(() => {
//     $(".c-slideImage, .c-scroll-text, .p-subNav__menu--pc, .p-nav__menu--pc").addClass("_isActiveFadeIn");
//   }, 600);
//   setTimeout(() => {
//     $("h1, .c-top__subTitle").addClass("_isActiveFadeIn");
//   }, 1200);

//   // スクロールイベントを監視してフェードインさせる
//   $(window).scroll(() => {
//     $(".p-about__imgTop, .p-about__imgBottom, .c-top__subTitle").each((index, element) => {
//       const position = $(element).offset().top;
//       const windowHeight = $(window).height();
//       const scroll = $(window).scrollTop();

//       if (scroll > position - windowHeight + 200) {
//         $(element).addClass("_isActiveFadeIn");
//       }
//     });
//   });


  //画像をフィットさせる
  // const image = document.querySelector('.c-slideImage');
  // const container = document.querySelector('.c-concept__img');

  // image.onload = function() {
  //   if (image.height < container.clientHeight) {
  //     image.style.height = '100%';
  //     image.style.width = 'auto';
  //   }
  // }

  // 読み込み時のハンバーガーメニューボタンを閉じた状態に設定
  $("#p-drawer__toggle--sp").removeClass("open");
  $(".c-hamburger_borderTop, .c-hamburger_borderBottom").removeClass("open");

  $("#p-drawer__toggle--sp").click(function(){
    $(this).toggleClass("open");
    if ($(this).hasClass("open")) {
      $(".p-nav__container--sp").fadeIn();
      $(".c-hamburger_borderTop, .c-hamburger_borderMiddle, .c-hamburger_borderBottom").addClass("open");
    } else {
      $(".p-nav__container--sp").fadeOut();
      $(".c-hamburger_borderTop, .c-hamburger_borderMiddle, .c-hamburger_borderBottom").removeClass("open");
    }
  });


//   // 画像の切り替え
//   const imagesLeft = $('.p-header__left img');
//   const imagesRight = $('.p-header__right img');
//   let currentIndexLeft = 0;
//   let currentIndexRight = 0;

//   function showNextImageLeft() {
//     const nextIndex = (currentIndexLeft + 1) % imagesLeft.length;
//     imagesLeft.eq(currentIndexLeft).animate({opacity: 0}, 500);
//     imagesLeft.eq(nextIndex).animate({opacity: 1}, 500);
//     currentIndexLeft = nextIndex;
//   }

//   function showNextImageRight() {
//     const nextIndex = (currentIndexRight + 1) % imagesRight.length;
//     imagesRight.eq(currentIndexRight).animate({opacity: 0}, 500);
//     imagesRight.eq(nextIndex).animate({opacity: 1}, 500);
//     currentIndexRight = nextIndex;
//   }

//   setInterval(showNextImageLeft, 3000);
//   setInterval(showNextImageRight, 3000);
});







