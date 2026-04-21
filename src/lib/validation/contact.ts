import { z } from "zod";

export const contactFormSchema = z.object({
  name: z.string().min(2, "Name must be at least 2 characters").max(100),
  company: z.string().max(200).optional().or(z.literal("")),
  email: z.string().email("Please enter a valid email address"),
  phone: z.string().max(50).optional().or(z.literal("")),
  message: z.string().min(10, "Message must be at least 10 characters").max(2000),
  honeypot: z.string().max(10).optional().or(z.literal("")),
});

export type ContactFormData = z.infer<typeof contactFormSchema>;
