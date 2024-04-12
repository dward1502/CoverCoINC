/* eslint-disable react/no-unescaped-entities */
import React from "react";
import Hero from "../../components/UI/Hero";
import { FaTwitter, FaFacebook, FaLinkedin, FaPhone, FaEnvelope } from "react-icons/fa";
import Image from "next/image";
import Link from "next/link";
import Team from "../../data/team";

import styles from "./about.module.scss";
import USAIMG from "../../assets/images/usa_stamp.jpg";

const index = () => {
  return (
    <>
      <Hero image="/images/aboutHero.webp" alt="Hero banner about page" title="About" />

      <section className={styles.quote}>
        <p>Our continuing mission is to excel and exceed your expectations : effortlessly... effectively... affordable!!!</p>
      </section>
      <section className={styles.info}>
        <p>In the beginning of time: " If it doesn't look good ...", demanded Chef Hans, " wrap it with a linen!!!"</p>
        <p>
          Thus, "wrapping with a linen" had been the internation industry standard until CoverCoInc's inventor/founder/co-owner Breck Johnson and core staff began a twenty-year expedition to resolve that specific issue. Along the way, CoverCo Inc. has developed and redesigned what is now the <strong>Giorgia Armani</strong> of custom covers. Our covers are built to fit specific products with specific patterns, instead of using generic sizes, spandex or sloppily draped linens.
        </p>
        <p>CoverCo Inc's main focus has been to efficiently design, build with quality fabrics, and brand primarily with embroidered logos. We have sourced the finest fabrics for aesthetic covers for ballrooms, pool areas, lobbies, and concession areas, padded fabrics for storage, as well as pads for use in fine dining establishments. We even have a disposable line!</p>
        <div className={styles.usaImg}>
          <Image src={USAIMG} alt="Made in the USA" width={100} height={100} />
        </div>
      </section>
      <section className={styles.traits}>
        <div className={styles.card}>
          <h1>quality</h1>
          <p>Lorem ipsum dolor sit amet, consectetur adipiscing elit. Suspendisse consectetur euismod felis a dictum. Class aptent taciti sociosqu ad litora torquent per conubia nostra, per inceptos himenaeos.</p>
        </div>
        <div className={styles.card}>
          <h1>reliability</h1>
          <p>Lorem ipsum dolor sit amet, consectetur adipiscing elit. Suspendisse consectetur euismod felis a dictum. Class aptent taciti sociosqu ad litora torquent per conubia nostra, per inceptos himenaeos.</p>
        </div>
        <div className={styles.card}>
          <h1>innovation</h1>
          <p>Lorem ipsum dolor sit amet, consectetur adipiscing elit. Suspendisse consectetur euismod felis a dictum. Class aptent taciti sociosqu ad litora torquent per conubia nostra, per inceptos himenaeos.</p>
        </div>
      </section>
      {/* <section className={styles.photos}>
        <div className={styles.container}>
          <Image src="/images/products/table.webp" alt="About image one" layout="fill" className={styles.photo} />
        </div>
        <div className={styles.container}>
          <Image src="/images/products/roundTrashCan.webp" alt="About image two" layout="fill" className={styles.photo} />
        </div>
        <div className={styles.container}>
          <Image src="/images/products/scubaTable.webp" alt="About image three" layout="fill" className={styles.photo} />
        </div>
      </section> */}
      <section className={styles.team}>
        <h1>Our Team</h1>
        <div className={styles.teamContainer}>
          {Team.map((info) => {
            return (
              <div className={styles.box} key={info.id}>
                <div className={styles.imgContainer}>
                  <Image fill src={info.image} className={styles.img} alt="Profile Image" />/
                </div>
                <div className={styles.infoContainer}>
                  <p className={styles.name}>{info.name}</p>
                  <p className={styles.title}>{info.title}</p>
                  {/* <div className={styles.socialIcons}>
                    <Link href="#">
                      <i>
                        <FaTwitter />
                      </i>
                    </Link>
                    <Link href="#">
                      <i>
                        <FaFacebook />
                      </i>
                    </Link>
                    <Link href="#">
                      <i>
                        <FaLinkedin />
                      </i>
                    </Link>
                  </div> */}
                  <div className={styles.contactInfo}>
                    <div className={styles.contact}>
                      <a href={info.phone}>
                        <i>
                          <FaPhone />
                        </i>
                        {info.number}
                      </a>
                    </div>
                    <div className={styles.contact}>
                      <a href={info.mail}>
                        <i>
                          <FaEnvelope />
                        </i>
                        {info.email}
                      </a>
                    </div>
                  </div>
                </div>
              </div>
            );
          })}
        </div>
      </section>
    </>
  );
};

export default index;
