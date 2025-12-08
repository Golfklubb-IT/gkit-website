import { BrowserRouter as Router, Routes, Route } from 'react-router-dom'
import ReactGA from 'react-ga4'
import Home from './pages/Home'
import Club2026 from './pages/Club2026'
import About from './pages/About'
import AboutUs from './pages/AboutUs'
import Services from './pages/Services'
import Projects from './pages/Projects'
import AppsIntegrations from './pages/AppsIntegrations'
import Contact from './pages/Contact'
import Terms from './pages/Terms'
import GolfBox from './pages/products/GolfBox'
import Signage from './pages/products/Signage'
import Workspace from './pages/products/Workspace'
import WorkspaceNonprofit from './pages/products/WorkspaceNonprofit'
import WorkspaceTools from './pages/products/WorkspaceTools'
import WorkspaceMigration from './pages/products/WorkspaceMigration'
import ClubsiteCMS from './pages/products/ClubsiteCMS'
import Soknadsportalen from './pages/apps/Soknadsportalen'
import GolfTeamTime from './pages/apps/GolfTeamTime'
import FrivilligKalender from './pages/apps/FrivilligKalender'
import AIFileAnalyzer from './pages/apps/AIFileAnalyzer'
import Golfbilkontroll from './pages/apps/Golfbilkontroll'
import BookingKalender from './pages/apps/BookingKalender'
import './App.css'

// Initialize GA4 - Replace with your actual Measurement ID
ReactGA.initialize('G-XXXXXXXXXX')

function App() {
  return (
    <Router>
      <Routes>
        <Route path="/" element={<Home />} />
        <Route path="/2026" element={<Club2026 />} />
        <Route path="/about" element={<About />} />
        <Route path="/about-us" element={<AboutUs />} />
        <Route path="/services" element={<Services />} />
        <Route path="/projects" element={<Projects />} />
        <Route path="/apps" element={<AppsIntegrations />} />
        <Route path="/contact" element={<Contact />} />
        <Route path="/terms" element={<Terms />} />
        <Route path="/products/golfbox" element={<GolfBox />} />
        <Route path="/products/signage" element={<Signage />} />
        <Route path="/products/workspace" element={<Workspace />} />
        <Route path="/products/workspace-nonprofit" element={<WorkspaceNonprofit />} />
        <Route path="/products/workspace-tools" element={<WorkspaceTools />} />
        <Route path="/products/workspace-migration" element={<WorkspaceMigration />} />
        <Route path="/products/clubsitecms" element={<ClubsiteCMS />} />
        <Route path="/apps/soknadsportalen" element={<Soknadsportalen />} />
        <Route path="/apps/golfteam-time" element={<GolfTeamTime />} />
        <Route path="/apps/frivillig-kalender" element={<FrivilligKalender />} />
        <Route path="/apps/ai-file-analyzer" element={<AIFileAnalyzer />} />
        <Route path="/apps/golfbilkontroll" element={<Golfbilkontroll />} />
        <Route path="/apps/booking-kalender" element={<BookingKalender />} />
      </Routes>
    </Router>
  )
}

export default App
