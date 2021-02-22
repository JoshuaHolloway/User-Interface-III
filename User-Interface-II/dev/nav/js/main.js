const tl = gsap.timeline();
const tween = gsap.to('.nav-drawer', {
    duration: 0.35,
    x: '200px',
    paused: true
});

let count = 0;
const hamburgers = document.querySelectorAll('.hamburger');
hamburgers.forEach(hamburger => {
  
  hamburger.onclick = () => {
    if (count % 2 === 0) {
      console.log('play');
      tween.play();
    } else {
      console.log('reverse');
      tween.reverse();
      // tween.restart();
    }

    console.log('clicked hamburger ', count);

    tl.restart();

    const play_line1 = ((tl) => {
      tl.to('.play-1 .line-1', {
          duration: 0.25,
          y: +11,
          ease: Strong.easeInOut
        }, 0
      );
      tl.to('.play-1 .line-3', {
          duration: 0.25,
          y: -11,
          ease: Strong.easeInOut
        }, 0
      );

      tl.to('.play-1 line', {
          duration: 0.25,
          rotation: 360,
          transformOrigin:"50% 50%",
          ease: Strong.easeInOut
        }, 0.25
      );

      tl.to('.play-1 .line-1', {
          duration: 0.25,
          y: 0,
          ease: Strong.easeInOut
        }, 0.5
      );
      tl.to('.play-1 .line-3', {
          duration: 0.25,
          y: 0,
          ease: Strong.easeInOut
        }, 0.5
      );
    })(tl);

    const play_line2 = ((tl) => {
      tl.to('.play-2 .line-1', {
          duration: 0.25,
          y: +15,
          ease: Strong.easeInOut
        }, 0
      );
      tl.to('.play-2 .line-3', {
          duration: 0.25,
          y: -15,
          ease: Strong.easeInOut
        }, 0
      );

      tl.to('.play-2 line', {
          duration: 0.25,
          rotation: 360,
          transformOrigin:"50% 50%",
          ease: Strong.easeInOut
        }, 0.25
      );

      tl.to('.play-2 .line-1', {
          duration: 0.25,
          y: 0,
          ease: Strong.easeInOut
        }, 0.5
      );
      tl.to('.play-2 .line-3', {
          duration: 0.25,
          y: 0,
          ease: Strong.easeInOut
        }, 0.5
      );
    })(tl);

    count++;
  };
});