import Codepen from './components/Codepen'
import Header from './components/Header'
import Herobg from './components/herobg'
import { SocialIcons } from './components/Social'
import TopicCards from './components/TopicCards'
import ParticlesComponent from './components/ui/particles'

function App() {
  return (
    <div className="bg-[linear-gradient(in_oklch_decreasing_hue_45deg,var(--bright-pink),#00000f)] w-[100svw] min-h-[calc(100svh+100px)]">
      <header className="w-[100svw]">
        <Header />
      </header>
      <main className="gap-4 grid mb-4 min-h-[100%]">
        <section id="particles" className="top-0 left-0 relative">
          <ParticlesComponent />
          <div className="top-1/2 w-full  [&>p]:text-[--bright-pink] left-1/2 absolute items-center place-items-center grid -translate-x-1/2 -translate-y-1/2">
            <h1 className="bg-[linear-gradient(in_oklch_decreasing_hue_125deg,var(--bright-pink),rgba(46,147,236,.9))] z-[1000] bg-clip-text font-[Inter] font-extrabold text-[clamp(2.4rem,6vw,6rem)] text-transparent uppercase text-nowrap tracking-thight">Randy de vries</h1>

            <div className="antialiased typing-demo">
              Hi! I'm a JS developer!
            </div>

          </div>

        </section>
        <section className="place-items-center grid pb-4">
          <Herobg />
        </section>
        <section className="mt-16">
          <TopicCards />
        </section>
        <section>
          <Codepen />
        </section>
        <Herobg />

      </main>

      <footer className="bottom-0 z-100 relative place-items-center w-[100svw]">
        <SocialIcons />
      </footer>
    </div>

  )
}

export default App
