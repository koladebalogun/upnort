"use client";

import React, { useEffect } from "react";
import styles from "./styles.module.css";
import Lenis from "@studio-freight/lenis";
import gsap from "gsap";
import { ScrollTrigger } from "gsap/ScrollTrigger";

gsap.registerPlugin(ScrollTrigger);

export default function Page() {
  useEffect(() => {
    const lenis = new Lenis();

    lenis.on("scroll", ScrollTrigger.update);

    gsap.ticker.add((time) => {
      lenis.raf(time * 1000);
    });

    gsap.ticker.lagSmoothing(0);

    const services = gsap.utils.toArray(`.${styles.service}`);
    console.log("Services elements:", services);

    const observerOptions = {
      root: null,
      rootMargin: "0px",
      threshold: 0.1,
    };

    const observerCallback = (entries, observer) => {
      entries.forEach((entry) => {
        if (entry.isIntersecting) {
          const service = entry.target;
          const imgContainer = service.querySelector(`.${styles.img}`);
          console.log("Observed service:", service);
          console.log("Image container:", imgContainer);

          ScrollTrigger.create({
            trigger: service,
            start: "bottom bottom",
            end: "top top",
            scrub: true,
            onUpdate: (self) => {
              let progress = self.progress;
              let newWidth = window.innerWidth < 768 ? 70 + 50 * progress : 150 + 100 * progress;
              gsap.to(imgContainer, {
                width: newWidth + "%",
                duration: 0.1,
                ease: "none",
              });
            },
          });

          ScrollTrigger.create({
            trigger: service,
            start: "top bottom",
            end: "top top",
            scrub: true,
            onUpdate: (self) => {
              let progress = self.progress;
              let newWidth = window.innerWidth < 768 ? 250 + 50 * progress : 550 + 100 * progress;
              gsap.to(service, {
                width: newWidth + "px",
                duration: 0.1,
                ease: "none",
              });
            },
          });

          observer.unobserve(service);
        }
      });
    };

    const observer = new IntersectionObserver(observerCallback, observerOptions);

    services.forEach((service) => {
      observer.observe(service);
    });

    // Cleanup on component unmount
    return () => {
      services.forEach((service) => {
        ScrollTrigger.getAll().forEach(trigger => trigger.kill());
        observer.unobserve(service);
      });
    };
  }, []);

  const serviceData = [
    {
      title: "DIGITAL DISTRIBUTION AND PROMOTION",
      description: "Quality delivery and promotion of digital media contents directly to your target audience.",
      image: "/images/15.jpg"
    },
    {
      title: "Tv/ radio airplays and interviews",
      description: "Music submission services for artists on various radio and tv stations and Interviews with the best media houses.",
      image: "/images/16.jpg"
    },
    {
      title: "independent playlisting",
      description: "Songs on various playlist specified to a genre or mood wherever it fits best.",
      image: "/images/17.jpg"
    },
    {
      title: "social media verification",
      description: "Blue check across various social media platforms to provide authenticity to your brand.",
      image: "/images/4.jpg"
    },
    {
      title: "offline activation and event management",
      description: "Organization and management of events; road shows, campus tours and festivals.",
      image: "/images/18.jpg"
    },
  ];

  return (
    <div className={styles.container}>
      <div className={styles.hero}></div>
      <div className={styles.services}>
        <div className={styles.services_header}>
          <div className={styles.col}></div>
          <div className={styles.col}>
            <h1>All Services</h1>
          </div>
        </div>

        {serviceData.map((service, index) => (
          <div key={index} className={`${styles.service} services`}>
            <div className={styles.service_info}>
              <h1>{service.title}</h1>
              <p>{service.description}</p>
            </div>
            <div className={styles.service_img}>
              <div className={styles.img}>
                <img src={service.image} alt={service.title} />
              </div>
            </div>
          </div>
        ))}
      </div>
    </div>
  );
}
