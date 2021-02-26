// https://greensock.com/scrolltrigger
// https://greensock.com/docs/v3/Plugins/ScrollTrigger
gsap.registerPlugin(ScrollTrigger)


const elem_width = document.querySelector('.C').offsetWidth;

gsap.to('.B', {
    scrollTrigger: { // Value is now and object
        trigger: '.B',
        start:  'top center', // {top, center, bottom, px, %, etc.}
        end:    'top 100px',  // {top, center, bottom, px, %, etc.}
        // 1. Trigger element (e.g., the div)
        // 2. Scroller (viewport [usually])

        markers: true,

        // {play, pause, resume, reverse, restart, reset, complete, none}
        toggleActions: "resume pause resume pause",  // Default: play none none none
        // 1: onEnter
        // 2: onLeave
        // 3: onEnterBack
        // 4: onLeaveBack

        // *********
        scrub: true,
        // *********
    },
    x: 400,
    duration: 10
});

gsap.to('.A2', {
    scrollTrigger: { // Value is now and object
        trigger: '.A2',
        start:  'top center', // {top, center, bottom, px, %, etc.}
        end:    'top 100px',  // {top, center, bottom, px, %, etc.}
        // 1. Trigger element (e.g., the div)
        // 2. Scroller (viewport [usually])

        markers: true,

        // {play, pause, resume, reverse, restart, reset, complete, none}
        toggleActions: "resume pause resume pause",  // Default: play none none none
        // 1: onEnter
        // 2: onLeave
        // 3: onEnterBack
        // 4: onLeaveBack

        // *********
        scrub: true,
        // *********
    },
    y: 400,
    duration: 10
});

gsap.to('.A3', {
    scrollTrigger: { // Value is now and object
        trigger: '.A3',
        start:  'top center', // {top, center, bottom, px, %, etc.}
        end:    'top 100px',  // {top, center, bottom, px, %, etc.}
        // 1. Trigger element (e.g., the div)
        // 2. Scroller (viewport [usually])

        markers: true,

        // {play, pause, resume, reverse, restart, reset, complete, none}
        toggleActions: "resume pause resume pause",  // Default: play none none none
        // 1: onEnter
        // 2: onLeave
        // 3: onEnterBack
        // 4: onLeaveBack

        // *********
        scrub: true,
        // *********
    },
    y: 400,
    duration: 10
});

gsap.to('.hero', {
    scrollTrigger: { // Value is now and object
        trigger: '.hero',
        start:  'top center', // {top, center, bottom, px, %, etc.}
        end:    'top 100px',  // {top, center, bottom, px, %, etc.}
        // 1. Trigger element (e.g., the div)
        // 2. Scroller (viewport [usually])

        markers: true,

        // {play, pause, resume, reverse, restart, reset, complete, none}
        toggleActions: "resume pause resume pause",  // Default: play none none none
        // 1: onEnter
        // 2: onLeave
        // 3: onEnterBack
        // 4: onLeaveBack

        // *********
        scrub: true,
        // *********
    },
    y: 100,
    duration: 10
});

gsap.to('.left', {
    scrollTrigger: { // Value is now and object
        trigger: '.left',
        start:  'top center', // {top, center, bottom, px, %, etc.}
        end:    'top 100px',  // {top, center, bottom, px, %, etc.}
        // 1. Trigger element (e.g., the div)
        // 2. Scroller (viewport [usually])

        markers: true,

        // {play, pause, resume, reverse, restart, reset, complete, none}
        toggleActions: "resume pause resume pause",  // Default: play none none none
        // 1: onEnter
        // 2: onLeave
        // 3: onEnterBack
        // 4: onLeaveBack

        // *********
        scrub: true,
        // *********
    },
    y: 100,
    duration: 10
});

gsap.to('.right', {
    scrollTrigger: { // Value is now and object
        trigger: '.right',
        start:  'top center', // {top, center, bottom, px, %, etc.}
        end:    'top 100px',  // {top, center, bottom, px, %, etc.}
        // 1. Trigger element (e.g., the div)
        // 2. Scroller (viewport [usually])

        markers: true,

        // {play, pause, resume, reverse, restart, reset, complete, none}
        toggleActions: "resume pause resume pause",  // Default: play none none none
        // 1: onEnter
        // 2: onLeave
        // 3: onEnterBack
        // 4: onLeaveBack

        // *********
        scrub: true,
        // *********
    },
    y: 50,
    duration: 10
});