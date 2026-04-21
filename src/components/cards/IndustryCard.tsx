import Link from "next/link";
import Image from "next/image";
import type { Industry } from "@/types";
import { ArrowRight } from "lucide-react";
import { cn } from "@/lib/utils";

interface IndustryCardProps {
  industry: Industry;
  featured?: boolean;
}

export default function IndustryCard({ industry, featured }: IndustryCardProps) {
  if (featured) {
    return (
      <div className="group relative overflow-hidden rounded-lg bg-white border border-[#e5ddd3] card-hover">
        <div className="grid md:grid-cols-2">
          <div className="relative aspect-[4/3] md:aspect-auto overflow-hidden image-scale">
            <Image
              src={industry.heroImageUrl || "/images/industries/placeholder.jpg"}
              alt={industry.name}
              fill
              className="object-cover"
              sizes="(max-width: 768px) 100vw, 50vw"
            />
          </div>
          <div className="p-8 flex flex-col justify-center">
            <span className="text-xs uppercase tracking-widest text-[#8b6d4b] mb-3">
              Industry
            </span>
            <h3 className="font-serif text-2xl text-[#1a365d] mb-4">{industry.name}</h3>
            <p className="text-[#6b6b6b] text-sm leading-relaxed mb-6">
              {industry.summary}
            </p>
            <ul className="space-y-2 mb-6">
              {industry.benefits.slice(0, 3).map((benefit) => (
                <li key={benefit} className="flex items-start gap-2 text-sm text-[#6b6b6b]">
                  <span className="text-[#8b6d4b] mt-0.5">-</span>
                  {benefit}
                </li>
              ))}
            </ul>
            <Link
              href={`/industries/${industry.slug}/`}
              className="inline-flex items-center gap-2 text-sm font-medium text-[#8b6d4b] hover:text-[#1a365d] transition-colors self-start"
            >
              Learn More
              <ArrowRight className="w-4 h-4 group-hover:translate-x-1 transition-transform" />
            </Link>
          </div>
        </div>
      </div>
    );
  }

  return (
    <div className="group relative overflow-hidden rounded-lg bg-white border border-[#e5ddd3] card-hover">
      <div className="relative aspect-[16/10] overflow-hidden image-scale">
        <Image
          src={industry.heroImageUrl || "/images/industries/placeholder.jpg"}
          alt={industry.name}
          fill
          className="object-cover"
          sizes="(max-width: 768px) 100vw, (max-width: 1200px) 50vw, 33vw"
        />
        <div className="absolute inset-0 bg-gradient-to-t from-[#1a365d]/80 via-[#1a365d]/20 to-transparent" />
        <div className="absolute bottom-0 left-0 right-0 p-6">
          <span className="text-xs uppercase tracking-widest text-[#8b6d4b] mb-2 block">
            Industry
          </span>
          <h3 className="font-serif text-xl text-white mb-2">{industry.name}</h3>
          <p className="text-white/80 text-sm line-clamp-2">{industry.summary}</p>
        </div>
      </div>
      <div className="p-6">
        <Link
          href={`/industries/${industry.slug}/`}
          className="inline-flex items-center gap-2 text-sm font-medium text-[#8b6d4b] hover:text-[#1a365d] transition-colors"
        >
          Explore Solutions
          <ArrowRight className="w-4 h-4 group-hover:translate-x-1 transition-transform" />
        </Link>
      </div>
    </div>
  );
}
