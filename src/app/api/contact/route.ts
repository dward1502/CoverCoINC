export const runtime = "nodejs";

import { NextResponse, type NextRequest } from "next/server";
import { Resend } from "resend"; // NEW: Resend client

const resend = new Resend(process.env.RESEND_API_KEY); // Uses your env var—no creds BS

type Payload = {
	firstName: string;
	lastName: string;
	email: string;
	phone?: string;
	company?: string;
	message: string;
};

export async function POST(req: NextRequest) {
	try {
		const body = (await req.json()) as Partial<Payload>;
		console.log("CONTACT BODY:", body);

		const first = (body.firstName ?? "").trim().slice(0, 60);
		const last = (body.lastName ?? "").trim().slice(0, 60);
		const email = (body.email ?? "").trim().slice(0, 120);
		const phone = (body.phone ?? "").trim().slice(0, 40);
		const company = (body.company ?? "").trim().slice(0, 120);
		const message = (body.message ?? "").trim().slice(0, 5000);

		if (!first || !last || !email || !message) {
			return NextResponse.json({ message: "Missing required fields." }, { status: 400 });
		}

		if (!/^[^\s@]+@[^\s@]+\.[^\s@]+$/.test(email)) {
			return NextResponse.json({ message: "Invalid email address." }, { status: 400 });
		}

		const name = `${first} ${last}`.trim();
		const toList = ["breck@covercoinc.com", "dward1502@gmail.com"];

		// Build plain text body (same as before)
		const text = [`Name: ${name}`, `Email: ${email}`, phone ? `Phone: ${phone}` : "", company ? `Company: ${company}` : "", "", "Message:", message]
			.filter(Boolean)
			.join("\n");

		const subject = `Request from ${name}`;

		// NEW: Send via Resend (simple API—no sandbox/verification needed for basics)
		const result = await resend.emails.send({
			from: process.env.EMAIL ?? "Contact Form <noreply@covercoinc.com>", // Your verified domain (add in Resend dashboard)
			to: toList,
			replyTo: email,
			subject: subject,
			text: text, // Or html: `<p>${text}</p>` for basic HTML
		});

		console.log("RESEND RESULT:", result);

		return NextResponse.json({ message: "Email sent successfully." });
	} catch (err: any) {
		console.error("Resend error:", {
			name: err?.name,
			message: err?.message,
		});

		return NextResponse.json(
			{
				message: "Email send failed",
				errorName: err?.name,
				errorMessage: err?.message,
			},
			{ status: 500 }
		);
	}
}
