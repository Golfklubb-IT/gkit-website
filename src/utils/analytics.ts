import ReactGA from 'react-ga4'

/**
 * GA4 Analytics Event Tracker
 * Centralized event tracking for Golfklubbens IT Website
 */

export const trackBlogPostView = (postTitle: string, postCategory?: string) => {
  ReactGA.event({
    category: 'Blog',
    action: 'View Post',
    label: postTitle,
    value: postCategory ? 1 : undefined,
  })
}

export const trackBlogCategoryFilter = (category: string) => {
  ReactGA.event({
    category: 'Blog',
    action: 'Filter by Category',
    label: category,
  })
}

export const trackProductClick = (productName: string, productType?: string) => {
  ReactGA.event({
    category: 'Product',
    action: 'Click',
    label: productName,
    value: productType ? 1 : undefined,
  })
}

export const trackServiceExplore = (serviceName: string) => {
  ReactGA.event({
    category: 'Service',
    action: 'Explore',
    label: serviceName,
  })
}

export const trackAppClick = (appName: string) => {
  ReactGA.event({
    category: 'App',
    action: 'Click',
    label: appName,
  })
}

export const trackFAQView = (question: string) => {
  ReactGA.event({
    category: 'FAQ',
    action: 'View Answer',
    label: question,
  })
}

export const trackDemoRequest = (clubName: string, email: string) => {
  ReactGA.event({
    category: 'Conversion',
    action: 'Demo Requested',
    label: email,
    value: 1,
  })
}

export const trackContactFormSubmit = (formType: string) => {
  ReactGA.event({
    category: 'Form Submission',
    action: 'Contact Form',
    label: formType,
    value: 1,
  })
}

export const trackScrollDepth = (pagePath: string, depthPercent: number) => {
  ReactGA.event({
    category: 'Engagement',
    action: 'Scroll Depth',
    label: `${depthPercent}%`,
    value: depthPercent,
  })
}

export const trackInternalLink = (linkText: string, linkURL: string) => {
  ReactGA.event({
    category: 'Internal Link',
    action: 'Click',
    label: linkText,
  })
}

export const trackExternalLink = (linkText: string, linkURL: string) => {
  ReactGA.event({
    category: 'External Link',
    action: 'Click',
    label: linkURL,
  })
}

export const trackPageError = (errorType: string, errorMessage?: string) => {
  ReactGA.event({
    category: 'Error',
    action: errorType,
    label: errorMessage || 'Unknown Error',
  })
}

/**
 * Track time on page
 * Call this before user leaves the page
 */
export const trackTimeOnPage = (pagePath: string, timeInSeconds: number) => {
  if (timeInSeconds > 5) {
    ReactGA.event({
      category: 'Engagement',
      action: 'Time on Page',
      label: pagePath,
      value: Math.round(timeInSeconds),
    })
  }
}

export default {
  trackBlogPostView,
  trackBlogCategoryFilter,
  trackProductClick,
  trackServiceExplore,
  trackAppClick,
  trackFAQView,
  trackDemoRequest,
  trackContactFormSubmit,
  trackScrollDepth,
  trackInternalLink,
  trackExternalLink,
  trackPageError,
  trackTimeOnPage,
}
