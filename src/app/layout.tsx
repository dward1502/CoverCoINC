import type { Viewport, Metadata } from "next";
import { Inter } from "next/font/google";
import "../scss/globals.scss";
import styles from "../scss/Home.module.scss";
import Navigation from "../components/Navigation/Navigation";
import Footer from "../components/Footer/Footer";
import { ToastContainer } from "react-toastify";
const inter = Inter({ subsets: ["latin"] });

export const viewport: Viewport = {
	width: "device-width",
	initialScale: 1,
	themeColor: "#ffffff",
};

export const metadata: Metadata = {
	metadataBase: new URL("https://covercoinc.com"),
	title: {
		default: "CoverCo Inc | Custom Covers for Hospitality & Events",
		template: "%s | CoverCo Inc",
	},
	description:
		"CoverCo Inc designs custom-fitted, brand-ready covers for hospitality venues, stadiums, convention centers, and event spaces using long-lasting fabrics.",
	keywords: ["CoverCo Inc", "custom covers", "hospitality covers", "event branding", "fabric covers"],
	openGraph: {
		siteName: "Cover Co Inc",
		type: "website",
		locale: "en_US",
		title: "CoverCo Inc | Custom Covers for Hospitality & Events",
		description:
			"CoverCo Inc designs custom-fitted, brand-ready covers for hospitality venues, stadiums, convention centers, and event spaces using long-lasting fabrics.",
		url: "https://covercoinc.com",
		images: [
			{
				url: "/images/coverCoLogo_white.png",
				width: 1200,
				height: 630,
				alt: "CoverCo Inc logo",
			},
		],
	},
	twitter: {
		card: "summary_large_image",
		title: "CoverCo Inc | Custom Covers for Hospitality & Events",
		description:
			"CoverCo Inc designs custom-fitted, brand-ready covers for hospitality venues, stadiums, convention centers, and event spaces using long-lasting fabrics.",
		images: ["/images/coverCoLogo_white.png"],
	},
	robots: {
		index: true,
		follow: true,
		"max-image-preview": "large",
		"max-snippet": -1,
		"max-video-preview": -1,
		googleBot: "index, follow",
	},
	applicationName: "CoverCo Inc",
	appleWebApp: {
		title: "CoverCo Inc",
		statusBarStyle: "default",
		capable: true,
	},
	// verification: {
	//   google: "YOUR_DATA",
	//   yandex: ["YOUR_DATA"],
	//   other: {
	//     "msvalidate.01": ["YOUR_DATA"],
	//     "facebook-domain-verification": ["YOUR_DATA"]
	//   }
	// },
	icons: {
		icon: [
			{
				url: "/coverCoLogo_white.ico",
				type: "image/x-icon",
			},
			{
				url: "/images/coverCoLogo_white.png",
				sizes: "32x32",
				type: "image/png",
			},
		],
		shortcut: [
			{
				url: "/coverCoLogo_white.ico",
				type: "image/x-icon",
			},
		],
		apple: [
			{
				url: "/images/coverCoLogo_white.png",
				sizes: "180x180",
				type: "image/png",
			},
		],
	},
};

export default function RootLayout({ children }) {
	return (
		<html lang="en">
			<body className={inter.className}>
				<ToastContainer
					position="top-right"
					autoClose={5000}
					hideProgressBar={false}
					newestOnTop={false}
					closeOnClick={true}
					rtl={false}
					pauseOnFocusLoss
					pauseOnHover
				/>
				<Navigation />
				<main className={styles.content}>{children}</main>
				<Footer />
			</body>
		</html>
	);
}
