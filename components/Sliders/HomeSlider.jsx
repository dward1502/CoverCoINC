import React, { Fragment } from 'react';
import { useKeenSlider } from 'keen-slider/react';
import SlideshowData from '../../data/slideshow';

import Link from 'next/link'
import Image from 'next/image';
import styles from './sliders.module.scss';

const HomeSlider = () => {
  const [pause, setPause] = React.useState(false);
  const timer = React.useRef();
  const [sliderRef, slider] = useKeenSlider({
    loop: true,
    duration: 1500,
    dragStart: () => {
      setPause(true);
    },
    dragEnd: () => {
      setPause(false);
    },
  });

  React.useEffect(() => {
    sliderRef.current.addEventListener('mouseover', () => {
      setPause(true);
    });
    sliderRef.current.addEventListener('mouseout', () => {
      setPause(false);
    });
  }, [sliderRef]);

  React.useEffect(() => {
    timer.current = setInterval(() => {
      if (!pause && slider) {
        slider.next();
      }
    }, 6000);
    return () => {
      clearInterval(timer.current);
    };
  }, [pause, slider]);
    // const [sliderRef] = useKeenSlider({loop:true})
    const buttonHandler = (e) => {
        e.stopPropagation()
        console.log('Button on slideshow clicked');
    }

  return (
    <Fragment>
      <div ref={sliderRef} className='keen-slider'>
        {SlideshowData.map((slide) => {
          return (
            <div key={slide.id} className={`keen-slider__slide } ${slide.id}`}>
              <div className={styles.imgContainer}>
                <Image
                  alt='Slideshow photo 1 Stadium '
                  src={slide.image}
                  layout='fill'
                  className={styles.img}
                />
              </div>
              <div className={styles.textContainer}>
                <h1>{slide.title}</h1>
                <p>
                  {slide.text}
                </p>
                <Link href={slide.linkPath}>
                  <a>Learn More</a>
                </Link>
              </div>
            </div>
          );
        })}
        {/* <div className='keen-slider__slide number-slide1'>
          <div className={styles.imgContainer}>
            <Image
              alt='Slideshow photo 1 Stadium '
              src='/images/slideshow1.webp'
              layout='fill'
              className={styles.img}
            />
          </div>
          <div className={styles.textContainer}>
            <h1>Title</h1>
            <p>
              Lorem, ipsum dolor sit amet consectetur adipisicing elit. Officiis
              suscipit
            </p>
            <Link href={slider.linkPath}>
              <a></a>
            </Link>
            <button onClick={buttonHandler}>Learn More</button>
          </div>
        </div> */}

        {/* <div className='keen-slider__slide number-slide2'>
          <Image
            alt='Slideshow photo 2 Convention center '
            src='/slideshow2.jpg'
            layout='fill'
            className={styles.img}
          />
          <div className={styles.container}>
            <p>CoverCoInc where you can find all your Events covering needs</p>
            <button onClick={buttonHandler}>Order Today</button>
          </div>
        </div>
        <div className='keen-slider__slide number-slide3'>
          <Image
            alt='Slideshow photo 3 Restaurant '
            src='/slideshow3.jpg'
            layout='fill'
            className={styles.img}
          />
          <div className={styles.container}>
            <p>CoverCoInc where you can find all your Restaurant covering needs</p>
            <button onClick={buttonHandler}>Order Today</button>
          </div>
        </div>

        <div className='keen-slider__slide number-slide3'>
          <Image
            alt='Slideshow photo 4 University '
            src='/slideshow4.jpg'
            layout='fill'
            className={styles.img}
          />
          <div className={styles.container}>
            <p>CoverCoInc where you can find all your University covering needs</p>
            <button onClick={buttonHandler}>Order Today</button>
          </div>
        </div> */}
      </div>
    </Fragment>
  );
};

export default HomeSlider;