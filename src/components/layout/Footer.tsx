import Link from "next/link";
import { Phone, Mail, MapPin } from "lucide-react";

function InstagramIcon({ className }: { className?: string }) {
  return (
    <svg className={className} viewBox="0 0 24 24" fill="none" stroke="currentColor" strokeWidth="2" strokeLinecap="round" strokeLinejoin="round">
      <rect width="20" height="20" x="2" y="2" rx="5" ry="5" />
      <path d="M16 11.37A4 4 0 1 1 12.63 8 4 4 0 0 1 16 11.37z" />
      <line x1="17.5" x2="17.51" y1="6.5" y2="6.5" />
    </svg>
  );
}

function FacebookIcon({ className }: { className?: string }) {
  return (
    <svg className={className} viewBox="0 0 24 24" fill="none" stroke="currentColor" strokeWidth="2" strokeLinecap="round" strokeLinejoin="round">
      <path d="M18 2h-3a5 5 0 0 0-5 5v3H7v4h3v8h4v-8h3l1-4h-4V7a1 1 0 0 1 1-1h3z" />
    </svg>
  );
}

function LinkedinIcon({ className }: { className?: string }) {
  return (
    <svg className={className} viewBox="0 0 24 24" fill="none" stroke="currentColor" strokeWidth="2" strokeLinecap="round" strokeLinejoin="round">
      <path d="M16 8a6 6 0 0 1 6 6v7h-4v-7a2 2 0 0 0-2-2 2 2 0 0 0-2 2v7h-4v-7a6 6 0 0 1 6-6z" />
      <rect width="4" height="12" x="2" y="9" />
      <circle cx="4" cy="4" r="2" />
    </svg>
  );
}

const footerLinks = {
  Products: [
    { label: "Chair Covers", href: "/products/" },
    { label: "Table Covers", href: "/products/" },
    { label: "Podium Covers", href: "/products/" },
    { label: "Bar Covers", href: "/products/" },
  ],
  Industries: [
    { label: "Hotels & Resorts", href: "/industries/hospitality/" },
    { label: "Sports Venues", href: "/industries/sports-venues/" },
    { label: "Convention Centers", href: "/industries/convention-centers/" },
    { label: "Casinos", href: "/industries/casinos/" },
  ],
  Company: [
    { label: "About Us", href: "/about/" },
    { label: "Our Process", href: "/custom-process/" },
    { label: "Gallery", href: "/gallery/" },
    { label: "Contact", href: "/contact/" },
  ],
};

const socialLinks = [
  { icon: InstagramIcon, label: "Instagram", href: "https://instagram.com/covercoinc" },
  { icon: FacebookIcon, label: "Facebook", href: "https://www.facebook.com/Coverco-Inc-106844079375679/" },
  { icon: LinkedinIcon, label: "LinkedIn", href: "https://linkedin.com/company/coverco-inc" },
];

export default function Footer() {
  return (
    <footer className="bg-[#1a365d] text-white/80">
      <div className="container-wide section-padding">
        <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-5 gap-12 lg:gap-8">
          {/* Brand column */}
          <div className="lg:col-span-2">
            <Link href="/" className="inline-block">
              <span className="font-serif text-2xl text-white">CoverCo</span>
              <span className="text-xs text-[#8b6d4b] uppercase tracking-widest ml-2">Inc.</span>
            </Link>
            <p className="mt-4 text-sm text-white/70 max-w-sm leading-relaxed">
              Premium custom-fitted covers for hospitality, events, and commercial venues.
              Southern California craftsmanship since 1989.
            </p>
            <div className="mt-6 flex gap-4">
              {socialLinks.map((social) => (
                <a
                  key={social.label}
                  href={social.href}
                  target="_blank"
                  rel="noopener noreferrer"
                  className="p-2 bg-white/10 rounded-full hover:bg-[#8b6d4b] transition-colors"
                  aria-label={social.label}
                >
                  <social.icon className="w-4 h-4" />
                </a>
              ))}
            </div>
          </div>

          {/* Link columns */}
          {Object.entries(footerLinks).map(([title, links]) => (
            <div key={title}>
              <h4 className="font-serif text-sm uppercase tracking-widest text-white mb-4">
                {title}
              </h4>
              <ul className="space-y-3">
                {links.map((link) => (
                  <li key={link.label}>
                    <Link
                      href={link.href}
                      className="text-sm text-white/60 hover:text-white transition-colors"
                    >
                      {link.label}
                    </Link>
                  </li>
                ))}
              </ul>
            </div>
          ))}
        </div>

        {/* Contact info */}
        <div className="mt-12 pt-8 border-t border-white/10 grid grid-cols-1 md:grid-cols-3 gap-6">
          <a
            href="tel:+18009598527"
            className="flex items-center gap-3 text-sm text-white/60 hover:text-white transition-colors"
          >
            <Phone className="w-4 h-4 text-[#8b6d4b]" />
            <span>1.800.959.8527</span>
          </a>
          <a
            href="mailto:info@covercoinc.com"
            className="flex items-center gap-3 text-sm text-white/60 hover:text-white transition-colors"
          >
            <Mail className="w-4 h-4 text-[#8b6d4b]" />
            <span>info@covercoinc.com</span>
          </a>
          <div className="flex items-center gap-3 text-sm text-white/60">
            <MapPin className="w-4 h-4 text-[#8b6d4b] shrink-0" />
            <span>1280 Simpson Way, Escondido, CA 92029</span>
          </div>
        </div>
      </div>

      {/* Bottom bar */}
      <div className="border-t border-white/10">
        <div className="container-wide py-6 flex flex-col md:flex-row items-center justify-between gap-4">
          <p className="text-xs text-white/40">
            &copy; {new Date().getFullYear()} CoverCo Inc. All rights reserved.
          </p>
          <div className="flex gap-6">
            <Link href="/privacy/" className="text-xs text-white/40 hover:text-white/70 transition-colors">
              Privacy Policy
            </Link>
            <span className="text-xs text-white/40">Terms of Service</span>
          </div>
        </div>
      </div>
    </footer>
  );
}
