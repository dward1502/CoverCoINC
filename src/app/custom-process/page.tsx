import type { Metadata } from "next";
import Image from "next/image";
import Link from "next/link";
import { ArrowRight, ClipboardList, Camera, Palette, FileCheck, Truck } from "lucide-react";

export const metadata: Metadata = {
  title: "Our Custom Process",
  description:
    "Learn how CoverCo works with you from initial consultation through delivery. Our 5-step process ensures precision-fitted covers every time.",
};

const steps = [
  {
    number: "01",
    title: "Identify the Item(s)",
    description:
      "Start by telling us what needs covering. This could be anything from banquet chairs and cocktail tables to podiums, bar units, or specialized equipment. If you have model numbers, manufacturer names, or existing covers that need replacing, that information helps us get started quickly. For unique or custom furniture, we will work with photos and measurements to develop a pattern.",
    details: [
      "Share model numbers or manufacturer info",
      "Provide photos of the items",
      "Note any special requirements (outdoor use, high traffic, etc.)",
    ],
    icon: ClipboardList,
  },
  {
    number: "02",
    title: "Provide Measurements & Photos",
    description:
      "Accurate measurements are the foundation of a perfect fit. Our team provides measurement guides for common item types, or we can visit your location for large or complex projects. We accept measurements via email, phone consultation, or in-person site visits for qualifying orders. Photos help us understand proportions and any unique features that affect the cover design.",
    details: [
      "Use our measurement guide templates",
      "Schedule a site visit for large projects",
      "Send photos showing all angles of the item",
    ],
    icon: Camera,
  },
  {
    number: "03",
    title: "Choose Fabric, Color & Branding",
    description:
      "Select from our curated collection of commercial-grade fabrics, each chosen for durability, appearance, and ease of maintenance. Our design team helps with color selection, including custom color matching to your brand standards. Choose branding options including embroidery, screen printing, woven labels, and custom packaging. We provide fabric swatches for approval before production.",
    details: [
      "Receive complimentary fabric swatches",
      "Custom color matching to brand standards",
      "Preview branding placement with digital mockups",
    ],
    icon: Palette,
  },
  {
    number: "04",
    title: "Receive Quote & Approve",
    description:
      "Within 1-2 business days, you will receive a detailed quote including pricing, timeline, fabric specifications, and branding details. For large or complex orders, we offer prototype covers so you can evaluate fit and quality before full production. Once you approve the quote and submit your purchase order, we schedule your project and confirm delivery dates.",
    details: [
      "Detailed quote within 1-2 business days",
      "Prototype option for qualifying orders",
      "Clear production timeline with milestones",
    ],
    icon: FileCheck,
  },
  {
    number: "05",
    title: "Production & Delivery",
    description:
      "Your covers are produced in our Southern California facility by experienced craftspeople. Each cover undergoes quality inspection before shipping. We offer delivery options from standard freight to white-glove installation services. Setup instructions are included, and our support team is available for any post-delivery questions.",
    details: [
      "In-house production with quality control",
      "Flexible delivery options",
      "Setup guidance and post-delivery support",
    ],
    icon: Truck,
  },
];

export default function CustomProcessPage() {
  return (
    <>
      {/* Hero */}
      <section className="relative py-20 md:py-28 bg-[#1a365d] overflow-hidden">
        <div className="absolute inset-0 opacity-10">
          <Image
            src="/images/process-hero.jpg"
            alt=""
            fill
            className="object-cover"
            aria-hidden="true"
          />
        </div>
        <div className="relative container-wide">
          <span className="text-xs uppercase tracking-[0.2em] text-[#8b6d4b] font-medium">
            How We Work
          </span>
          <h1 className="font-serif text-4xl md:text-5xl text-white mt-4 mb-6 max-w-3xl">
            Our Custom Cover Process
          </h1>
          <p className="text-white/75 text-lg max-w-2xl leading-relaxed">
            From first contact to final delivery, our five-step process ensures you receive covers that fit perfectly, look exceptional, and stand up to years of use.
          </p>
        </div>
      </section>

      {/* Steps */}
      <section className="section-padding bg-background">
        <div className="container-narrow">
          <div className="space-y-16">
            {steps.map((step, index) => (
              <div
                key={step.number}
                className="grid md:grid-cols-12 gap-8 items-start"
              >
                <div className="md:col-span-2 flex items-center gap-4 md:flex-col md:items-center">
                  <div className="w-16 h-16 rounded-full bg-[#1a365d] flex items-center justify-center shrink-0">
                    <step.icon className="w-7 h-7 text-white" />
                  </div>
                  <span className="text-3xl font-serif text-[#e5ddd3] font-bold md:mt-2">
                    {step.number}
                  </span>
                </div>
                <div className="md:col-span-10">
                  <h2 className="font-serif text-2xl text-[#1a365d] mb-4">
                    {step.title}
                  </h2>
                  <p className="text-[#6b6b6b] leading-relaxed mb-6">
                    {step.description}
                  </p>
                  <ul className="space-y-2">
                    {step.details.map((detail) => (
                      <li
                        key={detail}
                        className="flex items-start gap-3 text-sm text-[#2c2c2c]"
                      >
                        <span className="text-[#8b6d4b] mt-0.5 shrink-0">-</span>
                        {detail}
                      </li>
                    ))}
                  </ul>
                </div>
                {index < steps.length - 1 && (
                  <div className="hidden md:block md:col-span-12 border-b border-[#e5ddd3]" />
                )}
              </div>
            ))}
          </div>
        </div>
      </section>

      {/* FAQ Teaser */}
      <section className="section-padding bg-[#f5f0eb]">
        <div className="container-narrow text-center">
          <h2 className="font-serif text-3xl text-[#1a365d] mb-4">
            Common Questions
          </h2>
          <p className="text-[#6b6b6b] mb-8">
            How long does production take? What is your minimum order? We have answers to these and more on our FAQ page, or contact us directly.
          </p>
          <div className="flex flex-col sm:flex-row gap-4 justify-center">
            <Link
              href="/quote/"
              className="inline-flex items-center justify-center gap-2 px-8 py-4 bg-[#1a365d] text-white font-medium rounded-md hover:bg-[#1a365d]/90 btn-hover transition-colors"
            >
              Start Your Quote
              <ArrowRight className="w-4 h-4" />
            </Link>
            <Link
              href="/contact/"
              className="inline-flex items-center justify-center gap-2 px-8 py-4 border border-[#1a365d] text-[#1a365d] font-medium rounded-md hover:bg-[#1a365d]/5 btn-hover transition-colors"
            >
              Contact Us
            </Link>
          </div>
        </div>
      </section>
    </>
  );
}
