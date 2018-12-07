// ---
// Bee background animation
// ---


// NEED TO DO
// GET ALL PATHS
// SELECT X PATHS
// PLACE BEE ON X PATHS
// SET SPEED TO BE THE SAME ACROSS ALL PATHS
// EVERY X TIME GET THE POSITION OF BEE

const beeSpeedMin = 24;
const beeSpeedMax = 44;

var dotArray = [];  // dots that appear behind each bee are pushed to this array

var beeSvg;
var beeContainer;
var dotContainer;
var beePaths;
var beePathArray = [];
var bees = [];

$(document).ready(function(){
  beeSvg = $('.js-bee-svg');
  beePaths = $('.js-bee-path');
  beeContainer = $('.js-bee-container');
  dotContainer = $('.js-bee-trails');
  beePaths.each(function(){
    var elem = $(this);
    var path = {
      id: elem.attr('id'),
      path: elem,
      d: elem.attr('d'),
      //length: SVGGeometryElement.getTotalLength(elem),
    }
    beePathArray.push(path);
  });

  // ---
  // Start looping
  animate();




  // ---
  // Startup
  const pathCount = beePathArray.length;

  // place a bee on each path, random location and start point
  for (i = 0; i < pathCount; i++) {
    // select path
    path = beePathArray[i];

    //var beeContainer2 = document.querySelector('.js-bee-container');
    var beeContainer2 = document.querySelector('.js-bee-banner');
    var animDuration = rand(beeSpeedMin,beeSpeedMax);
    var randStart = rand(1,10);
    var animStart = -animDuration*(randStart/10);

    const beeID = 'js-bee--'+i;

    var svg = "http://www.w3.org/2000/svg";
    var bee = document.createElement('div');
    bee.setAttribute('id',beeID);
    bee.setAttribute('class','bee-motion');
    bee.setAttribute('x',0);
    bee.setAttribute('y',0);
    bee.setAttribute('width',16);
    bee.setAttribute('height',16);
    bee.setAttribute('fill','#0D47A1');
    bee.setAttribute('transform','translate(-8,-8)');
    bee.setAttribute('style','offset-path: path("'+path.d+'")');

    var beeMotion = document.createElementNS(svg,'animateMotion');
    beeMotion.setAttribute('dur',animDuration);
    beeMotion.setAttribute('begin',animStart);
    beeMotion.setAttribute('repeatCount','indefinite');
    beeMotion.setAttribute('rotate','auto');

    var beeMpath = document.createElementNS(svg,'mpath');
    beeMpath.setAttribute('xlink:href','#'+path.id);

    // add children to bee container
    //bee.appendChild(beeMotion);
    //beeMotion.appendChild(beeMpath);

    //console.log(bee);
    beeContainer2.appendChild(bee);

    // push bee ID into an array for later looping
    bees.push(beeID);
  }

  // for some reason the animation will not start unless I
  // wipe the group and re add all the elements????
  cloneContainer = beeContainer.html();
  beeContainer.html('');
  beeContainer.html(cloneContainer);
});


function createBeeDot() {
  // for each bee...

  const beeCount = bees.length;
  //console.log(beeCount);
  // place a bee on each path, random location and start point
  $('.bee-motion').each(function(){
    //const beeID = bees[i];
    const bee = $(this);

    var parentPos = beeSvg.offset();
    var dot = {
      top: bee.offset().top - parentPos.top+7,
      left: bee.offset().left - parentPos.left+7,
      alpha: 1
    }

    dotContainer = document.querySelector('.js-bee-banner');
    var svg = "http://www.w3.org/2000/svg";
    var circle = document.createElement('div');
    // circle.css({
    //   'top':dot.top,
    //   'left':dot.left
    // });
    circle.setAttribute('style','top:'+dot.top+'px; left:'+dot.left+'px;');
    circle.setAttribute('r',2);
    circle.setAttribute('fill','#ffffff');
    circle.setAttribute('class','bee-dot');
    dotContainer.appendChild(circle);
    //replace with on animation end to remove
    setTimeout(function(){
      circle.remove();
    },4000);
  });
    //
    //
    //
    //
    // const beeID = bees[i];
    // const bee = $('#'+beeID);
    //
    // var parentPos = beeSvg.offset();
    // var dot = {
    //   top: bee.offset().top - parentPos.top,
    //   left: bee.offset().left - parentPos.left,
    //   alpha: 1
    // }
    //
    // bee.attr({
    //   'fill':'#f00f00'
    // });
    //
    // dotContainer = document.querySelector('.js-bee-trails');
    // var svg = "http://www.w3.org/2000/svg";
    // var circle = document.createElementNS('http://www.w3.org/2000/svg','circle');
    // circle.setAttribute('cx',dot.left+10);
    // circle.setAttribute('cy',dot.top+10);
    // circle.setAttribute('r',2);
    // circle.setAttribute('fill','#ffffff');
    // circle.setAttribute('class','bee-dot');
    //
    // dotContainer.appendChild(circle);
    // //replace with on animation end to remove
    // setTimeout(function(){
    //   //dotContainer.removeChild(circle);
    // },4000);

    //circle.on


    // circle.one("webkitAnimationEnd oanimationend msAnimationEnd animationend",function(e){
    //   this.remove();
    //   console.log('remove');
    // });

  //}
}


// --------------------
// Repeat functions

let increment = 0;

function animate() {
  requestAnimationFrame(animate);

  increment++;
  if (increment >= 30) {
    createBeeDot();
    increment = 0;
  }
}






// ---
// PRIMARY FUNCTIONS

// Request Animation Frame Function
(function() {
    var lastTime = 0;
    var vendors = ['webkit', 'moz'];
    for(var x = 0; x < vendors.length && !window.requestAnimationFrame; ++x) {
        window.requestAnimationFrame = window[vendors[x]+'RequestAnimationFrame'];
        window.cancelAnimationFrame =
            window[vendors[x]+'CancelAnimationFrame'] || window[vendors[x]+'CancelRequestAnimationFrame'];
    }

    if (!window.requestAnimationFrame)
        window.requestAnimationFrame = function(callback, element) {
            var currTime = new Date().getTime();
            var timeToCall = Math.max(0, 16 - (currTime - lastTime));
            var id = window.setTimeout(function() { callback(currTime + timeToCall); },
                timeToCall);
            lastTime = currTime + timeToCall;
            return id;
        };

    if (!window.cancelAnimationFrame)
        window.cancelAnimationFrame = function(id) {
            clearTimeout(id);
        };
}());
