import Codepen from './components/Codepen'
import Header from './components/Header'
import Herobg from './components/herobg'
import LazyAnimatedSection from './components/LazyAnimatedSection'
import { SocialIcons } from './components/Social'
import TopicCards from './components/TopicCards'
import TypingDemo from './components/TypingDemo'
import ParticlesComponent from './components/ui/particles'

function App() {
  return (
    <div className="bg-[linear-gradient(in_oklch_decreasing_hue_45deg,var(--bright-pink),#00000f)] w-[100svw] min-h-[calc(100svh+100px)] antialiased select-none">
      <header className="w-100">
        <Header />
      </header>
      <main className="gap-4 grid min-h-[100%]">
        <section id="particles" className="top-0 left-0 relative">
          <ParticlesComponent />
          <div className="top-1/2 left-1/2 absolute items-center place-items-center grid px-4 w-full [&>p]:text-[--bright-pink] -translate-x-1/2 -translate-y-1/2">
            <h1 className="z-[1000] bg-[linear-gradient(in_oklch_decreasing_hue_125deg,var(--bright-pink),rgba(46,147,236,.9))] bg-clip-text mb-8 font-[Inter] font-extrabold text-[clamp(2.4rem,6vw,6rem)] text-transparent uppercase text-nowrap tracking-thight">Randy de vries</h1>
            <TypingDemo />
          </div>
          <div className="scroll-indicator">
            <div className="mouse"></div>
          </div>
        </section>
        <section className="place-items-center grid pb-4">
          <Herobg />
        </section>
        <section className="mt-16">
          <LazyAnimatedSection>
            <TopicCards />
          </LazyAnimatedSection>
        </section>
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
