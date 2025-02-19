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
    title: 'Randy Lee de vries',
    subTitle: 'javaScript developer',
    description:
      'I am a JavaScript developer from the Netherlands, the Amsterdam region to be precise.',
    image: 'https://picsum.photos/id/1078/1024/768',
    technologies: ['JS', 'CSS', 'HTML'],
    started: '2018',
    group: 'ITMG (IT Management group)',
  },
  {
    title: 'What do I do?',
    subTitle: 'Frontend developer',
    description:
      'Lorem ipsum dolor sit amet, consectetur adipiscing elit. Sed sit amet nulla auctor, vestibulum magna sed, convallis ex.',
    image: 'https://picsum.photos/id/1080/1024/768',
    technologies: ['Vue', 'Svelte', 'React'],
    started: '2019',
    group: 'Frontend developers',
  },
  {
    title: 'What do I know?',
    subTitle: 'Backend developer',
    description:
      'Lorem ipsum dolor sit amet, consectetur adipiscing elit. Sed sit amet nulla auctor, vestibulum magna sed, convallis ex.',
    image: 'https://picsum.photos/id/1080/1024/768',
    technologies: ['Express', 'Nuxt', 'Sveltekit'],
    started: '2020',
    group: 'Backend developers',
  },
  {
    title: 'What do I do?',
    subTitle: 'Fullstack developer',
    description:
      'Lorem ipsum dolor sit amet, consectetur adipiscing elit. Sed sit amet nulla auctor, vestibulum magna sed, convallis ex.',
    image: 'https://picsum.photos/id/1080/1024/768',
    technologies: ['React', 'TypeScript', 'JavaScript'],
    started: '2020',
    group: 'Fullstack developers',
  },
  {
    title: 'What do I know?',
    subTitle: 'UX Designer',
    description:
      'Lorem ipsum dolor sit amet, consectetur adipiscing elit. Sed sit amet nulla auctor, vestibulum magna sed, convallis ex.',
    image: 'https://picsum.photos/id/1080/1024/768',
    technologies: ['Figma', 'Sketch', 'Adobe XD'],
    started: '2019',
    group: 'UX Designers',
  },

]

function TopicCards() {
  return (
    <div className="place-items-center place-self-center gap-[48px] grid grid-cols-[90vw] md:grid-cols-2 lg:grid-cols-3 mx-[16px] my-[48px] h-full text-white ]">
      {topicCardContent.map((card, index) => (
        <div key={index} className="grid grid-rows-[auto,1fr] bg-[linear-gradient(var(--background2))] shadow-[--badass] shadow-md border border-[--bright-pink] rounded-[8px] h-full overflow-hidden">
          <div className="relative mb-8">
            <img src={card.image} className="w-full max-h-[132px] object-center object-fit card-image" alt="card image" />
            <div className="bottom-0 left-0 absolute flex flex-col justify-end items-start mb-4 ml-4 w-full h-full text-white">
              <div className="bg-clip-text bg-gradient-to-b from-[rgb(65,12,226)] to-[rgba(50,247,241,0.99)] text-transparent text-3xl">{card.title}</div>
              <div className="rounded">{card.subTitle}</div>
            </div>
          </div>

          <div className="items-end gap-0 grid grid-rows-[auto_1fr] mx-8 align-bottom">
            <div className="justify-content-space-evenly gap-4 grid grid-cols-3 mb-2">
              {card.technologies.map((tech, techIndex) => (
                <span key={techIndex} className="text-[--bright-pink] grid bg-[--badass] px- py-1 rounded-xl w-auto text-sm text-center uppercase text-wrap">
                  {tech}
                </span>
              ))}
            </div>
            <div className="grid col-start-1 col-end-[-1] m-[0_auto]"><p className="grid col-start-2 col-end-[3] min-h-[100px] font-normal text-[clamp(1.2rem,1vw,1.6rem)] text-pretty col">{card.description}</p></div>
            <div className="place-items-center grid my-0 pb-12 w-full">
              <Button variant="outline" className="bg-[--bright-pink] mt-0 mb-0 rounded-[8px] w-[clamp(200px,20vw,300px)] text-[--badass] text-[clamp(0.6rem,2vw,1rem)">
                Learn more
              </Button>
            </div>

          </div>

        </div>
      ))}
    </div>
  )
}

export default TopicCards
