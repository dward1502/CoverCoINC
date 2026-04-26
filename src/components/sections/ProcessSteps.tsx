import Link from "next/link";
import { ArrowRight, ClipboardList, Camera, Palette, FileCheck, Truck } from "lucide-react";

const steps = [
  {
    number: "01",
    title: "Identify Your Items",
    description: "Tell us what furniture, equipment, or display elements need covers. Provide model numbers, measurements, or photos for the most accurate quote.",
    icon: ClipboardList,
  },
  {
    number: "02",
    title: "Share Measurements",
    description: "Send us dimensions and photos of the items to be covered. Our team can also visit your location for large-scale projects or complex requirements.",
    icon: Camera,
  },
  {
    number: "03",
    title: "Select Fabrics & Branding",
    description: "Choose from our premium fabric collection, select your colors, and decide on branding options including embroidery, screen printing, or custom labels.",
    icon: Palette,
  },
  {
    number: "04",
    title: "Review Quote & Approve",
    description: "Receive a detailed quote with fabric swatches and a prototype if requested. Approve the order and we begin production with a clear timeline.",
    icon: FileCheck,
  },
  {
    number: "05",
    title: "Production & Delivery",
    description: "Your covers are precision-crafted in our Southern California facility, undergo quality inspection, and are delivered on schedule with setup guidance.",
    icon: Truck,
  },
];

export default function ProcessSteps() {
  return (
    <section className="section-padding bg-background">
      <div className="container-wide">
        <div className="text-center mb-16">
          <span className="text-xs uppercase tracking-[0.2em] text-[#8b6d4b] font-medium">
            How It Works
          </span>
          <h2 className="font-serif text-3xl md:text-4xl text-[#1a365d] mt-3 mb-4">
            Our Custom Process
          </h2>
          <p className="text-[#6b6b6b] max-w-2xl mx-auto">
            From initial consultation to final delivery, we make ordering custom covers straightforward and transparent.
          </p>
        </div>

        <div className="grid md:grid-cols-5 gap-8 relative">
          {/* Connecting line for desktop */}
          <div className="hidden md:block absolute top-12 left-[10%] right-[10%] h-px bg-[#e5ddd3]" />

          {steps.map((step) => (
            <div key={step.number} className="relative text-center">
              <div className="w-24 h-24 mx-auto mb-6 bg-[#f5f0eb] rounded-full flex items-center justify-center border border-[#e5ddd3] relative z-10">
                <step.icon className="w-8 h-8 text-[#8b6d4b]" />
              </div>
              <span className="text-xs text-[#8b6d4b] font-medium tracking-wider">Step {step.number}</span>
              <h3 className="font-serif text-lg text-[#1a365d] mt-2 mb-3">{step.title}</h3>
              <p className="text-sm text-[#6b6b6b] leading-relaxed">{step.description}</p>
            </div>
          ))}
        </div>

        <div className="text-center mt-12">
          <Link
            href="/custom-process/"
            className="inline-flex items-center gap-2 px-8 py-4 bg-[#1a365d] text-white font-medium rounded-md hover:bg-[#1a365d]/90 btn-hover transition-colors"
          >
            Learn More About Our Process
            <ArrowRight className="w-4 h-4" />
          </Link>
        </div>
      </div>
    </section>
  );
}
