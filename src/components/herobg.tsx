import { Button } from '@/components/ui/button'

export default function HeroSectionGradientBackground() {
  return (
    <>
      <div className="bottom-16 absolute flex mx-auto w-100 h-100 overflow-hidden">
        <div className="z-10">
          <div className="py-10 lg:py-16">
            <div className="mx-auto text-center">
              <p className="text-white">Created by Randy</p>
              <div className="mt-0">
                <h1 className="scroll-m-20 font-extrabold text-[white] text-4xl lg:text-5xl tracking-tight">
                  Breathe in the fragrance
                </h1>
              </div>
              <div className="mt-5">
                <p className="w-[min(100svw,45rem)] text-muted-foreground text-xl">
                  Lorem ipsum dolor sit amet consectetur adipisicing elit. Quisquam
                  repellendus dolores quia, quos officia, aperiam quae doloremque
                </p>
              </div>
              <div className="flex justify-center gap-3 mt-8">
                <Button size="lg" variant="destructive" className="bg-violet-300 text-blue-950">Get started</Button>
                <Button size="lg" className="bg-violet-600">
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
