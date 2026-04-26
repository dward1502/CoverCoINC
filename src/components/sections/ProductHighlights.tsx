import type { ProductCategory } from "@/types";
import ProductCard from "@/components/cards/ProductCard";
import Link from "next/link";
import { ArrowRight } from "lucide-react";

interface ProductHighlightsProps {
  categories: ProductCategory[];
}

export default function ProductHighlights({ categories }: ProductHighlightsProps) {
  return (
    <section className="section-padding bg-background">
      <div className="container-wide">
        <div className="flex flex-col md:flex-row md:items-end md:justify-between gap-4 mb-12">
          <div>
            <span className="text-xs uppercase tracking-[0.2em] text-[#8b6d4b] font-medium">
              Our Products
            </span>
            <h2 className="font-serif text-3xl md:text-4xl text-[#1a365d] mt-3 mb-4">
              Custom Cover Solutions
            </h2>
            <p className="text-[#6b6b6b] max-w-xl">
              Every cover is made to order with precision measurements, premium fabrics, and expert craftsmanship.
            </p>
          </div>
          <Link
            href="/products/"
            className="inline-flex items-center gap-2 text-sm font-medium text-[#8b6d4b] hover:text-[#1a365d] transition-colors self-start md:self-auto"
          >
            View All Products
            <ArrowRight className="w-4 h-4" />
          </Link>
        </div>

        <div className="grid sm:grid-cols-2 lg:grid-cols-3 xl:grid-cols-4 gap-6">
          {categories.map((category) => (
            <ProductCard key={category.id} category={category} />
          ))}
        </div>
      </div>
    </section>
  );
}
