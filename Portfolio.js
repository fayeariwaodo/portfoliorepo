$(document).ready(function () {
  $(window).scroll(function () {
    if (this.scrollY > 20) {
      $(".navbar").addClass("sticky");
    } else {
      $(".navbar").removeClass("sticky");
    }
    // if(this.scrollY > 500){
    //   $(".scroll-up-btn").addClass("show");

    // }else{
    //   $(".scroll-up-btn").removeClass("show");

    // }
  });

  // slide up script
  // $(".scroll-up-bttn").click(function(){
  //    $('html').animate({scrollTop: 0});
    // removing smooth scroll on slide-up button click
  //     $('html').css("scrollBehavior", "auto");
  // });

  // toggle menu/navbar Script
  $(".menu-btn").click(function () {
    $(".navbar .menu").toggleClass("active");
    $(".menu-btn i").toggleClass("active");
  });
  // Typying Scroll script
  var typed = new Typed(".typing", {
     strings:['Software Engineer', 'Content Creator', 'Digital Marketing', 'System Analyst', 'Freelancer', 'IT Support', 'Digital Programs'],
     stypeSpeed:100,
     backSpeed:60,
     loop:true
  });


  // Carousel Script
  $('.carousel').owlCarousel({
    margin:20,
    loop:true,
    autoplay:true,
    autoplayTimeout:2000,
    autoplayHoverPause:true,
    responsive:{
      0:{
        items:1,
        nav:false
      },
      600:{
        items:2,
        nav:false
      },
      1000:{
        items:3,
        nav:false
      }
    
    }
  });
});
