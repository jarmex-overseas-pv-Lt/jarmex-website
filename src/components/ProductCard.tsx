"use client"
import { useState } from "react"
import { EnquiryModal } from "@/components/EnquiryModal"
import { ImageCarousel } from "@/components/ImageCarousel"

interface ProductCardProps {
  id: number
  name: string
  category: string
  images: string[]
  description?: string
  comingSoon?: boolean
}

export function ProductCard({
  id, name, category, images,
  description = "Premium handcrafted wooden product for export",
  comingSoon = false,
}: ProductCardProps) {
  const [isModalOpen, setIsModalOpen] = useState(false)

  return (
    <>
      <div className="bg-white rounded-lg overflow-hidden shadow-md hover:shadow-xl transition-shadow duration-300 group">

        {/* Image + Dots wrapper */}
        <div className="flex flex-col">

          {/* Image Area */}
          <div className="aspect-square overflow-hidden relative">
            {comingSoon ? (
              <div className="w-full h-full bg-gradient-to-br from-[#1B2B5E] to-[#2a3d7e] flex flex-col items-center justify-center gap-3">
                <div className="text-5xl">🔜</div>
                <span className="bg-[#C9A84C] text-white px-5 py-2 rounded-full font-semibold">Coming Soon</span>
                <p className="text-gray-300 text-sm px-6 text-center">{name}</p>
              </div>
            ) : (
              <>
                <ImageCarousel images={images} alt={name} autoPlay={true} />
                {/* Hover overlay */}
                <div className="absolute inset-0 bg-[#1B2B5E] opacity-0 group-hover:opacity-85 transition-opacity duration-300 flex items-end z-20">
                  <div className="w-full p-6 translate-y-full group-hover:translate-y-0 transition-transform duration-300">
                    <h3 className="text-white font-bold text-lg mb-2">{name}</h3>
                    <div className="inline-block bg-[#C9A84C] text-white text-xs px-3 py-1 rounded-full mb-3">{category}</div>
                    <p className="text-white text-sm mb-4 opacity-90">{description}</p>
                    <button
                      onClick={() => setIsModalOpen(true)}
                      className="w-full bg-[#C9A84C] hover:bg-[#b89740] text-white py-2 px-4 rounded-md font-medium transition-colors"
                    >
                      Get Quote
                    </button>
                  </div>
                </div>
              </>
            )}
          </div>

          {/* Dots — BELOW image */}
          {!comingSoon && images.length > 1 && (
            <div className="flex justify-center gap-1.5 py-2 bg-white">
              {images.map((_, i) => (
                <div key={i}
                  className="rounded-full transition-all duration-300"
                  style={{ width: "8px", height: "8px", backgroundColor: "#D1C9B8" }}
                />
              ))}
            </div>
          )}
        </div>

        {/* Card Info */}
        <div className="p-6">
          <div className="inline-block bg-[#C9A84C] text-white text-xs px-3 py-1 rounded-full mb-3">{category}</div>
          <h3 className="text-xl font-semibold text-[#1B2B5E] mb-4">{name}</h3>
          <button
            onClick={() => !comingSoon && setIsModalOpen(true)}
            disabled={comingSoon}
            className="w-full bg-[#1B2B5E] hover:bg-[#152244] disabled:opacity-50 text-white py-2 px-4 rounded-md font-medium transition-colors"
          >
            {comingSoon ? "Coming Soon" : "Get Quote"}
          </button>
        </div>
      </div>

      {!comingSoon && (
        <EnquiryModal
          isOpen={isModalOpen}
          onClose={() => setIsModalOpen(false)}
          product={{ id, name, category, images, description }}
        />
      )}
    </>
  )
}