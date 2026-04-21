import Link from "next/link"
import { ProductCard } from "@/components/ProductCard"
import {
  TrendingUp,
  Package,
  Globe,
  Users,
  Shield,
  Truck,
  DollarSign,
  Award,
  FileText,
  Download,
} from "lucide-react"

const products = [
  {
    id: 1,
    name: "Handcrafted Wooden Tables",
    category: "Tables",
    image: "/images/products/table1.png",
    description: "Modern & traditional wooden tables crafted by skilled artisans",
  },
  {
    id: 2,
    name: "Artisan Storage Boxes",
    category: "Storage Boxes",
    image: "/images/products/storage1.png",
    description: "Ornately hand-carved storage boxes with premium finish",
  },
  {
    id: 3,
    name: "Handmade Wooden Bowls",
    category: "Bowls",
    image: "/images/products/bowl1.png",
    description: "Heart-shaped and artisan wooden bowls for serving",
  },
  {
    id: 4,
    name: "Premium Serving Trays",
    category: "Trays",
    image: "/images/products/tray1.png",
    description: "Elegant wooden serving trays with handles",
  },
  {
    id: 5,
    name: "Traditional Spice Boxes",
    category: "Spice Boxes",
    image: "/images/products/spice1.png",
    description: "Wooden spice boxes with steel inserts and glass lid",
  },
  {
    id: 6,
    name: "Handcrafted Coasters",
    category: "Coasters",
    image: "/images/products/coaster1.png",
    description: "Hand-carved floral coaster sets with wooden holder",
  },
]

const stats = [
  { icon: TrendingUp, label: "Years", value: "1+" },
  { icon: Package, label: "Categories", value: "6+" },
  { icon: Globe, label: "Reach", value: "Worldwide" },
  { icon: Users, label: "Clients", value: "Growing" },
]

const features = [
  {
    icon: Shield,
    title: "Handcrafted Quality",
    description:
      "Each piece is meticulously crafted by skilled artisans using premium wood.",
  },
  {
    icon: Package,
    title: "Bulk Export Ready",
    description:
      "Scalable production to meet large B2B orders with consistent quality.",
  },
  {
    icon: Truck,
    title: "Global Shipping",
    description:
      "Reliable international logistics and export documentation support.",
  },
  {
    icon: DollarSign,
    title: "Best Pricing",
    description:
      "Direct from manufacturer pricing with transparent quotations.",
  },
]

