import React, { Fragment } from "react";
import Slider from "../components/Sliders/HomeSlider";
import Testimonial from "../components/Testimonials/Testimonial";
import Link from "next/link";

import styles from "../scss/Home.module.scss";

const Index = () => {
  return (
    <Fragment>
      <div className={styles.construction_box}>
        <h1>The Up and Coming Look of CoverCo Inc. 2023</h1>
        <h3>
          Coverco Inc. will be redesigning and enhancing our electronic
          footprint to a more user-friendly application in the next 3 months.
          Our site will be changing weekly and accessible during the
          transformation. If you don’t see what you are looking for or just want
          to order please reach out to our team at 800-959-8527 or
          Robin@covercoinc.com and or breck@covercoinc.com{" "}
        </h3>
        <h3>
          Additionally, we personally would like to thank you for your support
          over the past 2.5 years. The pandemic was very challenging for all of
          us and we could not have made it without your patronage.
        </h3>
        <h3>
        Our focus for the final quarter of this year of recovery will be on our line of storage covers including:
        </h3>
        <ul>
          <li>Concession carts</li>
          <li>POS station covers</li>
          <li>Portable Bars and all other items that will be stored over the winter months</li>
        </ul>
        <p>
        We will be showcasing our scuba and spandex covers
        </p>
        <p>We will also be showcasing our branding  applicatons including dye-sublimation table covers and our elegant yet durable embroidery.  </p>
        <p>All in all, Coverco Inc. is your cover solution so please check back regularly to see our progress and let us help you make your look the very best.</p>
        <p>Sincerely,</p>
        <p>Breck Johnson</p>
        <p>President</p>
      </div>
      <Slider />
      <section className={styles.container}>
        <div className={styles.card}>
          <Link href="/about">
            <a className="cardLink">About</a>
          </Link>
        </div>
        <div className={styles.card}>
          <Link href="/customize">
            <a className="cardLink">Customize</a>
          </Link>
        </div>
        <div className={styles.card}>
          <Link href="/industries">
            <a className="cardLink">Industries</a>
          </Link>
        </div>
      </section>
      <Testimonial />
    </Fragment>
  );
};

export default Index;
