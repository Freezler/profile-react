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
      'Lorem ipsum dolor sit amet, consectetur adipiscing elit. Sed sit amet nulla auctor, vestibulum magna sed, convallis ex.Lorem ipsum dolor  nulla auctor, vestibulum magna sed, convallis ex.Lorem ipsum dolor l',
    image: 'https://picsum.photos/id/1078/1024/768',
    technologies: ['JS', 'Typescript', 'React', 'NodeJS'],
    started: '2018',
    group: 'ITMG (IT Management group)',
  },
  {
    title: 'What do I do?',
    subTitle: 'Frontend developer',
    description:
      'Lorem ipsum dolor sit amet, consectetur adipiscing elit. Sed sit amet nulla auctor, vestibulum magna sed, convallis ex.',
    image: 'https://picsum.photos/id/1080/1024/768',
    technologies: ['HTML', 'CSS', 'JavaScript', 'TypeScript', 'React'],
    started: '2019',
    group: 'Frontend developers',
  },
  {
    title: 'What do I know?',
    subTitle: 'Backend developer',
    description:
      'Lorem ipsum dolor sit amet, consectetur adipiscing elit. Sed sit amet nulla auctor, vestibulum magna sed, convallis ex.',
    image: 'https://picsum.photos/id/1080/1024/768',
    technologies: ['NodeJS', 'Express', 'MongoDB', 'MySQL', 'PostgreSQL'],
    started: '2020',
    group: 'Backend developers',
  },
  {
    title: 'What do I do?',
    subTitle: 'Fullstack developer',
    description:
      'Lorem ipsum dolor sit amet, consectetur adipiscing elit. Sed sit amet nulla auctor, vestibulum magna sed, convallis ex.',
    image: 'https://picsum.photos/id/1080/1024/768',
    technologies: ['React', 'NodeJS', 'MongoDB', 'TypeScript', 'JavaScript'],
    started: '2020',
    group: 'Fullstack developers',
  },
  {
    title: 'What do I know?',
    subTitle: 'UX Designer',
    description:
      'Lorem ipsum dolor sit amet, consectetur adipiscing elit. Sed sit amet nulla auctor, vestibulum magna sed, convallis ex.',
    image: 'https://picsum.photos/id/1080/1024/768',
    technologies: ['Figma', 'Sketch', 'Adobe XD', 'InVision', 'Axure'],
    started: '2019',
    group: 'UX Designers',
  },
  {
    title: 'What do I do?',
    subTitle: 'Data Analyst',
    description:
      'Lorem ipsum dolor sit amet, consectetur adipiscing elit. Sed sit amet nulla auctor, vestibulum magna sed, convallis ex.',
    image: 'https://picsum.photos/id/1080/1024/768',
    technologies: ['Excel', 'Power BI', 'Tableau', 'Python', 'SQL'],
    started: '2020',
    group: 'Data Analysts',
  },
]

function TopicCards() {
  return (
    <div className="gap-[32px] grid grid-cols-1 md:grid-cols-2 xl:grid-cols-3 mx-[32px] my-[128px] h-full text-white">
      {topicCardContent.map((card, index) => (
        <div key={index} className="grid grid-rows-[auto,1fr] border-2 border-violet-400 rounded-[8px] h-full overflow-hidden">
          <div className="relative mb-8">
            <img src={card.image} className="w-full h-[232px] object-cover aspect-auto" alt="card image" />
            <div className="bottom-0 left-0 absolute flex flex-col justify-end items-start p-8 w-full h-full text-white">
              <div className="font-bold text-xl">{card.title}</div>
              <div className="rounded">{card.subTitle}</div>
            </div>
          </div>

          <div className="items-end gap-0 grid grid-rows-[auto_1fr] mx-8 align-bottom">
            <div className="grid m-[0_auto]"><p className="text-[clamp(0.8rem,2vw,1rem)]">{card.description}</p></div>
            <div className="place-content-center gap-4 grid grid-cols-3">
              {card.technologies.map((tech, techIndex) => (
                <span key={techIndex} className="text-[--bright-pink] grid bg-[--badass] px-2 py-1 rounded text-[clamp(0.6rem,2vw,1rem)] text-wrap">
                  {tech}
                </span>
              ))}
            </div>

            <div className="place-items-center grid my-8 p-4 w-full">
              <Button variant="outline" className="text-[--bright-pink] w-[clamp(200px,20vw,300px)] text-[clamp(0.6rem,2vw,1rem)]">
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
