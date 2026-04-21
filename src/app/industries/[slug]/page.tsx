import type { Metadata } from "next";
import Image from "next/image";
import Link from "next/link";
import { notFound } from "next/navigation";
import { getIndustries, getIndustryBySlug, getProductCategories } from "@/lib/queries";
import CTASection from "@/components/sections/CTASection";
import { ArrowRight, Check } from "lucide-react";

interface IndustryPageProps {
  params: Promise<{ slug: string }>;
}

export async function generateStaticParams() {
  const industries = await getIndustries();
  return industries.map((ind) => ({ slug: ind.slug }));
}

export async function generateMetadata({
  params,
}: IndustryPageProps): Promise<Metadata> {
  const { slug } = await params;
  const industry = await getIndustryBySlug(slug);
  if (!industry) return {};

  return {
    title: industry.name,
    description: industry.summary,
  };
}

export default async function IndustryPage({ params }: IndustryPageProps) {
  const { slug } = await params;
  const industry = await getIndustryBySlug(slug);

  if (!industry) {
    notFound();
  }

  const allCategories = await getProductCategories();
  const recommendedCategories = allCategories.filter((cat) =>
    industry.recommendedCategories.some(
      (name) => name.toLowerCase() === cat.name.toLowerCase()
    )
  );

  return (
    <>
      {/* Hero */}
      <section className="relative py-20 md:py-28 bg-[#1a365d] overflow-hidden">
        {industry.heroImageUrl && (
          <div className="absolute inset-0 opacity-20">
            <Image
              src={industry.heroImageUrl}
              alt=""
              fill
              className="object-cover"
              aria-hidden="true"
            />
          </div>
        )}
        <div className="relative container-wide">
          <Link
            href="/industries/"
            className="text-sm text-white/60 hover:text-white transition-colors mb-4 inline-block"
          >
            &larr; Back to Industries
          </Link>
          <h1 className="font-serif text-4xl md:text-5xl text-white mt-2 mb-6">
            {industry.name}
          </h1>
          <p className="text-white/75 text-lg max-w-2xl leading-relaxed">
            {industry.description || industry.summary}
          </p>
        </div>
      </section>

      {/* Benefits */}
      <section className="section-padding bg-background">
        <div className="container-wide">
          <div className="grid lg:grid-cols-2 gap-12">
            <div>
              <span className="text-xs uppercase tracking-[0.2em] text-[#8b6d4b] font-medium">
                Why CoverCo
              </span>
              <h2 className="font-serif text-3xl text-[#1a365d] mt-3 mb-6">
                Benefits for {industry.name}
              </h2>
              <ul className="space-y-4">
                {industry.benefits.map((benefit) => (
                  <li
                    key={benefit}
                    className="flex items-start gap-4 bg-[#f5f0eb] p-4 rounded-lg"
                  >
                    <div className="w-8 h-8 rounded-full bg-[#1a365d] flex items-center justify-center shrink-0">
                      <Check className="w-4 h-4 text-white" />
                    </div>
                    <span className="text-sm text-[#2c2c2c] pt-1">{benefit}</span>
                  </li>
                ))}
              </ul>
            </div>

            <div className="relative aspect-[4/3] rounded-lg overflow-hidden">
              <Image
                src={industry.heroImageUrl || "/images/industries/placeholder.jpg"}
                alt={industry.name}
                fill
                className="object-cover"
                sizes="(max-width: 1024px) 100vw, 50vw"
              />
            </div>
          </div>
        </div>
      </section>

      {/* Recommended Products */}
      {recommendedCategories.length > 0 && (
        <section className="section-padding bg-[#f5f0eb]">
          <div className="container-wide">
            <div className="text-center mb-10">
              <h2 className="font-serif text-3xl text-[#1a365d] mb-4">
                Recommended for {industry.name}
              </h2>
              <p className="text-[#6b6b6b] max-w-2xl mx-auto">
                Based on our experience serving this industry, these product categories are most commonly requested.
              </p>
            </div>

            <div className="grid sm:grid-cols-2 lg:grid-cols-3 gap-6">
              {recommendedCategories.map((cat) => (
                <Link
                  key={cat.id}
                  href={`/products/${cat.slug}/`}
                  className="group bg-white rounded-lg border border-[#e5ddd3] overflow-hidden card-hover"
                >
                  <div className="p-6">
                    <h3 className="font-serif text-lg text-[#1a365d] mb-2 group-hover:text-[#8b6d4b] transition-colors">
                      {cat.name}
                    </h3>
                    <p className="text-sm text-[#6b6b6b]">{cat.shortDescription}</p>
                    <div className="mt-4 flex items-center gap-2 text-sm font-medium text-[#8b6d4b]">
                      View Products
                      <ArrowRight className="w-4 h-4 group-hover:translate-x-1 transition-transform" />
                    </div>
                  </div>
                </Link>
              ))}
            </div>
          </div>
        </section>
      )}

      <CTASection
        title={`Ready to Upgrade Your ${industry.name}?`}
        subtitle="Request a quote and our team will create a custom proposal tailored to your venue's needs."
        variant="navy"
      />
    </>
  );
}
