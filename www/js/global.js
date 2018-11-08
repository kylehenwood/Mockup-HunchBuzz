// generic functions

// Resize Delay Function
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

// Round half function
function roundHalf(num) {
    num = Math.round(num*2)/2;
    return num;
}
// Random Number function
function rand(from,to) {
    return Math.floor(Math.random()*(to-from+1)+from);
}
// Degrees to radians
function toRad(deg) {
    return deg * Math.PI/180;
}
// round 2
function getFloat(int) {
    var num = new Number(int);
    return parseFloat(num.toPrecision(2));
}