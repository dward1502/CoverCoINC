"use client"
import HomeSlider from "../../components/Sliders/HomeSlider";
import Link from "next/link";
import styles from "../../scss/Home.module.scss";

export default function HomePage() {
  return (
    <>
     <HomeSlider/>
     <section className={styles.container}>
        <div className={styles.card}>
          <Link href="/about" className="cardLink">
            About
          </Link>
        </div>
        <div className={styles.card}>
          <Link href="/customize" className="cardLink">
            Customize
          </Link>
        </div>
        <div className={styles.card}>
          <Link href="/industries" className="cardLink">
            Industries
          </Link>
        </div>
      </section>
    </>
  );
}