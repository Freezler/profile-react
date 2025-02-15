import React, { useEffect, useRef } from 'react'

export function Codepen() {
  const galleryRef = useRef<HTMLDivElement | null>(null)
  const overlayRef = useRef<HTMLDivElement | null>(null)
  const overlayImageRef = useRef<HTMLImageElement | null>(null)
  const overlayCloseRef = useRef<HTMLButtonElement | null>(null)

  const showOverlay = () => {
    const overlay = overlayRef.current
    if (overlay) {
      overlay.classList.add('open')
      overlay.classList.remove('closing')
    }
  }

  const hideOverlay = () => {
    const overlay = overlayRef.current
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

  const showOrHideOverlay = () => {
    const overlay = overlayRef.current
    if (overlay?.classList.contains('open')) {
      hideOverlay()
    }
    else {
      showOverlay()
    }
  }

  useEffect(() => {
    const gallery = galleryRef.current
    const overlayImage = overlayImageRef.current
    const overlayClose = overlayCloseRef.current

    const generateRandomNumber = (limit: number) => Math.floor(Math.random() * limit)

    const generateGridItemHTML = (value: number[], _index: number, _array: number[][]) => {
      const [h, w] = value
      const height = Array.from({ length: h }, () => 'h').join('')
      const width = Array.from({ length: w }, () => 'v').join('')
      const randomId = generateRandomNumber(255 + 1)
      const randomUrl = `https://picsum.photos/id/${randomId}/1600/800`

      return `
        <div class="item h${height.length} v${width.length}">
          <img src="${randomUrl}">
          <div class="item__overlay">
            <button>View →</button>
          </div>
        </div>
      `
    }

    const handleGridItemClick = (e: React.MouseEvent<HTMLDivElement>) => {
      const src = (e.currentTarget.querySelector('img') as HTMLImageElement).src
      if (overlayImage) {
        overlayImage.src = src
      }
      showOrHideOverlay()
    }

    function generateHTML([h, v]: number[]) {
      const randomId = generateRandomNumber(255 + 1)
      const randomUrl = `https://picsum.photos/id/${randomId}/1600/800`

      return `
        <div class="item h${h} v${v}">
          <img src="${randomUrl}" loading="lazy">
          <div class="item__overlay">
            <button>View →</button>
          </div>
        </div>
      `
    }

    function randomNumber(limit: number) {
      return Math.floor(Math.random() * limit) + 1
    }

    const digits = Array.from({ length: 120 }, () => [
      randomNumber(5),
      randomNumber(5),
    ]).concat([
      [1, 1],
      [1, 1],
      [1, 1],
      [1, 1],
      [1, 1],
      [1, 1],
      [1, 1],
      [1, 1],
      [1, 1],
      [1, 1],
      [1, 1],
      [1, 1],
      [1, 1],
      [1, 1],
      [1, 1],
      [1, 1],
      [1, 1],
      [1, 1],
      [1, 1],
      [1, 1],
      [1, 1],
      [1, 1],
      [1, 1],
    ])

    const html = digits.map(generateHTML).join('')
    if (gallery) {
      gallery.innerHTML = html
    }
    const gridHTML = digits.map(generateGridItemHTML).join('')
    if (gallery) {
      gallery.innerHTML = gridHTML
      const gridItems = Array.from(gallery.children)
      gridItems.forEach(item => item.addEventListener('click', (e) => {
        handleGridItemClick(e as unknown as React.MouseEvent<HTMLDivElement>)
      }))
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
