import { NextApiRequest, NextApiResponse } from 'next';
import { Service } from 'types';

const siteUrl = process.env.SITE_URL || 'https://barcats.ca';
interface Page {
    loc: string;
    lastmod: string;
  }

  async function fetchServices(): Promise<Service[]> {
  const response = await fetch(`${siteUrl}/api/services`);
  const services = await response.json();
  return services;
}



function generateSitemap(pages: Page[]) {
    return `<?xml version="1.0" encoding="UTF-8"?>
    <urlset
          xmlns="http://www.sitemaps.org/schemas/sitemap/0.9"
          xmlns:xsi="http://www.w3.org/2001/XMLSchema-instance"
          xsi:schemaLocation="http://www.sitemaps.org/schemas/sitemap/0.9
                http://www.sitemaps.org/schemas/sitemap/0.9/sitemap.xsd">
      ${pages
        .map((page) => {
          return `<url>
            <loc>${page.loc}</loc>
            <lastmod>${page.lastmod}</lastmod>
          </url>`;
        })
        .join('')}
    </urlset>`;
  }

export default async function handler(req: NextApiRequest, res: NextApiResponse) {
  const services = await fetchServices();

  const staticPages = [
    { loc: `${siteUrl}/`, lastmod: new Date().toISOString() },
    { loc: `${siteUrl}/contact`, lastmod: new Date().toISOString() },
  ];

//   const servicePages = services.map((service) => ({
//     loc: `${siteUrl}/services/${service.slug}`,
//     lastmod: new Date().toISOString(),
//   }));
  console.log(services)

  const allPages = [...staticPages];

  const sitemap = generateSitemap(allPages);

  res.setHeader('Content-Type', 'application/xml');
  res.write(sitemap);
}
