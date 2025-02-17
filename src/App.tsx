import Codepen from './components/Codepen'
import Header from './components/Header'
import { SocialIcons } from './components/Social'
import TopicCards from './components/TopicCards'
import ParticlesComponent from './components/ui/particles'

function App() {
  return (
    <div className="min-h-[100svh]">
      <header className="w-[100svw]">
        <Header />
      </header>
      <main className="gap-32 mb-16">
        <section id="particles" className="">
          <ParticlesComponent />
        </section>
        <section className="">
          <TopicCards />
        </section>
        <section>
          <Codepen />
        </section>
      </main>

      <footer className="right-0 bottom-0 left-0 z-100 place-items-center w-[100svw] h-[100%]">
        <SocialIcons />
      </footer>
    </div>

  )
}

export default App
