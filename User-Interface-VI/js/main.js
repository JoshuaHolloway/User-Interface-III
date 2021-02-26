let count = 0;
const is_even = (x) => (x % 2 === 0) ? true : false;

const dur1 = 0.5;

// offsetHeight includes margin, border, padding
const box_height = document.querySelector('.box-container').offsetHeight;

// const tl = gsap.timeline();
let tl;
const do_animation = (e) => {
  if (is_even(count)) {
    
    // tl.restart();
    tl = gsap.timeline();
    
    tl
    .to('.line-2',       {duration: dur1, opacity: 0, ease: Strong.easeInOut},  0)
    .to('.line-1',       {duration: dur1, y: 15, ease: Strong.easeInOut},       0)
    .to('.line-3',       {duration: dur1, y: -15, ease: Strong.easeInOut},      0)
    .to('.nav-drawer',   {duration: 1, xPercent: +100, ease: Strong.easeInOut}, 0)
    .to('.line-1', {
      duration: dur1, 
      transformOrigin: "50% 50%", 
      rotation: 45,
      ease: Strong.easeInOut
    }, dur1)
    .to('.line-3', {
      duration: dur1, 
      transformOrigin: "50% 50%", 
      rotation: -45,
      ease: Strong.easeInOut
    }, dur1)
    .to('.box',      {duration: dur1, y: -box_height, stagger: 0.3}, dur1);
  }
  else {
    // tl.reverse();
    tl
    .to('.line-1', {
      duration: dur1, 
      transformOrigin: "50% 50%", 
      rotation: 0,
      ease: Strong.easeInOut
    }, 3*dur1)
    .to('.line-3', {
      duration: dur1, 
      transformOrigin: "50% 50%", 
      rotation: 0,
      ease: Strong.easeInOut
    }, 3*dur1)
    .to('.box',        {duration: dur1, y: 0, stagger: {each: 0.3}, ease: Strong.easeInOut}, 3*dur1)
    .to('.line-2',     {duration: dur1, opacity: 1, ease: Strong.easeInOut},  4*dur1)
    .to('.line-1',     {duration: dur1, y: 0, ease: Strong.easeInOut},        4*dur1)
    .to('.line-3',     {duration: dur1, y: 0, ease: Strong.easeInOut},        4*dur1)
    .to('.nav-drawer', {duration: dur1, xPercent: 0, ease: Strong.easeInOut}, 4*dur1);
  }
  count++;
};
const button = document.querySelector('.hamburger');
button.addEventListener('click', do_animation);