"use server";

import { createServerClient } from "@/lib/supabase/server";
import { quoteFormSchema, type QuoteFormData } from "@/lib/validation/quote";

export interface QuoteActionResult {
  success: boolean;
  message: string;
  errors?: Record<string, string[]>;
}

export async function submitQuoteRequest(
  data: QuoteFormData,
  sourcePage?: string
): Promise<QuoteActionResult> {
  try {
    // Honeypot check
    if (data.honeypot && data.honeypot.length > 0) {
      return { success: true, message: "Quote request received." };
    }

    // Validate
    const result = quoteFormSchema.safeParse(data);
    if (!result.success) {
      const errors = result.error.flatten().fieldErrors;
      return {
        success: false,
        message: "Please correct the errors below.",
        errors,
      };
    }

    const supabase = createServerClient();

    const { error } = await supabase.from("quote_requests").insert({
      name: data.name,
      company: data.company,
      email: data.email,
      phone: data.phone || null,
      industry: data.industry,
      project_location: data.projectLocation || null,
      product_types: data.productTypes,
      quantity_estimate: data.quantityEstimate || null,
      timeline: data.timeline || null,
      message: data.message || null,
      consent: data.consent,
      source_page: sourcePage || null,
      status: "new",
    });

    if (error) {
      console.error("Supabase insert error:", error);
      return {
        success: false,
        message: "Something went wrong. Please try again or contact us directly.",
      };
    }

    return {
      success: true,
      message:
        "Thank you for your quote request. Our team will review your requirements and contact you within 1-2 business days.",
    };
  } catch (err) {
    console.error("Quote submission error:", err);
    return {
      success: false,
      message: "An unexpected error occurred. Please try again.",
    };
  }
}
