import type { Viewport, Metadata } from "next";
import "./globals.css";
import Header from "@/components/layout/Header";
import Footer from "@/components/layout/Footer";
import { Toaster } from "sonner";

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
	icons: {
		icon: [
			{ url: "/favicon.ico", type: "image/x-icon" },
			{ url: "/images/coverCoLogo_white.png", sizes: "any", type: "image/png" },
		],
		shortcut: [{ url: "/favicon.ico", type: "image/x-icon" }],
		apple: [{ url: "/images/coverCoLogo_white.png", sizes: "180x180", type: "image/png" }],
	},
};

export default function RootLayout({ children }: { children: React.ReactNode }) {
	return (
		<html lang="en" className="h-full">
			<body className="min-h-full flex flex-col bg-background antialiased">
				<Toaster position="top-right" richColors />
				<Header />
				<main className="flex-1">{children}</main>
				<Footer />
			</body>
		</html>
	);
}
