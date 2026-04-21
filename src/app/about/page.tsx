import Image from "next/image";
import Link from "next/link";
import { getTeamMembers, getTestimonials } from "@/lib/queries";
import { ArrowRight, Check } from "lucide-react";
import type { Metadata } from "next";

export const metadata: Metadata = {
  title: "About CoverCo Inc.",
  description:
    "Learn about CoverCo Inc., a Southern California manufacturer of custom-fitted branded covers for hospitality, events, and commercial venues since 1989.",
};

const differentiators = [
  "Precision custom fitting to your exact furniture models",
  "Premium commercial-grade fabrics with proven durability",
  "In-house design team for branding and customization",
  "Rush production available for tight timelines",
  "Volume pricing for large hospitality and venue orders",
  "Dedicated account management from quote to delivery",
];

export default async function AboutPage() {
  const [team, testimonials] = await Promise.all([
    getTeamMembers(),
    getTestimonials(),
  ]);

  return (
    <>
      {/* Hero */}
      <section className="relative py-24 md:py-32 bg-[#1a365d] overflow-hidden">
        <div className="absolute inset-0 opacity-10">
          <Image
            src="/images/about-hero.jpg"
            alt=""
            fill
            className="object-cover"
            aria-hidden="true"
          />
        </div>
        <div className="relative container-wide">
          <span className="text-xs uppercase tracking-[0.2em] text-[#8b6d4b] font-medium">
            About Us
          </span>
          <h1 className="font-serif text-4xl md:text-5xl text-white mt-4 mb-6 max-w-3xl">
            Crafting Premium Covers for Over 35 Years
          </h1>
          <p className="text-white/75 text-lg max-w-2xl leading-relaxed">
            From our facility in Escondido, California, CoverCo has grown from a small upholstery shop into a trusted supplier for hotels, casinos, stadiums, and convention centers nationwide.
          </p>
        </div>
      </section>

      {/* Company Story */}
      <section className="section-padding bg-background">
        <div className="container-wide">
          <div className="grid lg:grid-cols-2 gap-12 items-center">
            <div>
              <span className="text-xs uppercase tracking-[0.2em] text-[#8b6d4b] font-medium">
                Our Story
              </span>
              <h2 className="font-serif text-3xl text-[#1a365d] mt-3 mb-6">
                Built on Craftsmanship & Relationships
              </h2>
              <div className="space-y-4 text-[#6b6b6b]">
                <p>
                  CoverCo was founded in 1989 with a simple mission: provide hotels and restaurants with fitted covers that actually fit. What started as a small upholstery operation in North County San Diego has evolved into a nationwide supplier of custom covers for the hospitality and events industry.
                </p>
                <p>
                  Over three decades, we have outfitted thousands of venues across every major hospitality segment. From the ballroom chairs at landmark hotels to the player seating at major sporting venues, our covers are chosen by buyers who demand quality, consistency, and reliability.
                </p>
                <p>
                  Today, CoverCo operates from a 45,000-square-foot facility with in-house design, cutting, sewing, and quality control. Our team combines traditional craftsmanship with modern production techniques to deliver covers that look exceptional and stand up to commercial use.
                </p>
              </div>
            </div>
            <div className="relative aspect-[4/3] rounded-lg overflow-hidden">
              <Image
                src="/images/about-story.jpg"
                alt="CoverCo manufacturing facility"
                fill
                className="object-cover"
                sizes="(max-width: 1024px) 100vw, 50vw"
              />
            </div>
          </div>
        </div>
      </section>

      {/* What Makes Us Different */}
      <section className="section-padding bg-[#f5f0eb]">
        <div className="container-wide">
          <div className="text-center mb-12">
            <span className="text-xs uppercase tracking-[0.2em] text-[#8b6d4b] font-medium">
              Our Difference
            </span>
            <h2 className="font-serif text-3xl md:text-4xl text-[#1a365d] mt-3">
              Why Custom Fit Matters
            </h2>
          </div>

          <div className="grid md:grid-cols-2 lg:grid-cols-3 gap-6">
            {differentiators.map((item) => (
              <div
                key={item}
                className="flex items-start gap-4 bg-white p-6 rounded-lg border border-[#e5ddd3]"
              >
                <div className="w-8 h-8 rounded-full bg-[#1a365d]/5 flex items-center justify-center shrink-0">
                  <Check className="w-4 h-4 text-[#1a365d]" />
                </div>
                <p className="text-sm text-[#2c2c2c]">{item}</p>
              </div>
            ))}
          </div>
        </div>
      </section>

      {/* Team */}
      {team.length > 0 && (
        <section className="section-padding bg-background">
          <div className="container-wide">
            <div className="text-center mb-12">
              <span className="text-xs uppercase tracking-[0.2em] text-[#8b6d4b] font-medium">
                Our Team
              </span>
              <h2 className="font-serif text-3xl md:text-4xl text-[#1a365d] mt-3">
                Leadership
              </h2>
            </div>

            <div className="grid sm:grid-cols-2 lg:grid-cols-4 gap-8">
              {team.map((member) => (
                <div key={member.id} className="text-center">
                  <div className="w-32 h-32 mx-auto mb-4 rounded-full overflow-hidden bg-[#f5f0eb] border border-[#e5ddd3]">
                    {member.imageUrl ? (
                      <Image
                        src={member.imageUrl}
                        alt={member.name}
                        width={128}
                        height={128}
                        className="object-cover w-full h-full"
                      />
                    ) : (
                      <div className="w-full h-full flex items-center justify-center text-[#8b6d4b] text-2xl font-serif">
                        {member.name.charAt(0)}
                      </div>
                    )}
                  </div>
                  <h3 className="font-serif text-lg text-[#1a365d]">{member.name}</h3>
                  <p className="text-sm text-[#8b6d4b] mt-1">{member.title}</p>
                  {member.bio && (
                    <p className="text-sm text-[#6b6b6b] mt-3 leading-relaxed">{member.bio}</p>
                  )}
                </div>
              ))}
            </div>
          </div>
        </section>
      )}

      {/* Contact Block */}
      <section className="section-padding bg-[#1a365d]">
        <div className="container-narrow text-center">
          <h2 className="font-serif text-3xl text-white mb-4">
            Let Us Help With Your Next Project
          </h2>
          <p className="text-white/75 mb-8">
            Whether you are refreshing a single dining room or outfitting an entire property, our team is ready to deliver covers that exceed your expectations.
          </p>
          <div className="flex flex-col sm:flex-row gap-4 justify-center">
            <Link
              href="/quote/"
              className="inline-flex items-center justify-center gap-2 px-8 py-4 bg-[#8b6d4b] text-white font-medium rounded-md hover:bg-[#8b6d4b]/90 btn-hover transition-colors"
            >
              Request a Quote
              <ArrowRight className="w-4 h-4" />
            </Link>
            <Link
              href="/contact/"
              className="inline-flex items-center justify-center gap-2 px-8 py-4 border border-white/30 text-white font-medium rounded-md hover:bg-white/10 btn-hover transition-colors"
            >
              Contact Us
            </Link>
          </div>
        </div>
      </section>
    </>
  );
}
