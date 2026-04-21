import type { Metadata } from "next";
import { getIndustries } from "@/lib/queries";
import IndustryCard from "@/components/cards/IndustryCard";
import CTASection from "@/components/sections/CTASection";

export const metadata: Metadata = {
  title: "Industries",
  description:
    "CoverCo serves hotels, sports venues, convention centers, casinos, restaurants, universities, and cruise lines with custom-fitted branded covers.",
};

export default async function IndustriesPage() {
  const industries = await getIndustries();

  return (
    <>
      {/* Hero */}
      <section className="pt-16 pb-12 md:pt-24 md:pb-16 bg-[#1a365d]">
        <div className="container-wide">
          <span className="text-xs uppercase tracking-[0.2em] text-[#8b6d4b] font-medium">
            Industries
          </span>
          <h1 className="font-serif text-4xl md:text-5xl text-white mt-4 mb-6">
            Solutions by Industry
          </h1>
          <p className="text-white/75 text-lg max-w-2xl leading-relaxed">
            We understand the unique demands of your industry. Explore how CoverCo delivers tailored cover solutions for your specific venue type.
          </p>
        </div>
      </section>

      {/* Industries Grid */}
      <section className="section-padding bg-background">
        <div className="container-wide">
          <div className="grid gap-8">
            {industries.map((industry, index) => (
              <IndustryCard
                key={industry.id}
                industry={industry}
                featured={index === 0}
              />
            ))}
          </div>
        </div>
      </section>

      <CTASection
        title="Not Sure Which Solution Fits?"
        subtitle="Our team has experience across every major venue type. Tell us about your project and we will recommend the right approach."
        variant="sand"
      />
    </>
  );
}
