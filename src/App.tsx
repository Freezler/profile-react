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
      <header className="z-100 relative max-xl:w-[100svw] max-w-[100vw]">
        <Header />
      </header>
      <main className="gap-4 grid min-h-[100%]">
        <section id="particles" className="top-0 left-0 relative flex flex-col justify-center min-h-[100svh] overflow-hidden">
          <div style={{ position: 'absolute', inset: 0, zIndex: 0 }}>
            <ParticlesComponent />
          </div>
          <div className="top-1/2 left-1/2 absolute items-center place-items-center grid w-full [&>p]:text-[--bright-pink] -translate-x-1/2 -translate-y-1/2" style={{ zIndex: 1 }}>
            <h1 className="z-[1000] bg-[linear-gradient(in_oklch_decreasing_hue_125deg,var(--bright-pink),rgba(46,147,236,.9))] bg-clip-text mb-8 font-[Inter] font-extrabold text-[clamp(2.4rem,6vw,8rem)] text-transparent uppercase text-nowrap tracking-thight">Randy de vries</h1>
            <TypingDemo />
          </div>
          <div className={`scroll-indicator${fadeScrollIndicator ? ' fade-out' : ''}`} style={{ position: 'absolute', left: '50%', bottom: 0, transform: 'translateX(-50%) translateY(-100%)', zIndex: 3000 }}>
            <div className="mouse"></div>
          </div>
        </section>
        <section className="justify-items-center place-items-center grid mx-auto pb-4">
          <LazyAnimatedSection>
            <Herobg />
          </LazyAnimatedSection>
        </section>
        <section className="place-items-center grid mt-8">
          <LazyAnimatedSection>
            <TopicCards />
          </LazyAnimatedSection>
        </section>
        {/* Spotify Playlist Embed - matches provided iframe exactly */}
        <section className="spotify-embed-wrapper" style={{ width: '100%', display: 'flex', justifyContent: 'center' }}>
          <LazyAnimatedSection
            amount={0.2}
            delay={0.6}
          >
            <iframe
              src="https://open.spotify.com/embed/playlist/2OsQYQx10iduZuzigXCgzt?utm_source=generator"
              width="100%"
              height="600"
              style={{ borderRadius: '12px', maxWidth: '1000px', margin: '0 auto' }}
              title="Spotify Playlist"
              allow="autoplay; clipboard-write; encrypted-media; fullscreen; picture-in-picture"
              loading="lazy"
            >
            </iframe>
          </LazyAnimatedSection>
        </section>
        <section>
          <LazyAnimatedSection>
            <Codepen />
          </LazyAnimatedSection>
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
