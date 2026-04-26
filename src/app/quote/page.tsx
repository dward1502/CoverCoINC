import type { Metadata } from "next";
import QuoteForm from "@/components/forms/QuoteForm";
import { Phone, Mail, Clock, MapPin } from "lucide-react";

export const metadata: Metadata = {
  title: "Request a Quote",
  description:
    "Request a custom quote from CoverCo for chair covers, table covers, podium covers, and more. We respond within 1-2 business days.",
};

export default function QuotePage() {
  return (
    <>
      {/* Hero */}
      <section className="pt-16 pb-12 md:pt-24 md:pb-16 bg-[#1a365d]">
        <div className="container-wide">
          <span className="text-xs uppercase tracking-[0.2em] text-[#8b6d4b] font-medium">
            Get Started
          </span>
          <h1 className="font-serif text-4xl md:text-5xl text-white mt-4 mb-6">
            Request a Quote
          </h1>
          <p className="text-white/75 text-lg max-w-2xl leading-relaxed">
            Tell us about your project and we will prepare a detailed quote including pricing, timeline, and fabric options. Most quotes are delivered within 1-2 business days.
          </p>
        </div>
      </section>

      {/* Form Section */}
      <section className="section-padding bg-background">
        <div className="container-wide">
          <div className="grid lg:grid-cols-3 gap-12">
            {/* Sidebar */}
            <div className="lg:col-span-1">
              <div className="bg-[#f5f0eb] rounded-lg p-8 sticky top-28">
                <h2 className="font-serif text-xl text-[#1a365d] mb-6">
                  Contact Information
                </h2>
                <div className="space-y-5">
                  <div className="flex items-start gap-3">
                    <Phone className="w-5 h-5 text-[#8b6d4b] shrink-0 mt-0.5" />
                    <div>
                      <span className="block text-sm font-medium text-[#2c2c2c]">Phone</span>
                      <a href="tel:+18585550147" className="text-sm text-[#6b6b6b] hover:text-[#8b6d4b] transition-colors">
                        (858) 555-0147
                      </a>
                    </div>
                  </div>
                  <div className="flex items-start gap-3">
                    <Mail className="w-5 h-5 text-[#8b6d4b] shrink-0 mt-0.5" />
                    <div>
                      <span className="block text-sm font-medium text-[#2c2c2c]">Email</span>
                      <a href="mailto:info@coverco.com" className="text-sm text-[#6b6b6b] hover:text-[#8b6d4b] transition-colors">
                        info@coverco.com
                      </a>
                    </div>
                  </div>
                  <div className="flex items-start gap-3">
                    <Clock className="w-5 h-5 text-[#8b6d4b] shrink-0 mt-0.5" />
                    <div>
                      <span className="block text-sm font-medium text-[#2c2c2c]">Business Hours</span>
                      <span className="text-sm text-[#6b6b6b]">Mon-Fri 8:00 AM - 5:00 PM PST</span>
                    </div>
                  </div>
                  <div className="flex items-start gap-3">
                    <MapPin className="w-5 h-5 text-[#8b6d4b] shrink-0 mt-0.5" />
                    <div>
                      <span className="block text-sm font-medium text-[#2c2c2c]">Location</span>
                      <span className="text-sm text-[#6b6b6b]">
                        1280 Simpson Way<br />
                        Escondido, CA 92029
                      </span>
                    </div>
                  </div>
                </div>

                <div className="mt-8 pt-6 border-t border-[#e5ddd3]">
                  <h3 className="font-medium text-sm text-[#2c2c2c] mb-3">
                    What Happens Next?
                  </h3>
                  <ol className="space-y-3 text-sm text-[#6b6b6b]">
                    <li className="flex gap-3">
                      <span className="text-[#8b6d4b] font-medium shrink-0">1.</span>
                      We review your requirements within 1 business day.
                    </li>
                    <li className="flex gap-3">
                      <span className="text-[#8b6d4b] font-medium shrink-0">2.</span>
                      We may contact you with clarifying questions.
                    </li>
                    <li className="flex gap-3">
                      <span className="text-[#8b6d4b] font-medium shrink-0">3.</span>
                      You receive a detailed quote with options.
                    </li>
                    <li className="flex gap-3">
                      <span className="text-[#8b6d4b] font-medium shrink-0">4.</span>
                      Approve the quote to begin production.
                    </li>
                  </ol>
                </div>
              </div>
            </div>

            {/* Form */}
            <div className="lg:col-span-2">
              <div className="bg-white rounded-lg border border-[#e5ddd3] p-8">
                <h2 className="font-serif text-2xl text-[#1a365d] mb-2">
                  Project Details
                </h2>
                <p className="text-[#6b6b6b] text-sm mb-8">
                  Fill out the form below with as much detail as possible. The more information you provide, the more accurate your quote will be.
                </p>
                <QuoteForm sourcePage="/quote/" />
              </div>
            </div>
          </div>
        </div>
      </section>
    </>
  );
}
