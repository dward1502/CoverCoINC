import ConventionsPage from "../../components/Pages/conventionsPage";

export async function generateMetadata() {
	const title = "Convention Center Covers";
	const description =
		"Outfit expo halls and convention centers with CoverCo Inc covers that keep equipment polished, branded, and event-ready.";
	const image = {
		url: "/images/slideshow5.jpg",
		width: 1200,
		height: 630,
		alt: "Convention center covered with branded materials",
	};

	return {
		title,
		description,
		keywords: ["convention center covers", "expo covers", "event branding", "custom covers", "CoverCo Inc"],
		openGraph: {
			title,
			description,
			url: "/conventions",
			images: [image],
		},
		twitter: {
			card: "summary_large_image",
			title,
			description,
			images: [image],
		},
		alternates: {
			canonical: "/conventions",
		},
	};
}

const Conventions = () => {
	return (
		<>
			<ConventionsPage />
		</>
	);
};

export default Conventions;
