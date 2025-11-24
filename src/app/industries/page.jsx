import IndustriesPage from "../../components/Pages/industriesPage";

export async function generateMetadata() {
	const title = "Industries We Serve";
	const description =
		"Explore how CoverCo Inc outfits sports venues, hotels, casinos, convention centers, and amphitheatres with tailored cover solutions.";
	const image = {
		url: "/images/slideshow2.webp",
		width: 1200,
		height: 630,
		alt: "Industries served by CoverCo Inc",
	};

	return {
		title,
		description,
		keywords: ["industries", "hospitality covers", "custom covers", "event covers", "CoverCo Inc"],
		openGraph: {
			title,
			description,
			url: "/industries",
			images: [image],
		},
		twitter: {
			card: "summary_large_image",
			title,
			description,
			images: [image],
		},
		alternates: {
			canonical: "/industries",
		},
	};
}

const Industries = () => {
	return (
		<>
			<IndustriesPage />
		</>
	);
};

export default Industries;
