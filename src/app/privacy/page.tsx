import type { Metadata } from "next";

export const metadata: Metadata = {
  title: "Privacy Policy",
  description: "CoverCo Inc. privacy policy and data practices.",
};

export default function PrivacyPage() {
  return (
    <section className="section-padding bg-background">
      <div className="container-narrow">
        <h1 className="font-serif text-4xl text-[#1a365d] mb-4">Privacy Policy</h1>
        <p className="text-[#6b6b6b] mb-8">Last updated: January 1, 2025</p>

        <div className="space-y-8 text-[#2c2c2c]">
          <div>
            <h2 className="font-serif text-xl text-[#1a365d] mb-3">1. Information We Collect</h2>
            <p className="text-sm leading-relaxed text-[#6b6b6b]">
              We collect information you provide directly to us, including name, company name, email address, phone number, and project details when you request a quote or contact us through our website. We also collect information about your browser and device when you visit our site.
            </p>
          </div>

          <div>
            <h2 className="font-serif text-xl text-[#1a365d] mb-3">2. How We Use Your Information</h2>
            <p className="text-sm leading-relaxed text-[#6b6b6b]">
              We use the information we collect to respond to your inquiries, provide quotes, process orders, communicate about your project, and improve our services. We do not sell your personal information to third parties.
            </p>
          </div>

          <div>
            <h2 className="font-serif text-xl text-[#1a365d] mb-3">3. Information Sharing</h2>
            <p className="text-sm leading-relaxed text-[#6b6b6b]">
              We may share your information with trusted service providers who assist us in operating our website and conducting our business. These parties are contractually obligated to keep your information confidential and secure.
            </p>
          </div>

          <div>
            <h2 className="font-serif text-xl text-[#1a365d] mb-3">4. Data Security</h2>
            <p className="text-sm leading-relaxed text-[#6b6b6b]">
              We implement appropriate technical and organizational security measures to protect your personal information against unauthorized access, alteration, disclosure, or destruction.
            </p>
          </div>

          <div>
            <h2 className="font-serif text-xl text-[#1a365d] mb-3">5. Your Rights</h2>
            <p className="text-sm leading-relaxed text-[#6b6b6b]">
              You have the right to access, correct, or delete your personal information. To exercise these rights, please contact us at info@coverco.com.
            </p>
          </div>

          <div>
            <h2 className="font-serif text-xl text-[#1a365d] mb-3">6. Contact Us</h2>
            <p className="text-sm leading-relaxed text-[#6b6b6b]">
              If you have questions about this privacy policy, please contact us at info@coverco.com or call (858) 555-0147.
            </p>
          </div>
        </div>
      </div>
    </section>
  );
}
