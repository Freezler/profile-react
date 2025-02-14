import Header from './components/Header'
import TopicCards from './components/TopicCards'
import ParticlesComponent from './components/ui/particles'
import './Index.css'

function App() {
  return (
    <div className="h-[screen]">
      <header className="w-[100svw]">
        <Header />
      </header>
      <main className="pb-[200px]">
        <section id="particles" className="mb-24">
          <ParticlesComponent />
        </section>
        <section>
          <TopicCards />
        </section>
      </main>
    </div>

  )
}

export default App
