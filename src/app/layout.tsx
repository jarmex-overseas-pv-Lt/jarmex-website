import type { Metadata } from "next"
import "./globals.css"
import { Navbar } from "@/components/Navbar"
import { Footer } from "@/components/Footer"
import { WhatsAppButton } from "@/components/WhatsAppButton"

export const metadata: Metadata = {
  title: "Jarmex Overseas Pvt. Ltd. | Premium Handcrafted Wooden Products Exporter",
  description: "India's trusted B2B exporter of premium handcrafted wooden home décor, kitchenware and furniture. IEC Registered | GST Verified | CIN Registered | Pune, India.",
  keywords: "wooden products exporter india, handcrafted furniture export, B2B wooden goods, Pune exporter, wooden bowls exporter, spice box exporter, wooden coasters wholesale",
  authors: [{ name: "Jarmex Overseas Pvt. Ltd." }],
  creator: "Jarmex Overseas Pvt. Ltd.",
  publisher: "Jarmex Overseas Pvt. Ltd.",
  metadataBase: new URL("https://www.jarmexoverseas.com"),
  alternates: { canonical: "/" },
  openGraph: {
    title: "Jarmex Overseas Pvt. Ltd. | Premium Handcrafted Wooden Products Exporter",
    description: "India's trusted B2B exporter of premium handcrafted wooden home décor, kitchenware and furniture. IEC Registered | GST Verified | Pune, India.",
    url: "https://www.jarmexoverseas.com",
    siteName: "Jarmex Overseas Pvt. Ltd.",
    locale: "en_IN",
    type: "website",
  },
  twitter: {
    card: "summary_large_image",
    title: "Jarmex Overseas Pvt. Ltd. | Premium Handcrafted Wooden Products Exporter",
    description: "India's trusted B2B exporter of premium handcrafted wooden home décor, kitchenware and furniture.",
  },
  robots: {
    index: true,
    follow: true,
    googleBot: { index: true, follow: true },
  },
  verification: {
    google: "Ye017DCbyulusVqVeLFgQj14BaLusfJGi2sui_fVKY0",
  },
  icons: {
    icon: "/favicon.svg",
    shortcut: "/favicon.svg",
    apple: "/favicon.svg",
  },
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