"use client"

import { useState } from "react"
import Link from "next/link"
import { ProductCard } from "@/components/ProductCard"

const allProducts = [
  {
    id: 1,
    name: "Classic Round Side Table",
    category: "Tables",
    images: ["/images/products/table-placeholder.png"],
    description: "Modern round side table with rattan top and black frame",
  },
  {
    id: 2,
    name: "Solid Wood Side Table",
    category: "Tables",
    images: ["/images/products/table-placeholder.png"],
    description: "Natural solid wood side table with tripod base",
  },
  {
    id: 3,
    name: "Ornate Carved Cabinet",
    category: "Storage Boxes",
    images: [
      "/images/products/storage-1-1.png",
      "/images/products/storage-1-2.png",
    ],
    description: "Ornately hand-carved wooden cabinet with brass handle",
  },
  {
    id: 4,
    name: "Carved Chest Box",
    category: "Storage Boxes",
    images: ["/images/products/storage-2-1.png"],
    description: "Hand-carved decorative chest with floral motifs",
  },
  {
    id: 5,
    name: "Heart Shaped Bowl Set",
    category: "Bowls",
    images: [
      "/images/products/bowl-1-1.png",
      "/images/products/bowl-1-2.png",
    ],
    description: "Set of heart-shaped wooden bowls for serving",
  },
  {
    id: 6,
    name: "Artisan Wooden Bowl",
    category: "Bowls",
    images: ["/images/products/bowl-2-1.png"],
    description: "Rustic artisan wooden bowl with smooth interior",
  },
  {
    id: 7,
    name: "Carved Bowl Collection",
    category: "Bowls",
    images: [
      "/images/products/bowl-3-1.png",
      "/images/products/bowl-3-2.png",
    ],
    description: "Premium carved wooden bowl collection",
  },
  {
    id: 8,
    name: "Nested Serving Trays",
    category: "Trays",
    images: ["/images/products/tray-placeholder.png"],
    description: "Set of nested wooden serving trays with handles",
  },
  {
    id: 9,
    name: "Premium Spice Box",
    category: "Spice Boxes",
    images: [
      "/images/products/spice-1-1.png",
      "/images/products/spice-1-2.png",
      "/images/products/spice-1-3.png",
      "/images/products/spice-1-4.png",
      "/images/products/spice-1-5.png",
    ],
    description: "Wooden spice box with glass lid and steel compartments",
  },
  {
    id: 10,
    name: "Artisan Spice Box",
    category: "Spice Boxes",
    images: [
      "/images/products/spice-2-1.png",
      "/images/products/spice-2-2.png",
      "/images/products/spice-2-3.png",
    ],
    description: "Hand-carved wooden spice box with multiple compartments",
  },
  {
    id: 11,
    name: "Classic Spice Box",
    category: "Spice Boxes",
    images: [
      "/images/products/spice-3-1.png",
      "/images/products/spice-3-2.png",
      "/images/products/spice-3-3.png",
    ],
    description: "Traditional wooden spice box with brass fittings",
  },
  {
    id: 12,
    name: "Engraved Coaster Set",
    category: "Coasters",
    images: [
      "/images/products/coaster-1-1.png",
      "/images/products/coaster-1-2.png",
    ],
    description: "Hand-carved floral coaster set with wooden holder",
  },
  {
    id: 13,
    name: "Natural Wood Coaster",
    category: "Coasters",
    images: ["/images/products/coaster-2-1.png"],
    description: "Natural bark wood coasters with smooth interior",
  },
  {
    id: 14,
    name: "Handwoven Rugs",
    category: "Textiles",
    images: [],
    description: "Premium handwoven rugs in traditional patterns",
    comingSoon: true,
  },
  {
    id: 15,
    name: "Decorative Mats",
    category: "Textiles",
    images: [],
    description: "Artisan woven mats for home and commercial use",
    comingSoon: true,
  },
  {
    id: 16,
    name: "Brass Metal Decor",
    category: "Metal Craft",
    images: [],
    description: "Handcrafted brass decorative items for home and gifting",
    comingSoon: true,
  },
  {
    id: 17,
    name: "Metal Art Frames",
    category: "Metal Craft",
    images: [],
    description: "Decorative metal art frames with intricate designs",
    comingSoon: true,
  },
]

const categories = [
  "All",
  "Tables",
  "Storage Boxes",
  "Bowls",
  "Trays",
  "Spice Boxes",
  "Coasters",
  "Textiles",
  "Metal Craft",
]

export default function ProductsPage() {
  const [selectedCategory, setSelectedCategory] = useState("All")

  const filteredProducts =
    selectedCategory === "All"
      ? allProducts
      : allProducts.filter((p) => p.category === selectedCategory)

  return (
    <div>
      {/* Hero Banner */}
      <section className="bg-[#1B2B5E] text-white py-20">
        <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
          <div className="text-center">
            <h1 className="text-4xl md:text-5xl font-bold mb-4">
              Our <span className="text-[#C9A84C]">Products</span>
            </h1>
            <p className="text-xl text-gray-200 max-w-3xl mx-auto">
              Explore our curated collection of premium handcrafted wooden products
            </p>
          </div>
        </div>
      </section>

      {/* Filter Tabs */}
      <section className="bg-white border-b border-gray-200 sticky top-20 z-40">
        <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
          <div className="flex flex-wrap gap-2 py-4">
            {categories.map((category) => (
              <button
                key={category}
                onClick={() => setSelectedCategory(category)}
                className={"px-6 py-2 rounded-full transition-all duration-300 " + (
                  selectedCategory === category
                    ? "bg-[#C9A84C] text-white shadow-md"
                    : "bg-gray-100 text-gray-700 hover:bg-gray-200"
                )}
              >
                {category}
                {(category === "Textiles" || category === "Metal Craft") && (
                  <span className="ml-2 text-xs bg-[#1B2B5E] text-white px-2 py-0.5 rounded-full">
                    Soon
                  </span>
                )}
              </button>
            ))}
          </div>
        </div>
      </section>

      {/* Products Grid */}
      <section className="py-20">
        <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
          <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-8">
            {filteredProducts.map((product) => (
              <ProductCard
                key={product.id}
                id={product.id}
                name={product.name}
                category={product.category}
                images={product.images}
                description={product.description}
                comingSoon={product.comingSoon}
              />
            ))}
          </div>
        </div>
      </section>

      {/* CTA */}
      <section className="py-20 bg-gray-50">
        <div className="max-w-4xl mx-auto px-4 text-center">
          <h2 className="text-3xl font-bold text-[#1B2B5E] mb-6">
            Can't Find What You're Looking For?
          </h2>
          <p className="text-xl text-gray-600 mb-8">
            We can source custom products based on your specific requirements.
          </p>
          <Link href="/contact">
            <button className="bg-[#C9A84C] hover:bg-[#b89740] text-white px-12 py-3 rounded-md text-lg font-medium transition-colors">
              Request Custom Quote
            </button>
          </Link>
        </div>
      </section>
    </div>
  )
}