import { StrictMode } from 'react'
import { createRoot } from 'react-dom/client'
import ReactGA from 'react-ga4'
import { HelmetProvider } from 'react-helmet-async'
import './index.css'
import App from './App.tsx'

// Initialize Google Analytics 4
// Replace with your actual Measurement ID from Google Analytics
const GA_MEASUREMENT_ID = import.meta.env.VITE_GA_MEASUREMENT_ID || 'G-PLACEHOLDER'

// Initialize GA4 - only in production
if (GA_MEASUREMENT_ID !== 'G-PLACEHOLDER') {
  ReactGA.initialize(GA_MEASUREMENT_ID)
  
  // Track initial page view
  ReactGA.send({
    hitType: 'pageview',
    page: window.location.pathname,
    title: document.title,
  })
}

createRoot(document.getElementById('root')!).render(
  <StrictMode>
    <HelmetProvider>
      <App />
    </HelmetProvider>
  </StrictMode>,
)
