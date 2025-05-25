import Image from './ui/Image'

export function LargeWelcome() {
  return (
    <div className="relative mt-0 w-full h-[84vh] overflow-hidden text-white">

      <div className="flex justify-center items-center place-items-center gap-8 w-full h-[50svh]">

        <div className="z-0 absolute flex justify-center justify-items-end items-center w-full h-full translate-y-[21rem]">
          <Image />
        </div>

        <div className="z-2 my-24 px-4 py-8 text-[#f1eded]">
          <div className="text-center glasWrapper">

            <h2 className="bg-clip-text bg-gradient-to-br from-[rgb(65,12,226)] to-[rgba(50,247,241,0.99)] mt-0 font-extrabold text-[clamp(1.2rem,6vw,3rem)] text-transparent leading-tight tracking-tight animate-pulse in oklch">
              Welcome to My World
            </h2>

            <p className="mx-auto mb-5 w-[clamp(300px,50%,500px)] font-semibold text-[clamp(0.8rem,2vw,1.2rem)] leading-7 tracking-tight hyphens-auto">
              Dive into the universe of creativity and innovation. Explore the endless possibilities that await you in this journey of discovery.
            </p>

          </div>

        </div>

      </div>
    </div>
  )
}
