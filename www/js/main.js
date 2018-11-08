// javascripts
$(document).ready(function(){
  banner();
  logoAnimate();
  mobileNavigation();
  forgotPassword();
  profileDropdown();
  siteDropdown();
  planSelect();
  questDropdown();
  generalDropdown();
  annualSwitch();
  modal();
  password();
  //--
  addwebsiteanims();
  grid();
});


function grid(){
  var items = $('.js-grid-item');
  items.each(function(){
    var item = $(this);
    setTimeout(function(){
     item.removeClass('grid-item--stencil');
    },4000);
  });
}

function password (){
 $('.js-password').each(function(){
   var container = $(this);
   var button = container.find('.js-password-button');
   var input = container.find('.js-password-input');

   var state;

   button.click(function(){
     state = input.attr('type');
     input.removeAttr('type');
     if (state === 'text') {
       input.attr('type','password');
     } else {
       input.attr('type','text');
     }
   });

 });
}

function modal() {
  var trigger = $('.js-modal-trigger');
  var overlay = $('.js-modal-overlay');
  var content = $('.js-modal-content');
  var close = $('.js-modal-close');
  var state = 'closed';



  trigger.click(function(){
    if (state == 'closed') {
      openOverlay();
    } else {
      closeOverlay();
    }
  });


  if (overlay.hasClass('modal-overlay--active') == true) {
    state = 'open';
  } else {
    state = 'closed';
  }

  close.click(function(){
    closeOverlay();
  });

  content.click(function(event){
    event.stopPropagation();
  });

  overlay.click(function() {
    if (state == 'open') {
      closeOverlay();
    }
  });

  function openOverlay() {
    overlay.addClass('modal-overlay--active');
    state = 'open';
  }
  function closeOverlay() {
    overlay.removeClass('modal-overlay--active');
    state = 'closed';
  }
}

// plan select
function planSelect() {
  if (!$('.js-plan-select') == true){
    return false;
  }
  var delay = 0;
  var plans = $('.js-plan-select-item');

  plans.each(function(){
    var plan = $(this);
    setTimeout(function(){
      plan.addClass('plan-select__item--active');
    },delay);
    delay += 40;
  });
}

// annual switch
function annualSwitch() {


  $('.js-annual-switch').each(function(){
    var buttons = $(this).children('.js-annual-button');

    buttons.click(function(){
      annualToggle($(this));
    });

    function annualToggle(button){
      buttons.removeClass('annual-switch__button--active');
      button.addClass('annual-switch__button--active');
      flip();
    }
  });


  var plans = $('.js-plan-flip');
  var delay = 120;
  var direction = true;

  function flip(){


    if (direction === false) {
      direction = true;
    } else {
      direction = false;
    }

    plans.each(function(index){
      var timeout;
      var plan = $(this);
      if (direction === false) {
        timeout = delay*(plans.length-index);
      } else {
        timeout = delay*index;
      }
      setTimeout(function(){
        plan.toggleClass('plan-option--flip');
      },timeout);

    });
  }

}


// forgot password
function forgotPassword() {
  var trigger = $('.js-forgot-trigger');
  var container = $('.js-forgot-container');

  trigger.click(function(){
    container.toggleClass('auth-forgot--reset');
  });
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


function breadcrumb(){
  if(!$('.breadcrumb') == true){
    return false;
  }
  var item = $('.breadcrumb__item').last();

  setTimeout(function(){
    item.addClass('breadcrumb__item--animate');
  },200);

}


function profileDropdown () {
  var dropdown = $('.js-profile');
  var state = 'closed';
  var trigger = dropdown.find('.js-profile-button');
  var dropdownContent = dropdown.find('.js-profile-dropdown');

  if (dropdown.hasClass('profile-dropdown--active')) {
    state = 'open';
  }


  //Hide the menus if visible
  $('html').click(function() {
    if (state == 'open') {
      closeDropdown();
    }
  });

  dropdown.click(function(event){
    event.stopPropagation();
  });

  trigger.click(function(){
    if (state == 'open') {
      closeDropdown();
    } else {
      trigger.addClass('profile-button--active');
      dropdownContent.addClass('profile-dropdown--active');
      state = 'open';
    }
  });

  function closeDropdown() {
    trigger.removeClass('profile-button--active');
    dropdownContent.removeClass('profile-dropdown--active');
    state = 'closed';
  }
}


function generalDropdown () {
  var dropdowns = $('.js-dropdown');

  dropdowns.each(function(){

    var dropdown = $(this);
    var state = 'closed';
    var trigger = dropdown.find('.js-dropdown-button');
    var dropdownContent = dropdown.find('.js-dropdown-content');

    if (dropdown.hasClass('dropdown-content--open')) {
      state = 'open';
    }


    //Hide the menus if visible
    $('html').click(function() {
      if (state == 'open') {
        closeDropdown();
      }
    });

    dropdown.click(function(event){
      event.stopPropagation();
    });

    trigger.click(function(){
      if (state == 'open') {
        closeDropdown();
      } else {
        trigger.addClass('button--active');
        dropdownContent.addClass('dropdown-content--open');
        state = 'open';
      }
    });

    function closeDropdown() {
      trigger.removeClass('button--active');
      dropdownContent.removeClass('dropdown-content--open');
      state = 'closed';
    }
  });
}





function siteDropdown () {
  var dropdown = $('.js-site');
  var state = 'closed';
  var trigger = dropdown.find('.js-site-button');
  var dropdownContent = dropdown.find('.js-site-dropdown');

  if (dropdown.hasClass('user-dropdown--active')) {
    state = 'open';
  }


  //Hide the menus if visible
  $('html').click(function() {
    if (state == 'open') {
      closeDropdown();
    }
  });

  dropdown.click(function(event){
    event.stopPropagation();
  });

  trigger.click(function(){
    if (state == 'open') {
      closeDropdown();
    } else {
      trigger.addClass('site-button--active');
      dropdownContent.addClass('site-dropdown--active');
      state = 'open';
    }
  });

  function closeDropdown() {
    trigger.removeClass('site-button--active');
    dropdownContent.removeClass('site-dropdown--active');
    state = 'closed';
  }
}



function questDropdown () {
  var dropdown = $('.js-quest');
  var state = 'closed';
  var trigger = dropdown.find('.js-quest-button');
  var dropdownContent = dropdown.find('.js-quest-dropdown');

  if (dropdown.hasClass('quest-dropdown--active')) {
    state = 'open';
  }

  //Hide the menus if visible
  $('html').click(function() {
    if (state == 'open') {
      closeDropdown();
    }
  });

  dropdown.click(function(event){
    event.stopPropagation();
  });

  trigger.click(function(){
    if (state == 'open') {
      closeDropdown();
    } else {
      trigger.addClass('quest-button--active');
      dropdownContent.addClass('quest-dropdown--active');
      state = 'open';
    }
  });

  function closeDropdown() {
    trigger.removeClass('quest-button--active');
    dropdownContent.removeClass('quest-dropdown--active');
    state = 'closed';
  }
}



//

function addwebsiteanims() {
  //alert('fuark');

  $('.js-1-save').hide();

  $('.js-1-toggle').click(function(){
    $('.js-1-form').slideToggle();
    $('.js-1-save').slideToggle();
  });
}