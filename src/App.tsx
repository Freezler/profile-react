import { useEffect, useState } from 'react'
import Codepen from './components/Codepen'
import Header from './components/Header'
import Herobg from './components/herobg'
import { LargeWelcome } from './components/LargeWelcome'
import LazyAnimatedSection from './components/LazyAnimatedSection'
import { SocialIcons } from './components/Social'
import { Spotify } from './components/Spotify'
import TopicCards from './components/TopicCards'
import TypingDemo from './components/TypingDemo'
import { NavigationMenu } from './components/ui/Navigation-menu'
import ParticlesComponent from './components/ui/particles'

function App() {
  const [fadeScrollIndicator, setFadeScrollIndicator] = useState(false)
  useEffect(() => {
    const handleScroll = () => {
      if (window.scrollY > 10) {
        setFadeScrollIndicator(true)
      }
      else {
        setFadeScrollIndicator(false)
      }
    }
    window.addEventListener('scroll', handleScroll)
    return () => window.removeEventListener('scroll', handleScroll)
  }, [])

  return (
    <div className="app-bg">
      <header className="app-header">
        <Header />
      </header>
      <main className="app-main">
        <section id="particles" className="hero-section">
          <div className="particles-bg">
            <ParticlesComponent />
          </div>
          <div className="hero-content">
            <h1 className="hero-title">Randy de vries</h1>
            <TypingDemo />
          </div>
          <div className={`scroll-indicator${fadeScrollIndicator ? ' fade-out' : ''}`}>
            <div className="mouse"></div>
          </div>
        </section>
        <section className="welcome-section">
          <LazyAnimatedSection>
            <LargeWelcome />
          </LazyAnimatedSection>
        </section>
        <section className="topics-section">
          <LazyAnimatedSection>
            <TopicCards />
          </LazyAnimatedSection>
        </section>
        <section className="spotify-embed-wrapper">
          <LazyAnimatedSection>
            <Spotify />

          </LazyAnimatedSection>
        </section>
        <section className="gallery-section">
          <LazyAnimatedSection>
            <Codepen />
          </LazyAnimatedSection>
        </section>
        <Herobg />
      </main>
      <footer className="app-footer">
        <SocialIcons />
      </footer>
    </div>
  )
}

export default App
