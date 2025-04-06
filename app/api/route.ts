import { NextRequest } from 'next/server';
import nodemailer from 'nodemailer';

export async function POST(req: NextRequest) {
    const { name, email, message } = await req.json();

    const transporter = nodemailer.createTransport({
        host: "smtp.gmail.com",
        port: 587,
        tls: {
            ciphers: "SSLv3",
            rejectUnauthorized: false,
        },
        auth: {
            user: "limcubes@gmail.com",
            pass: "hcrs bwip wzib gzhj"
        }
    });

    try {
        await transporter.sendMail({
            from: email,
            to: "limcubes@gmail.com",
            replyTo: email,
            subject: `Website activity from ${email}`,
            html: `
                    <p>Name: ${name}</p>
                    <p>Email: ${email}</p>
                    <p>Message: ${message}</p>
                `,
        });
        return new Response('Email sent successfully', { status: 200 });
    } catch (error) {
        console.error(error);
        return new Response('Failed to send email', { status: 500 });
    }
}