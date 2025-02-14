import { AspectRatio } from '@radix-ui/react-aspect-ratio'

export function imageComponent() {
  return (
    <>
      <AspectRatio ratio={16 / 9} className="place-items-start grid mt-28 sm:mt-56 w-[100svw] h-[256px] select-none">
        <img src="/src/assets/banner.png" alt="Image" className="mx-auto w-[286px] rocket" />
      </AspectRatio>

    </>
  )
}
export default imageComponent
