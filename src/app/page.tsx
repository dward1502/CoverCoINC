import type { Metadata } from "next";
import Hero from "@/components/sections/Hero";
import IndustriesGrid from "@/components/sections/IndustriesGrid";
import ProductHighlights from "@/components/sections/ProductHighlights";
import GalleryTeaser from "@/components/sections/GalleryTeaser";
import ProcessSteps from "@/components/sections/ProcessSteps";
import Testimonials from "@/components/sections/Testimonials";
import TrustSignals from "@/components/sections/TrustSignals";
import CTASection from "@/components/sections/CTASection";
import {
	getIndustries,
	getFeaturedCategories,
	getGalleryItems,
	getTestimonials,
} from "@/lib/queries";

export const metadata: Metadata = {
	title: "Custom Covers for Hospitality & Events",
	description:
		"CoverCo Inc creates tailored covers that elevate hospitality, sports, and event spaces with durable, brandable fabrics.",
	alternates: { canonical: "/" },
	openGraph: {
		title: "CoverCo Inc | Custom Covers for Hospitality & Events",
		description:
			"CoverCo Inc creates tailored covers that elevate hospitality, sports, and event spaces with durable, brandable fabrics.",
		url: "/",
		images: [{ url: "/images/coverCoLogo_white.png", width: 1200, height: 630, alt: "CoverCo Inc" }],
	},
	twitter: {
		card: "summary_large_image",
		creator: "@covercoinc02",
		site: "@covercoinc02",
		images: ["/images/coverCoLogo_white.png"],
	},
};

export default async function Home() {
	const [industries, categories, galleryItems, testimonials] = await Promise.all([
		getIndustries(),
		getFeaturedCategories(),
		getGalleryItems(),
		getTestimonials(),
	]);

	return (
		<>
			<Hero />
			<TrustSignals />
			<ProductHighlights categories={categories} />
			<IndustriesGrid industries={industries} />
			<ProcessSteps />
			<GalleryTeaser items={galleryItems} />
			<Testimonials testimonials={testimonials} />
			<CTASection
				title="Get Your Custom Quote Today"
				subtitle="Join hundreds of venues nationwide who trust CoverCo for their custom cover needs. Request a quote and our team will respond within 1-2 business days."
				variant="navy"
			/>
		</>
	);
}
