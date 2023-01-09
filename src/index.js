import { gsap } from "gsap";
import ScrollTrigger from "gsap/ScrollTrigger";

gsap.registerPlugin(ScrollTrigger);

// Top section
const intro = document.querySelector('.intro');
const video = intro.querySelector('video');
const firstText = intro.querySelector('h1');

// const videoSrc = video.currentSrc;

// Bottom section
const more = document.querySelector('.more');
const end = more.querySelector('h1');

let delay = 0;
let accelamount = 0.1;
let scrollpos = 0;

let tlvideo = gsap.timeline({
    scrollTrigger: {
        trigger: intro,
        start: "top top",
        end: "bottom+=200% bottom",
        scrub: true,
        markers: false,
        pin: true,
        onUpdate: (e) => {
            console.log(e);
        },
    },
});

let tltext = gsap.timeline({
    scrollTrigger: {
        trigger: intro,
        start: "top 1px",
        end: "bottom 100px",
        scrub: true,
        markers: true,
    },
});


video.onloadedmetadata = function () {
    tlvideo.to(video, {
        currentTime: video.duration,
    });
    tltext.from(firstText, {
        x: -700, 
        alpha: 0,
    });
};