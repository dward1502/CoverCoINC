import type { Metadata } from "next";
import Image from "next/image";
import Link from "next/link";
import { notFound } from "next/navigation";
import { getProductCategories, getProductCategoryBySlug, getProductsByCategory } from "@/lib/queries";
import CTASection from "@/components/sections/CTASection";
import { ArrowRight, Check, Palette, Ruler, Tag } from "lucide-react";

interface ProductCategoryPageProps {
  params: Promise<{ slug: string }>;
}

export async function generateStaticParams() {
  const categories = await getProductCategories();
  return categories.map((cat) => ({ slug: cat.slug }));
}

export async function generateMetadata({
  params,
}: ProductCategoryPageProps): Promise<Metadata> {
  const { slug } = await params;
  const category = await getProductCategoryBySlug(slug);
  if (!category) return {};

  return {
    title: category.name,
    description: category.shortDescription,
  };
}

export default async function ProductCategoryPage({ params }: ProductCategoryPageProps) {
  const { slug } = await params;
  const category = await getProductCategoryBySlug(slug);

  if (!category) {
    notFound();
  }

  const products = await getProductsByCategory(category.id);

  return (
    <>
      {/* Hero */}
      <section className="relative py-20 md:py-28 bg-[#1a365d] overflow-hidden">
        {category.heroImageUrl && (
          <div className="absolute inset-0 opacity-15">
            <Image
              src={category.heroImageUrl}
              alt=""
              fill
              className="object-cover"
              aria-hidden="true"
            />
          </div>
        )}
        <div className="relative container-wide">
          <Link
            href="/products/"
            className="text-sm text-white/60 hover:text-white transition-colors mb-4 inline-block"
          >
            &larr; Back to Products
          </Link>
          <h1 className="font-serif text-4xl md:text-5xl text-white mt-2 mb-6">
            {category.name}
          </h1>
          <p className="text-white/75 text-lg max-w-2xl leading-relaxed">
            {category.longDescription || category.shortDescription}
          </p>
        </div>
      </section>

      {/* Details */}
      <section className="section-padding bg-background">
        <div className="container-wide">
          {products.length > 0 ? (
            <div className="space-y-12">
              {products.map((product) => (
                <div
                  key={product.id}
                  className="grid lg:grid-cols-2 gap-8 bg-white rounded-lg border border-[#e5ddd3] overflow-hidden"
                >
                  <div className="p-8">
                    <h2 className="font-serif text-2xl text-[#1a365d] mb-3">
                      {product.name}
                    </h2>
                    <p className="text-[#6b6b6b] mb-6 leading-relaxed">
                      {product.description}
                    </p>

                    {product.useCases.length > 0 && (
                      <div className="mb-6">
                        <div className="flex items-center gap-2 mb-3">
                          <Tag className="w-4 h-4 text-[#8b6d4b]" />
                          <span className="text-sm font-medium text-[#2c2c2c]">
                            Typical Use Cases
                          </span>
                        </div>
                        <ul className="space-y-2">
                          {product.useCases.map((use) => (
                            <li
                              key={use}
                              className="flex items-start gap-2 text-sm text-[#6b6b6b]"
                            >
                              <Check className="w-4 h-4 text-[#8b6d4b] shrink-0 mt-0.5" />
                              {use}
                            </li>
                          ))}
                        </ul>
                      </div>
                    )}

                    <div className="grid sm:grid-cols-2 gap-4">
                      {product.availableFabrics.length > 0 && (
                        <div>
                          <div className="flex items-center gap-2 mb-2">
                            <Palette className="w-4 h-4 text-[#8b6d4b]" />
                            <span className="text-sm font-medium text-[#2c2c2c]">
                              Fabrics
                            </span>
                          </div>
                          <div className="flex flex-wrap gap-2">
                            {product.availableFabrics.map((fabric) => (
                              <span
                                key={fabric}
                                className="px-2 py-1 bg-[#f5f0eb] text-[#8b6d4b] text-xs rounded"
                              >
                                {fabric}
                              </span>
                            ))}
                          </div>
                        </div>
                      )}

                      {product.availableColors.length > 0 && (
                        <div>
                          <div className="flex items-center gap-2 mb-2">
                            <Ruler className="w-4 h-4 text-[#8b6d4b]" />
                            <span className="text-sm font-medium text-[#2c2c2c]">
                              Colors
                            </span>
                          </div>
                          <div className="flex flex-wrap gap-2">
                            {product.availableColors.map((color) => (
                              <span
                                key={color}
                                className="px-2 py-1 bg-[#f5f0eb] text-[#8b6d4b] text-xs rounded"
                              >
                                {color}
                              </span>
                            ))}
                          </div>
                        </div>
                      )}
                    </div>

                    {product.brandingOptions.length > 0 && (
                      <div className="mt-6 pt-6 border-t border-[#e5ddd3]">
                        <span className="text-sm font-medium text-[#2c2c2c]">
                          Branding Options
                        </span>
                        <div className="mt-2 flex flex-wrap gap-2">
                          {product.brandingOptions.map((option) => (
                            <span
                              key={option}
                              className="px-3 py-1 border border-[#e5ddd3] text-[#2c2c2c] text-xs rounded-full"
                            >
                              {option}
                            </span>
                          ))}
                        </div>
                      </div>
                    )}

                    <Link
                      href="/quote/"
                      className="inline-flex items-center gap-2 mt-6 px-6 py-3 bg-[#1a365d] text-white text-sm font-medium rounded-md hover:bg-[#1a365d]/90 btn-hover transition-colors"
                    >
                      Request a Quote
                      <ArrowRight className="w-4 h-4" />
                    </Link>
                  </div>

                  {product.imageUrl && (
                    <div className="relative aspect-[4/3] lg:aspect-auto">
                      <Image
                        src={product.imageUrl}
                        alt={product.name}
                        fill
                        className="object-cover"
                        sizes="(max-width: 1024px) 100vw, 50vw"
                      />
                    </div>
                  )}
                </div>
              ))}
            </div>
          ) : (
            <div className="text-center py-16">
              <p className="text-[#6b6b6b] mb-6">
                Detailed product listings coming soon. Contact us for specific product information.
              </p>
              <Link
                href="/quote/"
                className="inline-flex items-center gap-2 px-6 py-3 bg-[#1a365d] text-white text-sm font-medium rounded-md hover:bg-[#1a365d]/90 btn-hover transition-colors"
              >
                Request a Quote
                <ArrowRight className="w-4 h-4" />
              </Link>
            </div>
          )}
        </div>
      </section>

      <CTASection
        title={`Ready to Order ${category.name}?`}
        subtitle="Get a custom quote tailored to your specifications. Our team will help you select the right fabrics, colors, and branding options."
        variant="navy"
      />
    </>
  );
}
