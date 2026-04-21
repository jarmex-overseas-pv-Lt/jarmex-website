"use client"

import { useState } from "react"
import Link from "next/link"
import { ProductCard } from "@/components/ProductCard"

const allProducts = [
  {
    id: 1,
    name: "Classic Round Side Table",
    category: "Tables",
    image: "/images/products/table1.png",
    description: "Modern round side table with rattan top and black frame",
  },
  {
    id: 2,
    name: "Solid Wood Side Table",
    category: "Tables",
    image: "/images/products/table2.png",
    description: "Natural solid wood side table with tripod base",
  },
  {
    id: 3,
    name: "Carved Storage Cabinet",
    category: "Storage Boxes",
    image: "/images/products/storage1.png",
    description: "Ornately hand-carved wooden cabinet with brass handle",
  },
  {
    id: 4,
    name: "Carved Chest Box",
    category: "Storage Boxes",
    image: "/images/products/storage2.png",
    description: "Hand-carved decorative chest with floral motifs",
  },
  {
    id: 5,
    name: "Heart Shaped Bowl Set",
    category: "Bowls",
    image: "/images/products/bowl1.png",
    description: "Set of 3 heart-shaped wooden bowls for serving",
  },
  {
    id: 6,
    name: "Natural Bark Bowl",
    category: "Bowls",
    image: "/images/products/bowl2.png",
    description: "Rustic natural bark wooden bowl with smooth interior",
  },
  {
    id: 7,
    name: "Nested Serving Trays",
    category: "Trays",
    image: "/images/products/tray1.png",
    description: "Set of 2 nested wooden serving trays with handles",
  },
  {
    id: 8,
    name: "Spice Box with Steel Bowls",
    category: "Spice Boxes",
    image: "/images/products/spice1.png",
    description: "Wooden spice box with glass lid and steel compartments",
  },
  {
    id: 9,
    name: "Engraved Coaster Set",
    category: "Coasters",
    image: "/images/products/coaster1.png",
    description: "Hand-carved floral coaster set with wooden holder",
  },
  {
    id: 10,
    name: "Bark Wood Coaster",
    category: "Coasters",
    image: "/images/products/coaster2.png",
    description: "Natural bark wood coasters with smooth interior",
  },
  {
    id: 11,
    name: "Handwoven Rugs",
    category: "Textiles",
    image: "/images/products/textile1.png",
    description: "Premium handwoven rugs in traditional patterns",
    comingSoon: true,
  },
  {
    id: 12,
    name: "Decorative Mats",
    category: "Textiles",
    image: "/images/products/textile2.png",
    description: "Artisan woven mats for home and commercial use",
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
              Explore our curated collection of premium
              handcrafted wooden products
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
                className={`px-6 py-2 rounded-full transition-all duration-300 ${
                  selectedCategory === category
                    ? "bg-[#C9A84C] text-white shadow-md"
                    : "bg-gray-100 text-gray-700 hover:bg-gray-200"
                }`}
              >
                {category}
                {category === "Textiles" && (
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
                image={product.image}
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
            We can source custom products based on your
            specific requirements.
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