"use client";
import React, { useState, useEffect } from "react";
import { toast } from "react-toastify";
import useInput from "../../hooks/use-input";
import styles from "./UI.module.scss";

const isNotEmpty = (value: string) => value.trim() !== "";
const isEmail = (value: string) => /\S+@\S+\.\S+/.test(value);

async function sendContactData(contactDetails: any) {
	const response = await fetch("/api/contact", {
		method: "POST",
		headers: { "Content-Type": "application/json" },
		body: JSON.stringify(contactDetails),
	});

	const data = await response.json();
	if (!response.ok) {
		throw new Error(data?.error || data?.message || "Something went wrong!");
	}
	return data;
}

const ContactForm = () => {
	const [requestStatus, setRequestStatus] = useState<"pending" | "success" | "error" | null>(null);
	const [requestError, setRequestError] = useState<string | null>(null);

	useEffect(() => {
		if (requestStatus === "success" || requestStatus === "error") {
			const timer = setTimeout(() => {
				setRequestStatus(null);
				setRequestError(null);
			}, 3000);
			return () => clearTimeout(timer);
		}
	}, [requestStatus]);

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

	let formIsValid = firstNameIsValid && lastNameIsValid && emailIsValid && phoneIsValid && companyIsValid;

	async function sendMessageHandler(event: React.FormEvent<HTMLFormElement>) {
		event.preventDefault();
		if (!formIsValid || requestStatus === "pending") return;

		const payload = {
			firstNameValue,
			lastNameValue,
			emailValue,
			phoneValue,
			messageValue,
			companyValue,
		};

		setRequestStatus("pending");

		try {
			await toast.promise(sendContactData(payload), {
				pending: "Sending your message…",
				success: "Message sent successfully! 🎉",
				error: {
					render({ data }) {
						const err = data as Error | undefined;
						return err?.message || "Something went wrong. Please try again.";
					},
				},
			});

			setRequestStatus("success");
			// reset fields after success
			resetFirstName();
			resetLastName();
			resetEmail();
			resetPhone();
			resetMessage();
			resetCompany();
		} catch (err: any) {
			setRequestError(err?.message || "Failed to send");
			setRequestStatus("error");
		}
	}

	const firstNameClasses = firstNameHasError ? `${styles.inputGroup} ${styles.invalid}` : styles.inputGroup;
	const lastNameClasses = lastNameHasError ? `${styles.inputGroup} ${styles.invalid}` : styles.inputGroup;
	const emailClasses = emailHasError ? `${styles.inputGroup} ${styles.invalid}` : styles.inputGroup;
	const phoneClasses = phoneHasError ? `${styles.inputGroup} ${styles.invalid}` : styles.inputGroup;
	const companyClasses = companyHasError ? `${styles.inputGroup} ${styles.invalid}` : styles.inputGroup;

	return (
		<>
			<form onSubmit={sendMessageHandler} className={styles.form} noValidate>
				<div className={styles.inputRow}>
					<div className={firstNameClasses}>
						<label htmlFor="firstName">First Name</label>
						<input
							type="text"
							name="firstName"
							id="firstName"
							value={firstNameValue}
							onChange={firstNameChangeHandler}
							onBlur={firstNameBlurHandler}
							aria-invalid={firstNameHasError || undefined}
							aria-describedby={firstNameHasError ? "firstName-error" : undefined}
						/>
						{firstNameHasError && (
							<p id="firstName-error" className={styles.errorText}>
								Please enter a first name.
							</p>
						)}
					</div>

					<div className={lastNameClasses}>
						<label htmlFor="lastName">Last Name</label>
						<input
							type="text"
							name="lastName"
							id="lastName"
							value={lastNameValue}
							onChange={lastNameChangeHandler}
							onBlur={lastNameBlurHandler}
							aria-invalid={lastNameHasError || undefined}
							aria-describedby={lastNameHasError ? "lastName-error" : undefined}
						/>
						{lastNameHasError && (
							<p id="lastName-error" className={styles.errorText}>
								Please enter a last name.
							</p>
						)}
					</div>
				</div>

				<div className={styles.inputRow}>
					<div className={emailClasses}>
						<label htmlFor="email">Email</label>
						<input
							type="email"
							name="email"
							id="email"
							value={emailValue}
							onChange={emailChangeHandler}
							onBlur={emailBlurHandler}
							aria-invalid={emailHasError || undefined}
							aria-describedby={emailHasError ? "email-error" : undefined}
							inputMode="email"
							autoComplete="email"
						/>
						{emailHasError && (
							<p id="email-error" className={styles.errorText}>
								Please enter a valid email.
							</p>
						)}
					</div>

					<div className={phoneClasses}>
						<label htmlFor="phone">Phone Number</label>
						<input
							type="tel"
							name="phone"
							id="phone"
							value={phoneValue}
							onChange={phoneChangeHandler}
							onBlur={phoneBlurHandler}
							aria-invalid={phoneHasError || undefined}
							aria-describedby={phoneHasError ? "phone-error" : undefined}
							inputMode="tel"
							autoComplete="tel"
						/>
						{phoneHasError && (
							<p id="phone-error" className={styles.errorText}>
								Please enter a phone number.
							</p>
						)}
					</div>
				</div>

				<div className={styles.inputRow}>
					<div className={companyClasses}>
						<label htmlFor="company">Company Name</label>
						<input
							type="text"
							name="company"
							id="company"
							value={companyValue}
							onChange={companyChangeHandler}
							onBlur={companyBlurHandler}
							aria-invalid={companyHasError || undefined}
							aria-describedby={companyHasError ? "company-error" : undefined}
						/>
						{companyHasError && (
							<p id="company-error" className={styles.errorText}>
								Please enter a Company name.
							</p>
						)}
					</div>
				</div>

				<div className={styles.inputGroup}>
					<label htmlFor="message">Message</label>
					<textarea
						rows={4}
						name="message"
						id="message"
						placeholder="Leave a message here ..."
						value={messageValue}
						onChange={messageChangeHandler}
						onBlur={messageBlurHandler}
					/>
				</div>

				<div className={styles.btnContainer}>
					<button
						type="submit"
						disabled={!formIsValid || requestStatus === "pending"}
						className={styles.btn}
						aria-busy={requestStatus === "pending" || undefined}
					>
						{requestStatus === "pending" ? "Sending…" : "Submit"}
					</button>
				</div>
			</form>
		</>
	);
};

export default ContactForm;
