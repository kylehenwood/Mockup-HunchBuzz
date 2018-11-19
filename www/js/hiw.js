// ---
// How it works element focus
// ---

var steps = []
var scroll;
var winHeight;

$(document).ready(function(){

  // do not run if not hiw page
  if (!$('.js-hiw').length) {
    return false;
  }

  var stepsLength = null;
  var step1 = {
    element:$('.js-step-1'),
    dots:$('.js-dots-1'),
  }
  var step2 = {
    element:$('.js-step-2'),
    dots:$('.js-dots-2'),
  }
  var step3 = {
    element:$('.js-step-3'),
    dots:null,
  }

  // push elements to array
  steps.push(step1,step2,step3);
  stepsLength = steps.length;

  // init
  initHiw(steps,stepsLength);

  // on resize...
  $(window).on('resize',function(){
    initHiw(steps,stepsLength);
  });

  // on scroll...
  $(window).on('scroll',function(){
    scrollHiw(steps,stepsLength);
  });

  // call once on start
  scrollHiw(steps,stepsLength);
});


function initHiw(steps,stepsLength) {
  winHeight = $(window).outerHeight();
  // init elements
  for (var i = 0; i < stepsLength; i++) {
    var padding = 80; // buffer around each card for selection purposes
    var step = steps[i];
    var elem = step.element;
    step.scrollTop = elem.offset().top - padding;
    step.scrollBot = step.scrollTop + elem.outerHeight() + padding;
      //Do something
  }
}



// On scroll check which elements are in viewport
function scrollHiw(steps,stepsLength) {
  var scroll = $(window).scrollTop();
  var focus = scroll+(winHeight*0.3);

  console.log(focus);

  // on scroll
  for (var i = 0; i < stepsLength; i++) {
    var step = steps[i];
    var elem = step.element;
    var top = step.scrollTop;
    var bot = step.scrollBot;
    var dots = step.dots;

    if (focus >= top && focus <= bot) {
      console.log(i);
      console.log('top:'+top+' bot'+bot);
      elem.addClass('hiw-step--selected');
      if (dots!=null) {
        dots.addClass('hiw-progress--animate');
      }
    } else {
      if (elem.hasClass('hiw-step--selected')){
        elem.removeClass('hiw-step--selected');
        if (dots!=null) {
          dots.removeClass('hiw-progress--animate');
        }
      }
    }
  }
}
