import { sendEmail } from "@/lib/sendMail.js";
import { NextResponse } from "next/server";

export async function POST(req) {
  try {
    
    const { companyName, name, projectType, message } = await req.json();

    await sendEmail({
      to: "devniq@gmail.com",
      subject: `New Contact Form Submission from ${name}`,
      html: `<!DOCTYPE html>
<html lang="en">
<head>
    <meta charset="UTF-8">
    <meta name="viewport" content="width=device-width, initial-scale=1.0">
    <title>Project Inquiry Email</title>
</head>
<body style="margin: 0; padding: 0; font-family: Arial, sans-serif; background-color: #f4f4f4; color: #333333;">
    <table cellpadding="0" cellspacing="0" border="0" style="width: 100%; max-width: 600px; margin: 0 auto; background-color: #ffffff; border-radius: 8px; overflow: hidden; box-shadow: 0 4px 12px rgba(0,0,0,0.1);">
        <!-- Header Section -->
        <tr>
            <td style="background: linear-gradient(135deg, #4a90e2, #50e3c2); padding: 40px 20px; text-align: center; color: #ffffff;">
                <h1 style="margin: 0; font-size: 28px; font-weight: bold; letter-spacing: 1px; text-shadow: 1px 1px 2px rgba(0,0,0,0.2);">Project Inquiry</h1>
                <p style="margin: 10px 0 0; font-size: 16px; opacity: 0.9;">We're excited to hear from you!</p>
            </td>
        </tr>
        
        <!-- Content Section -->
        <tr>
            <td style="padding: 30px 20px;">
                <table cellpadding="0" cellspacing="0" border="0" style="width: 100%;">
                    <tr>
                        <td style="padding-bottom: 20px; border-bottom: 1px solid #eeeeee;">
                            <h2 style="margin: 0 0 10px; font-size: 20px; color: #4a90e2;">Sender Details</h2>
                            <p style="margin: 0; font-size: 16px;"><strong>Company Name:</strong> ${companyName}</p>
                            <p style="margin: 5px 0 0; font-size: 16px;"><strong>Name:</strong> ${name}</p>
                        </td>
                    </tr>
                    <tr>
                        <td style="padding: 20px 0; border-bottom: 1px solid #eeeeee;">
                            <h2 style="margin: 0 0 10px; font-size: 20px; color: #4a90e2;">Project Information</h2>
                            <p style="margin: 0; font-size: 16px;"><strong>Project Type:</strong> ${projectType}</p>
                        </td>
                    </tr>
                    <tr>
                        <td style="padding-top: 20px;">
                            <h2 style="margin: 0 0 10px; font-size: 20px; color: #4a90e2;">Message</h2>
                            <p style="margin: 0; font-size: 16px; line-height: 1.6; background-color: #f9f9f9; padding: 15px; border-radius: 4px; border: 1px solid #eeeeee;">${message}</p>
                        </td>
                    </tr>
                </table>
            </td>
        </tr>
        
        <!-- Footer Section -->
        <tr>
            <td style="background-color: #f4f4f4; padding: 20px; text-align: center; font-size: 14px; color: #777777;">
                <p style="margin: 0;">Thank you for your interest. We'll get back to you soon!</p>
                <p style="margin: 10px 0 0;">&copy; 2026 Your Company. All rights reserved.</p>
            </td>
        </tr>
    </table>
</body>
</html>`,
    });

    return NextResponse.json({ success: true });
  } catch (error) {
    return NextResponse.json(
      { success: false, error: "Failed to send email" },
      { status: 500 }
    );
  }
}
