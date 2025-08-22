import { NextRequest, NextResponse } from 'next/server'
import nodemailer from 'nodemailer'

export async function POST(request: NextRequest) {
  try {
    const { email } = await request.json()

    if (!email) {
      return NextResponse.json(
        { error: 'Email is required' },
        { status: 400 }
      )
    }

    // Email validation
    const emailRegex = /^[^\s@]+@[^\s@]+\.[^\s@]+$/
    if (!emailRegex.test(email)) {
      return NextResponse.json(
        { error: 'Please enter a valid email address' },
        { status: 400 }
      )
    }

    // Create transporter using Gmail
    const transporter = nodemailer.createTransport({
      service: 'gmail',
      auth: {
        user: process.env.SMTP_EMAIL, // Your Gmail address
        pass: process.env.SMTP_PASSWORD, // Your Gmail app password
      },
    })

    // Email content for the notification
    const mailOptions = {
      from: process.env.SMTP_EMAIL,
      to: 'konnectwell00@gmail.com',
      subject: '🎉 New Newsletter Signup - KonnectWell',
      html: `
        <div style="font-family: Arial, sans-serif; max-width: 600px; margin: 0 auto; padding: 20px; background-color: #f8fafc;">
          <div style="background-color: white; padding: 30px; border-radius: 10px; box-shadow: 0 2px 10px rgba(0,0,0,0.1);">
            <div style="text-align: center; margin-bottom: 30px;">
              <h1 style="color: #2563eb; margin: 0; font-size: 28px;">KonnectWell</h1>
              <p style="color: #64748b; margin: 5px 0 0 0;">Financial Advising Matchmaking Service</p>
            </div>
            
            <div style="background-color: #eff6ff; padding: 20px; border-radius: 8px; margin-bottom: 20px;">
              <h2 style="color: #1e40af; margin: 0 0 15px 0; font-size: 20px;">📧 New Newsletter Signup!</h2>
              <p style="margin: 0; color: #374151; font-size: 16px;">
                Someone just signed up for the KonnectWell newsletter.
              </p>
            </div>

            <div style="background-color: #f9fafb; padding: 20px; border-radius: 8px; border-left: 4px solid #2563eb;">
              <p style="margin: 0 0 10px 0; color: #6b7280; font-size: 14px; text-transform: uppercase; letter-spacing: 0.5px;">Email Address</p>
              <p style="margin: 0; color: #111827; font-size: 18px; font-weight: 600;">${email}</p>
            </div>

            <div style="margin-top: 30px; padding-top: 20px; border-top: 1px solid #e5e7eb; text-align: center;">
              <p style="margin: 0; color: #9ca3af; font-size: 14px;">
                This notification was sent from your KonnectWell website.
              </p>
              <p style="margin: 5px 0 0 0; color: #9ca3af; font-size: 14px;">
                <strong>Trusted connections. Data-driven fit.</strong>
              </p>
            </div>
          </div>
        </div>
      `,
    }

    // Send email notification
    await transporter.sendMail(mailOptions)

    return NextResponse.json(
      { 
        message: 'Newsletter signup successful! We\'ll be in touch soon.',
        success: true 
      },
      { status: 200 }
    )

  } catch (error) {
    console.error('Newsletter signup error:', error)
    return NextResponse.json(
      { error: 'Failed to process newsletter signup. Please try again.' },
      { status: 500 }
    )
  }
}
