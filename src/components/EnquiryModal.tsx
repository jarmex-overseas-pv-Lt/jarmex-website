"use client"

import { ImageCarousel } from "@/components/ImageCarousel"
import { useState, useEffect } from "react"
import { X, CheckCircle } from "lucide-react"
import { PhoneInput } from "@/components/PhoneInput"

interface Product {
  id: number
  name: string
  category: string
  images: string[]
  description?: string
}

interface EnquiryModalProps {
  isOpen: boolean
  onClose: () => void
  product: Product
}

export function EnquiryModal({ isOpen, onClose, product }: EnquiryModalProps) {
  const [formData, setFormData] = useState({
    fullName: "",
    countryCode: "+91",
    phoneNumber: "",
    email: "",
    country: "",
    destinationPort: "",
    quantity: "",
  })
  const [isSubmitted, setIsSubmitted] = useState(false)
  const [loading, setLoading] = useState(false)

  useEffect(() => {
    if (!isOpen) {
      setTimeout(() => {
        setIsSubmitted(false)
        setFormData({
          fullName: "",
          countryCode: "+91",
          phoneNumber: "",
          email: "",
          country: "",
          destinationPort: "",
          quantity: "",
        })
      }, 300)
    }
  }, [isOpen])

  useEffect(() => {
    const handleEscape = (e: KeyboardEvent) => {
      if (e.key === "Escape" && isOpen) onClose()
    }
    window.addEventListener("keydown", handleEscape)
    return () => window.removeEventListener("keydown", handleEscape)
  }, [isOpen, onClose])

  useEffect(() => {
    if (isOpen) {
      document.body.style.overflow = "hidden"
    } else {
      document.body.style.overflow = "unset"
    }
    return () => { document.body.style.overflow = "unset" }
  }, [isOpen])

  const handleSubmit = async (e: React.FormEvent) => {
    e.preventDefault()
    setLoading(true)
    try {
      const response = await fetch("/api/contact", {
        method: "POST",
        headers: { "Content-Type": "application/json" },
        body: JSON.stringify({
          name: formData.fullName,
          email: formData.email,
          phone: formData.countryCode + " " + formData.phoneNumber,
          message: "Product: " + product.name + " | Country: " + formData.country + " | Port: " + formData.destinationPort + " | Quantity: " + formData.quantity,
          country: formData.country,
          port: formData.destinationPort,
          quantity: formData.quantity,
          product_name: product.name,
        }),
      })
      if (response.ok) {
        setIsSubmitted(true)
      } else {
        alert("Something went wrong. Please try again.")
      }
    } catch (error) {
      console.error("Error:", error)
      alert("Something went wrong. Please try again.")
    } finally {
      setLoading(false)
    }
  }

  if (!isOpen) return null

  return (
    <div className="fixed inset-0 z-50 flex items-center justify-center p-4">
      <div className="absolute inset-0 bg-black/50 backdrop-blur-sm" onClick={onClose} />
      <div className="relative bg-white rounded-2xl shadow-2xl max-w-4xl w-full max-h-[90vh] overflow-y-auto">

        <button onClick={onClose} className="absolute top-4 right-4 z-10 p-2 rounded-full hover:bg-gray-100 transition-colors">
          <X className="w-6 h-6 text-gray-500" />
        </button>

        {!isSubmitted ? (
          <div className="grid grid-cols-1 md:grid-cols-2">

            {/* Left — Product Info */}
            <div className="bg-gray-50 p-8 rounded-l-2xl">
              <div className="aspect-square rounded-lg overflow-hidden mb-4 bg-[#F5F0E8]">
                <ImageCarousel
                  images={product.images}
                  alt={product.name}
                  autoPlay={false}
                />
              </div>
              <div className="inline-block bg-[#C9A84C] text-white text-xs px-3 py-1 rounded-full mb-3">
                {product.category}
              </div>
              <h3 className="text-2xl font-bold text-[#1B2B5E] mb-3">{product.name}</h3>
              <p className="text-gray-600 text-sm">{product.description}</p>
            </div>

            {/* Right — Form */}
            <div className="p-8">
              <h2 className="text-2xl font-bold text-[#1B2B5E] mb-2">Send Enquiry</h2>
              <p className="text-sm text-gray-600 mb-6">Fill in your details and we will get back to you within 24 hours</p>

              <form onSubmit={handleSubmit} className="space-y-4">
                <div>
                  <label className="block text-sm font-medium text-gray-700 mb-1">Full Name *</label>
                  <input type="text" required value={formData.fullName} onChange={(e) => setFormData({ ...formData, fullName: e.target.value })} placeholder="Enter your full name" className="w-full px-4 py-2 border border-gray-300 rounded-md focus:outline-none focus:ring-2 focus:ring-[#C9A84C]" />
                </div>

                <div>
                  <label className="block text-sm font-medium text-gray-700 mb-1">Phone Number *</label>
                  <PhoneInput
                    value={formData.phoneNumber}
                    onChange={(value) => setFormData({ ...formData, phoneNumber: value })}
                    countryCode={formData.countryCode}
                    onCountryCodeChange={(code) => setFormData({ ...formData, countryCode: code })}
                    required
                    placeholder="Enter phone number"
                  />
                </div>

                <div>
                  <label className="block text-sm font-medium text-gray-700 mb-1">Email Address *</label>
                  <input type="email" required value={formData.email} onChange={(e) => setFormData({ ...formData, email: e.target.value })} placeholder="Enter your email address" className="w-full px-4 py-2 border border-gray-300 rounded-md focus:outline-none focus:ring-2 focus:ring-[#C9A84C]" />
                </div>

                <div>
                  <label className="block text-sm font-medium text-gray-700 mb-1">Country *</label>
                  <input type="text" required value={formData.country} onChange={(e) => setFormData({ ...formData, country: e.target.value })} placeholder="Your country name" className="w-full px-4 py-2 border border-gray-300 rounded-md focus:outline-none focus:ring-2 focus:ring-[#C9A84C]" />
                </div>

                <div>
                  <label className="block text-sm font-medium text-gray-700 mb-1">Destination Port *</label>
                  <input type="text" required value={formData.destinationPort} onChange={(e) => setFormData({ ...formData, destinationPort: e.target.value })} placeholder="e.g. Port of Dubai, Nhava Sheva" className="w-full px-4 py-2 border border-gray-300 rounded-md focus:outline-none focus:ring-2 focus:ring-[#C9A84C]" />
                  <p className="text-xs text-gray-500 mt-1">Enter your nearest shipping port</p>
                </div>

                <div>
                  <label className="block text-sm font-medium text-gray-700 mb-1">Quantity Required *</label>
                  <input type="text" required value={formData.quantity} onChange={(e) => setFormData({ ...formData, quantity: e.target.value })} placeholder="e.g. 500 units, 2 containers" className="w-full px-4 py-2 border border-gray-300 rounded-md focus:outline-none focus:ring-2 focus:ring-[#C9A84C]" />
                </div>

                <button
                  type="submit"
                  disabled={loading}
                  className="w-full bg-[#C9A84C] hover:bg-[#b89740] disabled:opacity-50 disabled:cursor-not-allowed text-white py-3 rounded-md font-medium transition-colors"
                >
                  {loading ? "Sending..." : "Send Enquiry"}
                </button>
              </form>
            </div>
          </div>
        ) : (
          <div className="p-12 text-center">
            <CheckCircle className="w-20 h-20 text-green-500 mx-auto mb-6" />
            <h2 className="text-3xl font-bold text-[#1B2B5E] mb-4">Enquiry Sent Successfully!</h2>
            <p className="text-gray-600 max-w-md mx-auto mb-8">
              Thank you! Our team will contact you within 24 business hours regarding your enquiry for {product.name}.
            </p>
            <button onClick={onClose} className="bg-[#C9A84C] hover:bg-[#b89740] text-white px-12 py-3 rounded-md font-medium transition-colors">
              Done
            </button>
          </div>
        )}
      </div>
    </div>
  )
}