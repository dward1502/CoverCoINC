import CasinosPage from "../../components/Pages/conventionsPage";

export async function generateMetadata() {
	const title = "Casino Floor Covers";
	const description =
		"Give casino floors and gaming areas a polished, branded look with CoverCo Inc covers built for high-traffic hospitality environments.";
	const image = {
		url: "/images/slideshow2.webp",
		width: 1200,
		height: 630,
		alt: "Casino floor fitted with CoverCo Inc covers",
	};

	return {
		title,
		description,
		keywords: ["casino covers", "gaming floor covers", "hospitality covers", "custom covers", "CoverCo Inc"],
		openGraph: {
			title,
			description,
			url: "/casinos",
			images: [image],
		},
		twitter: {
			card: "summary_large_image",
			title,
			description,
			images: [image],
		},
		alternates: {
			canonical: "/casinos",
		},
	};
}

const Conventions = () => {
	return (
		<>
			<CasinosPage />
		</>
	);
};

export default Conventions;
