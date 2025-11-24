import ConcertsPage from "../../components/Pages/industriesPage";

export async function generateMetadata() {
	const title = "Concert & Amphitheatre Covers";
	const description =
		"Protect and brand stages, concessions, and VIP areas with custom CoverCo Inc covers built for concert venues and amphitheatres.";
	const image = {
		url: "/images/slideshow4.jpg",
		width: 1200,
		height: 630,
		alt: "Concert venue with CoverCo Inc covers",
	};

	return {
		title,
		description,
		keywords: ["concert venue covers", "amphitheatre covers", "stage branding", "event covers", "CoverCo Inc"],
		openGraph: {
			title,
			description,
			url: "/concerts",
			images: [image],
		},
		twitter: {
			card: "summary_large_image",
			title,
			description,
			images: [image],
		},
		alternates: {
			canonical: "/concerts",
		},
	};
}

const Industries = () => {
	return (
		<>
			<ConcertsPage />
		</>
	);
};

export default Industries;
