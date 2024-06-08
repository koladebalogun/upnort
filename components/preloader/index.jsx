import React from "react";
import { useEffect } from "react";
import { gsap } from "gsap";
import { ScrollTrigger } from "gsap/dist/ScrollTrigger";

gsap.registerPlugin(ScrollTrigger);

export default function index() {
  return (
    <div className="home">
      <div className="header">
        <div className="letters">
          <div>t</div>
          <div>h</div>
          <div>e</div>
        
        </div>
        <div className="letters">
          <div>u</div>
          <div>p</div>
          <div>n</div>
          <div>o</div>
          <div>r</div>
          <div>t</div>
        </div>
      </div>

      <div className="home_content">
        <div className="img_holder">
          <img src="/images/2.jpg" alt="" />
        </div>

        <div className="content_holder">
          <div className="row">
            <h1>History</h1>
          </div>
        </div>

        <div className="row">
          <div className="img">
            <img src="/images/2.jpg" alt="" />
          </div>
        </div>
        <div className="row">
          <div className="img">
            <img src="/images/2.jpg" alt="" />
          </div>
        </div>
        <div className="row">
          <div className="img">
            <img src="/images/u2.jpg" alt="" />
          </div>
        </div>
      </div>
    </div>
  );
}

{
  /*
    document.addEventListener("DOMContentLoaded",function(){
        const contentHolderHeight = document.querySelector(".content-holder").offsetHeight;
        const imgHolderWidth = window.innerWidth
        const additionalScrollHeight = window.innerHeight


        const totalBodyHeight = contentHolderHeight + additionalScrollHeight + imgHolderWidth

        document.body.style.height = `${totalBodyHeight}px`
    })

    ScrollTrigger.create({
        trigger:".home_content",
        start: "-0.1% top",
        end: "bottom bottom",
        onEnter: () => {
            gsap.set(".home_content", {
                position: "absolute",
                top:"195%"
            })
        }
        onLeaveBack: () => {
            gsap.set(".home_content", {
                position: "fixed",
                top:"0%"
            })
        }
    })

    gsap.to(".header .letters:first-child", {
        x: () => -innerWidth * 3,
        scale:10,
        ease: "power2.inOut",
        scrollTrigger: {
            start: "top top",
            end: `+=200%`,
            scrub:1
        }
    })

    gsap.to(".header .letters:last-child", {
        x: () => innerWidth * 3,
        scale:10,
        ease: "power2.inOut",
        scrollTrigger: {
            start: "top top",
            end: `+=200%`,
            scrub:1
        }
    })

    gsap.to(".img-holder img", {
        scale:1,
        ease: "power2.inOut",
        scrollTrigger: {
            start: "top top",
            end: `+=200%`,
            scrub:1
        }
    })
 */
}
