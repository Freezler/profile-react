import Image from './ui/Image'
import { ParticlesComponent } from './ui/particles'

export function LargeWelcome() {
  return (
    <div className="bg-black w-[100svw]">

      <ParticlesComponent />

      <div className="h-[100svh] myGrid">

        <div className="">
          <Image />
        </div>

        <div className="z-[100] bg-[linear-gradient(rgba(31,17,45,0.59),rgba(31,17,45,0.59))] text-[#f1eded]">
          <div className="glasWrapper">

            <h1 className="my-3 text-[clamp(2rem,6vw,4rem)] text-center">
              hi i'm Randy
            </h1>

            <p className="mx-auto mb-5 w-[min(100svw,45rem)] font-semibold text-[clamp(1rem,2vw,1.6rem)] text-center text-pretty leading-5 tracking-tight hyphens-auto">
              Lorem ipsum dolor sit amet consectetur adipisicing elit. Maiores aperiam, labore voluptas id similique modi! Libero dolorum vel ipsum suscipit optio reiciendis..
            </p>

          </div>

          <div className="flex justify-center items-center gap-3 [&>button]:bg-violet-400/20 mb-5 [&>button]:px-4 [&>button]:py-3 [&>button]:rounded-[7px] [&>button]:text-[clamp(0.8rem,2vw,1rem)] [&>button]:text-blue-300 text-center btnWrapper">

            <button className="hover:bg-violet-400/60 uppercase transition-all duration-400">
              Get started
            </button>
            <button className="hover:bg-violet-400/60 uppercase transition-all duration-400">
              Learn more
            </button>

          </div>
          <div className="bg-[linear-gradient(rgba(131,17,45,0.9),rgba(31,17,45,0.59))] text-[#f1eded]">
            <h1 className="my-3 text-[clamp(2rem,6vw,4rem)] text-center">
              hi i'm Randy
            </h1>
          </div>
        </div>

      </div>

    </div>

  )
}
