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
  }, 4000);
  // setTimeout(() => {
  //   $("h1, .c-top__subTitle").addClass("_isActiveFadeIn");
  // }, 1200);

  setTimeout(() => {
    $(".c-slideImage, .c-scroll-text, .p-subNav__menu--pc, .p-nav__menu--pc").addClass("_isActiveFadeIn");
  }, 600);
//   setTimeout(() => {
//     $("h1, .c-top__subTitle").addClass("_isActiveFadeIn");
//   }, 1200);


//   // スクロールイベントを監視してフェードインさせる
  function fadeInOnScroll() {
    $(".p-concept__container, .p-menu__row2 li, .p-salonInfo__container, .l-main__blog, .l-main__news").each(function(index, element) {
      const position = $(element).offset().top;
      const windowHeight = $(window).height();
      const scroll = $(window).scrollTop();

      if (scroll > position - windowHeight + 200) {
        $(element).addClass("_isActiveFadeIn");
      } else {
        $(element).removeClass("_isActiveFadeIn");
      }
    });
  }

  $(window).on('scroll', fadeInOnScroll);
  fadeInOnScroll(); // ページ読み込み時にも実行して初期状態を設定


  // 読み込み時のハンバーガーメニューボタンを閉じた状態に設定
  $("#p-drawer__toggle--sp").removeClass("open");
  $(".c-hamburger_borderTop, .c-hamburger_borderBottom").removeClass("open");

  // ハンバーガーメニューボタンのクリックイベント
  $("#p-drawer__toggle--sp").click(function() {
    $(this).toggleClass("open");
    if ($(this).hasClass("open")) {
      $(".p-nav__container--sp").fadeIn();
      $(".c-hamburger_borderTop, .c-hamburger_borderMiddle, .c-hamburger_borderBottom").addClass("open");
    } else {
      $(".p-nav__container--sp").fadeOut();
      $(".c-hamburger_borderTop, .c-hamburger_borderMiddle, .c-hamburger_borderBottom").removeClass("open");
    }
  });

  // スクロールイベントを監視
  $(window).on('scroll', function() {
    if ($("#p-drawer__toggle--sp").hasClass("open")) {
      $(".p-nav__container--sp").fadeOut(400); // フェードアウト
      $("#p-drawer__toggle--sp").removeClass("open");
      $(".c-hamburger_borderTop, .c-hamburger_borderMiddle, .c-hamburger_borderBottom").removeClass("open");
    }
  });


//   // 画像の切り替え
  function setupImageSlider(containerSelector) {
    const images = $(containerSelector + ' .c-slideImage');
    let currentIndex = 0;

    // 最初の画像を表示
    images.eq(currentIndex).css({ opacity: 1 });

    function showNextImage() {
      const nextIndex = (currentIndex + 1) % images.length;
      images.eq(currentIndex).animate({ opacity: 0 }, 1000);
      images.eq(nextIndex).animate({ opacity: 1 }, 1000);
      currentIndex = nextIndex;
    }

    // 最初の画像を表示してから5秒後に次の画像に切り替える
    setTimeout(function() {
      showNextImage();
      setInterval(showNextImage, 5000);
    }, 5000);
  }

  // 各スライダーを初期化
  setupImageSlider('.p-top__keyvisual');
  setupImageSlider('.c-salonInfo__img');
});







