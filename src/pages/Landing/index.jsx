import React from "react";
// import { gsap } from "gsap";
// import ScrollTrigger from "gsap/ScrollTrigger";


// import Button from "../../components/Buttons";

// import video from "../../assets/videos/lemao.mp4";

class Landing extends React.Component {
    constructor(props) {
        super(props);
        // this.startGsap();
    }

    // startGsap() {
    //     gsap.registerPlugin(ScrollTrigger);

    //     const intro = document.querySelector('.intro');
    //     const video = intro.querySelector('video');
    //     const firstText = intro.querySelector('h1');

    //     window.onbeforeunload = function () {
    //         window.scrollTo(0, 0);
    //     }

    //     let tlvideo = gsap.timeline({
    //         scrollTrigger: {
    //             trigger: intro,
    //             start: "top top",
    //             end: "bottom+=200% bottom",
    //             scrub: 3,
    //             markers: false,
    //             pin: true,
    //             onUpdate: (e) => {
    //                 console.log(e);
    //             },
    //         },
    //     });

    //     let tltext = gsap.timeline({
    //         scrollTrigger: {
    //             trigger: intro,
    //             start: "top 1px",
    //             end: "bottom+=100px 150px",
    //             scrub: 6,
    //             markers: false,
    //         },
    //     });


    //     video.onloadedmetadata = function () {
    //         tlvideo.to(video, {
    //             currentTime: video.duration,
    //         });
    //         tltext.from(firstText, {
    //             x: -700,
    //             alpha: 0,
    //             duration: 2.5,
    //             ease: "power4.out",
    //         }, 0);
    //     };
    // }

    // componentDidMount() {

    // }

    render() {
        return (
            <Text>Hello!</Text>
            // <>
            //     <section class="intro">
            //         <h1>Deu sede?</h1>
            //         <video playsinline="true" webkit-playsinline="true" preload="auto" muted="muted" src="../src/videos/lemao.mp4"
            //             type="video/mp4"></video>
            //     </section>
            //     <section class="more">
            //         <h1>Aproveita, porque quando a vida te d?? lim??es...</h1>
            //         <button id="btnStore">...tome uma limonada </button>
            //     </section>
            // </>
        );
    }
}

export default Landing;