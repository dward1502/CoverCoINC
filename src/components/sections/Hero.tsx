import Link from "next/link";
import Image from "next/image";
import { ArrowRight, Phone } from "lucide-react";

interface HeroProps {
  title?: string;
  subtitle?: string;
  tagline?: string;
  primaryCta?: { text: string; href: string };
  secondaryCta?: { text: string; href: string };
  backgroundImage?: string;
}

export default function Hero({
  title = "Custom Fitted Covers for Hospitality & Events",
  subtitle = "Premium branded covers tailored to your venue. From chair covers to trade show displays, CoverCo delivers Southern California craftsmanship trusted by hotels, casinos, stadiums, and convention centers nationwide.",
  tagline = "Since 1989",
  primaryCta = { text: "Request a Quote", href: "/quote/" },
  secondaryCta = { text: "Browse Products", href: "/products/" },
  backgroundImage = "/images/hero.jpg",
}: HeroProps) {
  return (
    <section className="relative min-h-[90vh] flex items-center overflow-hidden">
      {/* Background Image */}
      <div className="absolute inset-0">
        <Image
          src={backgroundImage}
          alt="CoverCo custom covers"
          fill
          className="object-cover"
          priority
          sizes="100vw"
        />
        <div className="absolute inset-0 bg-gradient-to-r from-[#1a365d]/90 via-[#1a365d]/75 to-[#1a365d]/40" />
      </div>

      {/* Content */}
      <div className="relative container-wide py-20 md:py-32">
        <div className="max-w-2xl">
          <span className="inline-block px-4 py-1.5 bg-[#8b6d4b]/20 text-[#f5f0eb] text-xs uppercase tracking-[0.2em] font-medium rounded-full mb-6 border border-[#8b6d4b]/30">
            {tagline}
          </span>
          <h1 className="font-serif text-4xl md:text-5xl lg:text-6xl text-white leading-[1.1] mb-6">
            {title}
          </h1>
          <p className="text-lg md:text-xl text-white/85 leading-relaxed mb-10 font-light max-w-xl">
            {subtitle}
          </p>
          <div className="flex flex-col sm:flex-row gap-4">
            <Link
              href={primaryCta.href}
              className="inline-flex items-center justify-center gap-2 px-8 py-4 bg-[#8b6d4b] text-white font-medium rounded-md hover:bg-[#8b6d4b]/90 btn-hover transition-colors"
            >
              {primaryCta.text}
              <ArrowRight className="w-4 h-4" />
            </Link>
            <Link
              href={secondaryCta.href}
              className="inline-flex items-center justify-center gap-2 px-8 py-4 bg-white/10 text-white font-medium rounded-md hover:bg-white/20 border border-white/30 btn-hover transition-colors backdrop-blur-sm"
            >
              {secondaryCta.text}
            </Link>
          </div>
          <div className="mt-10 flex items-center gap-4">
            <a
              href="tel:+18585550147"
              className="inline-flex items-center gap-2 text-white/70 hover:text-white transition-colors text-sm"
            >
              <Phone className="w-4 h-4" />
              <span>(858) 555-0147</span>
            </a>
            <span className="text-white/30">|</span>
            <span className="text-white/60 text-sm">Escondido, CA</span>
          </div>
        </div>
      </div>
    </section>
  );
}
