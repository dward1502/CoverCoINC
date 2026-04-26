import type { Testimonial } from "@/types";
import { Quote } from "lucide-react";

interface TestimonialsProps {
  testimonials: Testimonial[];
}

export default function Testimonials({ testimonials }: TestimonialsProps) {
  if (!testimonials.length) return null;

  return (
    <section className="section-padding bg-[#1a365d]">
      <div className="container-wide">
        <div className="text-center mb-12">
          <span className="text-xs uppercase tracking-[0.2em] text-[#8b6d4b] font-medium">
            Testimonials
          </span>
          <h2 className="font-serif text-3xl md:text-4xl text-white mt-3">
            Trusted by Industry Leaders
          </h2>
        </div>

        <div className="grid md:grid-cols-3 gap-8">
          {testimonials.map((t) => (
            <div
              key={t.id}
              className="bg-white/5 backdrop-blur-sm border border-white/10 rounded-lg p-8"
            >
              <Quote className="w-8 h-8 text-[#8b6d4b] mb-4" />
              <blockquote className="text-white/90 text-sm leading-relaxed mb-6 italic">
                &ldquo;{t.quote}&rdquo;
              </blockquote>
              <div>
                <p className="font-medium text-white text-sm">{t.name}</p>
                {(t.role || t.company) && (
                  <p className="text-white/60 text-xs mt-0.5">
                    {t.role}{t.role && t.company ? ", " : ""}{t.company}
                  </p>
                )}
              </div>
            </div>
          ))}
        </div>
      </div>
    </section>
  );
}
