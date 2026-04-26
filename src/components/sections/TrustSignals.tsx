import { ShieldCheck, Clock, Award, Headphones } from "lucide-react";

const signals = [
  {
    icon: ShieldCheck,
    title: "35+ Years Experience",
    description: "Serving hospitality and commercial venues since 1989 with proven reliability.",
  },
  {
    icon: Clock,
    title: "On-Time Delivery",
    description: "Production timelines you can count on, with rush options when you need them most.",
  },
  {
    icon: Award,
    title: "Premium Materials",
    description: "Commercial-grade fabrics selected for durability, appearance, and ease of care.",
  },
  {
    icon: Headphones,
    title: "Dedicated Support",
    description: "Personal account management from quote through delivery and beyond.",
  },
];

export default function TrustSignals() {
  return (
    <section className="section-padding bg-[#f5f0eb]">
      <div className="container-wide">
        <div className="text-center mb-12">
          <span className="text-xs uppercase tracking-[0.2em] text-[#8b6d4b] font-medium">
            Why CoverCo
          </span>
          <h2 className="font-serif text-3xl md:text-4xl text-[#1a365d] mt-3 mb-4">
            The CoverCo Difference
          </h2>
        </div>

        <div className="grid sm:grid-cols-2 lg:grid-cols-4 gap-8">
          {signals.map((signal) => (
            <div key={signal.title} className="text-center">
              <div className="w-16 h-16 mx-auto mb-5 bg-white rounded-full flex items-center justify-center border border-[#e5ddd3]">
                <signal.icon className="w-7 h-7 text-[#8b6d4b]" />
              </div>
              <h3 className="font-serif text-lg text-[#1a365d] mb-2">{signal.title}</h3>
              <p className="text-sm text-[#6b6b6b] leading-relaxed">{signal.description}</p>
            </div>
          ))}
        </div>
      </div>
    </section>
  );
}
