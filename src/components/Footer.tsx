import Link from "next/link"
import { Mail, Phone, MapPin } from "lucide-react"

export function Footer() {
  return (
    <footer className="bg-[#1B2B5E] text-white">
      <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8 py-12">
        <div className="grid grid-cols-1 md:grid-cols-4 gap-8">

          {/* Brand */}
          <div>
            <div className="flex flex-col mb-4">
              <span className="text-2xl font-bold">JARMEX</span>
              <span className="text-sm text-[#C9A84C] tracking-wider">OVERSEAS PVT. LTD.</span>
            </div>
            <p className="text-gray-300 text-sm mb-3">
              Exporter & Supplier of Handcrafted Home Décor, Wooden Handicrafts, Utility Furniture, Kitchenware & Hospitality Products.
            </p>
            <p className="text-gray-400 text-xs italic">
              Product images and specifications are indicative only and may vary due to handcrafted manufacturing processes.
            </p>
          </div>

          {/* Quick Links */}
          <div>
            <h3 className="text-[#C9A84C] font-semibold mb-4">Quick Links</h3>
            <ul className="space-y-2">
              <li><Link href="/" className="text-gray-300 hover:text-[#C9A84C] text-sm">Home</Link></li>
              <li><Link href="/about" className="text-gray-300 hover:text-[#C9A84C] text-sm">About Us</Link></li>
              <li><Link href="/services" className="text-gray-300 hover:text-[#C9A84C] text-sm">Services</Link></li>
              <li><Link href="/products" className="text-gray-300 hover:text-[#C9A84C] text-sm">Products</Link></li>
              <li><Link href="/contact" className="text-gray-300 hover:text-[#C9A84C] text-sm">Contact</Link></li>
            </ul>
            <h3 className="text-[#C9A84C] font-semibold mt-6 mb-4">Legal</h3>
            <ul className="space-y-2">
              <li><Link href="/terms" className="text-gray-300 hover:text-[#C9A84C] text-sm">Terms & Conditions</Link></li>
              <li><Link href="/privacy" className="text-gray-300 hover:text-[#C9A84C] text-sm">Privacy Policy</Link></li>
            </ul>
          </div>

          {/* Contact Info */}
          <div>
            <h3 className="text-[#C9A84C] font-semibold mb-4">Contact Info</h3>
            <ul className="space-y-3">
              <li className="flex items-start text-sm text-gray-300">
                <Mail className="w-4 h-4 mr-2 mt-0.5 flex-shrink-0 text-[#C9A84C]" />
                <a href="mailto:sales@jarmexoverseas.com" className="hover:text-[#C9A84C]">sales@jarmexoverseas.com</a>
              </li>
              <li className="flex items-start text-sm text-gray-300">
                <Phone className="w-4 h-4 mr-2 mt-0.5 flex-shrink-0 text-[#C9A84C]" />
                <a href="tel:+917028807311" className="hover:text-[#C9A84C]">+91 70288 07311</a>
              </li>
              <li className="flex items-start text-sm text-gray-300">
                <MapPin className="w-4 h-4 mr-2 mt-0.5 flex-shrink-0 text-[#C9A84C]" />
                <span>TBL Space, 301, Balewadi Plaza, Patil Nagar, Balewadi, Pune – 411045, Maharashtra, India</span>
              </li>
            </ul>
          </div>

          {/* Certifications */}
          <div>
            <h3 className="text-[#C9A84C] font-semibold mb-4">Certifications</h3>
            <ul className="space-y-3 text-sm text-gray-300">
              <li><span className="text-[#C9A84C] font-medium">GST: </span>27AAHCJ1410D1Z4</li>
              <li><span className="text-[#C9A84C] font-medium">IEC: </span>AAHCJ1410D</li>
              <li><span className="text-[#C9A84C] font-medium">CIN: </span>U47912PN2025PTC248434</li>
            </ul>
          </div>

        </div>

        {/* Legal Disclaimer */}
        <div className="mt-8 pt-8 border-t border-[#2a3d7e]">
          <p className="text-xs text-gray-400 mb-3">
            <strong className="text-gray-300">Legal Disclaimer: </strong>
            All international trade transactions, pricing, shipping terms, product specifications, and order conditions are subject to mutual commercial agreement and applicable export regulations. The content, product designs, images, branding, and materials displayed on this website are the intellectual property of JARMEX Overseas Private Limited and may not be copied, reproduced, or commercially used without prior written permission.
          </p>
          <div className="flex flex-col md:flex-row md:items-center md:justify-between gap-2">
            <p className="text-xs text-gray-400">
              © 2026 JARMEX Overseas Private Limited. All Rights Reserved.
            </p>
            <div className="flex gap-4 text-xs text-gray-400">
              <Link href="/terms" className="hover:text-[#C9A84C]">Terms & Conditions</Link>
              <Link href="/privacy" className="hover:text-[#C9A84C]">Privacy Policy</Link>
            </div>
          </div>
        </div>

      </div>
    </footer>
  )
}