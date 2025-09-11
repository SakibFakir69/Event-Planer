
// // use dry , ssot , oop 
// import { gsap } from "gsap";



// import { ScrambleTextPlugin } from "gsap/ScrambleTextPlugin";
// import { ScrollTrigger } from "gsap/ScrollTrigger";
// // ScrollSmoother requires ScrollTrigger
// import { ScrollSmoother } from "gsap/ScrollSmoother";
// import { ScrollToPlugin } from "gsap/ScrollToPlugin";
// import { SplitText } from "gsap/SplitText";
// import { TextPlugin } from "gsap/TextPlugin";

$(document).ready(function () {

  console.log("loaded");



  // img slider 
  const swiper = new Swiper('.swiper', {
    // Optional parameters
    direction: 'horizontal',
    loop: true,
    centeredSlides: true,

    // If we need pagination
    pagination: {
      el: '.swiper-pagination',
    },


    // Navigation arrows
    navigation: {
      nextEl: '.swiper-button-next',
      prevEl: '.swiper-button-prev',
    },


  });





  // animation 
  //replaces yourElement's text with "This is the new text" 
  const textHead = ('#text-head');
  gsap.to(textHead, {
    duration: 2,
    text: "✨ Plan Your Events, Stress-Free",
    ease: "none",
  });

  gsap.fromTo('#text-description', {

    opacity: 0.4,
    duration: 2,
    scale: 0.8,


  }, {
    scale: 1,

    opacity: 1,
    duration: 2,
    delay: 0.4,
  })
  // head-img


  gsap.to("#head-img", {

    x: window.innerWidth,
    duration: 4,
    ease: "power1.inOut",
    scale: 0.8,
    scrollTrigger: {
      trigger: "#head-text",
      start: "top cennter",
      end: "bottom center",
      scrub: true,
    

    }

  })
  // card box 

  const cardBox = ('#card-box .p-6');
  console.log(cardBox);

  gsap.utils.toArray(cardBox).forEach((card, key) => {
    console.log(card, key);

    gsap.to(card, {



      scrollTrigger: {
        trigger: card,
        start: "top top",

        pin: true,
        scrub: true,
        

      }

    })

  })

  // mouse 
const mouse = document.getElementById("mouse");

document.body.addEventListener("mousemove", (e) => {
  const { clientX, clientY } = e;

  // Animate the mouse div smoothly
  gsap.to(mouse, {
    duration: 0.3,
    x: clientX,
    y: clientY,
    ease: "power2.out",
    
  });

  // Optional: Animate size/opacity
  gsap.to(mouse, {
    duration: 0.5,
    width: 50,
    height: 50,
    opacity: 1,
    ease: "power2.out"
  });
});






})