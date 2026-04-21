import type { Metadata } from "next";
import ContactForm from "@/components/forms/ContactForm";
import { Phone, Mail, Clock, MapPin } from "lucide-react";

export const metadata: Metadata = {
  title: "Contact Us",
  description:
    "Contact CoverCo Inc. for custom cover inquiries, quotes, and support. Located in Escondido, California serving nationwide.",
};

export default function ContactPage() {
  return (
    <>
      {/* Hero */}
      <section className="pt-16 pb-12 md:pt-24 md:pb-16 bg-[#1a365d]">
        <div className="container-wide">
          <span className="text-xs uppercase tracking-[0.2em] text-[#8b6d4b] font-medium">
            Get in Touch
          </span>
          <h1 className="font-serif text-4xl md:text-5xl text-white mt-4 mb-6">
            Contact CoverCo
          </h1>
          <p className="text-white/75 text-lg max-w-2xl leading-relaxed">
            Have a question or ready to start a project? We are here to help. Reach out by phone, email, or the form below and our team will respond promptly.
          </p>
        </div>
      </section>

      {/* Contact Section */}
      <section className="section-padding bg-background">
        <div className="container-wide">
          <div className="grid lg:grid-cols-3 gap-12">
            {/* Contact Info */}
            <div className="lg:col-span-1 space-y-8">
              <div className="bg-[#f5f0eb] rounded-lg p-8">
                <h2 className="font-serif text-xl text-[#1a365d] mb-6">
                  Contact Information
                </h2>
                <div className="space-y-6">
                  <div className="flex items-start gap-4">
                    <div className="w-10 h-10 rounded-full bg-white flex items-center justify-center shrink-0">
                      <Phone className="w-5 h-5 text-[#8b6d4b]" />
                    </div>
                    <div>
                      <span className="block text-sm font-medium text-[#2c2c2c]">Phone</span>
                      <a
                        href="tel:+18585550147"
                        className="text-[#6b6b6b] hover:text-[#8b6d4b] transition-colors"
                      >
                        (858) 555-0147
                      </a>
                    </div>
                  </div>

                  <div className="flex items-start gap-4">
                    <div className="w-10 h-10 rounded-full bg-white flex items-center justify-center shrink-0">
                      <Mail className="w-5 h-5 text-[#8b6d4b]" />
                    </div>
                    <div>
                      <span className="block text-sm font-medium text-[#2c2c2c]">Email</span>
                      <a
                        href="mailto:info@coverco.com"
                        className="text-[#6b6b6b] hover:text-[#8b6d4b] transition-colors"
                      >
                        info@coverco.com
                      </a>
                    </div>
                  </div>

                  <div className="flex items-start gap-4">
                    <div className="w-10 h-10 rounded-full bg-white flex items-center justify-center shrink-0">
                      <Clock className="w-5 h-5 text-[#8b6d4b]" />
                    </div>
                    <div>
                      <span className="block text-sm font-medium text-[#2c2c2c]">Business Hours</span>
                      <p className="text-[#6b6b6b]">
                        Monday - Friday<br />
                        8:00 AM - 5:00 PM PST
                      </p>
                    </div>
                  </div>

                  <div className="flex items-start gap-4">
                    <div className="w-10 h-10 rounded-full bg-white flex items-center justify-center shrink-0">
                      <MapPin className="w-5 h-5 text-[#8b6d4b]" />
                    </div>
                    <div>
                      <span className="block text-sm font-medium text-[#2c2c2c]">Address</span>
                      <p className="text-[#6b6b6b]">
                        1280 Simpson Way<br />
                        Escondido, CA 92029
                      </p>
                    </div>
                  </div>
                </div>
              </div>

              <div className="bg-white rounded-lg border border-[#e5ddd3] p-8">
                <h3 className="font-serif text-lg text-[#1a365d] mb-3">
                  Service Area
                </h3>
                <p className="text-sm text-[#6b6b6b] leading-relaxed">
                  Based in North County San Diego, we serve clients nationwide from coast to coast. Whether your venue is in Southern California or across the country, CoverCo delivers.
                </p>
              </div>
            </div>

            {/* Form */}
            <div className="lg:col-span-2">
              <div className="bg-white rounded-lg border border-[#e5ddd3] p-8">
                <h2 className="font-serif text-2xl text-[#1a365d] mb-2">
                  Send a Message
                </h2>
                <p className="text-[#6b6b6b] text-sm mb-8">
                  For general inquiries, partnership opportunities, or questions about our products and services. For project quotes, please use our{" "}
                  <a href="/quote/" className="text-[#8b6d4b] hover:underline">
                    quote request form
                  </a>
                  .
                </p>
                <ContactForm sourcePage="/contact/" />
              </div>
            </div>
          </div>
        </div>
      </section>
    </>
  );
}
