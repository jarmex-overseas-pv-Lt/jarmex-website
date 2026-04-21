"use client"

import Link from "next/link"

interface ProductCardProps {
  id: number
  name: string
  category: string
  image: string
  description?: string
  comingSoon?: boolean
}

export function ProductCard({
  name,
  category,
  image,
  description = "Premium handcrafted wooden product for export",
  comingSoon = false,
}: ProductCardProps) {
  return (
    <div className="bg-white rounded-lg overflow-hidden shadow-md hover:shadow-xl transition-shadow duration-300 relative group">

      {/* Coming Soon Overlay */}
      {comingSoon && (
        <div className="absolute inset-0 bg-black bg-opacity-60 z-20 flex items-center justify-center">
          <div className="bg-[#C9A84C] text-white px-6 py-3 rounded-lg font-semibold text-lg">
            Coming Soon
          </div>
        </div>
      )}

      {/* Image Container with Hover Overlay */}
      <div className="aspect-square overflow-hidden relative">

        {/* Product Image with zoom */}
        <img
          src={image}
          alt={name}
          className="w-full h-full object-cover transition-transform duration-300 ease-in-out group-hover:scale-105"
        />

        {/* Hover Overlay - slides up from bottom */}
        <div className="absolute inset-0 bg-[#1B2B5E] bg-opacity-0 group-hover:bg-opacity-85 transition-all duration-300 ease-in-out flex items-end">
          <div className="w-full p-6 translate-y-full group-hover:translate-y-0 transition-transform duration-300 ease-in-out">

            {/* Product Name */}
            <h3 className="text-white font-bold text-lg mb-2">
              {name}
            </h3>

            {/* Category Badge */}
            <div className="inline-block bg-[#C9A84C] text-white text-xs px-3 py-1 rounded-full mb-3">
              {category}
            </div>

            {/* Description */}
            <p className="text-white text-sm mb-4 opacity-90">
              {description}
            </p>

            {/* Enquire Now Button */}
            <Link href="/contact">
              <button
                className="w-full bg-[#C9A84C] hover:bg-[#b89740] text-white py-2 px-4 rounded-md transition-colors duration-200 font-medium"
                disabled={comingSoon}
              >
                Enquire Now
              </button>
            </Link>
          </div>
        </div>
      </div>

      {/* Product Info Below Image (visible when not hovering) */}
      <div className="p-6">
        <div className="inline-block bg-[#C9A84C] text-white text-xs px-3 py-1 rounded-full mb-3">
          {category}
        </div>
        <h3 className="text-xl font-semibold text-[#1B2B5E]">
          {name}
        </h3>
      </div>
    </div>
  )
}