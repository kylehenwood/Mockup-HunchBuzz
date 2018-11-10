// ----------------------------
// HunchBuzz website javascript
// ----------------------------
$(document).ready(function(){
  mobileNavigation();
  smoothScroll();
  planExpand();
});

// mobile navigation
function mobileNavigation() {
  var trigger = $('.js-mobile-button');
  var navigation = $('.js-mobile-navigation');
  var header = $('.js-mobile-header');

  trigger.click(function(){
    header.toggleClass('navigation-mobile--open');
    navigation.toggleClass('navigation-mobile__navigation--visible');
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
