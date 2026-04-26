import Link from "next/link";
import { ArrowRight } from "lucide-react";

export default function NotFound() {
  return (
    <section className="section-padding bg-background flex-1 flex items-center">
      <div className="container-narrow text-center">
        <span className="text-8xl font-serif text-[#e5ddd3]">404</span>
        <h1 className="font-serif text-3xl text-[#1a365d] mt-4 mb-4">
          Page Not Found
        </h1>
        <p className="text-[#6b6b6b] mb-8 max-w-md mx-auto">
          The page you are looking for does not exist or has been moved. Explore our products or contact us if you need assistance.
        </p>
        <div className="flex flex-col sm:flex-row gap-4 justify-center">
          <Link
            href="/"
            className="inline-flex items-center justify-center gap-2 px-8 py-4 bg-[#1a365d] text-white font-medium rounded-md hover:bg-[#1a365d]/90 btn-hover transition-colors"
          >
            Go Home
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
  );
}
