import { Shield, Globe, Award, Users } from "lucide-react"

export default function AboutPage() {
  return (
    <div>

      {/* Hero Banner */}
      <section className="bg-[#1B2B5E] text-white py-20">
        <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8 text-center">
          <h1 className="text-4xl md:text-5xl font-bold mb-4">
            About <span className="text-[#C9A84C]">Us</span>
          </h1>
          <p className="text-xl text-gray-200 max-w-3xl mx-auto">
            A young Indian export company bringing premium
            handcrafted wooden products to the world
          </p>
        </div>
      </section>

      {/* Our Story */}
      <section className="py-20">
        <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
          <div className="grid grid-cols-1 md:grid-cols-2 gap-12 items-center">
            <div>
              <h2 className="text-3xl font-bold text-[#1B2B5E] mb-6">
                Our <span className="text-[#C9A84C]">Story</span>
              </h2>
              <p className="text-gray-600 mb-4">
                Founded in 2026, Jarmex Overseas Pvt. Ltd. was born
                from a passion to showcase India's rich woodcraft
                heritage to the world. Based in Pune, Maharashtra,
                we source premium handcrafted wooden products from
                skilled Indian artisans.
              </p>
              <p className="text-gray-600 mb-4">
                We specialize in B2B bulk export of handcrafted
                wooden home décor, kitchenware and furniture —
                connecting Indian craftsmanship with international
                buyers across the globe.
              </p>
              <p className="text-gray-600">
                Every product we export carries the soul of Indian
                artisanship — meticulously crafted, quality checked
                and delivered with professionalism.
              </p>
            </div>
            <div className="bg-gray-100 rounded-lg h-80 flex items-center justify-center">
              <p className="text-gray-400">Company Image Coming Soon</p>
            </div>
          </div>
        </div>
      </section>

      {/* Mission & Vision */}
      <section className="py-20 bg-gray-50">
        <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
          <div className="grid grid-cols-1 md:grid-cols-2 gap-8">
            <div className="bg-white p-8 rounded-lg shadow-md border-t-4 border-[#C9A84C]">
              <h3 className="text-2xl font-bold text-[#1B2B5E] mb-4">
                Our Mission
              </h3>
              <p className="text-gray-600">
                To be India's most trusted B2B exporter of premium
                handcrafted wooden products — delivering quality,
                reliability and value to international buyers
                while empowering Indian artisans.
              </p>
            </div>
            <div className="bg-white p-8 rounded-lg shadow-md border-t-4 border-[#1B2B5E]">
              <h3 className="text-2xl font-bold text-[#1B2B5E] mb-4">
                Our Vision
              </h3>
              <p className="text-gray-600">
                To establish Jarmex Overseas as a globally
                recognized brand for Indian handcrafted wooden
                products — making Indian craftsmanship accessible
                to every corner of the world.
              </p>
            </div>
          </div>
        </div>
      </section>

      {/* Leadership */}
      <section className="py-20">
        <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
          <div className="text-center mb-12">
            <h2 className="text-3xl font-bold text-[#1B2B5E] mb-4">
              Our <span className="text-[#C9A84C]">Leadership</span>
            </h2>
            <p className="text-gray-600">
              The passionate founders behind Jarmex Overseas
            </p>
          </div>
          <div className="grid grid-cols-1 md:grid-cols-2 gap-8 max-w-3xl mx-auto">

            {/* Rohan */}
            <div className="bg-white rounded-lg shadow-md overflow-hidden text-center p-8 border border-gray-100 hover:shadow-xl transition-shadow">
              <div className="w-24 h-24 rounded-full bg-gray-200 mx-auto mb-4 overflow-hidden flex items-center justify-center">
                <Users className="w-12 h-12 text-gray-400" />
              </div>
              <h3 className="text-xl font-bold text-[#1B2B5E] mb-1">
                Rohan Chaudhari
              </h3>
              <p className="text-[#C9A84C] font-medium text-sm mb-3">
                Co-Founder & Managing Director
              </p>
              <p className="text-gray-600 text-sm">
                Driving Jarmex's vision of bringing premium
                Indian craftsmanship to global markets.
              </p>
            </div>

            {/* Kunal */}
            <div className="bg-white rounded-lg shadow-md overflow-hidden text-center p-8 border border-gray-100 hover:shadow-xl transition-shadow">
              <div className="w-24 h-24 rounded-full bg-gray-200 mx-auto mb-4 overflow-hidden flex items-center justify-center">
                <Users className="w-12 h-12 text-gray-400" />
              </div>
              <h3 className="text-xl font-bold text-[#1B2B5E] mb-1">
                Kunal Chaudhari
              </h3>
              <p className="text-[#C9A84C] font-medium text-sm mb-3">
                Co-Founder & Director
              </p>
              <p className="text-gray-600 text-sm">
                Leading operations and ensuring quality
                standards across all export processes.
              </p>
            </div>

          </div>
        </div>
      </section>

      {/* Certifications */}
      <section className="py-20 bg-gray-50">
        <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
          <div className="text-center mb-12">
            <h2 className="text-3xl font-bold text-[#1B2B5E] mb-4">
              Our <span className="text-[#C9A84C]">Certifications</span>
            </h2>
            <p className="text-gray-600">
              Fully registered and verified export company
            </p>
          </div>
          <div className="grid grid-cols-1 md:grid-cols-3 gap-8">

            <div className="bg-white p-8 rounded-lg shadow-md border border-[#C9A84C] text-center hover:shadow-xl transition-shadow">
              <Award className="w-12 h-12 text-[#C9A84C] mx-auto mb-4" />
              <h3 className="text-lg font-bold text-[#1B2B5E] mb-2">
                GST Registration
              </h3>
              <p className="text-gray-500 text-sm mb-3">
                Goods & Services Tax Registered
              </p>
              <p className="text-[#C9A84C] font-mono font-bold">
                27AAHCJ1410D1Z4
              </p>
            </div>

            <div className="bg-white p-8 rounded-lg shadow-md border border-[#C9A84C] text-center hover:shadow-xl transition-shadow">
              <Globe className="w-12 h-12 text-[#C9A84C] mx-auto mb-4" />
              <h3 className="text-lg font-bold text-[#1B2B5E] mb-2">
                IEC Code
              </h3>
              <p className="text-gray-500 text-sm mb-3">
                Import Export Code — DGFT Registered
              </p>
              <p className="text-[#C9A84C] font-mono font-bold">
                AAHCJ1410D
              </p>
            </div>

            <div className="bg-white p-8 rounded-lg shadow-md border border-[#C9A84C] text-center hover:shadow-xl transition-shadow">
              <Shield className="w-12 h-12 text-[#C9A84C] mx-auto mb-4" />
              <h3 className="text-lg font-bold text-[#1B2B5E] mb-2">
                CIN Number
              </h3>
              <p className="text-gray-500 text-sm mb-3">
                Certificate of Incorporation
              </p>
              <p className="text-[#C9A84C] font-mono font-bold text-xs">
                U47912PN2025PTC248434
              </p>
            </div>

          </div>
        </div>
      </section>

      {/* Why Choose Us */}
      <section className="py-20">
        <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
          <div className="text-center mb-12">
            <h2 className="text-3xl font-bold text-[#1B2B5E] mb-4">
              Why Choose <span className="text-[#C9A84C]">Jarmex</span>
            </h2>
          </div>
          <div className="grid grid-cols-1 md:grid-cols-3 gap-8">
            {[
              {
                icon: Shield,
                title: "Quality Assured",
                desc: "Every product goes through strict quality checks before export"
              },
              {
                icon: Globe,
                title: "Global Reach",
                desc: "Exporting to international buyers with reliable logistics support"
              },
              {
                icon: Award,
                title: "Certified Exporter",
                desc: "IEC registered, GST verified and CIN certified company"
              },
            ].map((item, i) => (
              <div key={i} className="text-center p-8 bg-gray-50 rounded-lg hover:shadow-md transition-shadow">
                <item.icon className="w-12 h-12 text-[#C9A84C] mx-auto mb-4" />
                <h3 className="text-xl font-bold text-[#1B2B5E] mb-3">{item.title}</h3>
                <p className="text-gray-600">{item.desc}</p>
              </div>
            ))}
          </div>
        </div>
      </section>

    </div>
  )
}