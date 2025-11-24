import ContactPage from "../../components/Pages/contactPage";

export async function generateMetadata() {
	const title = "Contact CoverCo Inc";
	const description =
		"Reach out to CoverCo Inc for quotes, custom cover orders, or questions about our hospitality and event solutions in Del Mar, CA.";
	const image = {
		url: "/images/coverCoLogo_white.png",
		width: 1200,
		height: 630,
		alt: "CoverCo Inc logo",
	};

	return {
		title,
		description,
		keywords: ["CoverCo contact", "custom cover quote", "hospitality covers", "Del Mar CA", "CoverCo Inc"],
		openGraph: {
			title,
			description,
			url: "/contact",
			images: [image],
		},
		twitter: {
			card: "summary_large_image",
			title,
			description,
			images: [image],
		},
		alternates: {
			canonical: "/contact",
		},
	};
}

const Contact = () => {
	return (
		<>
			<ContactPage />
		</>
	);
};

export default Contact;
