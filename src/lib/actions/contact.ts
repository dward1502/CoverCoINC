"use server";

import { createServerClient } from "@/lib/supabase/server";
import { contactFormSchema, type ContactFormData } from "@/lib/validation/contact";

export interface ContactActionResult {
  success: boolean;
  message: string;
  errors?: Record<string, string[]>;
}

export async function submitContactInquiry(
  data: ContactFormData,
  sourcePage?: string
): Promise<ContactActionResult> {
  try {
    // Honeypot check
    if (data.honeypot && data.honeypot.length > 0) {
      return { success: true, message: "Message received." };
    }

    // Validate
    const result = contactFormSchema.safeParse(data);
    if (!result.success) {
      const errors = result.error.flatten().fieldErrors;
      return {
        success: false,
        message: "Please correct the errors below.",
        errors,
      };
    }

    const supabase = createServerClient();

    const { error } = await supabase.from("contact_inquiries").insert({
      name: data.name,
      company: data.company || null,
      email: data.email,
      phone: data.phone || null,
      message: data.message,
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
        "Thank you for reaching out. We have received your message and will respond within 1-2 business days.",
    };
  } catch (err) {
    console.error("Contact submission error:", err);
    return {
      success: false,
      message: "An unexpected error occurred. Please try again.",
    };
  }
}
