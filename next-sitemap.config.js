/** @type {import('next-sitemap').IConfig} */
module.exports = {
  siteUrl: process.env.SITE_URL || 'https://barcats.ca',
  generateRobotsTxt: true,
  changefreq: 'daily',
  priority: 0.7,
  sitemapSize: 5000,
  exclude: ['/admin', '/admin/*', '/not-found'],
  // additionalPaths: async (config) => [
  //   await config.transform(config, '/not-found'), 
  // ],
};
