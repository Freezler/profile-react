import React, { useEffect, useRef } from 'react'

export function Codepen() {
  const galleryRef = useRef<HTMLDivElement | null>(null)
  const overlayRef = useRef<HTMLDivElement | null>(null)
  const overlayImageRef = useRef<HTMLImageElement | null>(null)
  const overlayCloseRef = useRef<HTMLButtonElement | null>(null)

  useEffect(() => {
    const gallery = galleryRef.current
    const overlay = overlayRef.current
    const overlayImage = overlayImageRef.current
    const overlayClose = overlayCloseRef.current

    const generateRandomNumber = (limit: number) => Math.floor(Math.random() * limit)

    const generateGridItemHTML = ([h, w]: [number, number]) => {
      const height = Array.from({ length: h }, () => 'h').join('')
      const width = Array.from({ length: w }, () => 'v').join('')
      const randomId = generateRandomNumber(255 + 1)
      const randomUrl = `https://picsum.photos/id/${randomId}/1600/800`

      return `
        <div class="item h${height} v${width}">
          <img src="${randomUrl}">
          <div class="item__overlay">
            <button>View →</button>
          </div>
        </div>
      `
    }
    const showOrHideOverlay = () => {
      if (overlay?.classList.contains('open')) {
        hideOverlay()
      }
      else {
        showOverlay()
      }
    }

    const showOverlay = () => {
      if (overlay) {
        overlay.classList.add('open')
        overlay.classList.remove('closing')
      }
    }

    const hideOverlay = () => {
      if (overlay) {
        overlay.classList.add('closing')
        overlay.classList.remove('open')
        overlay.addEventListener(
          'animationend',
          function onAnimationEnd() {
            overlay.classList.remove('closing')
            overlay.removeEventListener('animationend', onAnimationEnd)
          },
          { once: true },
        )
      }
    }

    const closeOverlay = () => {
      hideOverlay()
    }

    const handleGridItemClick = (e: React.MouseEvent<HTMLDivElement>) => {
      const src = (e.currentTarget.querySelector('img') as HTMLImageElement).src
      if (overlayImage) {
        overlayImage.src = src
      }
      showOrHideOverlay()
    }

    const digits = Array.from({ length: 120 }, () => [
      generateRandomNumber(5),
      generateRandomNumber(5),
    ]).concat(Array.from({ length: 23 }).fill([1, 1]))

    const gridHTML = digits.map(generateGridItemHTML).join('')
    if (gallery) {
      gallery.innerHTML = gridHTML
      const gridItems = gallery.querySelectorAll('.item')
      gridItems.forEach(item => item.addEventListener('click', handleGridItemClick))
    }
    overlayClose?.addEventListener('click', closeOverlay)
  }, [])

  return (
    <div className="mt-0">
      <h1 className="title job">CSS GRID GALLERY</h1>
      <div ref={galleryRef} className="gallery"></div>
      <div ref={overlayRef} className="overlay">
        <img ref={overlayImageRef} alt="Overlay" />
        <button ref={overlayCloseRef} className="m-4 px-6 close">Close</button>
      </div>
    </div>
  )
}

export default Codepen
