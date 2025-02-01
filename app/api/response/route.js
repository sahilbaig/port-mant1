import { Resend } from "resend";

const resend = new Resend(process.env.API_KEY);

export async function POST(req) {
    try {
        const { name, email, message } = await req.json();

        if (!name || !email || !message) {
            return Response.json({ error: "Missing fields" }, { status: 400 });
        }

        const { data, error } = await resend.emails.send({
            from: "Porfolio <onboarding@resend.dev>",
            to: ["sahilbaig.me@gmail.com"],
            subject: `New Contact Form Submission from ${name}`,
            text: `You received a new message from:\n\nName: ${name}\nEmail: ${email}\n\nMessage:\n${message}`,
        });

        if (error) {
            return Response.json({ error }, { status: 500 });
        }

        return Response.json({ success: true, data });
    } catch (error) {
        return Response.json({ error: "Internal Server Error" }, { status: 500 });
    }
}
