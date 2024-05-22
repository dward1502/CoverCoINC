"use client"
import React from "react";
import Link from "next/link";
import Image from "next/image";

import styles from "./scss/industries.module.scss";

const IndustriesPage = () => {
  return (
    <div className={styles.container}>
      <div className={styles.text}>
        <p>With over 800 manufactured items, Cover Co Inc. offers the widest variety of cover products in the industry encompassing almost any hospitality item that you want to become an appealing marketing accessory instead of an eyesore.</p>
        <p>All Cover Co Inc. covers are manufactured using Fairbanks Super Fabric, a cutting edge, high performance fabric that was created for hospital emergency rooms and is impervious to stains, water and bacteria. By using this state-of-the-art fabric, all Cover Co Inc. covers require little to no laundering while maintaining its crisp clean looks year after year.</p>
        <p>Cover Co Inc. creates custom patterns available in a wide array of vibrant colors to match any color scheme or logo for your company or organization. Cover Co Inc. covers provide a superior fit to most hospitality pieces for any company around the globe. Cover Co Inc. coverings slip on and off easily for fast setup and removal saving our clients time &amp; money, while providing a branding opportunity second to none!</p>
        <p>We can create any size and/or shape covering for any item your company or organization utilizes in your business events and activities. Cover Co Inc.’s main objective is to help make our clients look their best when dealing with their clientele.</p>
      </div>
      <section className={styles.section1}>
        <div className={styles.infoContainer}>
          <h1>Sports</h1>
          {/* <div className={styles.icons}></div> */}
          <Link href="/contact" className={styles.btnLink}>
            Catalog
          </Link>
        </div>
        <div className={styles.imgContainer}>
          <Image src="/images/slideshow1.webp" alt="Sports industry image" fill className={styles.img} />
        </div>
      </section>

      <section className={styles.section2}>
        <div className={styles.imgContainer}>
          <Image src="/images/slideshow.jpg" alt="Hotels and Country Clubs image" fill className={styles.img} />
        </div>
        <div className={styles.infoContainer}>
          <h1>Hotels Country Clubs</h1>
          {/* <div className={styles.icons}></div> */}
          <Link href="/contact" className={styles.btnLink}>
            Catalog
          </Link>
        </div>
      </section>

      <section className={styles.section1}>
        <div className={styles.infoContainer}>
          <h1>Amphitheatres Concert Venues</h1>
          {/* <div className={styles.icons}></div> */}
          <Link href="/contact" className={styles.btnLink}>
            Catalog
          </Link>
        </div>
        <div className={styles.imgContainer}>
          <Image src="/images/slideshow4.jpg" alt="Amphitheatres and Concert image " fill className={styles.img} />
        </div>
      </section>

      <section className={styles.section2}>
        <div className={styles.imgContainer}>
          <Image src="/images/slideshow5.jpg" alt="Convention Centers image" fill className={styles.img} />
        </div>
        <div className={styles.infoContainer}>
          <h1>Convention Centers</h1>
          {/* <div className={styles.icons}></div> */}
          <Link href="/contact" className={styles.btnLink}>
            Catalog
          </Link>
        </div>
      </section>
      <section className={styles.section1}>
        <div className={styles.infoContainer}>
          <h1>Casinos</h1>
          {/* <div className={styles.icons}></div> */}
          <Link href="/contact" className={styles.btnLink}>
            Catalog
          </Link>
        </div>
        <div className={styles.imgContainer}>
          <Image src="/images/slideshow2.webp" alt="Casinos image" fill className={styles.img} />
        </div>
      </section>
    </div>
  );
};

export default IndustriesPage;
