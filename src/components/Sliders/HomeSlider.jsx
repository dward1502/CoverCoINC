"use client";
import React from "react";
import { useKeenSlider } from "keen-slider/react";
import SlideshowData from "../../data/slideshow";

import Link from "next/link";
import Image from "next/image";
import styles from "./sliders.module.scss";
import "keen-slider/keen-slider.min.css";

const HomeSlider = () => {
  const [pause, setPause] = React.useState(false);
  const timer = React.useRef();

  const [sliderRef] = useKeenSlider(
    {
      loop: true,
    },
    [
      (slider) => {
        let timeout;
        let mouseOver = false;
        function clearNextTimeout() {
          clearTimeout(timeout);
        }
        function nextTimeout() {
          clearTimeout(timeout);
          if (mouseOver) return;
          timeout = setTimeout(() => {
            slider.next();
          }, 2000);
        }
        slider.on("created", () => {
          slider.container.addEventListener("mouseover", () => {
            mouseOver = true;
            clearNextTimeout();
          });
          slider.container.addEventListener("mouseout", () => {
            mouseOver = false;
            nextTimeout();
          });
          nextTimeout();
        });
        slider.on("dragStarted", clearNextTimeout);
        slider.on("animationEnded", nextTimeout);
        slider.on("updated", nextTimeout);
      },
    ]
  );

  return (
    <>
      <div ref={sliderRef} className="keen-slider">
        {SlideshowData.map((slide) => {
          return (
            <div key={slide.id} className={`keen-slider__slide ${slide.id}`}>
              <div className={styles.imgContainer}>
                <Image alt={slide.alt} src={slide.image} fill className={styles.img} />
              </div>
              <div className={styles.textContainer}>
                <h1>{slide.title}</h1>
                <p>{slide.text}</p>
                <Link href={slide.linkPath}>Learn More</Link>
              </div>
            </div>
          );
        })}
      </div>
    </>
  );
};

export default HomeSlider;
