"use client";

import React, { useEffect } from "react";
import styles from "./styles.module.css";
import gsap from "gsap";

export default function Page() {
  const sliderContents = [
    "Victony",
    "Rukky",
    "Novemba",
    "Llona",
    "Bella Shmurda",
    "T Dolla",
    "Av",
  ];

  const imagePaths = [
    { path: "/images/8.jpg", alt: "Victony" },
    { path: "/images/9.jpg", alt: "Rukky" },
    { path: "/images/10.jpg", alt: "Novemba" },
    { path: "/images/11.jpg", alt: "Llona" },
    { path: "/images/12.jpg", alt: "Bella Shmurda" },
    { path: "/images/13.jpg", alt: "T Dolla" },
    { path: "/images/14.jpg", alt: "Av" },
  ];

  useEffect(() => {
    document.body.style.overflow = "hidden";

    const slider = document.querySelector(`.${styles.slider}`);
    let activeSlide = 0;

    const handleClick = () => {
      const currentSlide = slider.querySelector(
        `.${styles.slide}:not(.exiting)`
      );
      const slideTheme = activeSlide % 2 ? styles.dark : styles.light;
      activeSlide = (activeSlide + 1) % sliderContents.length;

      if (currentSlide) {
        const existingImg = currentSlide.querySelectorAll("img");
        gsap.to(existingImg, {
          top: "0%",
          duration: 1.5,
          ease: "power4.inOut",
        });

        currentSlide.classList.add("exiting");
      }

      const newSlide = document.createElement("div");
      newSlide.classList.add(styles.slide, slideTheme);
      newSlide.style.clipPath =
        "polygon(0% 100%, 100% 100%, 100% 100%, 0% 100%)";

      const newSlideImg1 = document.createElement("div");
      newSlideImg1.className = `${styles.slide_img} ${styles.slide_img_1}`;
      const img1 = document.createElement("img");
      img1.src = imagePaths[activeSlide].path;
      img1.alt = imagePaths[activeSlide].alt;
      img1.style.top = "100%";
      newSlideImg1.appendChild(img1);
      newSlide.appendChild(newSlideImg1);

      const newSlideContent = document.createElement("div");
      newSlideContent.classList.add(styles.slide_content);
      newSlideContent.innerHTML = `<h1 style="scale: 1.5">${sliderContents[activeSlide]}</h1>`;
      newSlide.appendChild(newSlideContent);

      // Include slide note
      const newSlideNote = document.createElement("div");
      newSlideNote.classList.add(styles.slide_note);
      newSlideNote.innerHTML = `<p>Click the screen</p>`;
      newSlide.appendChild(newSlideNote);

      const newSlideImg2 = document.createElement("div");
      newSlideImg2.className = `${styles.slide_img} ${styles.slide_img_2}`;
      const img2 = document.createElement("img");
      img2.src = imagePaths[activeSlide].path;
      img2.alt = imagePaths[activeSlide].alt;
      img2.style.top = "100%";
      newSlideImg2.appendChild(img2);
      newSlide.appendChild(newSlideImg2);

      slider.appendChild(newSlide);

      gsap.to(newSlide, {
        clipPath: "polygon(0% 0%, 100% 0%, 100% 100%, 0% 100%)",
        duration: 1.5,
        ease: "power4.inOut",
        onStart: () => {
          gsap.to([img1, img2], {
            top: "50%",
            duration: 1.5,
            ease: "power4.inOut",
          });
        },
        onComplete: () => {
          removeExtraSlides(slider);
        },
      });

      gsap.to(`.${styles.slide_content} h1`, {
        scale: 1,
        duration: 1.5,
        ease: "power4.inOut",
      });
    };

    document.addEventListener("click", handleClick);

    return () => {
      document.removeEventListener("click", handleClick);
    };
  }, []);

  function removeExtraSlides(container) {
    while (container.children.length > 5) {
      container.removeChild(container.firstChild);
    }
  }

  return (
    <div className={styles.slider}>
      <div className={`${styles.slide} ${styles.dark}`}>
        <div className={`${styles.slide_img} ${styles.slide_img_1}`}>
          <img src="/images/8.jpg" alt="Victony" className={styles.img} />
        </div>

        <div className={styles.slide_content}>
          <h1>Victony</h1>
        </div>

        <div className={styles.slide_note}>
          <p>click the screen</p>
        </div>

        <div className={`${styles.slide_img} ${styles.slide_img_2}`}>
          <img src="/images/8.jpg" alt="Victony" className={styles.img} />
        </div>
      </div>
    </div>
  );
}
