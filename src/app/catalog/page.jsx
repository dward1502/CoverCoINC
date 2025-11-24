import CatalogPage from "../../components/Pages/catalogPage";

export async function generateMetadata() {
	const title = "Catalogs & Product Gallery";
	const description =
		"Preview CoverCo Inc catalogs for sports, conventions, universities, casinos, and restaurants, and connect with our team for tailored cover solutions.";
	const image = {
		url: "/images/slideshow2.webp",
		width: 1200,
		height: 630,
		alt: "CoverCo Inc catalog preview",
	};

	return {
		title,
		description,
		keywords: ["CoverCo catalog", "product catalog", "custom covers", "hospitality covers", "event covers"],
		openGraph: {
			title,
			description,
			url: "/catalog",
			images: [image],
		},
		twitter: {
			card: "summary_large_image",
			title,
			description,
			images: [image],
		},
		alternates: {
			canonical: "/catalog",
		},
	};
}

const Catalog = () => {
	return <CatalogPage />;
};

export default Catalog;
