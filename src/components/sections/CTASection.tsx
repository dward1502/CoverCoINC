import Link from "next/link";
import { ArrowRight } from "lucide-react";

interface CTASectionProps {
  title?: string;
  subtitle?: string;
  primaryCta?: { text: string; href: string };
  secondaryCta?: { text: string; href: string } | null;
  variant?: "navy" | "sand" | "light";
}

export default function CTASection({
  title = "Ready to Transform Your Venue?",
  subtitle = "Get a custom quote tailored to your project. Our team is ready to help you find the perfect cover solution.",
  primaryCta = { text: "Request a Quote", href: "/quote/" },
  secondaryCta = { text: "Contact Us", href: "/contact/" },
  variant = "navy",
}: CTASectionProps) {
  const bgColors = {
    navy: "bg-[#1a365d]",
    sand: "bg-[#8b6d4b]",
    light: "bg-[#f5f0eb]",
  };

  const textColors = {
    navy: "text-white",
    sand: "text-white",
    light: "text-[#1a365d]",
  };

  const subtextColors = {
    navy: "text-white/75",
    sand: "text-white/75",
    light: "text-[#6b6b6b]",
  };

  const btnClasses = {
    navy: "bg-[#8b6d4b] text-white hover:bg-[#8b6d4b]/90",
    sand: "bg-white text-[#8b6d4b] hover:bg-white/90",
    light: "bg-[#1a365d] text-white hover:bg-[#1a365d]/90",
  };

  const outlineBtnClasses = {
    navy: "border border-white/30 text-white hover:bg-white/10",
    sand: "border border-white/30 text-white hover:bg-white/10",
    light: "border border-[#1a365d] text-[#1a365d] hover:bg-[#1a365d]/5",
  };

  return (
    <section className={`${bgColors[variant]} section-padding`}>
      <div className="container-narrow text-center">
        <h2 className={`font-serif text-3xl md:text-4xl ${textColors[variant]} mb-4`}>
          {title}
        </h2>
        <p className={`${subtextColors[variant]} text-lg mb-8 max-w-2xl mx-auto`}>
          {subtitle}
        </p>
        <div className="flex flex-col sm:flex-row gap-4 justify-center">
          <Link
            href={primaryCta.href}
            className={`inline-flex items-center justify-center gap-2 px-8 py-4 font-medium rounded-md btn-hover transition-colors ${btnClasses[variant]}`}
          >
            {primaryCta.text}
            <ArrowRight className="w-4 h-4" />
          </Link>
          {secondaryCta && (
            <Link
              href={secondaryCta.href}
              className={`inline-flex items-center justify-center gap-2 px-8 py-4 font-medium rounded-md btn-hover transition-colors ${outlineBtnClasses[variant]}`}
            >
              {secondaryCta.text}
            </Link>
          )}
        </div>
      </div>
    </section>
  );
}
