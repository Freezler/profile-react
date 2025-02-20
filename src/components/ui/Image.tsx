import { AspectRatio } from '@radix-ui/react-aspect-ratio'

export function imageComponent() {
  return (
    <>
      <AspectRatio ratio={16/9} className="h-full select-none">
        <img src="/src/assets/banner.png" alt="Image" className="size-[200px] rocket" />
      </AspectRatio>

    </>
  )
}
export default imageComponent
