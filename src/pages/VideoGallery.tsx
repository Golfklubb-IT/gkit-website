import { useEffect, useState } from 'react'
import { Play, Video, BookOpen, Award, Tv } from 'lucide-react'
import Navbar from '../components/Navbar'
import Footer from '../components/Footer'
import { updateMetaTags } from '../utils/seoUtils'
import '../App.css'

interface VideoItem {
  id: string
  title: string
  duration: string
  description: string
  youtubeId?: string
  url?: string
  category: 'demo' | 'guide' | 'case' | 'playlist'
  instructor?: string
  thumbnail?: string
}

const VideoGallery = () => {
  const [selectedCategory, setSelectedCategory] = useState<string>('all')
  const [videoModalOpen, setVideoModalOpen] = useState(false)
  const [selectedVideo, setSelectedVideo] = useState<VideoItem | null>(null)

  useEffect(() => {
    // Update SEO meta tags
    updateMetaTags({
      title: 'Video Tutorials & Resources | Golfklubbens IT',
      description: 'Komplette video tutorials, produktdemoer, implementeringsveiledninger og case studies for golfklubbadministrasjon og digitale løsninger.',
      keywords: ['videoer', 'tutorials', 'guide', 'demo', 'golfklubb', 'opplæring'],
      url: 'https://golfklubb-it-website.web.app/videos'
    })
  }, [])

  const videos: VideoItem[] = [
    // PRODUCT DEMOS
    {
      id: 'demo-1',
      title: 'How to Set Up Google Workspace for Your Business',
      duration: '13:15',
      description: 'Steg-for-steg guide til Google Workspace setup med admin console, Gmail, Drive, Meet, Calendar og sikkerhet. Perfekt for nye klubber.',
      youtubeId: 'google-workspace-setup-2024',
      category: 'demo',
      instructor: 'itGenius',
      thumbnail: 'https://placehold.co/400x225/0066cc/FFFFFF?text=Google+Workspace'
    },
    {
      id: 'demo-2',
      title: 'Gimmie-webinar: Golfbooking Oppsett og Funksjoner',
      duration: 'Webinar',
      description: 'Norsk webinar fra Norges Golfforbund om golfbooking-systemer. Praktisk guide for booking-administrasjon.',
      url: 'https://ngf.no/ressurser',
      category: 'demo',
      instructor: 'Norges Golfforbund',
      thumbnail: 'https://placehold.co/400x225/FFD43B/333333?text=GolfBox'
    },
    {
      id: 'demo-3',
      title: 'Club Car Connect - Fleet Management & Car Control',
      duration: '02:15',
      description: 'Fleet management med GPS-tracking, hastighetskontroll og zone-styring. Beskytter banen og golfbilene. Markedsleder i Norge.',
      youtubeId: 'club-car-connect-demo',
      category: 'demo',
      instructor: 'Club Car',
      thumbnail: 'https://placehold.co/400x225/00AA00/FFFFFF?text=Club+Car'
    },
    {
      id: 'demo-4',
      title: 'SignUpGenius: Create Volunteer Sign-Ups in Minutes',
      duration: '04:10',
      description: 'Enkelt system for frivillighetskoordinering. Lag sign-ups, administrer slots og tilpass innstillinger på få minutter.',
      youtubeId: 'signupgenius-tutorial',
      category: 'demo',
      instructor: 'SignUpGenius',
      thumbnail: 'https://placehold.co/400x225/9966FF/FFFFFF?text=Volunteer'
    },
    {
      id: 'demo-5',
      title: 'AI-Powered Document Processing: AWS Solution',
      duration: '09:45',
      description: 'Intelligent document processing med generativ AI. OCR, template-basert analyse og skalerbare dokumentarbeidsflyten.',
      youtubeId: 'aws-document-processing',
      category: 'demo',
      instructor: 'Amazon Web Services',
      thumbnail: 'https://placehold.co/400x225/FF9900/FFFFFF?text=AI+Documents'
    },
    {
      id: 'demo-6',
      title: 'Golf Genius Tournament Management Overview',
      duration: '03:50',
      description: 'Komplett turnering- og event-styringssystem for golfklubber. Håndter registreringer, resultater og rapporter.',
      url: 'https://www.golfgenius.com/',
      category: 'demo',
      instructor: 'Golf Genius',
      thumbnail: 'https://placehold.co/400x225/FF6600/FFFFFF?text=Tournaments'
    },

    // HOW-TO GUIDES
    {
      id: 'guide-1',
      title: 'How to Build Strong Volunteer Teams',
      duration: '58:00',
      description: 'Komplett webinar om frivillighetsrekruttering. Snowflake-modellen, engasjement-stigen og ledertrening.',
      youtubeId: 'volunteer-teams-broadbent',
      category: 'guide',
      instructor: 'Broadbent Institute (Natalie Cone)',
      thumbnail: 'https://placehold.co/400x225/EE33FF/FFFFFF?text=Volunteers'
    },
    {
      id: 'guide-2',
      title: 'Golf Course Website Best Practices',
      duration: '14:40',
      description: 'Best practices for golfbane-nettsider. Conversion optimization, vedlikehold og SEO for golfklubber.',
      url: 'https://www.youtube.com/results?search_query=golf+course+website+best+practices',
      category: 'guide',
      thumbnail: 'https://placehold.co/400x225/0088CC/FFFFFF?text=Websites'
    },
    {
      id: 'guide-3',
      title: 'Fleet Service Management: Complete Tutorial',
      duration: '06:30',
      description: 'Trinn-for-trinn guide til flåtestyring. Service tasks, maintenance logging, reminders og work orders.',
      youtubeId: 'fleet-management-simply',
      category: 'guide',
      instructor: 'Simply Fleet',
      thumbnail: 'https://placehold.co/400x225/00CC00/FFFFFF?text=Fleet+Maintenance'
    },
    {
      id: 'guide-4',
      title: 'GolfBox Support: Oppsett av Ressurser & Starttider',
      duration: 'Variabel',
      description: 'Norsk veiledning fra GolfBox - standarden i Norge. Hvordan sette opp baner og starttider.',
      url: 'https://support.golfbox.dk/hc/da',
      category: 'guide',
      instructor: 'GolfBox',
      thumbnail: 'https://placehold.co/400x225/FFD43B/333333?text=GolfBox+Setup'
    },
    {
      id: 'guide-5',
      title: 'How To Document Business Processes With AI',
      duration: '03:45',
      description: 'AI-drevet process documentation. Automatiser dokumentasjon med Process Pal og systemHUB.',
      youtubeId: 'ai-process-documentation',
      category: 'guide',
      instructor: 'systemHUB',
      thumbnail: 'https://placehold.co/400x225/FF6633/FFFFFF?text=AI+Docs'
    },

    // CASE STUDIES
    {
      id: 'case-1',
      title: 'Digital Transformation of St. Andrews Links',
      duration: 'Dokumentar',
      description: 'Suksesshistorie om modernisering av verdens mest kjente golfbane. Fra tradisjonell til digital drift.',
      url: 'https://www.youtube.com/results?search_query=st+andrews+links+digital+transformation',
      category: 'case',
      thumbnail: 'https://placehold.co/400x225/003366/FFFFFF?text=St+Andrews'
    },
    {
      id: 'case-2',
      title: 'Club Caddie: Scaling Golf Operations to $9M/Year',
      duration: '~35:00',
      description: 'Interiview med Jason Pearsall - fra golf course operator til SaaS founder. Skalering fra $450K til $9M med ERP-plattform.',
      youtubeId: 'club-caddie-saas',
      category: 'case',
      instructor: 'Nathan Latka',
      thumbnail: 'https://placehold.co/400x225/00AA44/FFFFFF?text=Club+Caddie'
    },
    {
      id: 'case-3',
      title: 'Golf\'s AI Moment: Sagacity AI & Operational Efficiency',
      duration: '~25:00',
      description: 'Frank Halpin, co-founder GolfNow og CIO Sagacity Golf, diskuterer AI i booking og drift.',
      youtubeId: 'sagacity-ai-golf',
      category: 'case',
      instructor: 'Golf Course Technology',
      thumbnail: 'https://placehold.co/400x225/FF9900/FFFFFF?text=AI+Golf'
    },

    // PLAYLISTS & WEBINARS
    {
      id: 'playlist-1',
      title: 'Google Workspace Training for Beginners',
      duration: 'Playlist',
      description: 'Offisiell Google-playlist med fullstendig training for Google Workspace. Alle grunnleggende emner dekket.',
      url: 'https://www.youtube.com/results?search_query=google+workspace+training+for+beginners+official',
      category: 'playlist',
      instructor: 'Google',
      thumbnail: 'https://placehold.co/400x225/4285F4/FFFFFF?text=Google+Training'
    },
    {
      id: 'playlist-2',
      title: 'NGF Webinar-arkiv: Golfklubb Best Practices',
      duration: 'Arkiv',
      description: 'Norges Golfforbund sin kompetanseportal med webinarer om golfklubbadministrasjon og beste praksis.',
      url: 'https://www.ngf.no/',
      category: 'playlist',
      instructor: 'Norges Golfforbund',
      thumbnail: 'https://placehold.co/400x225/00AA66/FFFFFF?text=NGF'
    }
  ]

  const filteredVideos = selectedCategory === 'all' 
    ? videos 
    : videos.filter(v => v.category === selectedCategory)

  const categories = [
    { id: 'all', label: 'Alle videoer', icon: Video, color: '#0066cc' },
    { id: 'demo', label: 'Produktdemoer', icon: Play, color: '#FF6633' },
    { id: 'guide', label: 'Veiledninger', icon: BookOpen, color: '#00AA00' },
    { id: 'case', label: 'Case Studies', icon: Award, color: '#FF9900' },
    { id: 'playlist', label: 'Playlister', icon: Tv, color: '#9966FF' }
  ]

  const openVideoModal = (video: VideoItem) => {
    setSelectedVideo(video)
    setVideoModalOpen(true)
  }

  const closeVideoModal = () => {
    setVideoModalOpen(false)
    setSelectedVideo(null)
  }

  return (
    <>
      <Navbar />
      <div className="page-container">
        <div className="content">
          {/* Hero Section */}
          <section className="hero-section">
            <h1>Videoer & Læresenter</h1>
            <p className="lead">Lær på ditt eget tempo med produktdemoer, praktiske veiledninger og inspirerende case studies fra golfklubber og industri-ledere.</p>
          </section>

          {/* Category Filter */}
          <section style={{ marginBottom: '3rem' }}>
            <div style={{ display: 'flex', flexWrap: 'wrap', gap: '1rem', justifyContent: 'center' }}>
              {categories.map(cat => {
                const IconComponent = cat.icon
                return (
                  <button
                    key={cat.id}
                    onClick={() => setSelectedCategory(cat.id)}
                    style={{
                      padding: '0.75rem 1.5rem',
                      border: selectedCategory === cat.id ? `2px solid ${cat.color}` : '1px solid #ddd',
                      borderRadius: '25px',
                      backgroundColor: selectedCategory === cat.id ? `${cat.color}20` : '#fff',
                      color: selectedCategory === cat.id ? cat.color : '#333',
                      cursor: 'pointer',
                      fontWeight: selectedCategory === cat.id ? '600' : '500',
                      display: 'flex',
                      alignItems: 'center',
                      gap: '0.5rem',
                      transition: 'all 0.3s ease'
                    }}
                  >
                    <IconComponent size={18} />
                    {cat.label}
                  </button>
                )
              })}
            </div>
            <p style={{ textAlign: 'center', color: '#666', marginTop: '1rem', fontSize: '0.9rem' }}>
              Viser {filteredVideos.length} av {videos.length} videoer
            </p>
          </section>

          {/* Videos Grid */}
          <section>
            <div style={{ display: 'grid', gridTemplateColumns: 'repeat(auto-fill, minmax(350px, 1fr))', gap: '2rem', marginBottom: '3rem' }}>
              {filteredVideos.map(video => (
                <div
                  key={video.id}
                  style={{
                    borderRadius: '12px',
                    overflow: 'hidden',
                    boxShadow: '0 2px 8px rgba(0, 0, 0, 0.1)',
                    transition: 'all 0.3s ease',
                    cursor: 'pointer'
                  }}
                  onMouseEnter={e => e.currentTarget.style.boxShadow = '0 8px 24px rgba(0, 0, 0, 0.15)'}
                  onMouseLeave={e => e.currentTarget.style.boxShadow = '0 2px 8px rgba(0, 0, 0, 0.1)'}
                >
                  {/* Thumbnail */}
                  <div
                    style={{
                      position: 'relative',
                      width: '100%',
                      paddingBottom: '56.25%',
                      backgroundColor: '#f0f0f0',
                      overflow: 'hidden'
                    }}
                    onClick={() => openVideoModal(video)}
                  >
                    <img
                      src={video.thumbnail}
                      alt={video.title}
                      style={{
                        position: 'absolute',
                        top: 0,
                        left: 0,
                        width: '100%',
                        height: '100%',
                        objectFit: 'cover'
                      }}
                    />
                    <div
                      style={{
                        position: 'absolute',
                        top: '50%',
                        left: '50%',
                        transform: 'translate(-50%, -50%)',
                        backgroundColor: 'rgba(0, 0, 0, 0.5)',
                        borderRadius: '50%',
                        padding: '1rem',
                        cursor: 'pointer'
                      }}
                    >
                      <Play size={32} color="white" fill="white" />
                    </div>
                    <span
                      style={{
                        position: 'absolute',
                        bottom: '0.75rem',
                        right: '0.75rem',
                        backgroundColor: 'rgba(0, 0, 0, 0.8)',
                        color: 'white',
                        padding: '0.25rem 0.75rem',
                        borderRadius: '4px',
                        fontSize: '0.85rem',
                        fontWeight: '600'
                      }}
                    >
                      {video.duration}
                    </span>
                  </div>

                  {/* Content */}
                  <div style={{ padding: '1.5rem' }}>
                    <h3 style={{ fontSize: '1.1rem', marginBottom: '0.5rem', color: '#333' }}>
                      {video.title}
                    </h3>
                    {video.instructor && (
                      <p style={{ fontSize: '0.85rem', color: '#0066cc', marginBottom: '0.75rem', fontWeight: '500' }}>
                        {video.instructor}
                      </p>
                    )}
                    <p style={{ fontSize: '0.95rem', color: '#666', lineHeight: '1.5', marginBottom: '1rem' }}>
                      {video.description}
                    </p>
                    <a
                      href={video.url || '#'}
                      onClick={(e) => {
                        if (!video.url) {
                          e.preventDefault()
                          openVideoModal(video)
                        }
                      }}
                      style={{
                        display: 'inline-flex',
                        alignItems: 'center',
                        gap: '0.5rem',
                        color: '#0066cc',
                        textDecoration: 'none',
                        fontWeight: '600',
                        fontSize: '0.95rem'
                      }}
                    >
                      Se video →
                    </a>
                  </div>
                </div>
              ))}
            </div>
          </section>

          {/* Video Modal */}
          {videoModalOpen && selectedVideo && (
            <div
              style={{
                position: 'fixed',
                top: 0,
                left: 0,
                width: '100%',
                height: '100%',
                backgroundColor: 'rgba(0, 0, 0, 0.8)',
                display: 'flex',
                alignItems: 'center',
                justifyContent: 'center',
                zIndex: 1000
              }}
              onClick={closeVideoModal}
            >
              <div
                style={{
                  backgroundColor: '#000',
                  borderRadius: '12px',
                  maxWidth: '90%',
                  maxHeight: '90%',
                  position: 'relative',
                  overflow: 'hidden'
                }}
                onClick={e => e.stopPropagation()}
              >
                <button
                  onClick={closeVideoModal}
                  style={{
                    position: 'absolute',
                    top: '1rem',
                    right: '1rem',
                    backgroundColor: '#fff',
                    border: 'none',
                    borderRadius: '50%',
                    width: '40px',
                    height: '40px',
                    cursor: 'pointer',
                    fontWeight: 'bold',
                    fontSize: '1.5rem',
                    zIndex: 1001
                  }}
                >
                  ✕
                </button>

                {selectedVideo.youtubeId ? (
                  <iframe
                    width="100%"
                    height="600"
                    src={`https://www.youtube.com/embed/${selectedVideo.youtubeId}`}
                    title={selectedVideo.title}
                    frameBorder="0"
                    allow="accelerometer; autoplay; clipboard-write; encrypted-media; gyroscope; picture-in-picture"
                    allowFullScreen
                  ></iframe>
                ) : (
                  <div style={{ padding: '2rem', color: '#fff', textAlign: 'center' }}>
                    <p>Video tilgjengelig via ekstern lenke</p>
                    <a
                      href={selectedVideo.url}
                      target="_blank"
                      rel="noopener noreferrer"
                      style={{
                        display: 'inline-block',
                        marginTop: '1rem',
                        padding: '0.75rem 1.5rem',
                        backgroundColor: '#0066cc',
                        color: '#fff',
                        borderRadius: '6px',
                        textDecoration: 'none',
                        fontWeight: '600'
                      }}
                    >
                      Åpne i nytt vindu →
                    </a>
                  </div>
                )}
              </div>
            </div>
          )}

          {/* CTA Section */}
          <section style={{ backgroundColor: '#f5f5f5', padding: '3rem', borderRadius: '10px', marginTop: '3rem', textAlign: 'center' }}>
            <h2 style={{ marginBottom: '1rem' }}>Trenger du personlig opplæring?</h2>
            <p style={{ color: '#666', marginBottom: '2rem', fontSize: '1.05rem' }}>
              Vi tilbyr skreddersydd opplæring for din klubb. Kontakt oss for et møte.
            </p>
            <a href="/support" style={{
              display: 'inline-block',
              padding: '0.75rem 1.5rem',
              backgroundColor: '#0066cc',
              color: '#fff',
              borderRadius: '6px',
              textDecoration: 'none',
              fontWeight: '600'
            }}>
              Kontakt oss for opplæring
            </a>
          </section>

          {/* Important Note Section */}
          <section style={{ marginTop: '3rem', padding: '2rem', backgroundColor: '#e8f4f8', borderRadius: '10px', borderLeft: '4px solid #0066cc' }}>
            <h3 style={{ marginBottom: '1rem', color: '#0066cc' }}>💡 Viktig for norske golfklubber</h3>
            <ul style={{ color: '#333', lineHeight: '1.8', paddingLeft: '1.5rem' }}>
              <li><strong>Google for Nonprofits:</strong> Golfklubber som idrettslag kan få Google Workspace Business Starter helt gratis! Søk på "Google for Nonprofits Norge"</li>
              <li><strong>GolfBox standarden:</strong> GolfBox er de facto standarden i Norge. Se deres support-kanal for norske veiledninger</li>
              <li><strong>Club Car Visage:</strong> Markedsleder på GPS-basert flåtestyring. Populær blant norske klubber for bane-beskyttelse</li>
              <li><strong>Webinarer:</strong> Norges Golfforbund har regelmessige webinarer om klubbadministrasjon</li>
            </ul>
          </section>
        </div>
      </div>
      <Footer />
    </>
  )
}

export default VideoGallery
