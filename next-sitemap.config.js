/** @type {import('next-sitemap').IConfig} */
module.exports = {
    siteUrl: process.env.SITE_URL || 'https://barcats.ca',
    generateRobotsTxt: true, 
    exclude: ['/admin/*'],
    changefreq: 'daily',
    priority: 0.7,
    sitemapSize: 5000,
  };
  