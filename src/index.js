import { gsap } from 'gsap';
import { ScrollTrigger } from "gsap/ScrollTrigger.js";

gsap.registerPlugin(ScrollTrigger);

// Top section
const intro = document.querySelector('.intro');
const video = intro.querySelector('video');
const firstText = intro.querySelector('h1');

// Bottom section
const more = document.querySelector('.more');
const end = more.querySelector('h1');

gsap.from(firstText, { x: -200 });

ScrollTrigger.create({
    trigger: intro,
    start: firstText,
    end: more,

});

// // ScrollMagic + Indicators
// const controller = new ScrollMagic.Controller();

// // Scene (amount of pixels)
// const videoScene = new ScrollMagic.Scene({
//     duration: 10000,
//     triggerElement: intro,
//     triggerHook: 0,
// })
//     .addIndicators()
//     .setPin(intro)
//     .addTo(controller);

// // Animation
// let accelamount = 0.1;
// let scrollpos = 0;
// let delay = 0;

// videoScene.on('update', e => {
//     scrollpos = e.scrollPos / 1000;

//     console.log(e); // <-------------
// });

// video.currentTime = scrollpos;

// setInterval(() => {
//     // creates a reproduction delay then accelerates the video 0.1 times
//     delay += (scrollpos - delay) * accelamount;
//     // console.log('DELAY >>>>>>' + delay);

//     video.currentTime = delay;
// }, 33.3); //40