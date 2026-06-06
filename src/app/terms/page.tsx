export default function TermsPage() {
  return (
    <div>
      <section className="bg-[#1B2B5E] text-white py-20">
        <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8 text-center">
          <h1 className="text-4xl md:text-5xl font-bold mb-4">
            Terms & <span className="text-[#C9A84C]">Conditions</span>
          </h1>
        </div>
      </section>

      <section className="py-16">
        <div className="max-w-4xl mx-auto px-4 sm:px-6 lg:px-8 prose prose-gray max-w-none">

          <p className="text-gray-600 mb-8">Welcome to <strong>jarmexoverseas.com</strong> ("Website"), operated by JARMEX Overseas Private Limited ("Company", "we", "our", or "us"). By accessing or using this Website, you agree to comply with and be bound by the following Terms & Conditions.</p>

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
              title: "2. Business Nature",
              content: <p className="text-gray-600">JARMEX Overseas Private Limited is engaged in the sourcing, manufacturing, marketing, and export of handcrafted products including wooden handicrafts, home décor products, hospitality décor products, kitchenware, utility furniture, trays, boxes, tables, chairs, showpieces, garden décor products, and textile and metal handicrafts. The Website is intended for informational and business inquiry purposes only. Products displayed on the Website are not available for direct online purchase unless specifically stated.</p>
            },
            {
              title: "3. Product Information Disclaimer",
              content: <p className="text-gray-600">All products displayed on the Website are subject to availability. Due to the handcrafted nature of products, slight variations in color, texture, finish, grain, dimensions, carving, or appearance may occur. Product images are illustrative and indicative only. Actual delivered products may vary slightly from displayed images or specifications. Such variations shall not be considered defects or grounds for dispute. The Company reserves the right to modify product specifications, packaging, materials, or dimensions without prior notice.</p>
            },
            {
              title: "4. Inquiries & Quotations",
              content: <p className="text-gray-600">The Website allows users to submit inquiries, quotation requests, or business proposals. Submission of an inquiry does not constitute an order confirmation, a binding contract, or acceptance by the Company. All commercial transactions shall be governed by separate written agreements, Proforma Invoices, Purchase Orders, or mutually accepted commercial terms. The Company reserves the right to accept or reject inquiries at its sole discretion.</p>
            },
            {
              title: "5. Pricing & Commercial Terms",
              content: <p className="text-gray-600">Product pricing is not publicly displayed on the Website. Prices, payment terms, Incoterms, production timelines, shipping arrangements, packaging standards, and minimum order quantities (MOQs) shall be discussed and finalized separately during commercial negotiations. All quotations are subject to raw material availability, exchange rate fluctuations, production feasibility, logistics costs, and export regulations.</p>
            },
            {
              title: "6. Sample Orders",
              content: <p className="text-gray-600">Sample orders may be provided subject to applicable sample charges, shipping costs, and minimum order quantity conditions. The Company reserves the right to approve or decline sample requests. Sample products may vary slightly from bulk production due to handcrafted manufacturing processes.</p>
            },
            {
              title: "7. Order Cancellation",
              content: <p className="text-gray-600">Orders once confirmed may not be canceled without prior written approval from the Company. Cancellation charges may apply depending on production status, procurement stage, customization level, packaging status, and logistics arrangements already initiated. Customized, OEM, private label, or made-to-order products are generally non-cancelable and non-refundable once production has commenced.</p>
            },
            {
              title: "8. Shipping & Delivery",
              content: <p className="text-gray-600">Shipping timelines provided by the Company are estimated and subject to production schedules, supplier timelines, logistics conditions, customs clearance, port congestion, force majeure events, and international shipping delays. The Company shall not be held liable for delays caused by third-party logistics providers, customs authorities, freight forwarders, or unforeseen international trade restrictions.</p>
            },
            {
              title: "9. Customs, Duties & Import Responsibility",
              content: <p className="text-gray-600">Buyers are solely responsible for compliance with import regulations of their respective countries, and payment of customs duties, taxes, VAT, import permits, certifications, and related charges. The Company shall not be liable for shipment delays, confiscation, penalties, or rejections arising from the buyer's local import regulations or documentation requirements.</p>
            },
            {
              title: "10. Intellectual Property Rights",
              content: <p className="text-gray-600">All content on this Website including product images, catalogues, branding, logos, text, graphics, product concepts, and designs are the intellectual property of JARMEX Overseas Private Limited unless otherwise stated. No content may be copied, reproduced, distributed, modified, downloaded, republished, or commercially used without prior written consent from the Company.</p>
            },
            {
              title: "11. OEM / Private Label Manufacturing",
              content: <p className="text-gray-600">The Company may undertake OEM, white-label, or private label manufacturing based on mutually agreed terms. Buyers shall ensure that submitted logos, trademarks, artwork, packaging designs, and brand materials do not infringe upon any third-party intellectual property rights. The Company shall not be liable for legal disputes arising from buyer-provided branding materials.</p>
            },
            {
              title: "12. Website Use Restrictions",
              content: <p className="text-gray-600">Users agree not to misuse the Website, attempt unauthorized access, distribute malware, submit false inquiries, engage in fraudulent activities, or use the Website for unlawful purposes. The Company reserves the right to restrict or terminate access to any user violating these Terms.</p>
            },
            {
              title: "13. Limitation of Liability",
              content: <p className="text-gray-600">To the maximum extent permitted under applicable law, the Company shall not be liable for indirect losses, business interruption, loss of profits, consequential damages, data loss, or delays arising from use of the Website or commercial transactions. The Company's total liability, if any, shall be limited to the value of the specific transaction giving rise to the claim.</p>
            },
            {
              title: "14. Force Majeure",
              content: <p className="text-gray-600">The Company shall not be held responsible for failure or delay in performance due to circumstances beyond reasonable control including natural disasters, pandemics, labor strikes, export/import restrictions, war, governmental actions, transportation disruptions, or raw material shortages.</p>
            },
            {
              title: "15. Governing Law & Jurisdiction",
              content: <p className="text-gray-600">These Terms & Conditions shall be governed by and interpreted in accordance with the laws of India. Any disputes arising out of or related to these Terms shall be subject to the exclusive jurisdiction of the courts located in Pune, Maharashtra, India.</p>
            },
            {
              title: "16. Modifications to Terms",
              content: <p className="text-gray-600">The Company reserves the right to modify, update, or revise these Terms & Conditions at any time without prior notice. Users are advised to review this page periodically. Continued use of the Website after updates constitutes acceptance of revised Terms.</p>
            },
            {
              title: "17. Contact Us",
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