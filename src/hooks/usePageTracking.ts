import { useEffect } from 'react'
import { useLocation } from 'react-router-dom'
import ReactGA from 'react-ga4'

/**
 * Hook to automatically track page views on route changes
 * Sends pageview events to Google Analytics 4
 */
export const usePageTracking = () => {
  const location = useLocation()

  useEffect(() => {
    // Track page view when location changes
    ReactGA.send({
      hitType: 'pageview',
      page: location.pathname + location.search,
      title: document.title,
    })
  }, [location])
}

export default usePageTracking
