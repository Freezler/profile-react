import autoAnimate from '@formkit/auto-animate'
import { useEffect, useRef, useState } from 'react'

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
    <div className="bg-[linear-gradient(var(--background2))] pt-16 min-h-screen font-[var(--font)] text-[clamp(0.8rem,2vw,1.2rem)] text-[var(--badass)]">
      <h1 className="title job">CSS GRID GALLERY</h1>
      <button onClick={shuffleGallery} className="text-[var(--bright-pink)] bottom-0 sticky flex justify-center items-center m-4 mx-auto my-8 px-6 border border-[var(--badass)] rounded-[7px] focus:outline-none">Shuffle Gallery</button>
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
        <button className="m-4 px-6 close" onClick={toggleOverlayVisibility}>Close</button>
      </div>
    </div>
  )
}

export default Codepen
