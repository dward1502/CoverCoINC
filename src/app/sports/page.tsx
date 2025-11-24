import type { Metadata } from "next";
import SportsPage from "../../components/Pages/sportsPage";

export async function generateMetadata(): Promise<Metadata> {
	const title = "Sports Venue Covers";
	const description =
		"Outfit stadiums and arenas with durable, brandable CoverCo Inc covers for concessions, trash cans, and event equipment.";
	const image = {
		url: "/images/slideshow1.webp",
		width: 1200,
		height: 630,
		alt: "Sports venue using CoverCo Inc covers",
	};

	return {
		title,
		description,
		keywords: ["sports covers", "stadium covers", "arena branding", "custom covers", "CoverCo Inc"],
		openGraph: {
			title,
			description,
			url: "/sports",
			images: [image],
		},
		twitter: {
			card: "summary_large_image",
			title,
			description,
			images: [image],
		},
		alternates: {
			canonical: "/sports",
		},
	};
}

const Sports = () => {
	return (
		<>
			<SportsPage />
		</>
	);
};

export default Sports;
