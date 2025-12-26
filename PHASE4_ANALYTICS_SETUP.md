# Phase 4: Analytics & Monitoring - Quick Start Guide

**Duration:** 30 minutes | **Status:** Implementation Ready  
**Goal:** Set up Google Search Console + Google Analytics 4 to track SERP improvements from Phase 3

---

## Part 1: Google Search Console Setup (10 minutes)

### Step 1: Verify Domain Ownership

1. Go to [Google Search Console](https://search.google.com/search-console/about)
2. Click **"Start now"** → **"Add property"**
3. Choose **"URL prefix"** (not domain)
4. Enter: `https://golfklubb-it-website.web.app`

### Step 2: Verify Domain

**Option A: HTML file (Recommended for Firebase)**
1. Download the HTML verification file
2. Place in `/public/` folder
3. Firebase automatically serves from `public/`
4. Click "Verify" in GSC

**Option B: Meta tag (Quick alternative)**
1. Copy meta tag from GSC
2. Add to `src/main.tsx` in Helmet provider:
```tsx
<meta name="google-site-verification" content="YOUR_VERIFICATION_CODE" />
```

### Step 3: Submit Sitemap

1. In GSC left menu, go to **"Sitemaps"**
2. Enter: `https://golfklubb-it-website.web.app/sitemap.xml`
3. Click "Submit"
4. GSC will show indexed pages within 24-48 hours

### Step 4: Configure GSC Settings

1. **Go to Settings** → **Preferred domain**
   - Select: `https://golfklubb-it-website.web.app`

2. **Coverage tab** - Monitor:
   - Excluded URLs (shouldn't have any)
   - Valid pages (should show 30+)
   - Errors (should be 0)

3. **Enhancements tab** - Check:
   - **Breadcrumbs** ✓ (Phase 1)
   - **FAQs** ✓ (Phase 3 Services)
   - **Article** ✓ (Phase 3 Blog)

### Step 5: Set Up Performance Monitoring

In GSC, go to **"Performance"** tab:
- Monitor **Impressions** (how many times in search results)
- Monitor **Clicks** (CTR)
- Monitor **Average position** (ranking)
- Filter by: Queries, Pages, Countries, Devices

**Key Metrics to Track:**
- Blog posts impressions (should increase with Article schema)
- Services FAQ clicks (should increase with FAQ schema)
- Homepage position for "golfklubb IT" keywords

---

## Part 2: Google Analytics 4 Setup (15 minutes)

### Step 1: Create GA4 Property

1. Go to [Google Analytics](https://analytics.google.com/)
2. Click **"Create account"** (if new)
3. Account name: `Golfklubbens IT`
4. Property name: `Website - Production`
5. Reporting timezone: **Europe/Oslo**
6. Currency: **NOK**

### Step 2: Create Web Stream

1. Property → **Data streams** → **Add stream**
2. Platform: **Web**
3. Website URL: `https://golfklubb-it-website.web.app`
4. Stream name: `Website`
5. Click "Create stream"
6. **Copy the Measurement ID** (format: `G-XXXXXXXXXX`)

### Step 3: Install GA4 Tag in React

Install React GA4 package:
```bash
npm install react-ga4
```

Update `src/main.tsx`:
```tsx
import ReactGA from "react-ga4";

// Initialize GA4
ReactGA.initialize("G-XXXXXXXXXX"); // Replace with your Measurement ID

// Track page views
ReactGA.send({ hitType: "pageview", page: window.location.pathname });

ReactDOM.createRoot(document.getElementById("root")!).render(
  <React.StrictMode>
    <HelmetProvider>
      <App />
    </HelmetProvider>
  </React.StrictMode>,
)
```

### Step 4: Set Up Page View Tracking

Create `src/hooks/usePageTracking.ts`:
```typescript
import { useEffect } from 'react'
import { useLocation } from 'react-router-dom'
import ReactGA from 'react-ga4'

export const usePageTracking = () => {
  const location = useLocation()

  useEffect(() => {
    // Track page view on location change
    ReactGA.send({
      hitType: 'pageview',
      page: location.pathname + location.search,
      title: document.title,
    })
  }, [location])
}
```

Use in `src/App.tsx`:
```tsx
import { usePageTracking } from './hooks/usePageTracking'

function App() {
  usePageTracking()

  return (
    // Your app content
  )
}
```

### Step 5: Set Up Event Tracking

Track key user interactions:

#### Blog Post Views (in Blog.tsx)
```typescript
const trackBlogPostView = (postTitle: string) => {
  ReactGA.event({
    category: 'Blog',
    action: 'View Post',
    label: postTitle,
  })
}

// Add onClick to blog cards
onClick={() => trackBlogPostView(post.title)}
```

#### Demo Request Submissions (in Home.tsx)
```typescript
const handleContactSubmit = (e) => {
  e.preventDefault()
  
  // Track conversion
  ReactGA.event({
    category: 'Conversion',
    action: 'Demo Requested',
    label: contactForm.email,
    value: 1,
  })
  
  console.log('Demo request:', contactForm)
  // ... rest of submission logic
}
```

#### Product/App Clicks (in Services.tsx & Apps sections)
```typescript
const trackProductClick = (productName: string) => {
  ReactGA.event({
    category: 'Product',
    action: 'Click',
    label: productName,
  })
}

// Link onClick
<Link 
  to={item.link}
  onClick={() => trackProductClick(item.title)}
>
  {item.title}
</Link>
```

#### FAQ Interactions (in Services.tsx)
```typescript
const trackFAQView = (question: string) => {
  ReactGA.event({
    category: 'FAQ',
    action: 'View Answer',
    label: question,
  })
}

// On FAQ card click
onClick={() => trackFAQView(item.q)}
```

### Step 6: Set Up Conversions

In GA4:
1. Go to **"Events"** → **"Create event"**
2. Create event for: **"Demo Requested"**
3. In **"Conversions"** → **"Mark as conversion"**

Repeat for:
- Demo Requested (Goal: qualified leads)
- Product Click (Goal: engagement)
- Blog Post View (Goal: content consumption)
- FAQ View (Goal: information-seeking behavior)

### Step 7: Create Dashboard

In GA4, go to **"Dashboards"** → **"Create dashboard"**:

**Add cards:**
1. **Sessions** - Total user sessions
2. **Organic Traffic** - From search engines
3. **Top Pages** - Which pages get most traffic
4. **Conversions** - Demo requests, product clicks
5. **Blog Posts** - Which articles drive engagement
6. **Device Category** - Mobile vs Desktop
7. **Top Referrers** - Where organic traffic comes from

---

## Part 3: Integration with GSC (5 minutes)

### Link GA4 to Google Search Console

1. In GA4 → **Admin** → **Data display** → **Search Console linking**
2. Click **"Link"**
3. Select your GSC property: `golfklubb-it-website.web.app`
4. This adds GSC data to GA4 reports

**Benefits:**
- See which search queries drive traffic
- See CTR and impressions for each landing page
- Identify high-opportunity keywords
- Track ranking improvements

### Create "Organic Search" Report

In GA4 → **Explore** → **New exploration**:
1. Choose **"Free form"** template
2. Dimensions: Page path, Query (from GSC)
3. Metrics: Sessions, Conversions, Bounce rate
4. Filter: Source/Medium = organic

---

## Part 4: Key Metrics to Monitor

### Phase 3 Impact Tracking

Track these metrics **before and after** Phase 3 deployment:

#### Blog Performance
- **Impressions** (GSC) - Article schema should increase visibility
- **CTR** (GSC) - Article snippets should improve click-through
- **Page views** (GA4) - Blog traffic
- **Time on page** (GA4) - Content engagement
- **Expected improvement:** +30-40% in 4 weeks

#### Services/FAQ Performance
- **FAQ impressions** (GSC) - Should appear in SERP
- **Services page views** (GA4)
- **FAQ interactions** (GA4 custom event)
- **Demo request conversions** (GA4)
- **Expected improvement:** +25-35% in 4 weeks

#### Overall Organic Performance
- **Organic sessions** (GA4) - Total search traffic
- **Organic conversions** (GA4) - Demo requests from search
- **Average position** (GSC) - Keyword rankings
- **Expected improvement:** +20-30% in 6-8 weeks

---

## Monitoring Schedule

### Week 1: Baseline & Setup Verification
- [ ] Verify GSC shows all 30 pages indexed
- [ ] Verify GA4 is tracking page views
- [ ] Check event tracking is working
- [ ] Screenshot baseline metrics

### Week 2-4: Daily Monitoring
- [ ] Check GSC Performance tab daily
- [ ] Monitor organic traffic in GA4
- [ ] Track conversion events
- [ ] Note any issues or anomalies

### Month 2: Weekly Reviews
- [ ] Weekly performance reports
- [ ] Compare to baseline
- [ ] Identify top-performing pages
- [ ] Refine event tracking if needed

### Month 3: Monthly Analysis
- [ ] Full month-over-month comparison
- [ ] Calculate ROI of Phase 3 improvements
- [ ] Identify next optimization opportunities
- [ ] Plan Phase 5 (Advanced SEO)

---

## Implementation Checklist

### Google Search Console
- [ ] Domain verified
- [ ] Sitemap submitted
- [ ] Enhanced coverage showing (30+ pages)
- [ ] Enhancements detected (Breadcrumbs, FAQ, Article)
- [ ] Performance monitoring enabled
- [ ] Alerts configured

### Google Analytics 4
- [ ] GA4 property created
- [ ] Measurement ID copied
- [ ] react-ga4 installed
- [ ] usePageTracking hook created
- [ ] Blog post tracking implemented
- [ ] Demo request tracking implemented
- [ ] Product click tracking implemented
- [ ] FAQ tracking implemented
- [ ] Conversions marked
- [ ] Dashboard created
- [ ] GSC linked

### Code Changes
- [ ] src/main.tsx - GA4 initialization
- [ ] src/hooks/usePageTracking.ts - Page tracking hook
- [ ] src/App.tsx - Hook integrated
- [ ] src/pages/Home.tsx - Demo request tracking
- [ ] src/pages/Blog.tsx - Blog post tracking
- [ ] src/pages/Services.tsx - FAQ tracking
- [ ] Product pages - Click tracking

### Monitoring Setup
- [ ] Baseline metrics captured
- [ ] Monitoring schedule created
- [ ] Reports configured
- [ ] Alerts set up
- [ ] Team notified

---

## Expected Results Timeline

### Week 1-2
- GSC shows indexed pages and coverage
- GA4 baseline metrics established
- Initial organic traffic data collected

### Week 3-4
- First signs of FAQ schema in SERP
- Article snippets appearing for blog posts
- Organic traffic starting to trend upward

### Month 2 (4-8 weeks)
- +15-20% increase in organic impressions
- +10-15% improvement in average position
- +25-35% increase in FAQ interactions
- +20-30% growth in blog traffic

### Month 3 (8-12 weeks)
- +20-30% increase in organic traffic
- +30-50% increase in organic conversions
- +15-25% improvement in CTR
- Clear ROI on Phase 3 improvements

---

## Troubleshooting

### GSC Shows 0 Indexed Pages
- **Solution:** Wait 24-48 hours after verification
- **Alternative:** Submit individual URLs in URL inspection
- **Check:** robots.txt isn't blocking crawlers

### GA4 Not Showing Data
- **Solution:** Check Measurement ID is correct
- **Check:** Real-time view shows data coming in
- **Wait:** GA4 takes 24 hours for full reporting

### Events Not Tracking
- **Solution:** Check browser console for errors
- **Solution:** Verify event names match exactly
- **Test:** Use GA4 DebugView to see events firing

### GSC Not Detecting Enhancements
- **Solution:** Validate schemas at [schema.org validator](https://validator.schema.org/)
- **Solution:** Ensure proper JSON-LD formatting
- **Wait:** GSC re-crawls pages every 24-48 hours

---

## File Reference

### New/Modified Files

**New Files:**
- `src/hooks/usePageTracking.ts` - Page view tracking

**Modified Files:**
- `src/main.tsx` - GA4 initialization
- `src/App.tsx` - usePageTracking hook
- `src/pages/Home.tsx` - Demo request tracking
- `src/pages/Blog.tsx` - Blog post view tracking
- `src/pages/Services.tsx` - FAQ view tracking

---

## Resources

- [Google Search Console Help](https://support.google.com/webmasters)
- [GA4 Documentation](https://support.google.com/analytics/answer/10089681)
- [Schema.org Validator](https://validator.schema.org/)
- [React GA4 Package](https://www.npmjs.com/package/react-ga4)

---

## Next Steps

1. **Complete GSC Setup** (5 minutes)
2. **Complete GA4 Setup** (10 minutes)
3. **Implement Code Changes** (10 minutes)
4. **Deploy to Firebase** (5 minutes)
5. **Verify in Real-time** (5 minutes)

**Total Time:** ~30 minutes for full setup

Once complete, you'll have full visibility into:
- ✅ Which keywords drive traffic
- ✅ Which pages convert visitors
- ✅ How Phase 3 improvements are performing
- ✅ Where to focus next optimization efforts

---

**Phase 4 Status:** Ready to implement  
**Estimated Setup Time:** 30 minutes  
**Recommended Start:** Immediately after deploying Phase 3
