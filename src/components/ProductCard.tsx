"use client"

import { useState } from "react"
import { EnquiryModal } from "@/components/EnquiryModal"

interface ProductCardProps {
  id: number
  name: string
  category: string
  image: string
  description?: string
  comingSoon?: boolean
}

export function ProductCard({
  id,
  name,
  category,
  image,
  description = "Premium handcrafted wooden product for export",
  comingSoon = false,
}: ProductCardProps) {
  const [isModalOpen, setIsModalOpen] = useState(false)

  return (
    <>
      <div className="bg-white rounded-lg overflow-hidden shadow-md hover:shadow-xl transition-shadow duration-300 relative group">

        {comingSoon && (
          <div className="absolute inset-0 bg-black/60 z-20 flex items-center justify-center">
            <div className="bg-[#C9A84C] text-white px-6 py-3 rounded-lg font-semibold text-lg">Coming Soon</div>
          </div>
        )}

        <div className="aspect-square overflow-hidden relative">
          <img src={image} alt={name} className="w-full h-full object-cover transition-transform duration-300 group-hover:scale-105" />

          <div className="absolute inset-0 bg-[#1B2B5E] opacity-0 group-hover:opacity-85 transition-opacity duration-300 flex items-end">
            <div className="w-full p-6 translate-y-full group-hover:translate-y-0 transition-transform duration-300">
              <h3 className="text-white font-bold text-lg mb-2">{name}</h3>
              <div className="inline-block bg-[#C9A84C] text-white text-xs px-3 py-1 rounded-full mb-3">{category}</div>
              <p className="text-white text-sm mb-4 opacity-90">{description}</p>
              <button
                onClick={() => !comingSoon && setIsModalOpen(true)}
                disabled={comingSoon}
                className="w-full bg-[#C9A84C] hover:bg-[#b89740] disabled:opacity-50 text-white py-2 px-4 rounded-md font-medium transition-colors"
              >
                Get Quote
              </button>
            </div>
          </div>
        </div>

        <div className="p-6">
          <div className="inline-block bg-[#C9A84C] text-white text-xs px-3 py-1 rounded-full mb-3">{category}</div>
          <h3 className="text-xl font-semibold text-[#1B2B5E] mb-4">{name}</h3>
          <button
            onClick={() => !comingSoon && setIsModalOpen(true)}
            disabled={comingSoon}
            className="w-full bg-[#1B2B5E] hover:bg-[#152244] disabled:opacity-50 text-white py-2 px-4 rounded-md font-medium transition-colors"
          >
            Get Quote
          </button>
        </div>
      </div>

      <EnquiryModal
        isOpen={isModalOpen}
        onClose={() => setIsModalOpen(false)}
        product={{ id, name, category, image, description }}
      />
    </>
  )
}