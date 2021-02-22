const tl = gsap.timeline();
const tween = gsap.to('.nav-drawer', {
    duration: 0.35,
    x: '200px',
    paused: true
});

let count = 0;
const hamburgers = document.querySelectorAll('.hamburger');
hamburgers.forEach((hamburger, hamburger_idx) => {
  
  const animate_nav_drawer = () => {
    console.log('clicked hamburger ', count);
    if (count % 2 === 0) {
      console.log('play');
      tween.play();
    } else {
      console.log('reverse');
      tween.reverse();
      // tween.restart();
    }
    count++;
  };
 
  const animate_hamburger_lines = () => {

    console.log(`hamburger ${hamburger_idx}`);

    tl.restart();

    let y_dx = null;
    if (hamburger_idx === 0)      { y_dx = 11; } // Mobile hamburger
    else if (hamburger_idx === 1) { y_dx = 15;} // Desktop hamburger

    tl.to('.line-1', {
        duration: 0.25,
        y: +y_dx,
        ease: Strong.easeInOut
      }, 0
    );
    tl.to('.line-3', {
        duration: 0.25,
        y: -y_dx,
        ease: Strong.easeInOut
      }, 0
    );

    tl.to('line', {
        duration: 0.25,
        rotation: 360,
        transformOrigin:"50% 50%",
        ease: Strong.easeInOut
      }, 0.25
    );

    tl.to('.line-1', {
        duration: 0.25,
        y: 0,
        ease: Strong.easeInOut
      }, 0.5
    );
    tl.to('.line-3', {
        duration: 0.25,
        y: 0,
        ease: Strong.easeInOut
      }, 0.5
    );
  };


  hamburger.addEventListener('click', animate_nav_drawer);
  hamburger.addEventListener('click', animate_hamburger_lines);
});