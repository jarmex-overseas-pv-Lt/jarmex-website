import Link from "next/link"
import { MessageSquare, Search, CheckCircle, Ship, Globe, Package, Shield, Award } from "lucide-react"

const steps = [
  {
    icon: MessageSquare,
    step: "01",
    title: "Submit Enquiry",
    description: "Fill our contact form with your product requirements, quantity and destination country."
  },
  {
    icon: Search,
    step: "02",
    title: "Product Sourcing",
    description: "We source the best quality handcrafted wooden products from verified Indian artisans."
  },
  {
    icon: CheckCircle,
    step: "03",
    title: "Quality Check",
    description: "Every product undergoes strict quality inspection before packaging and export."
  },
  {
    icon: Ship,
    step: "04",
    title: "Export & Delivery",
    description: "We handle all export documentation and ensure safe delivery to your destination."
  },
]

const services = [
  {
    icon: Globe,
    title: "B2B Bulk Export",
    description: "We specialize in large volume B2B export orders. Whether you need 100 or 10,000 units — we deliver consistently.",
  },
  {
    icon: Package,
    title: "Product Sourcing",
    description: "Can't find a specific product? Tell us what you need and we will source it directly from Indian artisans.",
  },
  {
    icon: Shield,
    title: "Quality Assurance",
    description: "Every product is inspected for quality, finish and packaging standards before it leaves our facility.",
  },
  {
    icon: Award,
    title: "Export Documentation",
    description: "We handle all export paperwork — invoices, packing lists, certificates of origin and customs documentation.",
  },
]

export default function ServicesPage() {
  return (
    <div>

      {/* Hero Banner */}
      <section className="bg-[#1B2B5E] text-white py-20">
        <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8 text-center">
          <h1 className="text-4xl md:text-5xl font-bold mb-4">
            Our <span className="text-[#C9A84C]">Services</span>
          </h1>
          <p className="text-xl text-gray-200 max-w-3xl mx-auto">
            End-to-end export solutions for international buyers
            looking for premium Indian handcrafted wooden products
          </p>
        </div>
      </section>

      {/* How It Works */}
      <section className="py-20">
        <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
          <div className="text-center mb-12">
            <h2 className="text-3xl font-bold text-[#1B2B5E] mb-4">
              How It <span className="text-[#C9A84C]">Works</span>
            </h2>
            <p className="text-gray-600 max-w-2xl mx-auto">
              Simple 4-step process from enquiry to delivery
            </p>
          </div>
          <div className="grid grid-cols-1 md:grid-cols-4 gap-8">
            {steps.map((step, index) => (
              <div key={index} className="text-center relative">
                {/* Connector line */}
                {index < steps.length - 1 && (
                  <div className="hidden md:block absolute top-8 left-1/2 w-full h-0.5 bg-[#C9A84C] opacity-30 z-0" />
                )}
                <div className="relative z-10">
                  <div className="w-16 h-16 bg-[#1B2B5E] rounded-full flex items-center justify-center mx-auto mb-4">
                    <step.icon className="w-8 h-8 text-[#C9A84C]" />
                  </div>
                  <div className="text-[#C9A84C] font-bold text-sm mb-2">
                    STEP {step.step}
                  </div>
                  <h3 className="text-lg font-bold text-[#1B2B5E] mb-2">
                    {step.title}
                  </h3>
                  <p className="text-gray-600 text-sm">
                    {step.description}
                  </p>
                </div>
              </div>
            ))}
          </div>
        </div>
      </section>

      {/* What We Offer */}
      <section className="py-20 bg-gray-50">
        <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
          <div className="text-center mb-12">
            <h2 className="text-3xl font-bold text-[#1B2B5E] mb-4">
              What We <span className="text-[#C9A84C]">Offer</span>
            </h2>
            <p className="text-gray-600 max-w-2xl mx-auto">
              Complete export solutions tailored for international B2B buyers
            </p>
          </div>
          <div className="grid grid-cols-1 md:grid-cols-2 gap-8">
            {services.map((service, index) => (
              <div key={index} className="bg-white p-8 rounded-lg shadow-md hover:shadow-xl transition-shadow duration-300 flex gap-6">
                <div className="flex-shrink-0">
                  <div className="w-14 h-14 bg-[#F5F0E8] rounded-lg flex items-center justify-center">
                    <service.icon className="w-7 h-7 text-[#C9A84C]" />
                  </div>
                </div>
                <div>
                  <h3 className="text-xl font-bold text-[#1B2B5E] mb-3">
                    {service.title}
                  </h3>
                  <p className="text-gray-600">
                    {service.description}
                  </p>
                </div>
              </div>
            ))}
          </div>
        </div>
      </section>

      {/* Products We Export */}
      <section className="py-20">
        <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
          <div className="text-center mb-12">
            <h2 className="text-3xl font-bold text-[#1B2B5E] mb-4">
              Products We <span className="text-[#C9A84C]">Export</span>
            </h2>
          </div>
          <div className="grid grid-cols-2 md:grid-cols-3 lg:grid-cols-6 gap-4">
            {[
              "Tables",
              "Storage Boxes",
              "Wooden Bowls",
              "Serving Trays",
              "Spice Boxes",
              "Cup Coasters",
            ].map((product, index) => (
              <div key={index} className="bg-[#1B2B5E] text-white text-center py-4 px-3 rounded-lg hover:bg-[#C9A84C] transition-colors duration-300 cursor-pointer">
                <p className="font-medium text-sm">{product}</p>
              </div>
            ))}
          </div>
        </div>
      </section>

      {/* CTA */}
      <section className="py-20 bg-[#1B2B5E]">
        <div className="max-w-4xl mx-auto px-4 text-center">
          <h2 className="text-3xl font-bold text-white mb-4">
            Ready to Place Your Order?
          </h2>
          <p className="text-gray-200 text-xl mb-8">
            Contact us today for a custom quote and bulk pricing
          </p>
          <Link href="/contact" className="bg-[#C9A84C] hover:bg-[#b89740] text-white px-12 py-3 rounded-md text-lg font-medium transition-colors">
            Get A Quote Now
          </Link>
        </div>
      </section>

    </div>
  )
}