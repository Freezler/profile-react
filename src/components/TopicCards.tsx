import { Button } from './ui/button'

interface TopicCardContent {
  title: string
  subTitle: string
  description: string
  image: string
  technologies: string[]
  started: string
  group: string
}

const topicCardContent: TopicCardContent[] = [
  {
    title: 'Who Am I?',
    subTitle: 'Full Stack Developer',
    description:
      'With a passion for creating intuitive and efficient web applications, I specialize in modern JavaScript frameworks and responsive design. Based in the Amsterdam region, I bring Dutch directness to every project I undertake.',
    image: 'https://picsum.photos/id/251/1024/768',
    technologies: ['TypeScript', 'React', 'Node.js'],
    started: '2018',
    group: 'Full Stack Development',
  },
  {
    title: 'Frontend Expertise',
    subTitle: 'UI/UX Development',
    description:
      'I create responsive, accessible, and performant web applications using modern frameworks. My focus is on building user-centric interfaces that provide excellent user experiences across all devices.',
    image: 'https://picsum.photos/id/20/1024/768',
    technologies: ['React', 'Vue', 'TailwindCSS'],
    started: '2019',
    group: 'Frontend Development',
  },
  {
    title: 'Backend Skills',
    subTitle: 'Server & API Development',
    description:
      'Experienced in building robust backend systems, RESTful APIs, and database architectures. I work with modern frameworks to create scalable and maintainable server-side solutions.',
    image: 'https://picsum.photos/id/160/1024/768',
    technologies: ['Express', 'PostgreSQL', 'AWS'],
    started: '2020',
    group: 'Backend Development',
  },
]

function TopicCards() {
  return (
    <div className="place-items-center gap-[24px] grid grid-cols-1 md:grid-cols-2 xl:grid-cols-3 mx-auto md:px-4 w-[100%] h-full text-white">
      {topicCardContent.map((card, index) => (
        <div key={index} className="grid grid-rows-[auto,1fr] bg-[linear-gradient(var(--background2))] shadow-[--badass] shadow-md mb-6 border border-[--bright-pink] rounded-[8px] max-w-[100%] h-full overflow-hidden width-[100%]">
          <div className="relative mb-8">
            <img src={card.image} className="w-full min-h-[132px] max-h-[132px] object-center object-fit card-image" alt="card image" />
            <div className="bottom-0 left-0 absolute flex flex-col justify-end items-start mb-4 ml-8 w-full h-full text-white">
              <div className="bg-clip-text bg-gradient-to-b from-[rgb(65,12,226)] to-[rgba(50,247,241,0.99)] text-transparent text-3xl">{card.title}</div>
              <div className="rounded">{card.subTitle}</div>
            </div>
          </div>

          <div className="items-end gap-0 grid grid-rows-[auto_1fr] mx-8 align-bottom">
            <div className="justify-content-space-evenly gap-2 grid grid-cols-3 mb-4">
              {card.technologies.map((tech, techIndex) => (
                <span
                  key={techIndex}
                  className="hover:z-10 bg-[--badass] px-2 py-1.5 rounded-xl hover:overflow-visible font-medium text-[--bright-pink] text-sm text-center truncate hover:text-clip uppercase"
                  title={tech}
                >
                  {tech}
                </span>
              ))}
            </div>
            <div className="grid col-start-0 col-end-[-1] m-[0_auto]"><p className="grid col-start-2 col-end-[3] w-[clamp(300px,50%,500px)] min-h-[100px] font-normal text-[clamp(1.2rem,1vw,1.6rem)] text-pretty col">{card.description}</p></div>
            <div className="place-items-center grid my-0 pb-12 w-full">
              <Button variant="outline" className="bg-[--bright-pink] mt-0 mb-0 rounded-[8px] w-[142px] text-[--badass] text-[clamp(0.6rem,2vw,1rem)">
                wanna know more?
              </Button>
            </div>

          </div>

        </div>
      ))}
    </div>
  )
}

export default TopicCards
