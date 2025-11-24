export const runtime = "nodejs";

import { NextResponse, type NextRequest } from "next/server";
import { SESv2Client, SendEmailCommand } from "@aws-sdk/client-sesv2";
import { fromNodeProviderChain } from "@aws-sdk/credential-providers";

const ses = new SESv2Client({
	region: process.env.SES_REGION,
	credentials: fromNodeProviderChain(),
});

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

		const text = [`Name: ${name}`, `Email: ${email}`, phone ? `Phone: ${phone}` : "", company ? `Company: ${company}` : "", "", "Message:", message]
			.filter(Boolean)
			.join("\n");

		const subject = `Request from ${name}`;

		const fromEmail = process.env.EMAIL ?? "noreply@covercoinc.com"; 

		const cmd = new SendEmailCommand({
			FromEmailAddress: fromEmail,
			Destination: { ToAddresses: toList },
			ReplyToAddresses: [email], 
			Content: {
				Simple: {
					Subject: { Data: subject, Charset: "UTF-8" },
					Body: {
						Text: { Data: text, Charset: "UTF-8" },
					},
				},
			},
		});

		const result = await ses.send(cmd);
		console.log("SES RESULT:", result);

		return NextResponse.json({ message: "Email sent successfully." });
	} catch (err: any) {
		console.error("SES error:", {
			name: err?.name,
			message: err?.message,
			metadata: err?.$metadata,
			stack: err?.stack,
			creds: ses.config.credentials ? "Loaded" : "Failed to load",
		});

		return NextResponse.json(
			{
				message: "SES send failed",
				errorName: err?.name,
				errorMessage: err?.message,
				httpStatusCode: err?.$metadata?.httpStatusCode,
			},
			{ status: 500 }
		);
	}
}
