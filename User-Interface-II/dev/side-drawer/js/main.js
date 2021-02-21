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
    count++;
  };
});