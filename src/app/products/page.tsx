import type { Metadata } from "next";
import { getProductCategories, getProducts } from "@/lib/queries";
import ProductCard from "@/components/cards/ProductCard";
import CTASection from "@/components/sections/CTASection";

export const metadata: Metadata = {
  title: "Products",
  description:
    "Browse CoverCo's range of custom-fitted covers including chair covers, table covers, podium covers, bar covers, and more for hospitality and events.",
};

export default async function ProductsPage() {
  const [categories, products] = await Promise.all([
    getProductCategories(),
    getProducts(),
  ]);

  return (
    <>
      {/* Hero */}
      <section className="pt-16 pb-12 md:pt-24 md:pb-16 bg-[#1a365d]">
        <div className="container-wide">
          <span className="text-xs uppercase tracking-[0.2em] text-[#8b6d4b] font-medium">
            Our Products
          </span>
          <h1 className="font-serif text-4xl md:text-5xl text-white mt-4 mb-6">
            Custom Cover Solutions
          </h1>
          <p className="text-white/75 text-lg max-w-2xl leading-relaxed">
            Every product we make is built to order with your exact specifications. Browse our categories to find the right solution for your venue.
          </p>
        </div>
      </section>

      {/* Categories */}
      <section className="section-padding bg-background">
        <div className="container-wide">
          <div className="grid sm:grid-cols-2 lg:grid-cols-3 xl:grid-cols-4 gap-6">
            {categories.map((category) => (
              <ProductCard key={category.id} category={category} />
            ))}
          </div>
        </div>
      </section>

      {/* Product Families */}
      {products.length > 0 && (
        <section className="section-padding bg-[#f5f0eb]">
          <div className="container-wide">
            <div className="text-center mb-12">
              <span className="text-xs uppercase tracking-[0.2em] text-[#8b6d4b] font-medium">
                Product Families
              </span>
              <h2 className="font-serif text-3xl text-[#1a365d] mt-3">
                Popular Configurations
              </h2>
            </div>

            <div className="grid md:grid-cols-2 gap-6">
              {products.map((product) => (
                <div
                  key={product.id}
                  className="bg-white rounded-lg border border-[#e5ddd3] p-6 flex flex-col"
                >
                  <h3 className="font-serif text-xl text-[#1a365d] mb-2">
                    {product.name}
                  </h3>
                  <p className="text-[#6b6b6b] text-sm mb-4 flex-1">
                    {product.summary}
                  </p>
                  {product.useCases.length > 0 && (
                    <div className="mb-4">
                      <span className="text-xs uppercase tracking-wider text-[#8b6d4b] font-medium">
                        Common Uses
                      </span>
                      <ul className="mt-2 space-y-1">
                        {product.useCases.slice(0, 3).map((use) => (
                          <li key={use} className="text-sm text-[#6b6b6b] flex items-start gap-2">
                            <span className="text-[#8b6d4b] mt-0.5">-</span>
                            {use}
                          </li>
                        ))}
                      </ul>
                    </div>
                  )}
                  <div className="flex flex-wrap gap-2 mt-auto pt-4 border-t border-[#e5ddd3]">
                    {product.availableFabrics.slice(0, 3).map((fabric) => (
                      <span
                        key={fabric}
                        className="px-3 py-1 bg-[#f5f0eb] text-[#8b6d4b] text-xs rounded-full"
                      >
                        {fabric}
                      </span>
                    ))}
                  </div>
                </div>
              ))}
            </div>
          </div>
        </section>
      )}

      <CTASection
        title="Need Help Choosing?"
        subtitle="Our team can guide you to the right products for your venue and budget. Request a quote and we will recommend the best solutions."
        variant="sand"
      />
    </>
  );
}
