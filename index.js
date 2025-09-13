




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

    opacity: 1,

    duration: 4,
    ease: "power1.inOut",
    scale: 0.8,
    scrollTrigger: {
      trigger: "#head-img",
      scrub: true
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

  // mouse  removed   








})