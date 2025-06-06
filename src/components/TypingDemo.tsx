import { useEffect, useState } from 'react'

const lines = [
  'Hello there!',
  'welcome to my personal website.',
  'I build things with code.',
  'Let\'s make something cool!',
]

const TYPING_SPEED = 45 // ms per character
const LINE_PAUSE = 450 // ms pause between lines

export default function TypingDemo() {
  const [currentLine, setCurrentLine] = useState(0)
  const [typedLines, setTypedLines] = useState<string[]>([''])
  const [charIndex, setCharIndex] = useState(0)
  const [showCursor, setShowCursor] = useState(true)

  useEffect(() => {
    let typingTimeout: NodeJS.Timeout
    let cursorInterval: NodeJS.Timeout

    if (currentLine < lines.length) {
      if (charIndex < lines[currentLine].length) {
        typingTimeout = setTimeout(() => {
          setTypedLines((prev) => {
            const updated = [...prev]
            updated[currentLine] = (updated[currentLine] || '') + lines[currentLine][charIndex]
            return updated
          })
          setCharIndex(i => i + 1)
        }, TYPING_SPEED)
      }
      else {
        // Line finished, move to next after pause
        typingTimeout = setTimeout(() => {
          setCurrentLine(l => l + 1)
          setCharIndex(0)
          setTypedLines(prev => [...prev, ''])
        }, LINE_PAUSE)
      }
    }
    else {
      cursorInterval = setInterval(() => setShowCursor(c => !c), 500)
    }
    return () => {
      clearTimeout(typingTimeout)
      clearInterval(cursorInterval)
    }
  }, [charIndex, currentLine])

  return (
    <div className="typing-demo" style={{ fontFamily: 'Inter', fontSize: 'clamp(1.2rem,2.5vw,1.6rem)', width: '100vw', height: '100%', maxWidth: '48ch', minWidth: '32ch', margin: '0 auto', textAlign: 'center' }}>
      {lines.map((_, idx) => (
        <div
          key={idx}
          className="typing-line"
          style={{
            display: 'block',
            whiteSpace: 'pre',
            minHeight: '1em',
            width: '100%',
            maxWidth: '48ch',
            minWidth: '34ch',
            textAlign: 'center',
            position: 'relative',
            margin: '0 auto',
            color: 'var(--badass)',

            fontWeight: '400',
            transition: 'color 0.3s ease-in-out',
            opacity: (idx === currentLine && currentLine < lines.length) || (idx === lines.length - 1 && currentLine === lines.length) ? 1 : 0.5,
          }}
        >
          <span style={{ position: 'relative', zIndex: 1 }}>
            {typedLines[idx] || ''}
          </span>
          {((idx === currentLine && currentLine < lines.length) || (idx === lines.length - 1 && currentLine === lines.length)) && (
            <span
              className="blinking-cursor"
              style={{
                display: 'inline-block',
                width: '4px',
                height: '0.7em',
                verticalAlign: 'middle',
                borderRight: showCursor || idx !== lines.length - 1 ? '2px solid var(--bright-pink)' : '0px solid transparent',
                marginLeft: 0,
                padding: 0,
                background: 'transparent',
                visibility: (idx === lines.length - 1 && currentLine === lines.length && !showCursor) ? 'hidden' : 'visible',
                position: 'relative',
                top: '-3px',
              }}
            />
          )}
        </div>
      ))}
    </div>
  )
}
