export const runtime = "nodejs";

import { NextResponse, type NextRequest } from "next/server";
import { Resend } from "resend";
import { quoteFormSchema } from "@/lib/validation/quote";

const resend = new Resend(process.env.RESEND_API_KEY);

export async function POST(req: NextRequest) {
	try {
		const body = await req.json();

		if (typeof body?.honeypot === "string" && body.honeypot.length > 0) {
			return NextResponse.json({ message: "Quote request received." });
		}

		const parsed = quoteFormSchema.safeParse(body);
		if (!parsed.success) {
			return NextResponse.json(
				{
					message: "Please correct the errors below.",
					errors: parsed.error.flatten().fieldErrors,
				},
				{ status: 400 }
			);
		}

		const {
			name,
			company,
			email,
			phone,
			industry,
			projectLocation,
			productTypes,
			quantityEstimate,
			timeline,
			message,
		} = parsed.data;
		const sourcePage = typeof body?.sourcePage === "string" ? body.sourcePage : "";

		const toList = ["breck@covercoinc.com", "dward1502@gmail.com"];

		const text = [
			`[SOURCE: Quote Request Form${sourcePage ? ` — ${sourcePage}` : ""}]`,
			``,
			`Name: ${name}`,
			`Company: ${company}`,
			`Email: ${email}`,
			phone ? `Phone: ${phone}` : "",
			`Industry: ${industry}`,
			projectLocation ? `Project Location: ${projectLocation}` : "",
			`Product Types: ${productTypes.join(", ")}`,
			quantityEstimate ? `Quantity Estimate: ${quantityEstimate}` : "",
			timeline ? `Timeline: ${timeline}` : "",
			``,
			message ? "Project Details:" : "",
			message ?? "",
		]
			.filter((l) => l !== "")
			.join("\n");

		const result = await resend.emails.send({
			from: process.env.EMAIL ?? "Quote Request <noreply@covercoinc.com>",
			to: toList,
			replyTo: email,
			subject: `Quote Request from ${name} — ${company}`,
			text,
		});

		console.log("RESEND QUOTE RESULT:", result);

		return NextResponse.json({ message: "Quote request sent successfully." });
	} catch (err: unknown) {
		const error = err as { name?: string; message?: string };
		console.error("Quote route error:", { name: error?.name, message: error?.message });
		return NextResponse.json(
			{ message: "Failed to send quote request", errorName: error?.name },
			{ status: 500 }
		);
	}
}
