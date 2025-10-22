import { NextResponse, type NextRequest } from "next/server";
import { SESv2Client, SendEmailCommand } from "@aws-sdk/client-sesv2";

// IMPORTANT: SES must be in a region that supports it (e.g., us-west-2 or us-east-1).
const ses = new SESv2Client({
	region: process.env.AWS_SES_REGION ?? "us-east-1",
});

type Payload = {
	firstNameValue: string;
	lastNameValue: string;
	emailValue: string;
	phoneValue?: string;
	companyValue?: string;
	messageValue: string;
};

export async function POST(req: NextRequest) {
	try {
		const body = (await req.json()) as Partial<Payload>;

		// Basic server-side validation/hardening
		const first = (body.firstNameValue ?? "").trim().slice(0, 60);
		const last = (body.lastNameValue ?? "").trim().slice(0, 60);
		const email = (body.emailValue ?? "").trim().slice(0, 120);
		const phone = (body.phoneValue ?? "").trim().slice(0, 40);
		const company = (body.companyValue ?? "").trim().slice(0, 120);
		const message = (body.messageValue ?? "").trim().slice(0, 5000);

		if (!first || !last || !email || !message) {
			return NextResponse.json({ error: "Missing required fields." }, { status: 400 });
		}
		// ultra-simple email check—replace with zod/valibot if you want
		if (!/^[^\s@]+@[^\s@]+\.[^\s@]+$/.test(email)) {
			return NextResponse.json({ error: "Invalid email." }, { status: 400 });
		}

		const name = `${first} ${last}`.trim();
		const toList = [
			"breck@covercoinc.com", // change as needed
			"dward1502@gmail.com",
		];

		const text = [`Name: ${name}`, `Email: ${email}`, phone ? `Phone: ${phone}` : "", company ? `Company: ${company}` : "", "", "Message:", message]
			.filter(Boolean)
			.join("\n");

		const subject = `Request from ${name}`;

		// Use a verified sender in your SES domain
		const fromEmail = process.env.EMAIL ?? "noreply@covercoinc.com";

		const cmd = new SendEmailCommand({
			FromEmailAddress: fromEmail,
			Destination: { ToAddresses: toList },
			ReplyToAddresses: [email], // so you can reply directly to the lead
			Content: {
				Simple: {
					Subject: { Data: subject, Charset: "UTF-8" },
					Body: {
						Text: { Data: text, Charset: "UTF-8" },
						// Html: { Data: `<pre>${escapeHtml(text)}</pre>`, Charset: "UTF-8" },
					},
				},
			},
		});

		await ses.send(cmd);
		return NextResponse.json({ message: "Email sent" });
	} catch (err: any) {
		console.error("SES error:", err);
		return NextResponse.json({ error: "Email failed" }, { status: 500 });
	}
}
