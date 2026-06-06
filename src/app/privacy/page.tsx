export default function PrivacyPage() {
  return (
    <div>
      <section className="bg-[#1B2B5E] text-white py-20">
        <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8 text-center">
          <h1 className="text-4xl md:text-5xl font-bold mb-4">
            Privacy <span className="text-[#C9A84C]">Policy</span>
          </h1>
        </div>
      </section>

      <section className="py-16">
        <div className="max-w-4xl mx-auto px-8 sm:px-12 lg:px-16 py-8">

          <p className="text-gray-600 mb-8">This Privacy Policy describes how JARMEX Overseas Private Limited ("Company", "we", "our", or "us") collects, uses, stores, and protects information obtained through jarmexoverseas.com ("Website"). By using this Website, you consent to the practices described in this Privacy Policy.</p>

          {[
            {
              title: "1. Company Information",
              content: (
                <ul className="text-gray-600 space-y-1">
                  <li><strong>Company Name:</strong> JARMEX Overseas Private Limited</li>
                  <li><strong>Registered Office:</strong> TBL Space, 301, Balewadi Plaza, Patil Nagar, Balewadi, Pune – 411045, Maharashtra, India</li>
                  <li><strong>Email:</strong> sales@jarmexoverseas.com</li>
                  <li><strong>Phone / WhatsApp:</strong> +91 70288 07311</li>
                </ul>
              )
            },
            {
              title: "2. Information We Collect",
              content: (
                <div className="text-gray-600 space-y-2">
                  <p><strong>Personal Information:</strong> Full name, company name, email address, phone number, WhatsApp number, country/location, shipping or billing details.</p>
                  <p><strong>Business Information:</strong> Product inquiries, quotation requests, import/export requirements, purchase interests, communication records.</p>
                  <p><strong>Technical Information:</strong> IP address, browser type, device information, operating system, website usage data, cookies and tracking information.</p>
                </div>
              )
            },
            {
              title: "3. How We Collect Information",
              content: <p className="text-gray-600">Information may be collected through contact forms, inquiry forms, email communications, WhatsApp communications, newsletter subscriptions, cookies and analytics tools, and direct business interactions.</p>
            },
            {
              title: "4. Purpose of Data Collection",
              content: <p className="text-gray-600">We collect information for legitimate business purposes including responding to inquiries and quotation requests, business communication, customer support, processing commercial discussions, improving Website performance, analyzing user engagement, marketing and promotional communication, maintaining business records, and complying with legal and regulatory obligations.</p>
            },
            {
              title: "5. Cookies & Tracking Technologies",
              content: <p className="text-gray-600">The Website may use cookies and similar technologies to improve user experience, analyze website traffic, remember user preferences, and enhance website functionality. Users may disable cookies through browser settings; however, certain Website features may not function properly.</p>
            },
            {
              title: "6. Data Sharing & Disclosure",
              content: <p className="text-gray-600">We do not sell personal information to third parties. However, we may share information with logistics partners, freight forwarders, payment or banking institutions, IT service providers, analytics providers, legal or governmental authorities when required by law, and business partners involved in order processing. Such sharing shall be limited to legitimate business requirements.</p>
            },
            {
              title: "7. International Data Transfers",
              content: <p className="text-gray-600">As an international export business, information submitted through the Website may be processed or accessed across multiple countries in connection with global trade operations. By using the Website, users consent to such international data processing where necessary.</p>
            },
            {
              title: "8. Data Security",
              content: <p className="text-gray-600">We implement commercially reasonable security measures to protect collected information from unauthorized access, misuse, disclosure, alteration, or destruction. However, no internet-based system can guarantee absolute security, and users submit information at their own risk.</p>
            },
            {
              title: "9. Data Retention",
              content: <p className="text-gray-600">We may retain user information for business and legal purposes, for maintaining transaction history, for dispute resolution, or as required under applicable laws and regulations. Information no longer required may be deleted or anonymized at our discretion.</p>
            },
            {
              title: "10. User Rights",
              content: <p className="text-gray-600">Subject to applicable laws, users may request access to personal information, correction of inaccurate information, deletion of information where legally permissible, and withdrawal of consent for marketing communications. Requests may be submitted via email to: sales@jarmexoverseas.com</p>
            },
            {
              title: "11. Marketing Communications",
              content: <p className="text-gray-600">By submitting inquiries or contact details, users may receive business updates, product information, quotations, promotional communication, or follow-up communication. Users may opt out of non-essential marketing communications at any time.</p>
            },
            {
              title: "12. Children's Privacy",
              content: <p className="text-gray-600">This Website is intended for business and commercial use only. We do not knowingly collect personal information from individuals under the age of 18.</p>
            },
            {
              title: "13. Governing Law",
              content: <p className="text-gray-600">This Privacy Policy shall be governed by and interpreted in accordance with the laws of India. Any disputes arising in connection with this Privacy Policy shall fall under the jurisdiction of courts located in Pune, Maharashtra, India.</p>
            },
            {
              title: "14. Contact Us",
              content: (
                <ul className="text-gray-600 space-y-1">
                  <li>JARMEX Overseas Private Limited</li>
                  <li>TBL Space, 301, Balewadi Plaza, Patil Nagar, Balewadi, Pune – 411045, Maharashtra, India</li>
                  <li><strong>Email:</strong> sales@jarmexoverseas.com</li>
                  <li><strong>Phone:</strong> +91 70288 07311</li>
                </ul>
              )
            },
          ].map((section, i) => (
            <div key={i} className="mb-8">
              <h2 className="text-xl font-bold text-[#1B2B5E] mb-3">{section.title}</h2>
              <div className="border-l-4 border-[#C9A84C] pl-4">
                {section.content}
              </div>
            </div>
          ))}

        </div>
      </section>
    </div>
  )
}