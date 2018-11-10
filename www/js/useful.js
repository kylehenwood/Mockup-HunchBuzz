// Function from David Walsh: http://davidwalsh.name/css-animation-callback
function whichTransitionEvent(){
  var t,
      el = document.createElement("fakeelement");

  var transitions = {
    "transition"      : "transitionend",
    "OTransition"     : "oTransitionEnd",
    "MozTransition"   : "transitionend",
    "WebkitTransition": "webkitTransitionEnd"
  }

  for (t in transitions){
    if (el.style[t] !== undefined){
      return transitions[t];
    }
  }
}

var transitionEvent = whichTransitionEvent();
//
// $(".button").click(function(){
//   $(this).addClass("animate");
//   $(this).one(transitionEvent,
//               function(event) {
//     // Do something when the transition ends
//   });
// });



function whichAnimationEvent() {
  var t,
      el = document.createElement("fakeelement");
  var animations = {
      "animation"      : "animationend",
      "OAnimation"     : "oAnimationEnd",
      "MozAnimation"   : "animationend",
      "WebkitAnimation": "webkitAnimationEnd"
  };
  for(t in animations) {
      if (el.style[t] !== undefined){
          return animations[t];
      }
  }
}
var animationEvent = whichAnimationEvent();
//
// $(".button").click(function(){
//   $(this).addClass("animate");
//   $(this).one(animationEvent,
//               function(event) {
//     // Do something when the animation ends
//   });
// });
