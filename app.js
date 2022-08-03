const tl = gsap.timeline({defaults: { duration: 0.75}});
tl.fromTo('.hero-section img', {scale: 1.5}, {scale: 1, ease: "elastic.out(1,.5)", duration: 1.7});
tl.fromTo('h2 .cta-1', {x: "110%"}, {x: 0, }, '<50%');
tl.fromTo('h2 .cta-3', {x: "-110%"}, {x: 0, }, '<25%');
tl.fromTo('h2 .cta-2', {y: "-110%"}, {y: 0, } ,'<');
//2nd line
tl.fromTo('h2 .cta-4', {x: "110%"}, {x: 0, }, '<30%');
tl.fromTo('h2 .cta-6', {x: "-110%"}, {x: 0, }, '<20%');
tl.fromTo('h2 .cta-5', {y: "-90%"}, {y: 0, } ,'<5%');
tl.fromTo('button.explore', {y: "20", opacity: 0}, {y: 0, opacity: 1} ,'<20%');
tl.fromTo('.logo', { opacity: 0}, {opacity: 1, }, '<110%');