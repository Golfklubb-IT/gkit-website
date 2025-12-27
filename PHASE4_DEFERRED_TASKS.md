# Deferred Tasks - Phase 4 DNS/Domain Dependent

**Status:** Waiting for DNS/Domain Access  
**Created:** December 27, 2025  
**Priority:** Phase 4 (Post-Image Implementation)

---

## Tasks Requiring DNS/Domain Access

These tasks are blocked until your custom domain DNS is configured. They will be completed after DNS setup is confirmed.

### 1. Google Search Console Verification ⏳
**Status:** BLOCKED - Awaiting DNS access  
**Estimated Duration:** 10 minutes once DNS ready  
**Prerequisites:**
- [ ] Custom domain DNS configured
- [ ] Domain accessible via your domain name
- [ ] Firebase hosting linked to domain

**Steps (to execute later):**
1. Go to Google Search Console
2. Add property with your custom domain
3. Verify domain ownership (HTML file or DNS record)
4. Submit sitemap
5. Monitor coverage and enhancements

**Current Status:** sitemap.xml already created at `/public/sitemap.xml` ✅

---

### 2. Google Analytics 4 Configuration ⏳
**Status:** READY TO CONFIGURE (can do now or wait)  
**Estimated Duration:** 12 minutes  
**Prerequisites:**
- [ ] GA4 code already deployed ✅
- [ ] Can optionally configure now OR wait until domain ready

**Current Status:** 
- Code infrastructure deployed ✅
- Measurement ID just needs to be added to `.env` file
- Can be done before or after DNS setup

**Option A: Configure Now**
- Create GA4 property today
- Get Measurement ID
- Add to `.env` file
- Start tracking on current firebase domain

**Option B: Configure After DNS**
- Wait for custom domain setup
- Configure with custom domain
- Reduces DNS-related complications

**Recommendation:** Option A (can start tracking immediately)

---

### 3. Google Tag Manager Setup ⏳
**Status:** NOT YET IMPLEMENTED  
**Estimated Duration:** 20 minutes  
**Reason Deferred:** Best to configure GTM after GA4 and GSC are fully set up

**Will Include:**
- GTM container creation
- GA4 tag configuration
- Event tracking implementation
- Conversion tracking setup

**To Do Later:**
1. Create GTM account and container
2. Install GTM code in application
3. Configure GA4 tags in GTM
4. Set up event tracking
5. Test and publish

---

### 4. Domain Verification & SSL ⏳
**Status:** BLOCKED - Awaiting DNS access  
**Prerequisites:**
- [ ] DNS records configured for custom domain
- [ ] Domain registered and active
- [ ] Firebase domain linking complete

**To Do Later:**
1. Update DNS records at registrar
2. Link domain to Firebase Hosting
3. Configure SSL certificate (Firebase auto-handles)
4. Verify domain resolves correctly
5. Update GSC with custom domain

---

## Timeline

### Current Phase: Image Implementation
**Status:** IN PROGRESS  
**Duration:** 2-4 hours estimated  
**Blocking:** None (can proceed independently)

### Phase 4a: Google Analytics 4 Setup (Optional - Can Do Now)
**Status:** READY  
**Duration:** 12 minutes  
**Blocking:** None

### Phase 4b: DNS/Domain Setup
**Status:** BLOCKED - Awaiting external factor  
**Duration:** Depends on registrar  
**Blocks:** GSC, GTM, custom domain verification

### Phase 4c: Google Search Console
**Status:** BLOCKED - Awaiting DNS  
**Duration:** 10 minutes after DNS ready  
**Depends On:** Domain verification complete

### Phase 4d: Google Tag Manager
**Status:** READY (after GSC/GA4)  
**Duration:** 20 minutes  
**Depends On:** GA4 configured

---

## Checklist: What to Do When DNS is Ready

When you have DNS access, execute in this order:

### Day 1: DNS Configuration
- [ ] Access domain registrar
- [ ] Configure DNS records pointing to Firebase
- [ ] Wait for propagation (5 minutes to 24 hours)
- [ ] Verify domain resolves to your site

### Day 2: Google Search Console
- [ ] Go to search.google.com/search-console
- [ ] Add property with custom domain
- [ ] Verify ownership (DNS method recommended)
- [ ] Submit sitemap.xml

### Day 3-4: Monitoring Setup
- [ ] Wait for GSC indexing (24-48 hours)
- [ ] Verify 30+ pages indexed
- [ ] Check enhancements detected
- [ ] Set up performance monitoring

---

## Current Project Status

| Phase | Status | Notes |
|-------|--------|-------|
| Phase 1 | ✅ Complete | SEO Infrastructure |
| Phase 2 | ✅ Complete | Full Page Coverage |
| Phase 3 | ✅ Complete | Content Optimization |
| Phase 4a | ✅ Code Ready | GA4 infrastructure deployed |
| Phase 4b | ⏳ Blocked | Awaiting DNS access |
| Phase 4c | ⏳ Blocked | Awaiting domain verification |
| Phase 4d | 🔄 Planned | Google Tag Manager |
| **Phase 5** | 🔄 In Progress | **Image Implementation** |

---

## Files for Phase 4 (When Ready)

All documentation is already prepared:

### Setup Guides (Ready to Execute)
- `PHASE4_ANALYTICS_SETUP.md` - GA4 + GSC complete setup
- `PHASE4_IMPLEMENTATION_CODE.md` - Code examples
- `PHASE4_CHECKLIST.md` - Action checklist
- `PHASE4_COMPLETION_REPORT.md` - Technical summary

### Configuration Files
- `.env.example` - GA4 Measurement ID template
- Code infrastructure: `src/hooks/usePageTracking.ts` ✅
- Code infrastructure: `src/utils/analytics.ts` ✅

---

## Notes

- **GA4 Can Start Now:** You don't need custom domain to start GA4. You can track on firebase domain and switch to custom domain later.
- **GSC Needs Domain:** Must have custom domain set up before verifying in Google Search Console
- **GTM Can Wait:** Best practice to configure GTM after GA4 is stable
- **All Code Ready:** No code changes needed for Phase 4 - just Google platform configuration

---

## Decision Point

### Option 1: Configure GA4 Now
**Pros:**
- Start collecting data immediately
- Don't lose traffic data
- GA4 will capture on firebase domain, can migrate to custom domain later

**Cons:**
- Minor setup effort now

**Recommendation:** ✅ **DO THIS**

### Option 2: Wait for Everything
**Pros:**
- All Phase 4 done at once with custom domain

**Cons:**
- Lose traffic data during waiting period
- More setup work when DNS is ready

---

## Summary

✅ **Image Implementation** - Start immediately (current priority)  
✅ **GA4 Setup** - Can do anytime (optional: do now before images)  
⏳ **GSC/Domain Setup** - Wait for DNS access  
⏳ **Google Tag Manager** - Can do after GA4 setup

**Next Step:** Begin Phase 5 image implementation (see separate task document)

---

**Status:** Documented and ready to execute Phase 4 when DNS is available  
**Last Updated:** December 27, 2025
