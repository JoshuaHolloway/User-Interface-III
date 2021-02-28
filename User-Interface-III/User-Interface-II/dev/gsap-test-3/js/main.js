let count = 0;
const is_even = (x) => (x % 2 === 0) ? true : false;

const dur1 = 0.5;

// const tl = gsap.timeline();
let tl;
const do_animation = (e) => {
  if (is_even(count)) {
    
    // tl.restart();
    tl = gsap.timeline();
    
    tl
    .to('.line-2',       {duration: dur1, opacity: 0},  0)
    .to('.line-1',       {duration: dur1, y: 15},       0)
    .to('.line-3',       {duration: dur1, y: -15},      0)
    .to('.nav-drawer',   {duration: 1, xPercent: +100}, 0)
    .to('.line-1', {
      duration: dur1, 
      transformOrigin: "50% 50%", 
      rotation: 45}, dur1)
      .to('.line-3', {
        duration: dur1, 
        transformOrigin: "50% 50%", 
        rotation: -45}, dur1)
        .to('.box',          {duration: dur1, yPercent: -100}, dur1);
        
        
      }
      else {
        // tl.reverse();
        
        tl
        .to('.line-1', {
          duration: dur1, 
          transformOrigin: "50% 50%", 
          rotation: 0}, 2*dur1)
          .to('.line-3', {
            duration: dur1, 
            transformOrigin: "50% 50%", 
            rotation: 0}, 2*dur1)
    .to('.box',        {duration: dur1, yPercent: 0}, 2*dur1)
    .to('.line-2',     {duration: dur1, opacity: 1},  3*dur1)
    .to('.line-1',     {duration: dur1, y: 0},        3*dur1)
    .to('.line-3',     {duration: dur1, y: 0},        3*dur1)
    .to('.nav-drawer', {duration: dur1, xPercent: 0}, 3*dur1);
  }
  count++;
};
const button = document.querySelector('.hamburger');
button.addEventListener('click', do_animation);