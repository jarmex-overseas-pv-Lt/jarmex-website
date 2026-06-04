import { NextRequest, NextResponse } from "next/server"
import { supabase } from "@/lib/supabase"
import { Resend } from "resend"

const resend = new Resend(process.env.RESEND_API_KEY)

export async function POST(request: NextRequest) {
  try {
    const body = await request.json()
    const { name, email, phone, message, country, port, quantity, product_name } = body

    if (!name || !email || !phone) {
      return NextResponse.json(
        { error: "Required fields missing" },
        { status: 400 }
      )
    }

    const { error } = await supabase
      .from("enquiries")
      .insert([{
        name,
        email,
        phone,
        message: message || "",
        country: country || "",
        port: port || "",
        quantity: quantity || "",
        product_name: product_name || "",
      }])

    if (error) {
      console.error("Supabase error:", error)
      return NextResponse.json(
        { error: "Failed to save enquiry" },
        { status: 500 }
      )
    }

    await resend.emails.send({
      from: "Jarmex Website <sales@jarmexoverseas.com>",
      to: "sales@jarmexoverseas.com", 
      subject: `New Enquiry from ${name}`,
      html: `
        <h2>New Product Enquiry</h2>
        <p><strong>Name:</strong> ${name}</p>
        <p><strong>Email:</strong> ${email}</p>
        <p><strong>Phone:</strong> ${phone}</p>
        <p><strong>Product:</strong> ${product_name || "Not specified"}</p>
        <p><strong>Country:</strong> ${country || "Not specified"}</p>
        <p><strong>Port:</strong> ${port || "Not specified"}</p>
        <p><strong>Quantity:</strong> ${quantity || "Not specified"}</p>
        <p><strong>Message:</strong> ${message || "No message"}</p>
      `,
    })

    return NextResponse.json(
      { message: "Enquiry submitted successfully" },
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