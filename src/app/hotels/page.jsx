import HotelsPage from "../../components/Pages/hotelsPage";

export async function generateMetadata() {
	const title = "Hotel & Country Club Covers";
	const description =
		"Keep resort, hotel, and country club operations polished with CoverCo Inc covers made for lobby, poolside, and banquet essentials.";
	const image = {
		url: "/images/slideshow.jpg",
		width: 1200,
		height: 630,
		alt: "Hotel and country club covers by CoverCo Inc",
	};

	return {
		title,
		description,
		keywords: ["hotel covers", "country club covers", "hospitality covers", "resort branding", "CoverCo Inc"],
		openGraph: {
			title,
			description,
			url: "/hotels",
			images: [image],
		},
		twitter: {
			card: "summary_large_image",
			title,
			description,
			images: [image],
		},
		alternates: {
			canonical: "/hotels",
		},
	};
}

const Hotels = () => {
	return (
		<>
			<HotelsPage />
		</>
	);
};

export default Hotels;
