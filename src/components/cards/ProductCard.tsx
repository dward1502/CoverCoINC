import Link from "next/link";
import Image from "next/image";
import type { ProductCategory } from "@/types";
import { Card, CardHeader, CardTitle, CardDescription, CardContent } from "@/components/ui/card";
import { ArrowRight } from "lucide-react";

interface ProductCardProps {
  category: ProductCategory;
}

export default function ProductCard({ category }: ProductCardProps) {
  return (
    <Card className="group h-full flex flex-col">
      <div className="relative aspect-[4/3] overflow-hidden image-scale">
        <Image
          src={category.featuredImageUrl || "/images/products/placeholder.jpg"}
          alt={category.name}
          fill
          className="object-cover"
          sizes="(max-width: 768px) 100vw, (max-width: 1200px) 50vw, 33vw"
        />
        <div className="absolute inset-0 bg-gradient-to-t from-black/30 to-transparent opacity-0 group-hover:opacity-100 transition-opacity" />
      </div>
      <CardHeader className="flex-1">
        <CardTitle>{category.name}</CardTitle>
        <CardDescription>{category.shortDescription}</CardDescription>
      </CardHeader>
      <CardContent>
        <Link
          href={`/products/${category.slug}/`}
          className="inline-flex items-center gap-2 text-sm font-medium text-[#8b6d4b] hover:text-[#1a365d] transition-colors"
        >
          View Products
          <ArrowRight className="w-4 h-4 group-hover:translate-x-1 transition-transform" />
        </Link>
      </CardContent>
    </Card>
  );
}
