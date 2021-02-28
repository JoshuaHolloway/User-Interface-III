const tl = gsap.timeline();
const tl_side_drawer = gsap.timeline();
// const tween = gsap.to('.nav-drawer', {
//     duration: 0.5,
//     x: '200px',
//     paused: true
// });

let count = 0;
const hamburgers = document.querySelectorAll('._hamburger');
hamburgers.forEach((hamburger, hamburger_idx) => {
  
  const animate_nav_drawer = () => {
    console.log('clicked hamburger ', count);
    if (count % 2 === 0) {
      console.log('play');
      // tween.play();

      // -Restarts, including any delay, and doesn't suppress 
      //  events during the initial move back to time:0
      // ( https://greensock.com/docs/v3/GSAP/Timeline/restart() )
      // tl_side_drawer.restart(true, false);
      tl_side_drawer.restart();
      tl_side_drawer.to('._nav-drawer', {
        duration: 0.5,
        x: '200px',
        ease: Strong.easeInOut
      }).from('._nav-drawer__links', {
        duration: 1.5,
        y: '35px',
        ease: Strong.easeInOut,
        stagger: 0.2,
      });

      // tl_side_drawer.play();
    } else {
      console.log('reverse');
    
      // tween.reverse();
      tl_side_drawer.reverse();
    }
    count++;
  };

  
 
  const animate_hamburger_lines = () => {

    console.log(`JOSH hamburger ${hamburger_idx}`);

    tl.restart();

    let y_dx = null;

    // NOTE: This assumes, all browsers querySelectorAll method
    //       grabs the elements in the same order!!!!
    // UPDATE: According the the spec:
    // (https://www.w3.org/TR/selectors-api/#queryselectorall)
    //  "The querySelectorAll() method on the NodeSelector interface must, 
    //   when invoked, return a NodeList containing all of the matching 
    //   Element nodes within the node’s subtrees, in document order.
    //   If there are no such nodes, the method must return an empty NodeList.
    //  "
    if (hamburger_idx === 0) {
      // Close button on nav-drawer

      tl.to('._x-lines', {
          duration: 0.25,
          rotation: 180,
          transformOrigin:"50% 50%",
          ease: Strong.easeInOut
        }, 0
      );
    }
    else {
      // Mobile and Desktop hamburger bars

      if (hamburger_idx === 1)      y_dx = 11; // Mobile hamburger
      else if (hamburger_idx === 2) y_dx = 15; // Desktop hamburger

      tl.to('._line-1', {
          duration: 0.25,
          y: +y_dx,
          ease: Strong.easeInOut
        }, 0
      );
      tl.to('._line-3', {
          duration: 0.25,
          y: -y_dx,
          ease: Strong.easeInOut
        }, 0
      );
  
      tl.to('._lines', {
          duration: 0.25,
          rotation: 360,
          transformOrigin:"50% 50%",
          ease: Strong.easeInOut
        }, 0.25
      );
  
      tl.to('._line-1', {
          duration: 0.25,
          y: 0,
          ease: Strong.easeInOut
        }, 0.5
      );
      tl.to('._line-3', {
          duration: 0.25,
          y: 0,
          ease: Strong.easeInOut
        }, 0.5
      );
    };
    }



  hamburger.addEventListener('click', animate_nav_drawer);
  hamburger.addEventListener('click', animate_hamburger_lines);
});

