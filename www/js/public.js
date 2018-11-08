// Public Sitshot website javascript

$(document).ready(function(){
  banner();
  logoAnimate();
  mobileNavigation();
});

// banner
function banner() {
  var bannerMock;
  if(!$('.js-banner-mock')){
    return false;
  } else {
    bannerMock = $('.js-banner-mock');
  }

  setTimeout(function(){
    bannerMock.addClass('banner-mockup--animate');
  },200);
}


// logo animate
function logoAnimate() {
  var elem = $('.js-header-logo');
  var animate = true;

  elem.mouseenter(function(){

    if (animate === true) {
      animate = false;
      setTimeout(function(){
        animate = true;
      },1000);
    } else {
      return false;
    }

    var newItem = $(this).clone(true);
    elem.before(newItem);
    elem.remove();
    elem = newItem;

  });
}

// mobile navigation
function mobileNavigation() {
  var trigger = $('.js-mobile-button');
  var navigation = $('.js-mobile-navigation');
  var header = $('.js-mobile-header');

  trigger.click(function(){
    header.toggleClass('header-mobile--open');
    navigation.toggleClass('header-mobile__navigation--visible');
  });
}