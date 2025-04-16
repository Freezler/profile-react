import { Button } from '@/components/ui/button'

export default function HeroSectionGradientBackground() {
  return (
    <>
      <div className="bottom-0 z-[1000] relative flex mx-auto mt-8 w-100 h-100 overflow-hidden background-[linear-gradient(var(--background3))]">
        <div className="z-10">
          <div className="mx-auto pt-10 lg:pt-12">
            <div className="mx-auto text-center">
              <div className="mt-0">
                <h1 className="font-extrabold text-[white] text-3xl lg:text-5xl tracking-tight">
                  Trying to make cool stuff for a living!
                </h1>
              </div>
              <div className="mt-5">
                <p className="w-[min(100svw,72rem)] text-gray-300 text-xl">
                  Feel free to reach out if you want to know more about me or my work.
                </p>
              </div>
              <div className="flex justify-center gap-3 mt-4 [&>Button]:w-[clamp(148px,20vw,400px)]">
                <Button size="lg" variant="destructive" className="bg-[--bright-pink] text-[--badass]">Get started</Button>
                <Button size="lg" className="bg-[--badass] text-[--bright-pink]">
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
