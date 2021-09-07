import React from 'react';
import Form from '../../components/UI/Contact_Form';
import Image from 'next/image';
import { FaEnvelope, FaPhone } from 'react-icons/fa';

import styles from './contact.module.scss';

const ContactPage = () => {
  return (
    <div className={styles.container}>
      <div className={styles.infoBox}>
        <div className={styles.imgContainer}>
          <Image
            src='/images/coverCoLogoBlack.webp'
            alt='CoverCoInc logo'
            layout='fill'
            className={styles.img}
          />
        </div>
        <div className={styles.address}>
          <p>4040 Sorrento Valley Blvd #A, San Diego CA 92121</p>
        </div>
        <div className={styles.businessInfo}>
          <div className={styles.contactInfo}>
            <div className={styles.infoText}>
              <i>
                <FaPhone />
              </i>
              <p>1.800.959.8527</p>
            </div>
            <div className={styles.infoText}>
              <i>
                <FaEnvelope />
              </i>
              <p>info@covercoinc.com</p>
            </div>
          </div>
          <div className={styles.contactInfo}>
            <p>Hours of Operation</p>
            <p>Mon-Fri: 9AM - 4PM</p>
            <p>Saturday &amp; Sunday Closed</p>
          </div>
        </div>

        <div className={styles.usaImg}>
          <Image
            src='/usa_stamp.jpg'
            alt='Madee in the USA'
            width={75}
            height={75}
          />
        </div>
      </div>
      <div className={styles.formBox}>
        <h1>Contact Us Today!</h1>
        <Form />
      </div>
    </div>
  );
};

export default ContactPage;
