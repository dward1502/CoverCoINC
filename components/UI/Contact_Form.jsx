import React, { Fragment } from 'react';
import axios from 'axios';
import useInput from '../../hooks/use-input';

import styles from './UI.module.scss';

const isNotEmpty = (value) => value.trim() !== '';
const isEmail = (value) => value.includes('@');

const ContactForm = () => {
  // const [submitted, setSubmitted] = useState(false);

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
    value: messageValue,
    // isValid: messageIsValid,
    // hasError: messageHasError,
    valueChangeHandler: messageChangeHandler,
    inputBlurHandler: messageBlurHandler,
    reset: resetMessage,
  } = useInput(isNotEmpty);

  let formIsValid = false;
  if (firstNameIsValid && lastNameIsValid && emailIsValid && phoneIsValid) {
    formIsValid = true;
  }

  const submitHandler = (e) => {
    e.preventDefault();
    if (!formIsValid) {
      return;
    }
    console.log('Submitted');
    console.log(
      firstNameValue,
      lastNameValue,
      emailValue,
      phoneValue,
      messageValue
    );

    let data = {
      firstNameValue,
      lastNameValue,
      emailValue,
      phoneValue,
      messageValue,
    };

    axios({
      method: 'POST',
      url: '/api/contact',
      data: JSON.stringify(data),
      headers: {
        'Content-Type': 'application/json',
      }
    })
      .then((response) => {
        console.log('Response recieved');
        if (response.status === 200) {
          console.log(response);
          // setSubmitted(true);
          resetFirstName();
          resetLastName();
          resetEmail();
          resetPhone();
          resetMessage();
        }
      })
      .catch((res) => {
        console.log(`Error ${res}`);
      });
  };

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

  return (
    <Fragment>
      <form onSubmit={submitHandler} className={styles.form}>
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
    </Fragment>
  );
};

export default ContactForm;
