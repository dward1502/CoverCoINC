"use client";

import { useState } from "react";
import { useForm } from "react-hook-form";
import { zodResolver } from "@hookform/resolvers/zod";
import { quoteFormSchema, type QuoteFormData } from "@/lib/validation/quote";
import { submitQuoteRequest, type QuoteActionResult } from "@/lib/actions/quote";
import { Button } from "@/components/ui/button";
import { CheckCircle, AlertCircle } from "lucide-react";

const industries = [
  "Hotels & Resorts",
  "Sports Venues & Stadiums",
  "Convention Centers",
  "Casinos & Gaming",
  "Restaurants & Dining",
  "Universities & Institutions",
  "Cruise Lines",
  "Event Planning",
  "Corporate",
  "Other",
];

const productTypes = [
  "Chair Covers",
  "Table Covers",
  "Podium Covers",
  "Bar & Counter Covers",
  "Equipment Covers",
  "Trade Show Covers",
  "Outdoor Covers",
];

const timelines = [
  "Under 2 weeks (Rush)",
  "2-4 weeks",
  "1-2 months",
  "2-3 months",
  "Flexible",
];

interface QuoteFormProps {
  sourcePage?: string;
}

export default function QuoteForm({ sourcePage }: QuoteFormProps) {
  const [result, setResult] = useState<QuoteActionResult | null>(null);
  const [isSubmitting, setIsSubmitting] = useState(false);

  const {
    register,
    handleSubmit,
    formState: { errors },
    reset,
    watch,
    setValue,
  } = useForm<QuoteFormData>({
    resolver: zodResolver(quoteFormSchema),
    defaultValues: {
      productTypes: [],
      consent: false,
    },
  });

  const selectedProducts = watch("productTypes") || [];

  const toggleProduct = (product: string) => {
    const current = selectedProducts;
    if (current.includes(product)) {
      setValue(
        "productTypes",
        current.filter((p) => p !== product),
        { shouldValidate: true }
      );
    } else {
      setValue("productTypes", [...current, product], { shouldValidate: true });
    }
  };

  const onSubmit = async (data: QuoteFormData) => {
    setIsSubmitting(true);
    setResult(null);
    const response = await submitQuoteRequest(data, sourcePage);
    setResult(response);
    setIsSubmitting(false);
    if (response.success) {
      reset();
    }
  };

  if (result?.success) {
    return (
      <div className="bg-green-50 border border-green-200 rounded-lg p-8 text-center">
        <CheckCircle className="w-12 h-12 text-green-600 mx-auto mb-4" />
        <h3 className="font-serif text-xl text-green-800 mb-2">Quote Request Submitted</h3>
        <p className="text-green-700">{result.message}</p>
        <Button
          variant="outline"
          className="mt-6"
          onClick={() => setResult(null)}
        >
          Submit Another Request
        </Button>
      </div>
    );
  }

  return (
    <form onSubmit={handleSubmit(onSubmit)} className="space-y-6">
      {/* Honeypot */}
      <input
        type="text"
        {...register("honeypot")}
        className="absolute opacity-0 w-0 h-0"
        tabIndex={-1}
        autoComplete="off"
      />

      {result && !result.success && (
        <div className="bg-red-50 border border-red-200 rounded-lg p-4 flex items-start gap-3">
          <AlertCircle className="w-5 h-5 text-red-600 shrink-0 mt-0.5" />
          <div>
            <p className="text-red-700 font-medium">{result.message}</p>
            {result.errors && (
              <ul className="mt-2 text-sm text-red-600">
                {Object.entries(result.errors).map(([field, msgs]) => (
                  <li key={field}>{msgs.join(", ")}</li>
                ))}
              </ul>
            )}
          </div>
        </div>
      )}

      <div className="grid md:grid-cols-2 gap-6">
        <div>
          <label htmlFor="name" className="block text-sm font-medium text-[#2c2c2c] mb-2">
            Full Name <span className="text-red-500">*</span>
          </label>
          <input
            id="name"
            type="text"
            {...register("name")}
            className="w-full px-4 py-3 border border-[#e5ddd3] rounded-md bg-white text-[#2c2c2c] focus:outline-none focus:ring-2 focus:ring-[#1a365d] focus:border-transparent transition-all"
            placeholder="John Smith"
          />
          {errors.name && (
            <p className="mt-1 text-sm text-red-600">{errors.name.message}</p>
          )}
        </div>

        <div>
          <label htmlFor="company" className="block text-sm font-medium text-[#2c2c2c] mb-2">
            Company <span className="text-red-500">*</span>
          </label>
          <input
            id="company"
            type="text"
            {...register("company")}
            className="w-full px-4 py-3 border border-[#e5ddd3] rounded-md bg-white text-[#2c2c2c] focus:outline-none focus:ring-2 focus:ring-[#1a365d] focus:border-transparent transition-all"
            placeholder="Your Company Name"
          />
          {errors.company && (
            <p className="mt-1 text-sm text-red-600">{errors.company.message}</p>
          )}
        </div>

        <div>
          <label htmlFor="email" className="block text-sm font-medium text-[#2c2c2c] mb-2">
            Email <span className="text-red-500">*</span>
          </label>
          <input
            id="email"
            type="email"
            {...register("email")}
            className="w-full px-4 py-3 border border-[#e5ddd3] rounded-md bg-white text-[#2c2c2c] focus:outline-none focus:ring-2 focus:ring-[#1a365d] focus:border-transparent transition-all"
            placeholder="john@company.com"
          />
          {errors.email && (
            <p className="mt-1 text-sm text-red-600">{errors.email.message}</p>
          )}
        </div>

        <div>
          <label htmlFor="phone" className="block text-sm font-medium text-[#2c2c2c] mb-2">
            Phone
          </label>
          <input
            id="phone"
            type="tel"
            {...register("phone")}
            className="w-full px-4 py-3 border border-[#e5ddd3] rounded-md bg-white text-[#2c2c2c] focus:outline-none focus:ring-2 focus:ring-[#1a365d] focus:border-transparent transition-all"
            placeholder="(858) 555-0147"
          />
        </div>
      </div>

      <div className="grid md:grid-cols-2 gap-6">
        <div>
          <label htmlFor="industry" className="block text-sm font-medium text-[#2c2c2c] mb-2">
            Industry <span className="text-red-500">*</span>
          </label>
          <select
            id="industry"
            {...register("industry")}
            className="w-full px-4 py-3 border border-[#e5ddd3] rounded-md bg-white text-[#2c2c2c] focus:outline-none focus:ring-2 focus:ring-[#1a365d] focus:border-transparent transition-all appearance-none"
          >
            <option value="">Select an industry</option>
            {industries.map((ind) => (
              <option key={ind} value={ind}>
                {ind}
              </option>
            ))}
          </select>
          {errors.industry && (
            <p className="mt-1 text-sm text-red-600">{errors.industry.message}</p>
          )}
        </div>

        <div>
          <label htmlFor="projectLocation" className="block text-sm font-medium text-[#2c2c2c] mb-2">
            Project Location
          </label>
          <input
            id="projectLocation"
            type="text"
            {...register("projectLocation")}
            className="w-full px-4 py-3 border border-[#e5ddd3] rounded-md bg-white text-[#2c2c2c] focus:outline-none focus:ring-2 focus:ring-[#1a365d] focus:border-transparent transition-all"
            placeholder="City, State"
          />
        </div>
      </div>

      <div>
        <label className="block text-sm font-medium text-[#2c2c2c] mb-3">
          Product Types Needed <span className="text-red-500">*</span>
        </label>
        <div className="flex flex-wrap gap-3">
          {productTypes.map((product) => (
            <button
              key={product}
              type="button"
              onClick={() => toggleProduct(product)}
              className={`px-4 py-2 text-sm rounded-md border transition-all ${
                selectedProducts.includes(product)
                  ? "bg-[#1a365d] text-white border-[#1a365d]"
                  : "bg-white text-[#2c2c2c] border-[#e5ddd3] hover:border-[#8b6d4b]"
              }`}
            >
              {product}
            </button>
          ))}
        </div>
        <input type="hidden" {...register("productTypes")} />
        {errors.productTypes && (
          <p className="mt-2 text-sm text-red-600">{errors.productTypes.message}</p>
        )}
      </div>

      <div className="grid md:grid-cols-2 gap-6">
        <div>
          <label htmlFor="quantityEstimate" className="block text-sm font-medium text-[#2c2c2c] mb-2">
            Quantity Estimate
          </label>
          <input
            id="quantityEstimate"
            type="text"
            {...register("quantityEstimate")}
            className="w-full px-4 py-3 border border-[#e5ddd3] rounded-md bg-white text-[#2c2c2c] focus:outline-none focus:ring-2 focus:ring-[#1a365d] focus:border-transparent transition-all"
            placeholder="e.g., 500 chair covers"
          />
        </div>

        <div>
          <label htmlFor="timeline" className="block text-sm font-medium text-[#2c2c2c] mb-2">
            Timeline
          </label>
          <select
            id="timeline"
            {...register("timeline")}
            className="w-full px-4 py-3 border border-[#e5ddd3] rounded-md bg-white text-[#2c2c2c] focus:outline-none focus:ring-2 focus:ring-[#1a365d] focus:border-transparent transition-all appearance-none"
          >
            <option value="">Select timeline</option>
            {timelines.map((t) => (
              <option key={t} value={t}>
                {t}
              </option>
            ))}
          </select>
        </div>
      </div>

      <div>
        <label htmlFor="message" className="block text-sm font-medium text-[#2c2c2c] mb-2">
          Project Details
        </label>
        <textarea
          id="message"
          rows={5}
          {...register("message")}
          className="w-full px-4 py-3 border border-[#e5ddd3] rounded-md bg-white text-[#2c2c2c] focus:outline-none focus:ring-2 focus:ring-[#1a365d] focus:border-transparent transition-all resize-none"
          placeholder="Tell us about your project, special requirements, or any questions..."
        />
      </div>

      <div>
        <label className="flex items-start gap-3 cursor-pointer">
          <input
            type="checkbox"
            {...register("consent")}
            className="mt-1 w-4 h-4 rounded border-[#e5ddd3] text-[#1a365d] focus:ring-[#1a365d]"
          />
          <span className="text-sm text-[#6b6b6b]">
            I agree to be contacted by CoverCo Inc. regarding my quote request.
            We respect your privacy and will never share your information.
          </span>
        </label>
        {errors.consent && (
          <p className="mt-1 text-sm text-red-600">{errors.consent.message}</p>
        )}
      </div>

      <Button
        type="submit"
        variant="primary"
        size="lg"
        isLoading={isSubmitting}
        className="w-full md:w-auto"
      >
        {isSubmitting ? "Submitting..." : "Submit Quote Request"}
      </Button>
    </form>
  );
}
