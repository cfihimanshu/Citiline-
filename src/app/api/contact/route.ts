import { db } from "@/lib/mysql";

type ContactPayload = {
    firstName?: unknown;
    lastName?: unknown;
    email?: unknown;
    phone?: unknown;
    company?: unknown;
    service?: unknown;
    message?: unknown;
    website?: unknown;
    sourcePage?: unknown;
    referrer?: unknown;
    utmSource?: unknown;
    utmMedium?: unknown;
    utmCampaign?: unknown;
    leadSource?: unknown;
};

const text = (value: unknown, max: number) =>
    typeof value === "string" ? value.trim().slice(0, max) : "";

export async function POST(request: Request) {
    try {
        const payload = await request.json() as ContactPayload;

        // Honeypot: bots commonly fill hidden fields.
        if (text(payload.website, 100)) return Response.json({ ok: true });

        const submission = {
            firstName: text(payload.firstName, 80),
            lastName: text(payload.lastName, 80),
            email: text(payload.email, 160),
            phone: text(payload.phone, 30),
            company: text(payload.company, 160),
            service: text(payload.service, 120),
            message: text(payload.message, 3000),
            sourcePage: text(payload.sourcePage, 255) || "/contact",
            referrer: text(payload.referrer, 1000),
            utmSource: text(payload.utmSource, 255),
            utmMedium: text(payload.utmMedium, 255),
            utmCampaign: text(payload.utmCampaign, 255),
            leadSource: text(payload.leadSource, 100) || "Citiline Website",
        };

        if (!submission.firstName || !submission.lastName || !submission.email || !submission.message) {
            return Response.json({ error: "Please fill all required fields." }, { status: 400 });
        }

        if (!/^[^\s@]+@[^\s@]+\.[^\s@]+$/.test(submission.email)) {
            return Response.json({ error: "Please enter a valid email address." }, { status: 400 });
        }

        await db.execute(
            `INSERT INTO contact_leads
                (first_name, last_name, email, phone, company, service, message,
                 lead_source, source_page, referrer, utm_source, utm_medium, utm_campaign)
             VALUES (?, ?, ?, ?, ?, ?, ?, ?, ?, ?, ?, ?, ?)`,
            [
                submission.firstName,
                submission.lastName,
                submission.email,
                submission.phone || null,
                submission.company || null,
                submission.service || null,
                submission.message,
                submission.leadSource,
                submission.sourcePage,
                submission.referrer || null,
                submission.utmSource || null,
                submission.utmMedium || null,
                submission.utmCampaign || null,
            ],
        );

        return Response.json({ ok: true });
    } catch (error) {
        console.error("Contact form submission failed:", error);
        return Response.json({ error: "Unable to send your message right now. Please try again." }, { status: 500 });
    }
}
