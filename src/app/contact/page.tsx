"use client"

import { useState } from "react"
import { Mail, Phone, MapPin, Send, Globe } from "lucide-react"

export default function ContactPage() {
  const [formData, setFormData] = useState({
    name: "",
    email: "",
    phone: "",
    message: "",
    disclaimer: false,
  })
  const [submitted, setSubmitted] = useState(false)
  const [loading, setLoading] = useState(false)

  const handleChange = (e: React.ChangeEvent<HTMLInputElement | HTMLTextAreaElement>) => {
    const { name, value } = e.target
    setFormData((prev) => ({ ...prev, [name]: value }))
  }

  const handleCheckbox = (e: React.ChangeEvent<HTMLInputElement>) => {
    setFormData((prev) => ({ ...prev, disclaimer: e.target.checked }))
  }

  const handleSubmit = async (e: React.FormEvent) => {
    e.preventDefault()
    if (!formData.disclaimer) {
      alert("Please accept the disclaimer to proceed.")
      return
    }
    setLoading(true)
    await new Promise((resolve) => setTimeout(resolve, 1000))
    setLoading(false)
    setSubmitted(true)
  }

  return (
    <div>

      {/* Hero Banner */}
      <section className="bg-[#1B2B5E] text-white py-20">
        <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8 text-center">
          <h1 className="text-4xl md:text-5xl font-bold mb-4">
            Get In <span className="text-[#C9A84C]">Touch</span>
          </h1>
          <p className="text-xl text-gray-200 max-w-3xl mx-auto">
            Send us your enquiry and our team will get back
            to you within 24 hours
          </p>
        </div>
      </section>

      {/* Contact Section */}
      <section className="py-20">
        <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
          <div className="grid grid-cols-1 lg:grid-cols-2 gap-12">

            {/* Enquiry Form */}
            <div>
              <h2 className="text-2xl font-bold text-[#1B2B5E] mb-6">
                Send An Enquiry
              </h2>

              {submitted ? (
                <div className="bg-green-50 border border-green-200 rounded-lg p-8 text-center">
                  <div className="w-16 h-16 bg-green-100 rounded-full flex items-center justify-center mx-auto mb-4">
                    <Send className="w-8 h-8 text-green-600" />
                  </div>
                  <h3 className="text-xl font-bold text-green-800 mb-2">
                    Enquiry Sent Successfully!
                  </h3>
                  <p className="text-green-600">
                    Thank you for reaching out. Our team will
                    contact you within 24 hours.
                  </p>
                </div>
              ) : (
                <form onSubmit={handleSubmit} className="space-y-6">

                  {/* Name */}
                  <div>
                    <label className="block text-sm font-medium text-gray-700 mb-2">
                      Full Name <span className="text-red-500">*</span>
                    </label>
                    <input
                      type="text"
                      name="name"
                      value={formData.name}
                      onChange={handleChange}
                      required
                      placeholder="Enter your full name"
                      className="w-full px-4 py-3 border border-gray-300 rounded-md focus:outline-none focus:ring-2 focus:ring-[#C9A84C] focus:border-transparent"
                    />
                  </div>

                  {/* Email */}
                  <div>
                    <label className="block text-sm font-medium text-gray-700 mb-2">
                      Email Address <span className="text-red-500">*</span>
                    </label>
                    <input
                      type="email"
                      name="email"
                      value={formData.email}
                      onChange={handleChange}
                      required
                      placeholder="Enter your email address"
                      className="w-full px-4 py-3 border border-gray-300 rounded-md focus:outline-none focus:ring-2 focus:ring-[#C9A84C] focus:border-transparent"
                    />
                  </div>

                  {/* Phone */}
                  <div>
                    <label className="block text-sm font-medium text-gray-700 mb-2">
                      Phone Number <span className="text-red-500">*</span>
                    </label>
                    <input
                      type="tel"
                      name="phone"
                      value={formData.phone}
                      onChange={handleChange}
                      required
                      placeholder="+1 234 567 8900"
                      className="w-full px-4 py-3 border border-gray-300 rounded-md focus:outline-none focus:ring-2 focus:ring-[#C9A84C] focus:border-transparent"
                    />
                  </div>

                  {/* Message */}
                  <div>
                    <label className="block text-sm font-medium text-gray-700 mb-2">
                      Message <span className="text-red-500">*</span>
                    </label>
                    <textarea
                      name="message"
                      value={formData.message}
                      onChange={handleChange}
                      required
                      rows={5}
                      placeholder="Tell us about your requirements — product, quantity, destination country..."
                      className="w-full px-4 py-3 border border-gray-300 rounded-md focus:outline-none focus:ring-2 focus:ring-[#C9A84C] focus:border-transparent resize-none"
                    />
                  </div>

                  {/* Disclaimer Checkbox */}
                  <div className="flex items-start gap-3">
                    <input
                      type="checkbox"
                      id="disclaimer"
                      checked={formData.disclaimer}
                      onChange={handleCheckbox}
                      className="mt-1 w-4 h-4 accent-[#C9A84C]"
                    />
                    <label htmlFor="disclaimer" className="text-sm text-gray-600">
                      I understand that Jarmex Overseas Pvt. Ltd.
                      acts as a trading intermediary and holds no
                      liability for export/import transactions.
                    </label>
                  </div>

                  {/* Submit Button */}
                  <button
                    type="submit"
                    disabled={loading}
                    className="w-full bg-[#C9A84C] hover:bg-[#b89740] disabled:opacity-50 text-white py-3 px-6 rounded-md font-medium transition-colors flex items-center justify-center gap-2"
                  >
                    {loading ? (
                      <span>Sending...</span>
                    ) : (
                      <>
                        <Send className="w-5 h-5" />
                        Send Enquiry
                      </>
                    )}
                  </button>

                </form>
              )}
            </div>

            {/* Contact Details */}
            <div>
              <h2 className="text-2xl font-bold text-[#1B2B5E] mb-6">
                Contact Details
              </h2>

              <div className="space-y-6 mb-8">
                <div className="flex items-start gap-4">
                  <div className="w-12 h-12 bg-[#F5F0E8] rounded-lg flex items-center justify-center flex-shrink-0">
                    <Mail className="w-6 h-6 text-[#C9A84C]" />
                  </div>
                  <div>
                    <p className="font-semibold text-[#1B2B5E] mb-1">Email</p>
                    <a href="mailto:sales@jarmexoverseas.com" className="text-gray-600 hover:text-[#C9A84C] transition-colors">
                      sales@jarmexoverseas.com
                    </a>
                  </div>
                </div>

                <div className="flex items-start gap-4">
                  <div className="w-12 h-12 bg-[#F5F0E8] rounded-lg flex items-center justify-center flex-shrink-0">
                    <Phone className="w-6 h-6 text-[#C9A84C]" />
                  </div>
                  <div>
                    <p className="font-semibold text-[#1B2B5E] mb-1">WhatsApp & Phone</p>
                    <a href="tel:+17059777971" className="text-gray-600 hover:text-[#C9A84C] transition-colors">
                      +1 705 977 7971
                    </a>
                  </div>
                </div>

                <div className="flex items-start gap-4">
                  <div className="w-12 h-12 bg-[#F5F0E8] rounded-lg flex items-center justify-center flex-shrink-0">
                    <MapPin className="w-6 h-6 text-[#C9A84C]" />
                  </div>
                  <div>
                    <p className="font-semibold text-[#1B2B5E] mb-1">Office Address</p>
                    <p className="text-gray-600">
                      Balewadi Plaza, Flat 301,<br />
                      Nr Mitcon Institute, Baner Gaon,<br />
                      Pune 411045, Maharashtra, India
                    </p>
                  </div>
                </div>

                <div className="flex items-start gap-4">
                  <div className="w-12 h-12 bg-[#F5F0E8] rounded-lg flex items-center justify-center flex-shrink-0">
                    <Globe className="w-6 h-6 text-[#C9A84C]" />
                  </div>
                  <div>
                    <p className="font-semibold text-[#1B2B5E] mb-1">IEC Code</p>
                    <p className="text-gray-600 font-mono">AAHCJ1410D</p>
                    <p className="text-xs text-gray-400 mt-1">
                      Government Registered Exporter
                    </p>
                  </div>
                </div>
              </div>

              {/* Map Placeholder */}
              <div className="bg-gray-100 rounded-lg h-64 flex items-center justify-center border border-gray-200">
                <div className="text-center">
                  <MapPin className="w-10 h-10 text-[#C9A84C] mx-auto mb-2" />
                  <p className="text-gray-500 font-medium">Balewadi, Pune</p>
                  <p className="text-gray-400 text-sm">Maharashtra, India</p>
                </div>
              </div>
            </div>

          </div>
        </div>
      </section>

    </div>
  )
}