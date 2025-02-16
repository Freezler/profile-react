import Codepen from './components/Codepen'
import Header from './components/Header'
import { SocialIcons } from './components/Social'
import TopicCards from './components/TopicCards'
import ParticlesComponent from './components/ui/particles'

function App() {
  return (
    <div className="h-[screen]">
      <header className="w-[100svw]">
        <Header />
      </header>
      <main className="gap-16 my-16">
        <section id="particles" className="mb-24">
          <ParticlesComponent />
        </section>
        <section className="mb-32">
          <TopicCards />
        </section>
        <section>
          <Codepen />
        </section>
      </main>

      <footer className="right-0 bottom-0 left-0 z-100 place-items-center w-[100svw] h-160px">
        <SocialIcons />
      </footer>
    </div>

  )
}

export default App
