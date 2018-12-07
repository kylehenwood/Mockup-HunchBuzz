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
let beeCanvas = {
  id: null,
  ctx: null,
  width: null,
  height: null,
};

var dotArray = [];  // dots that appear behind each bee are pushed to this array

var beeSvg;
var beeContainer;
var dotContainer;
var beePaths;
var beePathArray = [];
var beeElem;
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
      //length: elem.getTotalLength()
    }
    beePathArray.push(path);
  });

  // ---
  // Canvas setup
  canvasInitalize();
  // Start looping
  canvasAnimate();

  $(window).resize(function(){
    waitForFinalEvent(function () {
      canvasInitalize();
    }, 200);
  });

  // ---
  // Startup
  beeElem = $('.js-bee');
  beeElem.hide();
  const pathCount = beePathArray.length;

  // place a bee on each path, random location and start point
  for (i = 0; i < pathCount; i++) {
    // select path
    path = beePathArray[i];

    var beeContainer2 = document.querySelector('.js-bee-container');
    var animDuration = rand(beeSpeedMin,beeSpeedMax);
    var randStart = rand(1,10);
    var animStart = -animDuration*(randStart/10);

    // var beeHtml = ''+
    // '<rect id="js-bee--'+i+'" x="10" y="10" width="16" height="16" fill="#0D47A1" transform="translate(-8,-8)">' +
    // '<animateMotion dur="'+animDuration+'s" begin="'+animStart+'" repeatCount="indefinite" rotate="auto">' +
    // '<mpath xlink:href="#'+path.id+'"></mpath>' +
    // '</animateMotion>' +
    // '</rect>';
    //
    // beeContainer.append(beeHtml);


    var svg = "http://www.w3.org/2000/svg";
    var bee = document.createElementNS('http://www.w3.org/2000/svg','rect');
    bee.setAttribute('id','js-bee--'+i);
    bee.setAttribute('x',0);
    bee.setAttribute('y',0);
    bee.setAttribute('width',16);
    bee.setAttribute('height',16);
    bee.setAttribute('fill','#0D47A1');
    bee.setAttribute('transform','translate(-8,-8)');

    var beeMotion = document.createElementNS(svg,'animateMotion');
    beeMotion.setAttribute('dur',animDuration);
    beeMotion.setAttribute('begin',animStart);
    beeMotion.setAttribute('repeatCount','indefinite');
    beeMotion.setAttribute('rotate','auto');

    var beeMpath = document.createElementNS(svg,'mpath');
    beeMpath.setAttribute('xlink:href','#'+path.id);

    // add children to bee container
    bee.appendChild(beeMotion);
    beeMotion.appendChild(beeMpath);

    console.log(bee);
    beeContainer2.appendChild(bee);


    const beeID = $('#js-bee--'+i);
    bees.push(beeID);
  }

  // for some reason the bees dont show untill the entire group is wiped and re-added - probably something
  // to do with their already being an animation in progress??? nope - im using the wrong method of adding elements to SVG
  cloneContainer = beeContainer.html();
  beeContainer.html('');
  beeContainer.html(cloneContainer);
});


function createBeeDot() {
  const bee = $('#js-bee--0');
  //const beetop = bee.offset().top;
  var parentPos = beeSvg.offset();
  var dot = {
    top: bee.offset().top - parentPos.top,
    left: bee.offset().left - parentPos.left,
    alpha: 1
  }

  // this is being called far too frequently
  //console.log(dot);
  //dotArray.push(dot)


  bee.attr({
    'fill':'#f00f00'
  });

  dotContainer = document.querySelector('.js-bee-trails');
  var svg = "http://www.w3.org/2000/svg";
  var circle = document.createElementNS('http://www.w3.org/2000/svg','circle');
  circle.setAttribute('cx',dot.left+8);
  circle.setAttribute('cy',dot.top+8);
  circle.setAttribute('r',4);
  circle.setAttribute('fill','#ffffff');
  circle.setAttribute('class','bee-dot');


  dotContainer.appendChild(circle);

  setTimeout(function(){
    circle.remove();
  },2000);
}


// --------------------
// Canvas Functions

function canvasInitalize() {
  // Setup
  beeCanvas.id = $('.js-bee-canvas');
  beeCanvas.ctx = beeCanvas.id[0].getContext("2d");
  beeCanvas.width = beeCanvas.id.parent().width();
  beeCanvas.height = beeCanvas.id.parent().height();
  // set attributes on element
  beeCanvas.id.attr({
    'width': beeCanvas.width,
    'height': beeCanvas.height
  });
}


let increment = 0;

function canvasAnimate() {
  // Clear all
  requestAnimationFrame(canvasAnimate);
  clearCanvas(beeCanvas);

  let context = beeCanvas.ctx;
  let dotCount = dotArray.length;

  //console.log(dotCount);

  // place a bee on each path, random location and start point
  for (i = 0; i < dotCount; i++) {
    //var dot = dotArray[i];

    // var svg = "http://www.w3.org/2000/svg";
    // var circle = document.createElementNS('http://www.w3.org/2000/svg','circle');
    // circle.setAttribute('cx',dot.left);
    // circle.setAttribute('cy',dot.top+80);
    // circle.setAttribute('r',4);
    // circle.setAttribute('fill',''#ffffff');
    //
    // //var dotHtml = '<circle cx="'+dot.left+'" cy="'+dot.top-80+'" r="4" fill="#ffffff"/>';
    // dotContainer.appendChild(circle);

    //console.log(dot.alpha);
    // fade out over X frames (60fps);
    // fade out over 120frames = 1 -> 0 in 120 frames
    // 1/120 = 0.00833333333;
    // if (dot.alpha <= 0.05) {
    //   dotArray.splice(i,0);
    // } else {
    //   dot.alpha -= 0.005;
    //   context.beginPath();
    //   context.fillRect(dot.left+8, dot.top-80+8, 10, 10);
    //   context.closePath();
    //   context.fillStyle = 'rgba(0,0,0,'+dot.alpha+')';
    // }
  }

  increment++;
  if (increment >= 60) {
    createBeeDot();
    //console.log('DOT');
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

// Clear canvas function
function clearCanvas(canvas) {
    canvas.ctx.clearRect(0, 0, canvas.width, canvas.height);
}

// Resize delay function
var waitForFinalEvent = (function () {
  var timers = {};
  return function (callback, ms, uniqueId) {
    if (!uniqueId) {
      uniqueId = "Don't call this twice without a uniqueId";
    }
    if (timers[uniqueId]) {
      clearTimeout(timers[uniqueId]);
    }
    timers[uniqueId] = setTimeout(callback, ms);
  };
})();
