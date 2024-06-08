"use client";
import { useEffect } from "react";
import styles from "./style.module.css";
import gsap from "gsap";
import { ScrollTrigger } from "gsap/ScrollTrigger";

gsap.registerPlugin(ScrollTrigger);

export default function Page() {
  useEffect(() => {
    console.log("Page component mounted");

    const blockRows = document.querySelectorAll(`.${styles.blocks_row}`);
    console.log("blockRows found:", blockRows.length);

    blockRows.forEach((row, rowIndex) => {
      console.log(`Processing row ${rowIndex}`);
      for (let i = 0; i < 16; i++) {
        const block = document.createElement("div");
        block.className = styles.block;
        row.appendChild(block);
      }
    });

    const blockContainers = document.querySelectorAll(
      `.${styles.blocks_container}`
    );
    console.log("blockContainers found:", blockContainers.length);

    blockContainers.forEach((container, containerIndex) => {
      console.log(`Processing container ${containerIndex}`);
      const rows = container.querySelectorAll(`.${styles.blocks_row}`);
      const numRows = rows.length;
      console.log(`Number of rows in container ${containerIndex}: ${numRows}`);

      rows.forEach((row, rowIndex) => {
        console.log(
          `Processing row ${rowIndex} in container ${containerIndex}`
        );
        let blocks = Array.from(row.querySelectorAll(`.${styles.block}`));
        let isTop = container.classList.contains(styles.top);

        let randomizedOrder = gsap.utils.shuffle(
          blocks.map((block, idx) => idx)
        );

        ScrollTrigger.create({
          trigger: container,
          start: "top bottom",
          end: "bottom top",
          scrub: true,
          onUpdate: (self) => {
            let progress = self.progress;
            let rowDelay = 0.3 * (numRows - rowIndex - 1);
            let adjustedProgress = Math.max(
              0,
              Math.min(1, progress - rowDelay)
            );

            updateBlocksOpacity(
              blocks,
              randomizedOrder,
              isTop,
              adjustedProgress
            );
          },
        });
      });
    });

    function updateBlocksOpacity(blocks, order, isTop, progress) {
      blocks.forEach((block, idx) => {
        let offset = order.indexOf(idx) / blocks.length;
        let adjustedProgress = (progress - offset) * blocks.length;
        let opacity = isTop
          ? 1 - Math.min(1, Math.max(0, adjustedProgress))
          : Math.min(1, Math.max(0, adjustedProgress));

        block.style.opacity = opacity;
      });
    }
  }, []);

  return (
    <div className={styles.container}>
      <div className={`${styles.hero} ${styles.section}`}>
        <h1>About us</h1>
        <p>
          Welcome to UpNort Marketing Agency, where creativity meets strategy,
          and innovation sparks growth. We are a dynamic team of marketing
          professionals dedicated to helping businesses thrive in today's
          competitive landscape. With a proven track record of success and a
          portfolio boasting renowned clients such as Bella Shmurda, Victony,
          Blaqbonez, Llona, Av, T Dolla, and Rukky, we pride ourselves on
          delivering exceptional results tailored to each client's unique needs.
        </p>
      </div>

      <div className={`${styles.hero_img} ${styles.section}`}>
        <img src="/images/2.jpg" alt="" className={styles.img} />

        <div className={`${styles.blocks_container} ${styles.top}`}>
          <div className={styles.blocks_row}></div>
          <div className={styles.blocks_row}></div>
          <div className={styles.blocks_row}></div>
          <div className={styles.blocks_row}></div>
        </div>

        <div className={`${styles.blocks_container} ${styles.bottom}`}>
          <div className={styles.blocks_row}></div>
          <div className={styles.blocks_row}></div>
          <div className={styles.blocks_row}></div>
          <div className={styles.blocks_row}></div>
        </div>
      </div>

      <div className={`${styles.about} ${styles.section}`}>
        <h1>Our Mission</h1>
        <p>
          At UpNort, our mission is simple: To elevate brands and drive
          measurable results through innovative marketing solutions. We believe
          in the power of collaboration, transparency, and continuous
          improvement to exceed our clients' expectations and achieve their
          business objectives.
        </p>
      </div>

      <div className={`${styles.about_img} ${styles.section}`}>
        <img src="/images/3.jpg" alt="" className={styles.img} />

        <div className={`${styles.blocks_container} ${styles.top}`}>
          <div className={styles.blocks_row}></div>
          <div className={styles.blocks_row}></div>
          <div className={styles.blocks_row}></div>
          <div className={styles.blocks_row}></div>
        </div>

        <div className={`${styles.blocks_container} ${styles.bottom}`}>
          <div className={styles.blocks_row}></div>
          <div className={styles.blocks_row}></div>
          <div className={styles.blocks_row}></div>
          <div className={styles.blocks_row}></div>
        </div>
      </div>

      <div className={`${styles.footer} ${styles.section}`}>
        <h1>What Sets Us Apart</h1>
        <p>
          Strategic Approach: Our team takes the time to understand your brand, audience, and
          objectives to craft customized strategies that deliver real impact.
          <br />
          <br />
          Creativity: Creativity is at the heart of everything we do. We strive to captivate audiences and
          leave a lasting impression. 
          <br />
          <br />
          Data-Driven Insights: We leverage data analytics and consumer insights to optimize campaigns, maximize
          ROI, and drive continuous improvement. 
        </p>
      </div>
    </div>
  );
}
