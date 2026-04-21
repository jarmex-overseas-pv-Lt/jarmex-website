import Link from "next/link"
import { Mail, Phone, MapPin } from "lucide-react"

export function Footer() {
  return (
    <footer className="bg-[#1B2B5E] text-white">
      <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8 py-12">
        <div className="grid grid-cols-1 md:grid-cols-4 gap-8">

          <div>
            <div className="flex flex-col mb-4">
              <span className="text-2xl font-bold">JARMEX</span>
              <span className="text-sm text-[#C9A84C] tracking-wider">OVERSEAS PVT. LTD.</span>
            </div>
            <p className="text-gray-300 text-sm">Premium handcrafted wooden products exported worldwide from Pune, India.</p>
          </div>

          <div>
            <h3 className="text-[#C9A84C] font-semibold mb-4">Quick Links</h3>
            <ul className="space-y-2">
              <li><Link href="/" className="text-gray-300 hover:text-[#C9A84C] text-sm">Home</Link></li>
              <li><Link href="/about" className="text-gray-300 hover:text-[#C9A84C] text-sm">About Us</Link></li>
              <li><Link href="/services" className="text-gray-300 hover:text-[#C9A84C] text-sm">Services</Link></li>
              <li><Link href="/products" className="text-gray-300 hover:text-[#C9A84C] text-sm">Products</Link></li>
              <li><Link href="/contact" className="text-gray-300 hover:text-[#C9A84C] text-sm">Contact</Link></li>
            </ul>
          </div>

          <div>
            <h3 className="text-[#C9A84C] font-semibold mb-4">Contact Info</h3>
            <ul className="space-y-3">
              <li className="flex items-start text-sm text-gray-300">
                <Mail className="w-4 h-4 mr-2 mt-0.5 flex-shrink-0 text-[#C9A84C]" />
                <a href="mailto:sales@jarmexoverseas.com" className="hover:text-[#C9A84C]">sales@jarmexoverseas.com</a>
              </li>
              <li className="flex items-start text-sm text-gray-300">
                <Phone className="w-4 h-4 mr-2 mt-0.5 flex-shrink-0 text-[#C9A84C]" />
                <a href="tel:+17059777971" className="hover:text-[#C9A84C]">+1 705 977 7971</a>
              </li>
              <li className="flex items-start text-sm text-gray-300">
                <MapPin className="w-4 h-4 mr-2 mt-0.5 flex-shrink-0 text-[#C9A84C]" />
                <span>Balewadi Plaza, Flat 301, Nr Mitcon Institute, Baner Gaon, Pune 411045, Maharashtra, India</span>
              </li>
            </ul>
          </div>

          <div>
            <h3 className="text-[#C9A84C] font-semibold mb-4">Certifications</h3>
            <ul className="space-y-3 text-sm text-gray-300">
              <li><span className="text-[#C9A84C] font-medium">GST: </span>27AAHCJ1410D1Z4</li>
              <li><span className="text-[#C9A84C] font-medium">IEC: </span>AAHCJ1410D</li>
              <li><span className="text-[#C9A84C] font-medium">CIN: </span>U47912PN2025PTC248434</li>
            </ul>
          </div>

        </div>

        <div className="mt-8 pt-8 border-t border-[#2a3d7e]">
          <p className="text-xs text-gray-400 mb-4">
            <strong className="text-gray-300">Legal Disclaimer: </strong>
            Jarmex Overseas Pvt. Ltd. acts solely as a trading intermediary. All export/import transactions are conducted at the sole risk of the respective parties. We hold no liability for shipping, customs, or delivery.
          </p>
          <p className="text-center text-sm text-gray-400">© 2026 Jarmex Overseas Pvt. Ltd. All rights reserved.</p>
        </div>

      </div>
    </footer>
  )
}