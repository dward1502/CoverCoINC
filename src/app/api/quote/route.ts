export const runtime = "nodejs";

import { NextResponse, type NextRequest } from "next/server";
import { Resend } from "resend";

const resend = new Resend(process.env.RESEND_API_KEY);

type Payload = {
	firstName: string;
	lastName: string;
	email: string;
	phone?: string;
	company?: string;
	venueType?: string;
	productInterest?: string;
	quantity?: string;
	message: string;
};

export async function POST(req: NextRequest) {
	try {
		const body = (await req.json()) as Partial<Payload>;

		const first = (body.firstName ?? "").trim().slice(0, 60);
		const last = (body.lastName ?? "").trim().slice(0, 60);
		const email = (body.email ?? "").trim().slice(0, 120);
		const phone = (body.phone ?? "").trim().slice(0, 40);
		const company = (body.company ?? "").trim().slice(0, 120);
		const venueType = (body.venueType ?? "").trim().slice(0, 120);
		const productInterest = (body.productInterest ?? "").trim().slice(0, 120);
		const quantity = (body.quantity ?? "").trim().slice(0, 40);
		const message = (body.message ?? "").trim().slice(0, 5000);

		if (!first || !last || !email || !message) {
			return NextResponse.json({ message: "Missing required fields." }, { status: 400 });
		}

		if (!/^[^\s@]+@[^\s@]+\.[^\s@]+$/.test(email)) {
			return NextResponse.json({ message: "Invalid email address." }, { status: 400 });
		}

		const name = `${first} ${last}`.trim();
		const toList = ["breck@covercoinc.com", "dward1502@gmail.com"];

		const lines = [
			`[SOURCE: Quote Request Form]`,
			``,
			`Name: ${name}`,
			`Email: ${email}`,
			phone ? `Phone: ${phone}` : "",
			company ? `Company: ${company}` : "",
			venueType ? `Venue Type: ${venueType}` : "",
			productInterest ? `Product Interest: ${productInterest}` : "",
			quantity ? `Quantity: ${quantity}` : "",
			``,
			"Message:",
			message,
		].filter((l) => l !== undefined && !(l === "" && lines?.length === 0));

		const text = lines.filter(Boolean).join("\n");

		const result = await resend.emails.send({
			from: process.env.EMAIL ?? "Quote Request <noreply@covercoinc.com>",
			to: toList,
			replyTo: email,
			subject: `Quote Request from ${name}`,
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
