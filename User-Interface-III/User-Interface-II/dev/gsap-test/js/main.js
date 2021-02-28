let count = 0;
const is_even = (x) => {
  if (x % 2 === 0)
    return true;
  else
    return false;
};

const tl = gsap.timeline();
const do_animation = () => {
  if (is_even(count)) {

    tl.restart();

    tl
    .to('.line-2',       {duration: 1, opacity: 0}, 0)
    .to('.line-1',       {duration: 1, y: 15},      0)
    .to('.line-3',       {duration: 1, y: -15},     0)
    .to('.line-1', {
      duration: 1, 
      transformOrigin: "50% 50%", 
      rotation: 45}, 1
    )
    .to('.line-3', {
      duration: 1, 
      transformOrigin: "50% 50%", 
      rotation: -45}, 1
    )
    .to('.nav-drawer', {duration: 1, xPercent: +100})
    .to('.box',        {duration: 1, yPercent: -100});
  }
  else {
    // tl.reverse();
    
    tl
    .to('.line-1', {
      duration: 1, 
      transformOrigin: "50% 50%", 
      rotation: 0}, 4
    )
    .to('.line-3', {
      duration: 1, 
      transformOrigin: "50% 50%", 
      rotation: 0}, 4
    )
    .to('.line-2',     {duration: 1, opacity: 1},  5)
    .to('.line-1',     {duration: 1, y: 0},        5)
    .to('.line-3',     {duration: 1, y: 0},        5)
    .to('.box',        {duration: 1, yPercent: 0},  )
    .to('.nav-drawer', {duration: 1, xPercent: 0},  );
  }
  count++;
};

const button = document.querySelector('.hamburger', do_animation);
button.addEventListener('click', do_animation);