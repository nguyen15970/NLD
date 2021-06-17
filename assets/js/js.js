    // header
window.onscroll = function() {myFunction()};
var header = document.getElementById("myHeader");
var sticky = header.offsetTop;
var mybutton = document.getElementById("myBtn");


function myFunction() {
    // menu-header
  if (window.pageYOffset > sticky) {
    header.classList.add("sticky");
  } else {
    header.classList.remove("sticky");
  }
  //button back to top
  if (document.body.scrollTop > 200 || document.documentElement.scrollTop > 200) {
    mybutton.style.display = "block";
  } else {
    mybutton.style.display = "none";
  }


}
function topFunction() {
  document.body.scrollTop = 0;
  document.documentElement.scrollTop = 0;
}


// seach
function seachFunction(){
  var x =document.getElementById("seach")
  var a= document.querySelector('input').getAttribute("class")
  var y= a.lastIndexOf("active")

  if(!(y===-1)){
    x.classList.remove('active')
  }
  else{
    x.classList.add('active')
  }
}

function stopSeach() {
  var element = document.getElementById("seach");
  element.classList.remove("active");
}
// 
function  closeInput(){
  var x= document.querySelector('input').getAttribute("class")
  var y= x.lastIndexOf("active")
  if(!(y===-1)){
    var element = document.getElementById("seach");
    element.classList.remove("active");
}
}

// tab content
function tabContentNews(){
  var element1 = document.querySelector(".scroll1")
  var element2 = document.querySelector(".scroll2")

  var element3=document.querySelector(".tab-item2")
  var elemenr4=document.querySelector(".tab-item1")

  var elment5= document.querySelector("#border1")
  var elment6= document.querySelector("#border2")


  element1.setAttribute("style","display:none;")
  element2.setAttribute("style","display:block !important;")
  element3.classList.add("tab-item2-active")
  elemenr4.classList.remove("tab-item1-active")
  elment5.setAttribute("style","display:block;")
  elment6.setAttribute("style","display:none")
}
function tabContentHot(){
  var element1 = document.querySelector(".scroll1")
  var element2 = document.querySelector(".scroll2")
  var element3=document.querySelector(".tab-item2")
  var elemenr4=document.querySelector(".tab-item1")

  var elment5= document.querySelector("#border1")
  var elment6= document.querySelector("#border2")

  element1.setAttribute("style","display:block;")
  element2.setAttribute("style","display:none;")
  element3.classList.remove("tab-item2-active");
  elemenr4.classList.add("tab-item1-active")

  elment5.setAttribute("style","display:none")
  elment6.setAttribute("style","display:block")
}