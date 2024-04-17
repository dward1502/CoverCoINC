"use client";
import React, { useState } from "react";
import { useKeenSlider } from "keen-slider/react";
import SlideshowData from "../../data/slideshow";

import Link from "next/link";
import Image from "next/image";
import styles from "./sliders.module.scss";
import "keen-slider/keen-slider.min.css";

const HomeSlider = () => {
  const [currentSlide, setCurrentSlide] = useState(0);
  const [loaded, setLoaded] = useState(false);
  const [sliderRef, instanceRef] = useKeenSlider({
    initial: 0,
    slideChanged(slider) {
      setCurrentSlide(slider.track.details.rel);
    },
    created() {
      setLoaded(true);
    },
  });

  return (
    <>
      <div className={styles.navigation_wrapper}>
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
        {loaded && instanceRef.current && (
          <>
            <Arrow left onClick={(e) => e.stopPropagation() || instanceRef.current?.prev()} disabled={currentSlide === 0} />

            <Arrow onClick={(e) => e.stopPropagation() || instanceRef.current?.next()} disabled={currentSlide === instanceRef.current.track.details.slides.length - 1} />
          </>
        )}
      </div>
      {loaded && instanceRef.current && (
        <div className={styles.dots}>
          {[...Array(instanceRef.current.track.details.slides.length).keys()].map((idx) => {
            return (
              <button
                key={idx}
                onClick={() => {
                  instanceRef.current?.moveToIdx(idx);
                }}
                className={styles.dot + (currentSlide === idx ? " active" : "")}
              ></button>
            );
          })}
        </div>
      )}
    </>
  );
};

function Arrow(props) {
  const disabled = props.disabled ? " arrow--disabled" : "";
  return (
    <svg onClick={props.onClick} className={`${styles.arrow} ${props.left ? `${styles.arrow_left}` : `${styles.arrow_right}`} ${disabled}`} xmlns="http://www.w3.org/2000/svg" viewBox="0 0 24 24">
      {props.left && <path d="M16.67 0l2.83 2.829-9.339 9.175 9.339 9.167-2.83 2.829-12.17-11.996z" />}
      {!props.left && <path d="M5 3l3.057-3 11.943 12-11.943 12-3.057-3 9-9z" />}
    </svg>
  );
}

export default HomeSlider;
