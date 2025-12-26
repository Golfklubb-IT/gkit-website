# Phase 4: Analytics & Monitoring - Implementation Guide

## Quick Setup (30 minutes)

This guide walks you through implementing Google Search Console + Google Analytics 4 tracking.

---

## Step 1: Install react-ga4 Package

```bash
npm install react-ga4
```

---

## Step 2: Initialize GA4 in src/main.tsx

Add GA4 initialization at the top of your main.tsx file:

```tsx
import React from 'react'
import ReactDOM from 'react-dom/client'
import ReactGA from 'react-ga4'  // Add this import
import { HelmetProvider } from 'react-helmet-async'
import App from './App.tsx'
import './index.css'

// Initialize Google Analytics 4
// Replace 'G-XXXXXXXXXX' with your actual Measurement ID from GA4
const GA_MEASUREMENT_ID = 'G-XXXXXXXXXX'
ReactGA.initialize(GA_MEASUREMENT_ID)

// Track initial page view
ReactGA.send({
  hitType: 'pageview',
  page: window.location.pathname,
  title: document.title,
})

ReactDOM.createRoot(document.getElementById('root')!).render(
  <React.StrictMode>
    <HelmetProvider>
      <App />
    </HelmetProvider>
  </React.StrictMode>,
)
```

---

## Step 3: Integrate usePageTracking Hook in src/App.tsx

Add the page tracking hook to your App component:

```tsx
import { usePageTracking } from './hooks/usePageTracking'

function App() {
  // Track page views on route changes
  usePageTracking()

  return (
    // Your existing app structure
  )
}

export default App
```

---

## Step 4: Add Event Tracking to Home.tsx (Demo Requests)

Update the demo request submission in Home.tsx:

```tsx
import { trackDemoRequest } from '../utils/analytics'

// In the handleContactSubmit function:
const handleContactSubmit = (e) => {
  e.preventDefault()
  
  // Track conversion in GA4
  trackDemoRequest(contactForm.name, contactForm.email)
  
  // Show confirmation
  alert(`Takk, ${contactForm.name}! Vi kontakter deg på ${contactForm.email}`)
  
  // Reset form
  setContactForm({ name: '', email: '', message: '' })
}
```

---

## Step 5: Add Event Tracking to Blog.tsx

Update blog interactions:

```tsx
import { trackBlogPostView, trackBlogCategoryFilter } from '../utils/analytics'

// In the category filter:
<button
  key={category}
  onClick={() => {
    trackBlogCategoryFilter(category)
    setSelectedCategory(category === 'Alle' ? null : category)
  }}
  // ... rest of button props
>
  {category}
</button>

// In the blog post link:
<a 
  href={`/blog/${post.id}`}
  onClick={() => trackBlogPostView(post.title, post.category)}
  // ... rest of link props
>
  Les mer →
</a>
```

---

## Step 6: Add Event Tracking to Services.tsx

Update service interactions:

```tsx
import { trackFAQView, trackServiceExplore } from '../utils/analytics'

// In the service card onClick:
onClick={() => {
  trackServiceExplore(service.title)
  window.location.href = service.link
}}

// In the FAQ cards:
<div 
  onClick={() => trackFAQView(item.q)}
  style={{ /* ... */ }}
>
  <h3>{item.q}</h3>
  <p>{item.a}</p>
</div>
```

---

## Step 7: Google Search Console Setup

### Verify Domain

