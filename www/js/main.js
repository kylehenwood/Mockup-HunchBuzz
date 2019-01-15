// ----------------------------
// HunchBuzz website javascript
// ----------------------------
$(document).ready(function(){
  mobileNavigation();
  smoothScroll();
  planExpand();
  navigationSelected();
  ScrollReveal().reveal('.quote-card');
});

// mobile navigation
function mobileNavigation() {
  var trigger = $('.js-mobile-toggle');
  var navigation = $('.js-mobile-navigation');

  trigger.click(function(){
    navigation.toggle();
  });

  // $(document).on('click',function(e){
  //   if(navigationOpen === true) {
  //     navigation.hide();
  //   }
  // });
  //
  // $(document).scroll(function(e){
  //   if(navigationOpen === true) {
  //     navigation.hide();
  //   }
  // });

  navigation.click(function(e){
    e.stopPropagation();
  });

}

// Pricing page plan expands
// ----------------------------
function planExpand(){
  var plans = $('.js-plan');
  plans.each(function(){
    var container = $(this);
    var trigger = $(this).children('.js-plan-trigger');

    // click event
    trigger.click(function(){
      container.toggleClass('plan--open');
    });
  });
}


// Highlight current page navigation
// ----------------------------
function navigationSelected() {
  var navHome = $('.js-nav-home');
  var navFeatures = $('.js-nav-features');
  var navHiw = $('.js-nav-hiw');
  var navPlans = $('.js-nav-plans');
  var navSelected;

  switch(currentPage) {
    case 'home':
      navSelected = navHome;
      break;
    case 'features':
      navSelected = navFeatures;
      break;
    case 'hiw':
      navSelected = navHiw;
      break;
    case 'pricing':
      navSelected = navPlans;
      break;
    default:
      navSelected = null;
  }
  if (navSelected!= null) {
    if (currentPage === 'home') {
      navSelected.addClass('header-logo--selected');
    } else {
      navSelected.addClass('header-navigation__item--selected');
    }
  }
}


// smooth scroll
function smoothScroll() {
// smooth scroll
// Select all links with hashes
$('a[href*="#"]')
  // Remove links that don't actually link to anything
  .not('[href="#"]')
  .not('[href="#0"]')
  .click(function(event) {
    // On-page links
    if (
      location.pathname.replace(/^\//, '') == this.pathname.replace(/^\//, '')
      &&
      location.hostname == this.hostname
    ) {
      // Figure out element to scroll to
      var target = $(this.hash);
      target = target.length ? target : $('[name=' + this.hash.slice(1) + ']');
      // Does a scroll target exist?
      if (target.length) {
        // Only prevent default if animation is actually gonna happen
        event.preventDefault();
        $('html, body').animate({
          scrollTop: target.offset().top
        }, 200, function() {
          // Callback after animation
          // Must change focus!
          var $target = $(target);
          $target.focus();
          if ($target.is(":focus")) { // Checking if the target was focused
            return false;
          } else {
            $target.attr('tabindex','-1'); // Adding tabindex for elements not focusable
            $target.focus(); // Set focus again
          };
        });
      }
    }
  });
}
