const tl = gsap.timeline({defaults: { duration: 0.65}});
tl.fromTo('.hero-section img', {scale: 1.5}, {scale: 1, ease: "elastic.out(1,.5)", duration: 1.7});
tl.fromTo('h2 .cta-1', {x: "110%"}, {x: 0, }, '<50%');
tl.fromTo('h2 .cta-3', {x: "-110%"}, {x: 0, }, '<25%');
tl.fromTo('h2 .cta-2', {y: "-110%"}, {y: 0, } ,'<');
//2nd line
tl.fromTo('h2 .cta-4', {x: "110%"}, {x: 0, }, '<30%');
tl.fromTo('h2 .cta-6', {x: "-110%"}, {x: 0, }, '<20%');
tl.fromTo('h2 .cta-5', {y: "-90%"}, {y: 0, } ,'<5%');
tl.fromTo('button.explore', {y: "20", opacity: 0}, {y: 0, opacity: 1} ,'<30%');
// tl.fromTo('.logo', { opacity: 0}, {opacity: 1, }, '<110%');

const logo = document.querySelector('.logo');
const letters = logo.textContent.split('');

logo.textContent = "";
letters.forEach(letter => {
    logo.innerHTML += "<span class='letter'>" + letter + "</span>"
})
document.querySelectorAll(".letter").forEach(letter => {
    // tl.fromTo(letter, { opacity: 0}, {opacity: 1, duration: .3}, '<30%')
})
gsap.set('.letter', {display: "inline-block"});
gsap.fromTo('.letter', {y: '100%'}, { y: 0, stagger: .05, duration: .5, delay: 1.8, ease: 'back.out(2)'})
