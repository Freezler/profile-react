import { Button } from '@/components/ui/button'

export default function HeroSectionGradientBackground() {
  return (
    <>
      <div className="bottom-0 z-[1000] relative flex mx-auto mt-8 w-100 h-100 overflow-hidden background-[linear-gradient(var(--background3))]">
        <div className="z-10">
          <div className="pt-10 lg:pt-12">
            <div className="mx-auto text-center">
              <p className="text-[clamp(0.8rem,2vw,1.2rem]] text-red-600">UNDER CONSTRUTION!</p>
              <div className="mt-0">
                <h1 className="font-extrabold text-[white] text-4xl lg:text-5xl tracking-tight scroll-m-20">
                  Trying to make cool stuff for a living!
                </h1>
              </div>
              <div className="mt-5">
                <p className="w-[min(100svw,45rem)] text-gray-300 text-xl">
                  Feel free to reach out if you want to know more about me or my work.
                </p>
              </div>
              <div className="flex justify-center gap-3 mt-4 [&>Button]:w-[clamp(148px,20vw,400px)]">
                <Button size="lg" variant="destructive" className="bg-[--bright-pink] text-[--badass]">Get started</Button>
                <Button size="lg" className="text-[--bright-pink] bg-[--badass]">
                  Learn more
                </Button>
              </div>
            </div>
          </div>
        </div>
      </div>
    </>
  )
}
