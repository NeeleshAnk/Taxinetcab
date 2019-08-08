function openNav() {
  document.getElementById("menu-btn").style.display = "none";
  document.getElementById("close-btn").style.display = "initial";
  document.getElementById("mySidenav").classList.add("sidenav_open");
  document.getElementById("mySidenav").style.opacity = 1;
}

function closeNav() {
  document.getElementById("menu-btn").style.display = "initial";
  document.getElementById("close-btn").style.display = "none";
  document.getElementById("mySidenav").classList.remove("sidenav_open");
  document.getElementById("mySidenav").style.opacity = 0;
}
window.onscroll = function() {myFunction()};

var header = document.getElementById('header');

function myFunction() {
  if (window.pageYOffset > 80) {
    header.classList.add("header-border-scroll");
  } else {
    header.classList.remove("header-border-scroll");
  }
}
function scrollwin() {
   window.scrollBy(0, 600);
}
function show() {
  var show = document.getElementById('link-btn');
  show.style.opacity = 1;
  show.style.display = "block";
}


var animateHTML = function() {
  var elems;
  var windowHeight;
  function init() {
    elems = document.querySelectorAll('.skewed-section');
    windowHeight = window.innerHeight;
    addEventHandlers();
    checkPosition();
  }

  function addEventHandlers() {
    window.addEventListener('scroll', checkPosition);
    window.addEventListener('resize', init);
  }
  function checkPosition() {
    for (var i = 0; i < elems.length; i++) {
      var positionFromTop = elems[i].getBoundingClientRect().top + 200;
      if (positionFromTop - windowHeight <= 0) {
        elems[i].classList.add('showme');
      }
    }
  }
  return {
    init: init
  };
};
animateHTML().init();
