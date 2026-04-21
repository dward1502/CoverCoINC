import { z } from "zod";

export const quoteFormSchema = z.object({
  name: z.string().min(2, "Name must be at least 2 characters").max(100),
  company: z.string().min(1, "Company name is required").max(200),
  email: z.string().email("Please enter a valid email address"),
  phone: z.string().max(50).optional().or(z.literal("")),
  industry: z.string().min(1, "Please select an industry"),
  projectLocation: z.string().max(200).optional().or(z.literal("")),
  productTypes: z.array(z.string()).min(1, "Please select at least one product type"),
  quantityEstimate: z.string().max(100).optional().or(z.literal("")),
  timeline: z.string().max(100).optional().or(z.literal("")),
  message: z.string().max(2000).optional().or(z.literal("")),
  consent: z.boolean().refine((val) => val === true, {
    message: "You must agree to be contacted",
  }),
  honeypot: z.string().max(10).optional().or(z.literal("")),
});

export type QuoteFormData = z.infer<typeof quoteFormSchema>;
