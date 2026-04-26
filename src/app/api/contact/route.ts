export const runtime = "nodejs";

import { NextResponse, type NextRequest } from "next/server";
import { Resend } from "resend";
import { contactFormSchema } from "@/lib/validation/contact";

const resend = new Resend(process.env.RESEND_API_KEY);

export async function POST(req: NextRequest) {
	try {
		const body = await req.json();

		if (typeof body?.honeypot === "string" && body.honeypot.length > 0) {
			return NextResponse.json({ message: "Message received." });
		}

		const parsed = contactFormSchema.safeParse(body);
		if (!parsed.success) {
			return NextResponse.json(
				{
					message: "Please correct the errors below.",
					errors: parsed.error.flatten().fieldErrors,
				},
				{ status: 400 }
			);
		}

		const { name, email, phone, company, message } = parsed.data;
		const sourcePage = typeof body?.sourcePage === "string" ? body.sourcePage : "";

		const toList = ["breck@covercoinc.com", "dward1502@gmail.com"];

		const text = [
			`[SOURCE: Contact Page Form${sourcePage ? ` — ${sourcePage}` : ""}]`,
			``,
			`Name: ${name}`,
			`Email: ${email}`,
			phone ? `Phone: ${phone}` : "",
			company ? `Company: ${company}` : "",
			"",
			"Message:",
			message,
		]
			.filter(Boolean)
			.join("\n");

		const result = await resend.emails.send({
			from: process.env.EMAIL ?? "Contact Form <noreply@covercoinc.com>",
			to: toList,
			replyTo: email,
			subject: `Contact Request from ${name}`,
			text,
		});

		console.log("RESEND CONTACT RESULT:", result);

		return NextResponse.json({ message: "Email sent successfully." });
	} catch (err: unknown) {
		const error = err as { name?: string; message?: string };
		console.error("Contact route error:", { name: error?.name, message: error?.message });
		return NextResponse.json(
			{ message: "Email send failed", errorName: error?.name },
			{ status: 500 }
		);
	}
}
