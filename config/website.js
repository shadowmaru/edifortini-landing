module.exports = {
  pathPrefix: '/', // Prefix for all links. If you deploy your site to example.com/portfolio your pathPrefix should be "portfolio"
  title: 'Edi Fortini', // Navigation and Site Title
  titleAlt: 'Edi Fortini', // Title for JSONLD
  description:
    'I’m Edi Fortini, a photographer currently living and working in São Paulo, SP. I’m also studying Librarianship and Web Development.',
  headline:
    'I’m Edi Fortini, a photographer currently living and working in São Paulo, SP. I’m also studying Librarianship and Web Development.', // Headline for schema.org JSONLD
  url: 'https://edifortini.com', // Domain of your site. No trailing slash!
  siteLanguage: 'pt-BR', // Language Tag on <html> element
  logo: '/logos/landing.jpg', // Used for SEO
  ogLanguage: 'pt_BR', // Facebook Language

  // JSONLD / Manifest
  favicon: 'src/favicon.png', // Used for manifest favicon generation
  shortName: 'Prismic', // shortname for manifest. MUST be shorter than 12 characters
  author: 'Edi Fortini', // Author for schemaORGJSONLD
  themeColor: '#3D63AE',
  backgroundColor: '#EBEDF2',

  twitter: '@edifortini', // Twitter Username
  facebook: '', // Facebook Site Name
  googleAnalyticsID: 'UA-135641669-1',

  skipNavId: 'reach-skip-nav', // ID for the "Skip to content" a11y feature
}
