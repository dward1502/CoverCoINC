"use client";
import React, { useEffect } from "react";
import { useForm, SubmitHandler } from "react-hook-form";
import { toast, ToastContainer } from "react-toastify";
import styles from "./UI.module.scss";

interface FormData {
	firstName: string;
	lastName: string;
	email: string;
	phone: string;
	company: string;
	message: string;
}

async function sendContactData(contactDetails: FormData): Promise<void> {
	const response = await fetch("/api/contact", {
		method: "POST",
		headers: {
			"Content-Type": "application/json",
		},
		body: JSON.stringify(contactDetails),
	});

	const data = await response.json();

	if (!response.ok) {
		throw new Error(data.message || "Something went wrong!");
	}
}

const ContactForm: React.FC = () => {
	const {
		register,
		handleSubmit,
		reset,
		formState: { errors, isValid },
	} = useForm<FormData>({
		mode: "onBlur",
		defaultValues: {
			firstName: "",
			lastName: "",
			email: "",
			phone: "",
			company: "",
			message: "",
		},
	});

	const onSubmit: SubmitHandler<FormData> = async (data) => {
		toast.info("Sending message...", { autoClose: false });
		console.log(data);
		try {
			await sendContactData(data);
			toast.dismiss();
			toast.success("Message sent successfully", { autoClose: 3000 });
			reset();
		} catch (error) {
			toast.dismiss();
			toast.error(error instanceof Error ? error.message : "An error occurred", {
				autoClose: 3000,
			});
		}
	};

	return (
		<>
			<form onSubmit={handleSubmit(onSubmit)} className={styles.form}>
				<div className={styles.inputRow}>
					<div className={`${styles.inputGroup} ${errors.firstName ? styles.invalid : ""}`}>
						<label htmlFor="firstName">First Name</label>
						<input
							type="text"
							id="firstName"
							{...register("firstName", {
								required: "First name is required",
								minLength: { value: 2, message: "First name must be at least 2 characters" },
							})}
						/>
						{errors.firstName && <p className={styles.errorText}>{errors.firstName.message}</p>}
					</div>
					<div className={`${styles.inputGroup} ${errors.lastName ? styles.invalid : ""}`}>
						<label htmlFor="lastName">Last Name</label>
						<input
							type="text"
							id="lastName"
							{...register("lastName", {
								required: "Last name is required",
								minLength: { value: 2, message: "Last name must be at least 2 characters" },
							})}
						/>
						{errors.lastName && <p className={styles.errorText}>{errors.lastName.message}</p>}
					</div>
				</div>

				<div className={styles.inputRow}>
					<div className={`${styles.inputGroup} ${errors.email ? styles.invalid : ""}`}>
						<label htmlFor="email">Email</label>
						<input
							type="email"
							id="email"
							{...register("email", {
								required: "Email is required",
								pattern: {
									value: /^[^\s@]+@[^\s@]+\.[^\s@]+$/,
									message: "Please enter a valid email",
								},
							})}
						/>
						{errors.email && <p className={styles.errorText}>{errors.email.message}</p>}
					</div>
					<div className={`${styles.inputGroup} ${errors.phone ? styles.invalid : ""}`}>
						<label htmlFor="phone">Phone Number</label>
						<input
							type="tel"
							id="phone"
							{...register("phone", {
								required: "Phone number is required",
								pattern: {
									value: /^\+?[\d\s-]{8,}$/,
									message: "Please enter a valid phone number",
								},
							})}
						/>
						{errors.phone && <p className={styles.errorText}>{errors.phone.message}</p>}
					</div>
				</div>

				<div className={styles.inputRow}>
					<div className={`${styles.inputGroup} ${errors.company ? styles.invalid : ""}`}>
						<label htmlFor="company">Company Name</label>
						<input
							type="text"
							id="company"
							{...register("company", {
								required: "Company name is required",
								minLength: { value: 2, message: "Company name must be at least 2 characters" },
							})}
						/>
						{errors.company && <p className={styles.errorText}>{errors.company.message}</p>}
					</div>
				</div>

				<div className={styles.inputGroup}>
					<label htmlFor="message">Message</label>
					<textarea
						id="message"
						rows={4}
						cols={30}
						placeholder="Leave a message here..."
						{...register("message", {
							required: "Message is required",
							minLength: { value: 10, message: "Message must be at least 10 characters" },
						})}
					/>
					{errors.message && <p className={styles.errorText}>{errors.message.message}</p>}
				</div>

				<div className={styles.btnContainer}>
					<button type="submit" disabled={!isValid} className={styles.btn}>
						Submit
					</button>
				</div>
			</form>
			<ToastContainer
				position="top-right"
				autoClose={3000}
				hideProgressBar={false}
				newestOnTop
				closeOnClick
				rtl={false}
				pauseOnFocusLoss
				draggable
				pauseOnHover
			/>
		</>
	);
};

export default ContactForm;
