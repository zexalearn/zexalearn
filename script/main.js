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

var transfromString;
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