export default function Home() {
  return (
    <div>
      {/* Hero Section */}
      <section className="bg-[#1B2B5E] text-white py-20 md:py-32">
        <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
          <div className="text-center max-w-4xl mx-auto">
            <h1 className="text-4xl md:text-5xl lg:text-6xl font-bold mb-6">
              <span className="text-[#C9A84C]">Premium Handcrafted</span>{" "}
              Wooden Products
            </h1>
            <p className="text-xl md:text-2xl mb-4 text-gray-200">
              Crafted in India, Delivered Worldwide
            </p>
            <div className="flex items-center justify-center gap-2 mb-8">
              <Award className="w-5 h-5 text-[#C9A84C]" />
              <span className="text-sm text-gray-300">
                IEC Registered: AAHCJ1410D
              </span>
            </div>
         <div className="flex flex-col sm:flex-row gap-4 justify-center">
  <Link
    href="/contact"
    className="flex items-center justify-center gap-2 bg-[#C9A84C] hover:bg-[#b89740] text-white px-8 py-3 rounded-md text-lg font-medium transition-colors"
  >
    <FileText className="w-5 h-5" />
    Get A Quote
  </Link>
  <Link
    href="/documents/jarmex-brochure.pdf"
    className="flex items-center justify-center gap-2 border-2 border-white text-white hover:bg-white hover:text-[#1B2B5E] px-8 py-3 rounded-md text-lg font-medium transition-colors"
  >
    <Download className="w-5 h-5" />
    Download Brochure
  </Link>
</div>
          </div>
        </div>
      </section>

      {/* Trust Bar */}
      <section className="bg-white py-6 border-b border-gray-200">
        <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
          <div className="flex flex-wrap justify-center items-center gap-6 md:gap-12 text-sm text-gray-600">
            {[
              "GST Verified",
              "IEC Holder",
              "CIN Registered",
              "Est. 2026",
              "Pune, India",
            ].map((item) => (
              <div key={item} className="flex items-center gap-2">
                <Award className="w-4 h-4 text-[#C9A84C]" />
                <span>{item}</span>
              </div>
            ))}
          </div>
        </div>
      </section>

      {/* Stats Section */}
      <section className="py-16 bg-gray-50">
        <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
          <div className="grid grid-cols-2 md:grid-cols-4 gap-8">
            {stats.map((stat, index) => (
              <div key={index} className="text-center">
                <stat.icon className="w-10 h-10 text-[#C9A84C] mx-auto mb-3" />
                <div className="text-3xl font-bold text-[#1B2B5E] mb-1">
                  {stat.value}
                </div>
                <div className="text-gray-600">{stat.label}</div>
              </div>
            ))}
          </div>
        </div>
      </section>

      {/* Products Grid */}
      <section className="py-20">
        <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
          <div className="text-center mb-12">
            <h2 className="text-3xl md:text-4xl font-bold text-[#1B2B5E] mb-4">
              Our Product Range
            </h2>
            <p className="text-gray-600 max-w-2xl mx-auto">
              Explore our curated collection of handcrafted wooden products,
              each piece reflecting India's rich craftsmanship heritage.
            </p>
          </div>
          <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-8">
            {products.map((product) => (
              <ProductCard
                key={product.id}
                id={product.id}
                name={product.name}
                category={product.category}
                image={product.image}
                description={product.description}
              />
            ))}
          </div>
          <div className="text-center mt-12">
            <Link
              href="/products"
              className="bg-[#1B2B5E] hover:bg-[#152244] text-white px-8 py-3 rounded-md font-medium transition-colors"
            >
              View All Products
            </Link>
          </div>
        </div>
      </section>

      {/* Why Choose Us */}
      <section className="py-20 bg-gray-50">
        <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
          <div className="text-center mb-12">
            <h2 className="text-3xl md:text-4xl font-bold text-[#1B2B5E] mb-4">
              Why Choose Jarmex Overseas
            </h2>
            <p className="text-gray-600 max-w-2xl mx-auto">
              Your trusted partner for premium wooden products with
              end-to-end export solutions.
            </p>
          </div>
          <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-4 gap-8">
            {features.map((feature, index) => (
              <div
                key={index}
                className="bg-white p-8 rounded-lg shadow-md hover:shadow-xl transition-shadow duration-300"
              >
                <feature.icon className="w-12 h-12 text-[#C9A84C] mb-4" />
                <h3 className="text-xl font-semibold text-[#1B2B5E] mb-3">
                  {feature.title}
                </h3>
                <p className="text-gray-600">{feature.description}</p>
              </div>
            ))}
          </div>
        </div>
      </section>

      {/* Certifications Strip */}
      <section className="py-12 bg-[#1B2B5E]">
        <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
          <div className="text-center">
            <h3 className="text-xl font-semibold text-[#C9A84C] mb-6">
              Verified & Certified Business
            </h3>
            <div className="flex flex-wrap justify-center items-center gap-6 md:gap-12 text-sm text-white">
              <div>
                <span className="text-[#C9A84C]">GST: </span>
                27AAHCJ1410D1Z4
              </div>
              <div>
                <span className="text-[#C9A84C]">IEC: </span>
                AAHCJ1410D
              </div>
              <div>
                <span className="text-[#C9A84C]">CIN: </span>
                U47912PN2025PTC248434
              </div>
            </div>
          </div>
        </div>
      </section>

      {/* CTA Banner */}
      <section className="py-20 bg-gradient-to-r from-[#1B2B5E] to-[#2a3d7e]">
        <div className="max-w-4xl mx-auto px-4 sm:px-6 lg:px-8 text-center">
          <h2 className="text-3xl md:text-4xl font-bold text-white mb-6">
            Ready to Start Your Enquiry Today?
          </h2>
          <p className="text-xl text-gray-200 mb-8">
            Get in touch with our team for custom quotes and bulk orders.
          </p>
          <Link
            href="/contact"
            className="bg-[#C9A84C] hover:bg-[#b89740] text-white px-12 py-3 rounded-md text-lg font-medium transition-colors"
          >
            Contact Us Now
          </Link>
        </div>
      </section>
    </div>
  )
}