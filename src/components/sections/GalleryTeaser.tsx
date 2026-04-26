import Link from "next/link";
import Image from "next/image";
import type { GalleryItem } from "@/types";
import { ArrowRight } from "lucide-react";

interface GalleryTeaserProps {
  items: GalleryItem[];
}

export default function GalleryTeaser({ items }: GalleryTeaserProps) {
  if (!items.length) return null;

  const displayItems = items.slice(0, 4);

  return (
    <section className="section-padding bg-[#f5f0eb]">
      <div className="container-wide">
        <div className="flex flex-col md:flex-row md:items-end md:justify-between gap-4 mb-12">
          <div>
            <span className="text-xs uppercase tracking-[0.2em] text-[#8b6d4b] font-medium">
              Our Work
            </span>
            <h2 className="font-serif text-3xl md:text-4xl text-[#1a365d] mt-3 mb-4">
              Transformations & Projects
            </h2>
            <p className="text-[#6b6b6b] max-w-xl">
              See the difference custom covers make for venues across the country.
            </p>
          </div>
          <Link
            href="/gallery/"
            className="inline-flex items-center gap-2 text-sm font-medium text-[#8b6d4b] hover:text-[#1a365d] transition-colors self-start md:self-auto"
          >
            View Full Gallery
            <ArrowRight className="w-4 h-4" />
          </Link>
        </div>

        <div className="grid sm:grid-cols-2 lg:grid-cols-4 gap-4">
          {displayItems.map((item) => (
            <div
              key={item.id}
              className="group relative aspect-square overflow-hidden rounded-lg border border-[#e5ddd3] image-scale"
            >
              <Image
                src={item.imageUrl}
                alt={item.altText}
                fill
                className="object-cover"
                sizes="(max-width: 768px) 50vw, 25vw"
              />
              <div className="absolute inset-0 bg-gradient-to-t from-[#1a365d]/70 via-transparent to-transparent opacity-0 group-hover:opacity-100 transition-opacity" />
              <div className="absolute bottom-0 left-0 right-0 p-4 translate-y-full group-hover:translate-y-0 transition-transform">
                <p className="font-serif text-white text-sm">{item.title}</p>
                {item.caption && (
                  <p className="text-white/75 text-xs mt-1 line-clamp-2">{item.caption}</p>
                )}
              </div>
              {item.beforeAfterType && item.beforeAfterType !== "single" && (
                <span className="absolute top-3 left-3 px-2 py-0.5 bg-[#1a365d] text-white text-xs uppercase tracking-wider rounded">
                  {item.beforeAfterType}
                </span>
              )}
            </div>
          ))}
        </div>
      </div>
    </section>
  );
}