1. Go to [Google Search Console](https://search.google.com/search-console)
2. Click "Add property"
3. Enter: `https://golfklubb-it-website.web.app`
4. Verify via HTML file in `/public/` folder
5. Wait for verification (usually instant)

### Submit Sitemap

1. In GSC, go to "Sitemaps"
2. Enter: `https://golfklubb-it-website.web.app/sitemap.xml`
3. Click "Submit"

### Monitor Enhancements

In GSC, check "Enhancements" tab - you should see:
- ✅ Breadcrumbs (from Phase 1)
- ✅ FAQs (from Phase 3)
- ✅ Article (from Phase 3 Blog)

---

## Step 8: Google Analytics 4 Setup

### Create GA4 Property

1. Go to [Google Analytics](https://analytics.google.com/)
2. Create new account: "Golfklubbens IT"
3. Create property: "Website - Production"
4. Create web stream for: `https://golfklubb-it-website.web.app`
5. **Copy your Measurement ID** (format: G-XXXXXXXXXX)

### Set Up Conversions

1. In GA4 Admin → Conversions → Create new conversion event
2. Create "Demo Requested" conversion
3. Event name: `Demo_Requested` (from trackDemoRequest)
4. Mark as conversion: YES

Repeat for other key events:
- `Blog_Post_View`
- `Product_Click`
- `FAQ_View`
- `Service_Explore`

### Create Dashboard

1. In GA4, go to Dashboards → Create dashboard
2. Add cards:
   - Sessions (total)
   - Organic traffic (from search)
   - Top pages
   - Conversions (Demo Requested)
   - Blog engagement

---

## Step 9: Deploy & Verify

### Deploy to Firebase

```bash
npm run build
firebase deploy
```

### Verify GA4 is Working

1. Go to your site: https://golfklubb-it-website.web.app
2. Open GA4 → Realtime view
3. You should see yourself in "Active Users"
4. Perform actions (click blog, submit demo form)
5. Events should appear in Realtime view

### Verify GSC is Working

1. In GSC, wait 24-48 hours
2. Check "Coverage" - should show 30+ indexed pages
3. Check "Performance" - should show impressions
4. Check "Enhancements" - should show detected schemas

---

## Step 10: Set Up Monitoring

### Daily Checklist (First 2 weeks)

- [ ] Check GSC Performance tab for impressions
- [ ] Monitor GA4 Realtime for user activity
- [ ] Verify events are tracking (demo requests, blog views)
- [ ] Check for any crawl errors in GSC

### Weekly Report (Weeks 3-4)

- [ ] Organic traffic comparison (week over week)
- [ ] Top pages by sessions
- [ ] Conversion funnel (blog → demo request)
- [ ] FAQ click-through rates

### Monthly Report (Month 2+)

- [ ] Organic traffic growth % (vs baseline)
- [ ] Keyword rankings improvement (avg position)
- [ ] Conversion rate improvement
- [ ] ROI calculation

---

## Expected Results

### Week 1-2
- GSC shows 30+ indexed pages
- GA4 baseline metrics captured
- First events tracked

### Week 3-4
- FAQ schema appearing in SERP (GSC)
- +10-15% increase in impressions
- Blog posts showing in search results with images

### Month 2
- +15-25% increase in organic traffic
- +20-30% improvement in CTR (from rich snippets)
- +10-20% demo request conversions from search

### Month 3
- +20-30% total organic growth
- +50% FAQ interactions
- Clear ROI on Phase 3 improvements

---

## Troubleshooting

| Issue | Solution |
|-------|----------|
| GA4 shows no data | Wait 24 hours, check Measurement ID, verify React component |
| GSC shows 0 pages | Verify domain, wait 48 hours, submit sitemap manually |
| Events not tracking | Check browser console, verify event names match, use DebugView |
| FAQ not in SERP | Validate schema.org markup, ensure proper JSON-LD format |

---

## Files Created/Modified

### New Files
- `src/hooks/usePageTracking.ts` - Page view tracking
- `src/utils/analytics.ts` - Event tracking utilities

### Modified Files (Need updates)
- `src/main.tsx` - Add GA4 initialization
- `src/App.tsx` - Add usePageTracking hook
- `src/pages/Home.tsx` - Add demo request tracking
- `src/pages/Blog.tsx` - Add blog tracking
- `src/pages/Services.tsx` - Add FAQ tracking

---

## Environment Variables (Optional)

For security, store your GA4 Measurement ID in environment variables:

Create `.env` file:
```
VITE_GA_MEASUREMENT_ID=G-XXXXXXXXXX
```

Update `src/main.tsx`:
```tsx
const GA_MEASUREMENT_ID = import.meta.env.VITE_GA_MEASUREMENT_ID || 'G-XXXXXXXXXX'
```

---

## Next Steps After Setup

1. ✅ Complete Phase 4 setup (this guide)
2. ⏭️ Wait 4 weeks to gather data
3. ⏭️ Analyze Phase 3 impact in month 2
4. ⏭️ Plan Phase 5 based on data (e.g., more blog content, additional FAQs)

---

**Phase 4 Setup Duration:** 30 minutes  
**Phase 4 Data Collection:** 4 weeks for statistically significant results  
**Next Review:** 30 days after implementation
