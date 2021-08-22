import React from 'react';
import Hero from '../../components/UI/Hero';
import Image from 'next/image';

import styles from './customize.module.scss';

const CustomizePage = () => {
  return (
    <div className={styles.container}>
      <Hero
        image='/slideshow1.jpg'
        alt='Customize hero banner'
        title='Customize'
      />
      <div className={styles.introText}>
        <p>
          Based on Forbes Magazine, the service industry is the business of the
          new millennium. The pace is fast moving and full of competition with
          every business loking for an edge, an angle, to rise above all others.
          Eleven (11) years ago CoverCo. Inc. introduced a cutting edge product
          line to impress and attract customers and have been adding to it
          continually. Our covers dress up each and every problem area that
          before lacked attention. <strong>CoverCo. Inc. can cover it all!</strong> Watch the
          transformation, from what was once an eyesore to a custom-tailored
          look designed for your specific needs.
        </p>
      </div>
      <h1 className={styles.header}>
        CoverCo. Inc. - The Product of Image Makers
      </h1>
      <section className={styles.varietyInfo}>
        <div className={styles.varietyText}>
          <p>
            Available in many standard and limtless sizes to cover almost
            anything:
          </p>
          <ul className={styles.list}>
            <li>
              <strong>Trash cans</strong> - includes pocket for spare trash can
              liners
            </li>
            <li>
              <strong>Bus Tubs</strong> - eliminate soggy linens when icing down
              beer or soda
            </li>
            <li>
              <strong>Tray Stands</strong> - dress up all your functions with
              color and style
            </li>
            <li>
              <strong>Ice Bins</strong> - enables you to keep them &quot on the
              floor &quot instead of hidden in the back
            </li>
            <li>
              <strong>Portable Bars</strong> - upgrade your existing bar without
              investing large sums of entire new units
            </li>
            <li>
              <strong>Banquet Tables</strong> - easy care. Skirting(NO Clips),
              Drop overs, and more
            </li>
            <li>
              <strong>Cambros</strong> - add a finishing touch to the look of
              your break tables, banquet tables
            </li>
          </ul>
        </div>
        <div className={styles.varietyImgs}>
          <div className={styles.imgContainer}>
            <Image
              src='/slideshow2.jpg'
              alt=''
              layout='fill'
              className={styles.img}
            />
          </div>
          <div className={styles.imgContainer}>
            <Image
              src='/slideshow2.jpg'
              alt=''
              layout='fill'
              className={styles.img}
            />
          </div>
        </div>
      </section>
      <section className={styles.colorsContainer}>
        <h2>Choose from 8 different colors</h2>
        <div className={styles.colorSwatches}>
          <div>
            <div className={`${styles.colorBox} ${styles.burgundy}`}></div>
            <p>Burgundy</p>
          </div>
          <div>
            <div className={`${styles.colorBox} ${styles.darkBlue}`}></div>
            <p>Dark Blue</p>
          </div>
          <div>
            <div className={`${styles.colorBox} ${styles.teal}`}></div>
            <p>Teal</p>
          </div>
          <div>
            <div className={`${styles.colorBox} ${styles.grey}`}></div>
            <p>Grey</p>
          </div>
          <div>
            <div className={`${styles.colorBox} ${styles.red}`}></div>
            <p>Red</p>
          </div>
          <div>
            <div className={`${styles.colorBox} ${styles.royalBlue}`}></div>
            <p>Royal Blue</p>
          </div>
          <div>
            <div className={`${styles.colorBox} ${styles.darkGreen}`}></div>
            <p>Dark Green</p>
          </div>
          <div>
            <div className={`${styles.colorBox} ${styles.black}`}></div>
            <p>Black</p>
          </div>
        </div>
        <div className={styles.colorInfoContainer}>
          <div className={styles.colorInfo}>
            <h1>Fabric Details</h1>
            <p>
              <strong>CORONADO</strong> - Stain &amp; Fire Resistant
            </p>
            <p>
              <strong>FAIRBANKS</strong> - Stain &amp; Fire Resistant{' '}
            </p>
            <p>
              <strong>LA JOLLA</strong>
            </p>
            <p>
              <strong>DEL MAR</strong>
            </p>
            <p>
              <strong>BORREGO</strong> - Fade Resistant Full Sun
            </p>
            <h3>Please Note</h3>
            <ul className={styles.listFabric}>
              <li>
                Printed colors may vary slightly from actual fabric colors.
              </li>
              <li>Many special order colors are available for all fabrics.</li>
              <li>All fabrics = easy care!</li>
              <li>When needed: Cold wash - drip or air dry - NO HEAT!</li>
            </ul>
          </div>
          <div className={styles.fabricImg}>
            <div className={styles.fabricImgContainer}>
              <Image
                src='/slideshow2.jpg'
                alt=''
                layout='fill'
                className={styles.img}
              />
            </div>
          </div>
        </div>
      </section>
      <section className={styles.features}>
        <div className={styles.featuresBtn}>
          <p>Use the calculator below to estimate what the costs could be for your specific needs.</p>
          <button>Calculator</button>
        </div>
        <div className={styles.featuresInfo}>
          <h1>Features and Benefits</h1>
          <ul className={styles.list}>
            <li>Significant savings on linen rentals and laundry costs</li>
            <li>
              Made of tough fabrics that prevent stains and eliminate fraying
            </li>
            <li>Options to aquire antimicrobial fabric</li>
            <li>Easy clean surface, just spray or wipe down - NO HEAT</li>
            <li>Some covers are elasticized for a snug, neat fit</li>
            <li>Can be customized with your logo for instant identification</li>
          </ul>
        </div>
      </section>
    </div>
  );
};

export default CustomizePage;
