"use client"
import React, { useState, useEffect } from 'react';
import useInput from '../../hooks/use-input';
// import Notification from './notification';

import styles from './UI.module.scss';

const isNotEmpty = (value) => value.trim() !== '';
const isEmail = (value) => value.includes('@');

async function sendContactData(contactDetails) {
  console.log("before fetch",contactDetails)
  const response = await fetch('/api/contact', {
    method: 'POST',
    headers: {
      'Content-Type': 'application/json',
    },
    body: JSON.stringify(contactDetails) 
  });

  const data = await response.json();

  if (!response.ok) {
    throw new Error(data.message || 'Something went wrong!');
  }
  return data;
}

const ContactForm = () => {
  const [requestStatus, setRequestStatus] = useState();
  const [requestError, setRequestError] = useState();

  useEffect(() => {
    if (requestStatus === 'success' || requestStatus === 'error') {
      const timer = setTimeout(() => {
        setRequestStatus(null);
        setRequestError(null);
      }, 3000);
      return () => clearTimeout(timer);
    }
  }, [requestStatus]);

  //client side validation
  const {
    value: firstNameValue,
    isValid: firstNameIsValid,
    hasError: firstNameHasError,
    valueChangeHandler: firstNameChangeHandler,
    inputBlurHandler: firstNameBlurHandler,
    reset: resetFirstName,
  } = useInput(isNotEmpty);
  const {
    value: lastNameValue,
    isValid: lastNameIsValid,
    hasError: lastNameHasError,
    valueChangeHandler: lastNameChangeHandler,
    inputBlurHandler: lastNameBlurHandler,
    reset: resetLastName,
  } = useInput(isNotEmpty);
  const {
    value: emailValue,
    isValid: emailIsValid,
    hasError: emailHasError,
    valueChangeHandler: emailChangeHandler,
    inputBlurHandler: emailBlurHandler,
    reset: resetEmail,
  } = useInput(isEmail);
  const {
    value: phoneValue,
    isValid: phoneIsValid,
    hasError: phoneHasError,
    valueChangeHandler: phoneChangeHandler,
    inputBlurHandler: phoneBlurHandler,
    reset: resetPhone,
  } = useInput(isNotEmpty);
  const {
    value: companyValue,
    isValid: companyIsValid,
    hasError: companyHasError,
    valueChangeHandler: companyChangeHandler,
    inputBlurHandler: companyBlurHandler,
    reset: resetCompany,
  } = useInput(isNotEmpty);
  const {
    value: messageValue,
    valueChangeHandler: messageChangeHandler,
    inputBlurHandler: messageBlurHandler,
    reset: resetMessage,
  } = useInput(isNotEmpty);

  let formIsValid = false;
  if (
    firstNameIsValid &&
    lastNameIsValid &&
    emailIsValid &&
    phoneIsValid &&
    companyIsValid
  ) {
    formIsValid = true;
  }

  async function sendMessageHandler(event) {
    event.preventDefault();
    let data = {
      firstNameValue,
      lastNameValue,
      emailValue,
      phoneValue,
      messageValue,
      companyValue,
    };

    setRequestStatus('pending');

    try {
      await sendContactData(data);
      setRequestStatus('success');
      resetFirstName();
      resetLastName();
      resetEmail();
      resetPhone();
      resetMessage();
      resetCompany();
    } catch (error) {
      setRequestError(error.message);
      setRequestStatus('error');
    }
  }

  // let notification;

  // if (requestStatus === 'pending') {
  //   notification = {
  //     status: 'pending',
  //     title: 'Sending message ...',
  //     message: 'Your message is on its way!',
  //   };
  // }
  // if (requestStatus === 'success') {
  //   notification = {
  //     status: 'success',
  //     title: 'Success!',
  //     message: 'Message sent successfully',
  //   };
  // }
  // if (requestStatus === 'error') {
  //   notification = {
  //     status: 'error',
  //     title: 'Error in sending message ...',
  //     message: requestError,
  //   };
  // }

  const firstNameClasses = firstNameHasError
    ? `${styles.inputGroup} ${styles.invalid}`
    : styles.inputGroup;
  const lastNameClasses = lastNameHasError
    ? `${styles.inputGroup} ${styles.invalid}`
    : styles.inputGroup;
  const emailClasses = emailHasError
    ? `${styles.inputGroup} ${styles.invalid}`
    : styles.inputGroup;
  const phoneClasses = phoneHasError
    ? `${styles.inputGroup} ${styles.invalid}`
    : styles.inputGroup;
  const companyClasses = companyHasError
    ? `${styles.inputGroup} ${styles.invalid}`
    : styles.inputGroup;

  return (
    <>
      <form onSubmit={sendMessageHandler} className={styles.form}>
        <div className={styles.inputRow}>
          <div className={firstNameClasses}>
            <label htmlFor='firstName'>First Name</label>
            <input
              type='text'
              name='firstName'
              id='fName'
              value={firstNameValue}
              onChange={firstNameChangeHandler}
              onBlur={firstNameBlurHandler}
            />
            {firstNameHasError && (
              <p className={styles.errorText}>Please enter a first name.</p>
            )}
          </div>
          <div className={lastNameClasses}>
            <label htmlFor='lastName'>Last Name</label>
            <input
              type='text'
              name='lastName'
              id='lName'
              value={lastNameValue}
              onChange={lastNameChangeHandler}
              onBlur={lastNameBlurHandler}
            />
            {lastNameHasError && (
              <p className={styles.errorText}>Please enter a last name.</p>
            )}
          </div>
        </div>

        <div className={styles.inputRow}>
          <div className={emailClasses}>
            <label htmlFor='email'>Email</label>
            <input
              type='email'
              name='email'
              id='email'
              value={emailValue}
              onChange={emailChangeHandler}
              onBlur={emailBlurHandler}
            />
            {emailHasError && (
              <p className={styles.errorText}>Please enter a valid email.</p>
            )}
          </div>
          <div className={phoneClasses}>
            <label htmlFor='phone'>Phone Number</label>
            <input
              type='text'
              name='phone'
              id='phone'
              value={phoneValue}
              onChange={phoneChangeHandler}
              onBlur={phoneBlurHandler}
            />
            {phoneHasError && (
              <p className={styles.errorText}>Please enter a phone number.</p>
            )}
          </div>
        </div>

        <div className={styles.inputRow}>
          <div className={companyClasses}>
            <label htmlFor='company'>Company Name</label>
            <input
              type='text'
              name='company'
              id='fName'
              value={companyValue}
              onChange={companyChangeHandler}
              onBlur={companyBlurHandler}
            />
            {companyHasError && (
              <p className={styles.errorText}>Please enter a Company name.</p>
            )}
          </div>
        </div>

        <div className={styles.inputGroup}>
          <label htmlFor='message'>Message</label>
          <textarea
            rows='4'
            cols='30'
            name='message'
            placeholder='Leave a message here ...'
            value={messageValue}
            onChange={messageChangeHandler}
            onBlur={messageBlurHandler}></textarea>
        </div>

        <div className={styles.btnContainer}>
          <button type='submit' disabled={!formIsValid} className={styles.btn}>
            Submit
          </button>
        </div>
      </form>
      {/* {notification && (
        <Notification
          status={notification.status}
          title={notification.title}
          message={notification.message}
        />
      )} */}
    </>
  );
};

export default ContactForm;
