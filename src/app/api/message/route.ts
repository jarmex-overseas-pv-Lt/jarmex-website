import { NextRequest, NextResponse } from "next/server"
import { supabaseServer } from "@/lib/supabase"
import { Resend } from "resend"

const resend = new Resend(process.env.RESEND_API_KEY)

export async function POST(request: NextRequest) {
  try {
    const body = await request.json()
    const { name, email, phone, message } = body

    if (!name || !email || !phone || !message) {
      return NextResponse.json(
        { error: "All fields are required" },
        { status: 400 }
      )
    }

    const { error } = await supabaseServer
      .from("contact_messages")
      .insert([{ name, email, phone, message }])

    if (error) {
      console.error("Supabase error:", error)
      return NextResponse.json(
        { error: "Failed to save message" },
        { status: 500 }
      )
    }

    await resend.emails.send({
      from: "Jarmex Website <sales@jarmexoverseas.com>",
      to: "sales@jarmexoverseas.com",
      subject: `New Contact Message from ${name}`,
      html: `
        <h2>New Contact Message</h2>
        <p><strong>Name:</strong> ${name}</p>
        <p><strong>Email:</strong> ${email}</p>
        <p><strong>Phone:</strong> ${phone}</p>
        <p><strong>Message:</strong> ${message}</p>
      `,
    })

    return NextResponse.json(
      { message: "Message sent successfully" },
      { status: 200 }
    )

  } catch (error) {
    console.error("Server error:", error)
    return NextResponse.json(
      { error: "Server error" },
      { status: 500 }
    )
  }
}