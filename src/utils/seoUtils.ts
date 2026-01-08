/**
 * SEO and Meta Tags Management Utility
 * Handles dynamic meta tags, schema.org markup, and SEO optimization
 */

export interface SEOConfig {
  title: string
  description: string
  keywords?: string[]
  image?: string
  url?: string
  type?: 'website' | 'article' | 'product'
  author?: string
  publishedDate?: string
  modifiedDate?: string
}

/**
 * Update page meta tags dynamically
 */
export const updateMetaTags = (config: SEOConfig) => {
  // Update title
  document.title = config.title

  // Update or create description meta tag
  let descriptionMeta = document.querySelector('meta[name="description"]')
  if (!descriptionMeta) {
    descriptionMeta = document.createElement('meta')
    descriptionMeta.setAttribute('name', 'description')
    document.head.appendChild(descriptionMeta)
  }
  descriptionMeta.setAttribute('content', config.description)

  // Update keywords
  if (config.keywords && config.keywords.length > 0) {
    let keywordsMeta = document.querySelector('meta[name="keywords"]')
    if (!keywordsMeta) {
      keywordsMeta = document.createElement('meta')
      keywordsMeta.setAttribute('name', 'keywords')
      document.head.appendChild(keywordsMeta)
    }
    keywordsMeta.setAttribute('content', config.keywords.join(', '))
  }

  // Update Open Graph tags
  const ogTags = {
    'og:title': config.title,
    'og:description': config.description,
    'og:type': config.type || 'website',
  }

  if (config.image) {
    ogTags['og:image'] = config.image
  }
  if (config.url) {
    ogTags['og:url'] = config.url
  }

  Object.entries(ogTags).forEach(([property, content]) => {
    let meta = document.querySelector(`meta[property="${property}"]`)
    if (!meta) {
      meta = document.createElement('meta')
      meta.setAttribute('property', property)
      document.head.appendChild(meta)
    }
    meta.setAttribute('content', content)
  })

  // Update canonical URL
  if (config.url) {
    let canonical = document.querySelector('link[rel="canonical"]')
    if (!canonical) {
      canonical = document.createElement('link')
      canonical.setAttribute('rel', 'canonical')
      document.head.appendChild(canonical)
    }
    canonical.setAttribute('href', config.url)
  }
}

/**
 * Generate JSON-LD structured data (schema.org)
 */
export const generateSchemaMarkup = (
  schemaType: 'Organization' | 'LocalBusiness' | 'Product' | 'Article',
  data: Record<string, any>
) => {
  const script = document.createElement('script')
  script.type = 'application/ld+json'
  script.textContent = JSON.stringify(data, null, 2)
  document.head.appendChild(script)
}

/**
 * Remove existing JSON-LD scripts
 */
export const removeExistingSchema = () => {
  const scripts = document.querySelectorAll('script[type="application/ld+json"]')
  scripts.forEach(script => {
    if (script.textContent && script.textContent.includes('@context')) {
      script.remove()
    }
  })
}

/**
 * Organization Schema (for homepage and global)
 */
export const organizationSchema = {
  '@context': 'https://schema.org',
  '@type': 'Organization',
  'name': 'Golfklubbens IT',
  'description': 'Digital løsninger og IT-tjenester for norske golfklubber',
  'url': 'https://golfklubb-it-website.web.app',
  'logo': 'https://golfklubb-it-website.web.app/images/logo.png',
  'sameAs': [
    'https://www.facebook.com/golfklubbensit',
    'https://www.linkedin.com/company/golfklubbens-it'
  ],
  'address': {
    '@type': 'PostalAddress',
    'addressCountry': 'NO'
  },
  'contactPoint': {
    '@type': 'ContactPoint',
    'contactType': 'Customer Support',
    'telephone': '+47-XXX-XX-XXX',
    'email': 'support@golfklubb-it.no'
  }
}

/**
 * Service Schema (for product pages)
 */
export const serviceSchema = (
  name: string,
  description: string,
  image: string,
  url: string
) => ({
  '@context': 'https://schema.org',
  '@type': 'Service',
  'name': name,
  'description': description,
  'image': image,
  'provider': {
    '@type': 'Organization',
    'name': 'Golfklubbens IT',
    'url': 'https://golfklubb-it-website.web.app'
  },
  'url': url,
  'areaServed': 'NO',
  'availableLanguage': 'no'
})

/**
 * BreadcrumbList Schema (for navigation)
 */
export const breadcrumbSchema = (items: Array<{ name: string; url: string }>) => ({
  '@context': 'https://schema.org',
  '@type': 'BreadcrumbList',
  'itemListElement': items.map((item, index) => ({
    '@type': 'ListItem',
    'position': index + 1,
    'name': item.name,
    'item': item.url
  }))
})

/**
 * Local Business Schema (for contact/support page)
 */
export const localBusinessSchema = {
  '@context': 'https://schema.org',
  '@type': 'LocalBusiness',
  'name': 'Golfklubbens IT',
  'image': 'https://golfklubb-it-website.web.app/images/logo.png',
  'description': 'IT-tjenester og digital løsninger for golfklubber',
  'url': 'https://golfklubb-it-website.web.app',
  'telephone': '+47-XXX-XX-XXX',
  'email': 'support@golfklubb-it.no',
  'address': {
    '@type': 'PostalAddress',
    'streetAddress': 'Din adresse her',
    'addressLocality': 'Oslo',
    'addressRegion': 'NO',
    'postalCode': 'XXXX',
    'addressCountry': 'NO'
  },
  'openingHours': 'Mo,Tu,We,Th,Fr 09:00-17:00',
  'sameAs': [
    'https://www.facebook.com/golfklubbensit',
    'https://www.linkedin.com/company/golfklubbens-it'
  ]
}

/**
 * FAQ Schema (for FAQ page)
 */
export const faqSchema = (
  faqs: Array<{ question: string; answer: string }>
) => ({
  '@context': 'https://schema.org',
  '@type': 'FAQPage',
  'mainEntity': faqs.map(faq => ({
    '@type': 'Question',
    'name': faq.question,
    'acceptedAnswer': {
      '@type': 'Answer',
      'text': faq.answer
    }
  }))
})

/**
 * Sitemap entry helper
 */
export const generateSitemapUrl = (
  path: string,
  lastModified: string,
  changeFrequency: 'always' | 'hourly' | 'daily' | 'weekly' | 'monthly' | 'yearly' | 'never',
  priority: number
) => ({
  url: `https://golfklubb-it-website.web.app${path}`,
  lastmod: lastModified,
  changefreq: changeFrequency,
  priority: priority
})
