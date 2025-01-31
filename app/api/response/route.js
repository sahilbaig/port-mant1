import { Resend } from 'resend';
import { EmailTemplate } from '../../components/EmailTemplate';
const resend = new Resend(process.env.API_KEY);

export async function GET() {
    try {
        const { data, error } = await resend.emails.send({
            from: 'Acme <onboarding@resend.dev>',
            to: ['sahilbaig.me@gmail.com'],
            subject: 'Hello world',
            react: EmailTemplate({ firstName: 'John' }),
        });

        if (error) {
            return Response.json({ error }, { status: 500 });
        }

        return Response.json(data);
    } catch (error) {
        return Response.json({ error }, { status: 500 });
    }
}