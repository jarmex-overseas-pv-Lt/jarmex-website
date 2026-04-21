import type { Metadata } from "next"
import "./globals.css"
import { Navbar } from "@/components/Navbar"
import { Footer } from "@/components/Footer"
import { WhatsAppButton } from "@/components/WhatsAppButton"

export const metadata: Metadata = {
  title: "Jarmex Overseas Pvt. Ltd. | Premium Handcrafted Wooden Products Exporter",
  description: "India's trusted B2B exporter of premium handcrafted wooden home décor, kitchenware and furniture. IEC Registered | GST Verified | Pune, India.",
  keywords: "wooden products exporter india, handcrafted furniture export, B2B wooden goods, Pune exporter",
}

export default function RootLayout({
  children,
}: {
  children: React.ReactNode
}) {
  return (
    <html lang="en">
      <body>
        <Navbar />
        <main>{children}</main>
        <WhatsAppButton />
        <Footer />
      </body>
    </html>
  )
}