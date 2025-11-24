import AboutPage from "../../components/Pages/aboutPage";

export async function generateMetadata() {
	const title = "About CoverCo Inc";
	const description =
		"Discover CoverCo Inc's mission to craft custom hospitality covers made in the USA with tailored patterns, premium fabrics, and attentive service.";
	const image = {
		url: "/images/aboutHero.webp",
		width: 1200,
		height: 630,
		alt: "CoverCo Inc about page hero",
	};

	return {
		title,
		description,
		keywords: ["CoverCo Inc", "about CoverCo", "custom covers", "hospitality covers", "made in USA"],
		openGraph: {
			title,
			description,
			url: "/about",
			images: [image],
		},
		twitter: {
			card: "summary_large_image",
			title,
			description,
			images: [image],
		},
		alternates: {
			canonical: "/about",
		},
	};
}

const index = () => {
	return (
		<>
			<AboutPage />
		</>
	);
};

export default index;
