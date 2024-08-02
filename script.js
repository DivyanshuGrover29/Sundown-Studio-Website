//Locomotiver js for smooth scrolling in website
const scroll = new LocomotiveScroll({
    el: document.querySelector('#main'),
    smooth: true
});

var elem = document.querySelector(".elem-container");
var fixed = document.querySelector(".fixed-image");
elem.addEventListener("mouseenter" , function(){ 
    fixed.style.display = "block";
})
//block show na ho
elem.addEventListener("mouseleave" , function(){ 
    fixed.style.display = "none";
})


//To add image in all elements
var elemss = document.querySelectorAll(".elem");
elemss.forEach(function(e){
    e.addEventListener("mouseenter" , function(){
        var image = e.getAttribute("data-image");
        fixed.style.backgroundImage = `url(${image})`;
    })
})

//For swiper part
function swiperAnimation(){
var swiper = new Swiper(".mySwiper", {
    slidesPerView: "auto",
    centeredSlides: true,
    spaceBetween: 100,
  });
}

//Function Call
swiperAnimation();


//For responsive website 
var menu=document.querySelector("#nav h3");
var full =document.querySelector("#full-scr");
var navimage = document.querySelector("#nav img")
var flag=0;
menu.addEventListener("click" , function(){
    if(flag == 0){
     full.style.top = 0;
     navimage.style.opacity = 0;
     flag = 1;
   }else{
     full.style.top = "-100%";
     navimage.style.opacity = 1;
     flag = 0;
   }
 })


 function loaderAnimation() {
  var loader = document.querySelector("#loader");
  setTimeout(function () {
      loader.style.top = "-100%";
  }, 4200)
}

//Funtion call
loaderAnimation();