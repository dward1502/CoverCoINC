import HomePage from "../components/Pages/homePage";
import styles from "../scss/Home.module.scss"
import { Metadata } from "next";

export const metadata: Metadata = {
  title: "CoverCo Inc",
  description:
    "CoverCo Inc where we provide covers for your business object needs.",
  keywords: [
    "covers",
    //TODO ADD MORE KEYWORDS
  ],
  openGraph: {
    url: "https://covercoinc.com",
    type: "website",
    title: "CoverCo Inc",
    description:
      "CoverCo Inc where we provide covers for your business object needs.",
    images: [
      {
        url: "https://covercoinc.com/images/coverCoLogo_white.png",
        width: 1200,
        height: 630,
        alt: "covercoinc"
      }
    ]
  },
  twitter: {
    card: "summary_large_image",
    title: "CoverCo Inc",
    description:
      "CoverCo Inc where we provide covers for your business object needs.",
    creator: "@covercoinc02",
    site: "@covercoinc02",
    images: [
      {
        url: "https://covercoinc.com/images/coverCoLogo_white.png",
        width: 1200,
        height: 630,
        alt: "covercoinc"
      }
    ]
  },
  alternates: {
    canonical: "https://covercoinc.com"
  }
};

export default function Home() {
	return (
		<main className={styles.main}>
			<HomePage />
		</main>
	);
}
