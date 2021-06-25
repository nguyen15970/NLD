
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
  var a= document.getElementById('seach').getAttribute("class")
  var y= a.lastIndexOf("active")

  if(!(y===-1)){
    x.classList.remove('active')
  }
  else{
    x.classList.add('active')
  }
}
// seach mobile
function seachFunctionMobile(){
  var x =document.getElementById("search-input-mb")
  var a= document.getElementById('search-input-mb').getAttribute("class")
  var y= a.lastIndexOf("active")

  if(!(y===-1)){
    x.classList.remove('active')
  }
  else{
    x.classList.add('active')
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






// slider detail.html

var  btnNext= document.querySelector(".button-next");
var  btnPrev= document.querySelector(".button-prev");
var slider = document.querySelectorAll('.box-category-dont-miss-info-item');
var l=0;
var bullet = document.querySelectorAll('.swiper-pagination-bullet')

btnNext.onclick = ()=>{
  l++;
  for(var i of slider){
    if(l==0) {i.style.left="0px";}
    if(l==1) {
      i.style.left="-280px";
      bullet[1].classList.add("swiper-pagination-bullet-active");
      bullet[0].classList.remove("swiper-pagination-bullet-active");
      btnPrev.classList.add("button-active")
    }
    if(l==2) {i.style.left="-550px";
      bullet[2].classList.add("swiper-pagination-bullet-active");
      bullet[1].classList.remove("swiper-pagination-bullet-active");
    }
    if(l==3) {
      i.style.left="-820px";
      bullet[3].classList.add("swiper-pagination-bullet-active");
      bullet[2].classList.remove("swiper-pagination-bullet-active");
    }
    if(l==4) {
      i.style.left="-1090px";
      bullet[4].classList.add("swiper-pagination-bullet-active");
      bullet[3].classList.remove("swiper-pagination-bullet-active");
    }
    if(l==5) {
      i.style.left="-1360px";
      bullet[5].classList.add("swiper-pagination-bullet-active");
      bullet[4].classList.remove("swiper-pagination-bullet-active");
    }
    if(l==6) {
      i.style.left="-1630px";
      bullet[6].classList.add("swiper-pagination-bullet-active");
      bullet[5].classList.remove("swiper-pagination-bullet-active");
    }
    if(l==7) {
      i.style.left="-1900px";
      bullet[7].classList.add("swiper-pagination-bullet-active");
      bullet[6].classList.remove("swiper-pagination-bullet-active");
    }
    if(l==8) {
      i.style.left="-2170px";
      bullet[8].classList.add("swiper-pagination-bullet-active");
      bullet[7].classList.remove("swiper-pagination-bullet-active");
      btnNext.classList.remove("button-active")
    }

    if(l>8) {i=8}
  }
}


btnPrev.onclick = ()=>{
  l--;
  for(var i of slider){
      	if(l==0) {
          i.style.left="0px";
          bullet[0].classList.add("swiper-pagination-bullet-active");
          bullet[1].classList.remove("swiper-pagination-bullet-active");
          btnPrev.classList.remove("button-active")
        }
				if(l==1) {
          i.style.left="-280px";
          bullet[1].classList.add("swiper-pagination-bullet-active");
          bullet[2].classList.remove("swiper-pagination-bullet-active");
        }
				if(l==2) {
          i.style.left="-550px";
          bullet[2].classList.add("swiper-pagination-bullet-active");
          bullet[3].classList.remove("swiper-pagination-bullet-active");
        }
				if(l==3) {
          i.style.left="-820px";
          bullet[3].classList.add("swiper-pagination-bullet-active");
          bullet[4].classList.remove("swiper-pagination-bullet-active");
        }
				if(l==4) {
          i.style.left="-1090px";
          bullet[4].classList.add("swiper-pagination-bullet-active");
          bullet[5].classList.remove("swiper-pagination-bullet-active");
          }
				if(l==5) {
          i.style.left="-1360px";
          bullet[5].classList.add("swiper-pagination-bullet-active");
          bullet[6].classList.remove("swiper-pagination-bullet-active");
          }
				if(l==6) {
          i.style.left="-1630px";
          bullet[6].classList.add("swiper-pagination-bullet-active");
          bullet[7].classList.remove("swiper-pagination-bullet-active");
        }
				if(l==7) {
          i.style.left="-1900px";
          bullet[7].classList.add("swiper-pagination-bullet-active");
          bullet[8].classList.remove("swiper-pagination-bullet-active");
          btnNext.classList.add("button-active")
        }
        if(l==8) {
          i.style.left="-2170px";
        }
        if(l<0) {i=0;}
  }
}

// audio
var audio= document.getElementsByClassName("detail-share-micro-img");
var audioStar=document.getElementById("audio-link");
function Startaudio(){
    document.querySelector(".detail-share-micro").setAttribute('style','display:none;')
    document.querySelector(".detail-icon").setAttribute('style','justify-content: flex-end;')
    document.querySelector(".audio").setAttribute('style','display:block !important')
    audioStar.play();

}
function stopAudio(){
  audioStar.pause();
}




