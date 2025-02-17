import autoAnimate from '@formkit/auto-animate'
import { useEffect, useRef, useState } from 'react'
import { Button } from './ui/button'

const generateRandomNumber = (limit: number) => Math.floor(Math.random() * limit)

interface GalleryItem {
  id: number
  height: number
  width: number
  imageUrl: string
}

function GalleryItemComponent({ item, onClick }: { item: GalleryItem, onClick: () => void }) {
  return (
    <div className={`item h${item.height} v${item.width}`} onClick={onClick}>
      <img src={item.imageUrl} alt="" loading="lazy" />
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
        duration: 950, // Animation duration in milliseconds
        easing: 'ease-in-out', // CSS easing function
      })
    }

    const digits = Array.from({ length: 20 }, () => [
      generateRandomNumber(5),
      generateRandomNumber(5),
    ]).concat(Array.from({ length: 20 }, () => [1, 1]))

    const items = digits.map(([height, width], index) => ({
      id: index,
      height,
      width,
      imageUrl: `https://picsum.photos/id/${generateRandomNumber(600)}/1200/800?random=${index}`,
    }))

    setGalleryItems(items)
  }, [])

  const handleItemClick = (imageUrl: string) => {
    if (overlayImageRef.current) {
      overlayImageRef.current.src = imageUrl
    }
    toggleOverlayVisibility()
  }

  const shuffleGallery = () => {
    setGalleryItems(items => [...items].sort(() => Math.random() - 0.5))
  }

  return (
    <div className="items-center bg-[linear-gradient(var(--background2))] py-16 pb-16 h-auto font-[var(--font)] text-[clamp(0.8rem,2vw,1.2rem)] text-[var(--badass)]">
      <div className="place-items-center grid p-4 w-full">
        <h1 className="text-center title job">CSS GRID GALLERY</h1>
        <Button onClick={shuffleGallery} variant="outline" className="text-[--bright-pink] w-[clamp(200px,20vw,300px)] text-[clamp(0.6rem,2vw,1rem)]">
          Learn more
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
