"use client";

import { useState } from "react";
import { useForm } from "react-hook-form";
import { zodResolver } from "@hookform/resolvers/zod";
import { contactFormSchema, type ContactFormData } from "@/lib/validation/contact";
import { submitContactInquiry, type ContactActionResult } from "@/lib/actions/contact";
import { Button } from "@/components/ui/button";
import { CheckCircle, AlertCircle } from "lucide-react";

interface ContactFormProps {
  sourcePage?: string;
}

export default function ContactForm({ sourcePage }: ContactFormProps) {
  const [result, setResult] = useState<ContactActionResult | null>(null);
  const [isSubmitting, setIsSubmitting] = useState(false);

  const {
    register,
    handleSubmit,
    formState: { errors },
    reset,
  } = useForm<ContactFormData>({
    resolver: zodResolver(contactFormSchema),
  });

  const onSubmit = async (data: ContactFormData) => {
    setIsSubmitting(true);
    setResult(null);
    const response = await submitContactInquiry(data, sourcePage);
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
        <h3 className="font-serif text-xl text-green-800 mb-2">Message Sent</h3>
        <p className="text-green-700">{result.message}</p>
        <Button
          variant="outline"
          className="mt-6"
          onClick={() => setResult(null)}
        >
          Send Another Message
        </Button>
      </div>
    );
  }

  return (
    <form onSubmit={handleSubmit(onSubmit)} className="space-y-5">
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
          </div>
        </div>
      )}

      <div className="grid md:grid-cols-2 gap-5">
        <div>
          <label htmlFor="contact-name" className="block text-sm font-medium text-[#2c2c2c] mb-2">
            Name <span className="text-red-500">*</span>
          </label>
          <input
            id="contact-name"
            type="text"
            {...register("name")}
            className="w-full px-4 py-3 border border-[#e5ddd3] rounded-md bg-white text-[#2c2c2c] focus:outline-none focus:ring-2 focus:ring-[#1a365d] focus:border-transparent transition-all"
            placeholder="Your name"
          />
          {errors.name && (
            <p className="mt-1 text-sm text-red-600">{errors.name.message}</p>
          )}
        </div>

        <div>
          <label htmlFor="contact-company" className="block text-sm font-medium text-[#2c2c2c] mb-2">
            Company
          </label>
          <input
            id="contact-company"
            type="text"
            {...register("company")}
            className="w-full px-4 py-3 border border-[#e5ddd3] rounded-md bg-white text-[#2c2c2c] focus:outline-none focus:ring-2 focus:ring-[#1a365d] focus:border-transparent transition-all"
            placeholder="Your company (optional)"
          />
        </div>
      </div>

      <div className="grid md:grid-cols-2 gap-5">
        <div>
          <label htmlFor="contact-email" className="block text-sm font-medium text-[#2c2c2c] mb-2">
            Email <span className="text-red-500">*</span>
          </label>
          <input
            id="contact-email"
            type="email"
            {...register("email")}
            className="w-full px-4 py-3 border border-[#e5ddd3] rounded-md bg-white text-[#2c2c2c] focus:outline-none focus:ring-2 focus:ring-[#1a365d] focus:border-transparent transition-all"
            placeholder="you@company.com"
          />
          {errors.email && (
            <p className="mt-1 text-sm text-red-600">{errors.email.message}</p>
          )}
        </div>

        <div>
          <label htmlFor="contact-phone" className="block text-sm font-medium text-[#2c2c2c] mb-2">
            Phone
          </label>
          <input
            id="contact-phone"
            type="tel"
            {...register("phone")}
            className="w-full px-4 py-3 border border-[#e5ddd3] rounded-md bg-white text-[#2c2c2c] focus:outline-none focus:ring-2 focus:ring-[#1a365d] focus:border-transparent transition-all"
            placeholder="(858) 555-0147"
          />
        </div>
      </div>

      <div>
        <label htmlFor="contact-message" className="block text-sm font-medium text-[#2c2c2c] mb-2">
          Message <span className="text-red-500">*</span>
        </label>
        <textarea
          id="contact-message"
          rows={5}
          {...register("message")}
          className="w-full px-4 py-3 border border-[#e5ddd3] rounded-md bg-white text-[#2c2c2c] focus:outline-none focus:ring-2 focus:ring-[#1a365d] focus:border-transparent transition-all resize-none"
          placeholder="How can we help you?"
        />
        {errors.message && (
          <p className="mt-1 text-sm text-red-600">{errors.message.message}</p>
        )}
      </div>

      <Button
        type="submit"
        variant="primary"
        size="lg"
        isLoading={isSubmitting}
      >
        {isSubmitting ? "Sending..." : "Send Message"}
      </Button>
    </form>
  );
}
