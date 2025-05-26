import Image from './ui/Image'

export function LargeWelcome() {
  return (
    <div className="flex flex-col justify-center items-center mb-12 w-full h-[70vh] xl:h-[72svh] overflow-hidden text-white">

      <div className="place-items-center gap-0 grid max-w-[100svw] h-[100svh]">

        <div className="z-2 mb-8 px-2 pb-8 text-[#f1eded]">
          <div className="text-center" id="border-gradient">
            <div className="glasWrapper">
              <h2 className="bg-clip-text bg-gradient-to-br from-[rgb(65,12,226)] to-[rgba(50,247,241,0.99)] mt-0 font-extrabold text-[clamp(1.2rem,6vw,3rem)] text-transparent leading-tight tracking-tight animate-[pulse_22s_ease-in-out_infinite]">
                WEBDEVELOPMENT IS AWESOME!
              </h2>
              <p className="mx-auto mb-5 w-[32ch] font-semibold text-[clamp(0.8rem,2vw,1rem)] leading-8 tracking-tight hyphens-auto">
                Dive into the universe of creativity and innovation. Explore the endless possibilities that await you in this journey of discovery.
              </p>
            </div>
          </div>
        </div>

      </div>
    </div>
  )
}
