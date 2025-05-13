import autoAnimate from '@formkit/auto-animate'
import { useEffect, useRef, useState } from 'react'
import { Button } from './ui/button'

interface GalleryItem {
  id: number
  height: number
  width: number
  imageUrl: string
}

function GalleryItemComponent({ item, onClick }: { item: GalleryItem, onClick: () => void }) {
  return (
    <div className={`item h${item.height} v${item.width}`} onClick={onClick}>
      <img src={item.imageUrl} alt="" loading="lazy" data-index={item.id} />
      <span className="bottom-0 absolute bg-[--badass] px-3 py-1 rounded-tr-2xl text-[--bright-pink] index">{item.id + 1}</span>
      <div className="item__overlay">
        <button>View →</button>
      </div>
    </div>
  )
}

export function Codepen() {
  const [galleryItems, setGalleryItems] = useState<GalleryItem[]>([])
  const overlayRef = useRef<HTMLDivElement | null>(null)
  const overlayImageRef = useRef<HTMLImageElement | null>(null)
  const galleryRef = useRef<HTMLDivElement | null>(null)

  const toggleOverlayVisibility = () => {
    const overlay = overlayRef.current
    if (overlay) {
      overlay.classList.toggle('open')
    }
    if (!overlay?.classList.contains('open')) {
      overlay?.classList.remove('closing')
    }
  }

  useEffect(() => {
    if (galleryRef.current) {
      autoAnimate(galleryRef.current, {
        duration: 600,
        easing: 'ease-in-out',
      })
    }
    // Original logic: random images, random sizes, possible repeats
    const itemCount = 35
    const digits = Array.from({ length: itemCount }, () => [
      Math.ceil(Math.random() * 4),
      Math.ceil(Math.random() * 4),
    ])
    const items = digits.map(([height, width], index) => ({
      id: index,
      height,
      width,
      imageUrl: `https://picsum.photos/1200/800?random=${Math.floor(Math.random() * 1000)}`,
    }))
    setGalleryItems(items)
  }, [])

  const handleItemClick = (imageUrl: string) => {
    if (overlayImageRef.current) {
      overlayImageRef.current.src = imageUrl
    }
    toggleOverlayVisibility()
  }

  const shuffleGallery = () =>
    setGalleryItems(items =>
      items
        .map(value => ({ value, sort: Math.random() }))
        .sort((a, b) => a.sort - b.sort)
        .map(({ value }) => value),
    )

  return (
    <div className="items-center pt-8 font-[var(--font)] text-[clamp(0.8rem,2vw,1.2rem)] text-[var(--badass)]">
      <div className="justify-center place-items-center grid w-full align-center">
        <h1 className="text-[clamp(2rem,5vw,3rem)] text-center leading-[1] title">CSS GRID GALLERY</h1>
        <Button onClick={shuffleGallery} variant="outline" className="bg-[var(--badass)] mb-16 w-[clamp(200px,20vw,300px)] text-[--bright-pink] text-[clamp(1.2rem,2vw,1.6rem)]">
          Shuffle Gallery!
        </Button>
      </div>
      <div ref={galleryRef} className="gallery">
        {galleryItems.map(item => (
          <GalleryItemComponent
            key={item.id}
            item={item}
            onClick={() => handleItemClick(item.imageUrl)}
          />
        ))}
      </div>

      <div ref={overlayRef} className="overlay">
        <img ref={overlayImageRef} alt="Overlay" />
        <button className="bottom-0 absolute m-4 px-6 close" onClick={toggleOverlayVisibility}>Close</button>
      </div>

    </div>
  )
}

export default Codepen
