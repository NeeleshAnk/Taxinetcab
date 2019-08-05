function openNav() {
  document.getElementById("menu-btn").style.display = "none";
  document.getElementById("close-btn").style.display = "initial";
  document.getElementById("mySidenav").classList.add("sidenav_open");
}

function closeNav() {
  document.getElementById("menu-btn").style.display = "initial";
  document.getElementById("close-btn").style.display = "none";
  document.getElementById("mySidenav").classList.remove("sidenav_open");
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
}
