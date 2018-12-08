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
const trailFrequency = 30; // 60 frames per second

var dotArray = [];  // dots that appear behind each bee are pushed to this array

var beeSvg;
var beeContainer;

var beePaths;
var beePathArray = [];

$(document).ready(function(){
  beeSvg = $('.js-bee-svg');
  beePaths = $('.js-bee-path');
  beeContainer = document.querySelector('.js-bee-container');
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
    var animDuration = rand(beeSpeedMin,beeSpeedMax);
    var randStart = rand(1,10);
    var animStart = -animDuration*(randStart/10);

    const beeID = 'js-bee--'+i;

    var svg = "http://www.w3.org/2000/svg";
    var bee = document.createElement('div');
    bee.setAttribute('class','bee-motion');
    bee.setAttribute('transform','translate(-10,-10)');
    bee.setAttribute('style','offset-path: path("'+path.d+'"); animation-delay:'+animStart+'s; animation-duration:'+animDuration+'s;');

    var beeBody = document.createElement('div');
    beeBody.setAttribute('class','bee-buzz');

    // add children to bee container
    bee.appendChild(beeBody);

    //console.log(bee);
    beeContainer.appendChild(bee);
  }
});


function createBeeDot() {
  // for each bee...

  //console.log(beeCount);
  // place a bee on each path, random location and start point
  $('.bee-motion').each(function(){
    //const beeID = bees[i];
    const bee = $(this);
    const trail = {
      radius: 2,
      bee: 20,
      offset: (20-2)/2
    };
    var parentPos = beeSvg.offset();
    var dot = {
      top: bee.offset().top - parentPos.top+trail.offset,
      left: bee.offset().left - parentPos.left+trail.offset,
      alpha: 1
    }

    dotContainer = document.querySelector('.js-bee-banner');
    var circle = document.createElement('div');
    circle.setAttribute('style','top:'+dot.top+'px; left:'+dot.left+'px;');
    circle.setAttribute('r',dot.radius);
    circle.setAttribute('fill','#ffffff');
    circle.setAttribute('class','bee-dot');

    circle.addEventListener(animationEvent,function(event){
      circle.remove();
      //console.log('remove');
    });

    beeContainer.appendChild(circle);


    //replace with on animation end to remove... if it will ever work
    setTimeout(function(){
      circle.remove();
    },4000);
  });
}

// --------------------
// Repeat functions

let increment = 0;

function animate() {
  requestAnimationFrame(animate);

  increment++;
  if (increment >= trailFrequency) {
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
