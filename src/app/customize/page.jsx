import CustomizePage from "../../components/Pages/customizePage";

export async function generateMetadata() {
	const title = "Customize Your Covers";
	const description =
		"Choose fabrics, colors, and sizing to tailor CoverCo Inc covers for your venue's trash cans, tray stands, tables, bars, and more.";
	const image = {
		url: "/images/slideshow1.webp",
		width: 1200,
		height: 630,
		alt: "Custom CoverCo Inc products",
	};

	return {
		title,
		description,
		keywords: ["customize covers", "hospitality covers", "fabric options", "CoverCo Inc", "branded covers"],
		openGraph: {
			title,
			description,
			url: "/customize",
			images: [image],
		},
		twitter: {
			card: "summary_large_image",
			title,
			description,
			images: [image],
		},
		alternates: {
			canonical: "/customize",
		},
	};
}

const Customize = () => {
	return (
		<>
			<CustomizePage />
		</>
	);
};

export default Customize;
