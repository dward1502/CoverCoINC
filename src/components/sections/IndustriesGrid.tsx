import Link from "next/link";
import Image from "next/image";
import type { Industry } from "@/types";
import { ArrowRight } from "lucide-react";

interface IndustriesGridProps {
  industries: Industry[];
}

export default function IndustriesGrid({ industries }: IndustriesGridProps) {
  return (
    <section className="section-padding bg-[#f5f0eb]">
      <div className="container-wide">
        <div className="text-center mb-12">
          <span className="text-xs uppercase tracking-[0.2em] text-[#8b6d4b] font-medium">
            Who We Serve
          </span>
          <h2 className="font-serif text-3xl md:text-4xl text-[#1a365d] mt-3 mb-4">
            Industries We Specialize In
          </h2>
          <p className="text-[#6b6b6b] max-w-2xl mx-auto">
            From luxury hotels to major sporting venues, we understand the unique demands of your industry and deliver covers that meet your standards.
          </p>
        </div>

        <div className="grid sm:grid-cols-2 lg:grid-cols-3 gap-6">
          {industries.map((industry) => (
            <Link
              key={industry.id}
              href={`/industries/${industry.slug}/`}
              className="group relative overflow-hidden rounded-lg bg-white border border-[#e5ddd3] card-hover"
            >
              <div className="relative aspect-[16/10] overflow-hidden image-scale">
                <Image
                  src={industry.heroImageUrl || "/images/industries/placeholder.jpg"}
                  alt={industry.name}
                  fill
                  className="object-cover"
                  sizes="(max-width: 768px) 100vw, (max-width: 1200px) 50vw, 33vw"
                />
                <div className="absolute inset-0 bg-gradient-to-t from-[#1a365d]/85 via-[#1a365d]/30 to-transparent" />
                <div className="absolute bottom-0 left-0 right-0 p-5">
                  <h3 className="font-serif text-lg text-white mb-1">{industry.name}</h3>
                  <p className="text-white/75 text-sm line-clamp-2">{industry.summary}</p>
                </div>
              </div>
              <div className="p-4 flex items-center justify-between">
                <span className="text-sm font-medium text-[#8b6d4b]">Learn More</span>
                <ArrowRight className="w-4 h-4 text-[#8b6d4b] group-hover:translate-x-1 transition-transform" />
              </div>
            </Link>
          ))}
        </div>
      </div>
    </section>
  );
}
