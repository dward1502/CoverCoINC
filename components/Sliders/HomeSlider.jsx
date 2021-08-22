import React, { Fragment } from 'react';
import { useKeenSlider } from 'keen-slider/react';
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
    }, 3000);
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
        <div className='keen-slider__slide number-slide1'>
          <Image
            alt='Slideshow photo 1 Stadium '
            src='/slideshow1.jpg'
            layout='fill'
            className={styles.img}
          />
          <div className={styles.container}>
            <p>CoverCoInc where you can find all your sports covering needs</p>
            <button onClick={buttonHandler}>Order Today</button>
          </div>
        </div>
        <div className='keen-slider__slide number-slide2'>
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
        </div>
      </div>
    </Fragment>
  );
};

export default HomeSlider;