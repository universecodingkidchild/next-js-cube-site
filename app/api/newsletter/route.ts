// app/api/newsletter/route.ts
import { NextRequest, NextResponse } from 'next/server';
import nodemailer from 'nodemailer';




export async function POST(req: NextRequest) {
    const { email } = await req.json();

    // Validate email
    if (!email || !email.includes('@')) {
        return NextResponse.json({ error: 'Invalid email address' }, { status: 400 });
    }

    // Configure nodemailer transporter
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
            subject: `Lim Cubes Newsletter subscription from ${email}`,
            html: `
                    <p>You have a new newsletter subscriber!</p>
                    <p>Email: ${email}</p>
                   
                `,
        });
        return new Response('Subcription Successful', { status: 200 });
    } catch (error) {
        console.error(error);
        return new Response('Failed to subscribe', { status: 500 });
    }
}
