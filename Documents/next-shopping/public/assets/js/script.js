let isOpened=!1;const $body=document.body,$navbar=document.querySelector(".l-navbar"),$burger=document.querySelector(".o-burger");function toggleNavbar(){isOpened?($body.style.overflow="",$navbar.classList.remove("is-opened"),$burger.classList.remove("is-opened"),isOpened=!1):($body.style.overflow="hidden",$navbar.classList.add("is-opened"),$burger.classList.add("is-opened"),isOpened=!0)}

// ------------------------header's slider-------------------------
function bannerSwitcher() {
  next = $('.sec-1-input').filter(':checked').next('.sec-1-input');
  if (next.length) next.prop('checked', true);
  else $('.sec-1-input').first().prop('checked', true);
}/* 控制循環播放banner1~4的JQuery */

var bannerTimer = setInterval(bannerSwitcher, 5000);

$('.banner-nav .controls label').click(function() {
  clearInterval(bannerTimer);
  bannerTimer = setInterval(bannerSwitcher, 5000)
});

// ------------------------activity's swiper-------------------------
// swiper plugging 輪播
const swiperEl = document.querySelector(".l-banner__swiper");

const swiper = new Swiper(swiperEl, {
  loop: true,
  longSwipesRatio: 0.1,
  slidesPerView: 4.3,
  allowTouchMove: false,
  speed: 3000,
  autoplay: {
    delay: 0,
    disableOnInteraction: false,
  },
});

const swiperWrapperEl = document.querySelector(
  ".l-banner__swiper-wrapper"
);
const setEasing = (easing = "ease") => {
  swiperWrapperEl.style.setProperty("--easing", easing);
};

let duration;
let distanceRatio;
let startTimer;

// stop
const stopAutoplay = () => {
  if (startTimer) clearTimeout(startTimer);

  // Stop slide at current translate.
  swiper.setTranslate(swiper.getTranslate());

  // Calculating the distance between current slide and next slide.
  // 0.3 is equal to 30% distance to the next slide.
  // distanceRatio = Math.abs((swiper.width * swiper.activeIndex + swiper.getTranslate()) / swiper.width);

  // currentSlideWidth for slidesPerView > 1
  const currentSlideWidth = swiper.slides[swiper.activeIndex].offsetWidth;
  distanceRatio = Math.abs(
    (currentSlideWidth * swiper.activeIndex + swiper.getTranslate()) /
      currentSlideWidth
  );

  // The duration that playing to the next slide
  duration = swiper.params.speed * distanceRatio;
  swiper.autoplay.stop();
};

  const startAutoplay = (delay = duration) => {
    startTimer = setTimeout(() => {
      setEasing("linear");
      swiper.autoplay.start();
      // 400 => Solve the problem that cannot slide prev continuously during autoplay
    }, delay + 500);
  };

  // toggle play
  const toggleEl = document.querySelector(".l-banner__toggle");
  let isPlaying = true;
  let clickable = true;
  const handleTogglePlay = () => {
    if (!clickable) return;
    clickable = false;

    if (isPlaying) stopAutoplay();
    else {
      const distance =
        swiper.width * swiper.activeIndex + swiper.getTranslate();

      // Avoid distance that is exactly 0
      duration = distance !== 0 ? duration : 0;
      swiper.slideTo(swiper.activeIndex, duration);
      startAutoplay();
    }
    isPlaying = !isPlaying;
    if (isPlaying) toggleEl.textContent = "STOP";
    else toggleEl.textContent = "PLAY";
    setTimeout(() => {
      clickable = true;
    }, 200);
  };

  // prev next
  const handleSwitch = (setIndex) => {
    if (!clickable) return;
    clickable = false;
    stopAutoplay();

    setEasing("ease");
    const switchSpeed = 1200;

    const index = setIndex();
    if (index === 999) swiper.slideNext(switchSpeed);
    else if (index === -999) swiper.slidePrev(switchSpeed);
    else swiper.slideTo(index, switchSpeed);

    if (isPlaying) startAutoplay(switchSpeed);
    setTimeout(() => {
      clickable = true;
    }, switchSpeed);
  };

  const handlePrev = () => {
    handleSwitch(function () {
      let prevIndex = swiper.activeIndex - 1;
      prevIndex =
        prevIndex < 0 ? swiper.slides.length + prevIndex : prevIndex;
      return distanceRatio === 0 ? -999 : prevIndex;
    });
  };
  const handleNext = () => {
    handleSwitch(function () {
      let nextIndex = swiper.activeIndex;
      const lastSwiperIndex = swiper.slides.length - 1;
      nextIndex =
        nextIndex > lastSwiperIndex
          ? lastSwiperIndex - nextIndex
          : nextIndex;
      return distanceRatio === 0 ? 999 : nextIndex;
    });
  };

// 置頂按鈕gotop
$(document).ready(function () {
  $('#gotop').click(function(){
    $("html,body").animate({scrollTop:0},1000);
  });
  // 置頂按鈕淡出淡入
  $(window).scroll(function(){
    if( $(this).scrollTop() > 200 ){
      $('#gotop').stop().fadeTo('fast',1);
    }else{
      $('#gotop').stop().fadeOut();
    }
  });
})