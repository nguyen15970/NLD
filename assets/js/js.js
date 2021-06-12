window.onscroll = function() {scrollFunction()};

function scrollFunction() {
  if (document.body.scrollTop > 20 || document.documentElement.scrollTop > 20) {
    document.querySelector("header-menu").style.top = "0";
    document.querySelector("header-menu").style.position = "flex";

  } else {
    document.querySelector("header-menu").style.top = "0";
    
    document.querySelector("header-menu").style.position = "flex";
  }
}