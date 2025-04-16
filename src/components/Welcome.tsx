import ImageComponent from './ui/Image'

export function Welcome() {
  return (
    <div id="background" className="flex flex-col justify-center items-center mx-auto px-4 py-8 border-violet-300 sm:w-[min(100svw,364px)] xs:h-[min(100svh,364px)] min-h-[100svh] text-[rgb(241,237,237)] text-center">
      <ImageComponent />
      <div className="bg-[rgba(195,82,178,0.1)] sm:bg-violet-400/80 backdrop-blur-sm px-4 py-6 border-1 border-neutral-100 rounded-[24px] wrapper">
        <h1 className="font-bold text-[clamp(2rem,5vw,3rem)]">Who am I?</h1>
        <p className="mt-4 mb-4 w-[35ch] max-w-[35ch] font-semibold text-[clamp(1rem,2vw,1.6rem)] sm:text-blue-950 text-pretty leading-5">
          I'm a web-developer passionate about building user-friendly and efficient applications. Currently learning several languages and frameworks.
        </p>
        <div className="sm:flex justify-center [&>button]:bg-violet-400/20 mt-8 mb-5 [&>button]:px-4 [&>button]:py-2 [&>button]:border [&>button]:rounded-[7px] [&>button]:text-[clamp(0.8rem,2vw,1rem)] [&>button]:text-blue-200 sm:[&>button]:text-blue-950">
          <button className="hover:bg-violet-400/80 mr-4 hover:text-blue-950 uppercase transition-all duration-400">Get started</button>
          <button className="hover:bg-violet-400 hover:text-blue-950 uppercase transition-all duration-400">Learn more</button>
        </div>
      </div>
    </div>
  )
}

