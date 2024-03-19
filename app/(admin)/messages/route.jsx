import { NextRequest, NextResponse } from "next/server";
import { transporter, mailOptions } from "@/libs/nodemailer";

// create next js route for get request

export async function GET(req) {
    return NextResponse.json({ message: "Nothing to do here" });
}

export async function POST(req = NextRequest) {
    const body = await req.json();
    try {
        await transporter.sendMail({
            ...mailOptions,
            subject: `Poruka sa codewilderness.me`,
            text: `
     > Ime: ${body.fullName}
     > Email: ${body.email}
     > ${body.message}
      `,
        });

        return NextResponse.json(
            {
                message: "Message sent successfully",
            },
            { data: newMessage },
            {
                status: 200,
            }
        );
    } catch (err) {
        console.error("Error sending message", err);
        return NextResponse.json(
            { message: "Something went wrong, message not sent" },
            { status: 500 }
        );
    }
}