import { MetadataRoute } from "next"

export default function sitemap(): MetadataRoute.Sitemap {
  return [
    { url: "https://www.jarmexoverseas.com", lastModified: new Date(), changeFrequency: "weekly", priority: 1 },
    { url: "https://www.jarmexoverseas.com/products", lastModified: new Date(), changeFrequency: "weekly", priority: 0.9 },
    { url: "https://www.jarmexoverseas.com/about", lastModified: new Date(), changeFrequency: "monthly", priority: 0.8 },
    { url: "https://www.jarmexoverseas.com/services", lastModified: new Date(), changeFrequency: "monthly", priority: 0.7 },
    { url: "https://www.jarmexoverseas.com/contact", lastModified: new Date(), changeFrequency: "monthly", priority: 0.6 },
  ]
}