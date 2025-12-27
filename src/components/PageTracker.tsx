import { useEffect } from 'react'
import { useLocation } from 'react-router-dom'
import ReactGA from 'react-ga4'

/**
 * Component to track page views - must be inside Router context
 * Sends pageview events to Google Analytics 4
 */
function PageTracker() {
  const location = useLocation()

  useEffect(() => {
    // Track page view when location changes
    ReactGA.send({
      hitType: 'pageview',
      page: location.pathname + location.search,
      title: document.title,
    })
  }, [location])

  return null
}

export default PageTracker
