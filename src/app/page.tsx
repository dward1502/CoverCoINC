import type { Metadata } from "next";
import HomePage from "../components/Pages/homePage";
import styles from "../scss/Home.module.scss";

export async function generateMetadata(): Promise<Metadata> {
	const title = "Custom Covers for Hospitality & Events";
	const description =
		"CoverCo Inc creates tailored covers that elevate hospitality, sports, and event spaces with durable, brandable fabrics.";
	const sharedImage = {
		url: "/images/coverCoLogo_white.png",
		width: 1200,
		height: 630,
		alt: "CoverCo Inc custom cover solutions",
	};

	return {
		title,
		description,
		keywords: ["CoverCo Inc", "custom covers", "hospitality covers", "event branding", "fabric covers"],
		openGraph: {
			title,
			description,
			url: "/",
			images: [sharedImage],
		},
		twitter: {
			card: "summary_large_image",
			title,
			description,
			creator: "@covercoinc02",
			site: "@covercoinc02",
			images: [sharedImage],
		},
		alternates: {
			canonical: "/",
		},
	};
}

export default function Home() {
	return (
		<main className={styles.main}>
			<HomePage />
		</main>
	);
}
