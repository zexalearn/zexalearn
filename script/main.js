"use strict";

setTimeout(()=>{
  window.scrollTo(0, 0);
},500);


const setall = ()=>{
  document.getElementById("loading").style.visibility = "hidden";
}

const settwo = ()=>{
  document.body.style.overflow = "auto";
}
setTimeout(() => {
  gsap.timeline()
    .to("#loading", { opacity: 0, duration: 0.8, scale: 0, y: -1200,onComplete:setall })
    .from("#navbar", { opacity: 0, y: -50, duration: 0.8 })
    .from("#img", { opacity: 0, scale: 0.5,x:-100, duration: 0.6 })
    .from("#sub", { opacity: 0, x: -80, duration: 0.8 },"-=0.4")
    .from("#title", { opacity: 0, x: -80, duration: 0.8 },"-=0.4")
    .from("#subtitle", { opacity: 0, x: -80,duration: 0.8 ,onComplete:settwo},"-=0.4");
  
}, 2500);



document.getElementById("intro-video").addEventListener("click", () => {
  console.log("working");
  location.assign('https://www.youtube.com/channel/UCjv5QR-d8m3C9PlWCTIuRYA/videos');
}, false);



ScrollOut({
  targets: 'h2,#social-icons,.team-card',
})



let mybutton = document.getElementById("top-scroll");
window.onscroll = function () { scrollFunction() };
function scrollFunction() {
  if (document.body.scrollTop > 20 || document.documentElement.scrollTop > 20) {
    mybutton.style.display = "block";
  } else {
    mybutton.style.display = "none";
  }
}

function topFunction() {
  document.body.scrollTop = 0;
  document.documentElement.scrollTop = 0;
}


(function () {

  var doc = document.documentElement;
  var w = window;
  var prevScroll = w.scrollY || doc.scrollTop;
  var curScroll;
  var direction = 0;
  var prevDirection = 0;
  var header = document.getElementById('navbar');
  var checkScroll = function () {

    curScroll = w.scrollY || doc.scrollTop;
    if (curScroll > prevScroll) {
      direction = 2;
    }
    else if (curScroll < prevScroll) {
      direction = 1;
    }

    if (direction !== prevDirection) {
      toggleHeader(direction, curScroll);
    }

    prevScroll = curScroll;
  };

  var toggleHeader = function (direction, curScroll) {
    if (direction === 2 && curScroll > 52) {
      header.classList.add('hide');
      prevDirection = direction;
    }
    else if (direction === 1) {
      header.classList.remove('hide');
      prevDirection = direction;
    }
  };
  window.addEventListener('scroll', checkScroll);
})();


var prefixes = ["webkit", "moz", "ms", ""];
function prefixedEvent(element, type, callback) {
  for (var p = 0; p < prefixes.length; p++) {
    if (!prefixes[p]) type = type.toLowerCase();
    element.addEventListener(prefixes[p] + type, callback, false);
  }
}

function transform($e, x, y, scale, rotation, percent) {
  x = x || 0; y = y || 0; scale = scale || 1;
  let unit = percent ? '%' : 'px';
  rotation = rotation || 0;

  transfromString = 'translate(' + x + unit + ', ' + y + unit + ') '
    + 'scale(' + scale + ') '
    + 'rotate(' + rotation + 'deg)';

  $e.style.webkitTransform = transfromString;
  $e.style.MozTransform = transfromString;
  $e.style.transform = transfromString;
}

function createParticle(x, y, scale) {
  var $particle = document.createElement('i');
  var $sparcle = document.createElement('i');

  $particle.className = 'particle';
  $sparcle.className = 'sparcle';

  transform($particle, x, y, scale);
  $particle.appendChild($sparcle);

  return $particle;
}

function explode($container) {
  var particles = [];

  particles.push(createParticle(0, 0, 1));
  particles.push(createParticle(50, -15, 0.4));
  particles.push(createParticle(50, -105, 0.2));
  particles.push(createParticle(-10, -60, 0.8));
  particles.push(createParticle(-10, 60, 0.4));
  particles.push(createParticle(-50, -60, 0.2));
  particles.push(createParticle(-50, -15, 0.75));
  particles.push(createParticle(-100, -15, 0.4));
  particles.push(createParticle(-100, -15, 0.2));
  particles.push(createParticle(-100, -115, 0.2));
  particles.push(createParticle(80, -15, 0.1));

  particles.forEach(function (particle) {
    $container.appendChild(particle);
    prefixedEvent(particle, "AnimationEnd", function () {
      var self = this;
      setTimeout(function () {
        requestAnimationFrame(function () {
          $container.removeChild(self);
        });
      }, 100);
    });
  });

}

function exolpodeGroup(x, y, trans) {
  var $container = document.createElement('div');

  $container.className = 'container';
  $container.style.top = y + 'px';
  $container.style.left = x + 'px';
  transform($container, trans.x, trans.y, trans.scale, trans.r, true);
  explode($container);
  return $container;
}

function sparcle(event) {
  var explosions = [];

  explosions.push(exolpodeGroup(event.pageX, event.pageY, { scale: 1, x: -50, y: -50, r: 0 }));
  explosions.push(exolpodeGroup(event.pageX, event.pageY, { scale: .5, x: -30, y: -50, r: 180 }));
  explosions.push(exolpodeGroup(event.pageX, event.pageY, { scale: .5, x: -50, y: -20, r: -90 }));

  requestAnimationFrame(function () {
    explosions.forEach(function (boum, i) {
      setTimeout(function () {
        document.body.appendChild(boum);
        setTimeout(() => {
          document.body.removeChild(document.body.lastElementChild);
        }, 500)
      }, i * 100);
    });
  });
}

var interactionEvent = 'click';
if ('ontouchstart' in document.documentElement) {
  interactionEvent = 'touchstart';
}

document.addEventListener(interactionEvent, sparcle);