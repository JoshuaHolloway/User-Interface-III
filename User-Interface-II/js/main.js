const qs = target => document.querySelector(target);
const tl = gsap.timeline();

let count = 0;
qs('.hamburger').addEventListener('click', () => {
  console.log('clicked hamburger ', count++);

  tl.restart();

  tl.to('.line-1', {
      duration: 0.25,
      y: +15,
      ease: Strong.easeInOut
    }, 0
  );
  tl.to('.line-3', {
      duration: 0.25,
      y: -15,
      ease: Strong.easeInOut
    }, 0
  );

  tl.to('line', {
      duration: 0.25,
      rotation: 360,
      transformOrigin:"50% 50%",
      ease: Strong.easeInOut
    }
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
});