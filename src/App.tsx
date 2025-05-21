import { useEffect, useState } from 'react'
import Codepen from './components/Codepen'
import Header from './components/Header'
import Herobg from './components/herobg'
import LazyAnimatedSection from './components/LazyAnimatedSection'
import { SocialIcons } from './components/Social'
import TopicCards from './components/TopicCards'
import TypingDemo from './components/TypingDemo'
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
    <div className="bg-[linear-gradient(in_oklch_decreasing_hue_145deg,var(--bright-pink),#00000f)] w-[100svw] min-h-[calc(100svh+100px)] antialiased select-none">
      <header className="z-100 relative w-[100svw] max-w-[100svw]">
        <Header />
      </header>
      <main className="gap-4 grid min-h-[100%]">
        <section id="particles" className="top-0 left-0 relative flex flex-col justify-center min-h-[70svh]">
          <ParticlesComponent />
          <div className="top-1/2 left-1/2 absolute items-center place-items-center grid px-4 w-full [&>p]:text-[--bright-pink] -translate-x-1/2 -translate-y-1/2">
            <h1 className="z-[1000] bg-[linear-gradient(in_oklch_decreasing_hue_125deg,var(--bright-pink),rgba(46,147,236,.9))] bg-clip-text mb-8 font-[Inter] font-extrabold text-[clamp(2.4rem,6vw,6rem)] text-transparent uppercase text-nowrap tracking-thight">Randy de vries</h1>
            <TypingDemo />
          </div>
          <div className={`scroll-indicator${fadeScrollIndicator ? ' fade-out' : ''}`} style={{ position: 'absolute', left: '50%', bottom: 0, transform: 'translateX(-50%) translateY(-100%)', zIndex: 3000 }}>
            <div className="mouse"></div>
          </div>
        </section>
        <section className="place-items-center grid pb-4">
          <Herobg />
        </section>
        <section className="place-items-center grid mt-8">
          <LazyAnimatedSection>
            <TopicCards />
          </LazyAnimatedSection>
        </section>
        {/* Spotify Playlist Embed - matches provided iframe exactly */}
        <div className="spotify-embed-wrapper" style={{ width: '100%', display: 'flex', justifyContent: 'center' }}>
          <iframe
            style={{ borderRadius: '12px' }}
            src="https://open.spotify.com/embed/playlist/5ABrNQH1KjxXpjwIJOGrLu?utm_source=generator"
            width="100%"
            height="352"
            allow="autoplay; clipboard-write; encrypted-media; fullscreen; picture-in-picture"
            loading="lazy"
            title="Spotify Playlist"
          />
        </div>
        <section>
          <Codepen />
        </section>
        <Herobg />

      </main>

      <footer className="bottom-0 z-100 relative place-items-center max-w-[100svw]">

        <SocialIcons />
      </footer>
    </div>

  )
}

export default App
