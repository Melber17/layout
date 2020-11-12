
$(document).ready(function() {
$('.slider').slick({
  
    centerPadding: '60px',

    responsive: [
      {
        breakpoint: 768,
        settings: {
          arrows: false,
         
          centerPadding: '40px',
        }
      },
      {
        breakpoint: 480,
        settings: {
          arrows: false,
        
          centerPadding: '40px',
        }
      }
    ]

});

wow = new WOW(
  {
  boxClass:     'wow',      
  animateClass: 'animated',
  offset:       0,         
  mobile:       true,       
  live:         true        
}
)
wow.init();
});
let slide = document.querySelector('.burger-menu')

document.querySelector('.menu-icon-wrapper').addEventListener('click', function (e) {
    e.preventDefault();
   
   slide.classList.toggle('open')
   if(slide.classList.contains('open')) {
       document.querySelector('.menu-close').addEventListener('click' , function(e) {
           e.preventDefault();
           slide.classList.remove('open')
           document.querySelector('.menu-icon').classList.remove('menu-icon-active');
       })
   }

})

if(window.outerHeight <= 830) {
    slide.classList.add('xs-screen')
}
window.addEventListener('resize' , function() {
    if(window.outerHeight <= 830) {
    slide.classList.add('xs-screen')
} else {
    slide.classList.remove('xs-screen')
}
})


window.addEventListener('scroll' , (scroll => {
    let scrollDistance = window.scrollY;
    let topMenu = document.querySelector('.top')
 if( scrollDistance => 100) {
  topMenu.classList.add('active')
}
 if(scrollDistance < 100) {
    topMenu.classList.remove('active')
}
}))
   
document.querySelector('.menu-icon-wrapper').onclick = function(){
    document.querySelector('.menu-icon').classList.toggle('menu-icon-active');
}
let firstBtn = document.querySelector('.choose__firstBtn')
let secondBtn = document.querySelector('.choose__secondBtn')
secondBtn.addEventListener('click' , function(e) {
 e.preventDefault()
 this.classList.add('active')
 if(this.classList.contains('active')) {
    firstBtn.classList.remove('active')
 }
})
firstBtn.addEventListener('click' , function(e) {
    e.preventDefault()
    this.classList.add('active')
    if(secondBtn.classList.contains('active')) {
        secondBtn.classList.remove('active')
    }
})