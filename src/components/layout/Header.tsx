"use client";

import { useState } from "react";
import Link from "next/link";
import Image from "next/image";
import { usePathname } from "next/navigation";
import { Menu, X, Phone } from "lucide-react";
import { cn } from "@/lib/utils";

const navLinks = [
  { label: "Home", href: "/" },
  { label: "Products", href: "/products/" },
  { label: "Industries", href: "/industries/" },
  { label: "Gallery", href: "/gallery/" },
  { label: "About", href: "/about/" },
  { label: "Contact", href: "/contact/" },
];

export default function Header() {
  const [mobileOpen, setMobileOpen] = useState(false);
  const pathname = usePathname();

  return (
    <header className="sticky top-0 z-50 bg-[#faf9f7]/95 backdrop-blur-sm border-b border-[#e5ddd3]">
      <div className="container-wide">
        <div className="flex items-center justify-between h-16 md:h-20">
          {/* Logo */}
          <Link href="/" className="flex items-center shrink-0">
            <Image
              src="/images/coverCoLogo_white.png"
              alt="CoverCo Inc."
              width={160}
              height={48}
              className="h-10 md:h-12 w-auto"
              priority
            />
          </Link>

          {/* Desktop Navigation */}
          <nav className="hidden lg:flex items-center gap-8">
            {navLinks.map((link) => (
              <Link
                key={link.href}
                href={link.href}
                className={cn(
                  "text-sm font-medium tracking-wide uppercase transition-colors hover:text-[#8b6d4b]",
                  pathname === link.href
                    ? "text-[#8b6d4b]"
                    : "text-[#2c2c2c]"
                )}
              >
                {link.label}
              </Link>
            ))}
          </nav>

          {/* Right side actions */}
          <div className="flex items-center gap-3">
            <a
              href="tel:+118009598527"
              className="hidden md:flex items-center gap-2 text-sm text-[#1a365d] hover:text-[#8b6d4b] transition-colors"
            >
              <Phone className="w-4 h-4" />
              <span className="font-medium">1.800.959.8527</span>
            </a>
            <Link
              href="/quote/"
              className="hidden sm:inline-flex items-center px-5 py-2.5 bg-[#1a365d] text-white text-sm font-medium rounded-md hover:bg-[#1a365d]/90 btn-hover transition-colors"
            >
              Request a Quote
            </Link>

            {/* Mobile menu button */}
            <button
              onClick={() => setMobileOpen(!mobileOpen)}
              className="lg:hidden p-2 text-[#2c2c2c] hover:text-[#8b6d4b] transition-colors"
              aria-label={mobileOpen ? "Close menu" : "Open menu"}
              aria-expanded={mobileOpen}
            >
              {mobileOpen ? <X className="w-6 h-6" /> : <Menu className="w-6 h-6" />}
            </button>
          </div>
        </div>
      </div>

      {/* Mobile Navigation */}
      {mobileOpen && (
        <div className="lg:hidden bg-[#faf9f7] border-t border-[#e5ddd3]">
          <nav className="container-wide py-4 flex flex-col gap-1">
            {navLinks.map((link) => (
              <Link
                key={link.href}
                href={link.href}
                onClick={() => setMobileOpen(false)}
                className={cn(
                  "px-4 py-3 text-sm font-medium uppercase tracking-wide rounded-md transition-colors",
                  pathname === link.href
                    ? "bg-[#1a365d]/5 text-[#8b6d4b]"
                    : "text-[#2c2c2c] hover:bg-[#f5f0eb]"
                )}
              >
                {link.label}
              </Link>
            ))}
            <div className="mt-3 pt-3 border-t border-[#e5ddd3] flex flex-col gap-3">
              <a
                href="tel:+118009598527"
                className="flex items-center gap-2 px-4 py-2 text-sm text-[#1a365d]"
              >
                <Phone className="w-4 h-4" />
                <span>1.800.959.8527</span>
              </a>
              <Link
                href="/quote/"
                onClick={() => setMobileOpen(false)}
                className="mx-4 inline-flex items-center justify-center px-5 py-3 bg-[#1a365d] text-white text-sm font-medium rounded-md"
              >
                Request a Quote
              </Link>
            </div>
          </nav>
        </div>
      )}
    </header>
  );
}
