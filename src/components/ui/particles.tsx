import type { Container, ISourceOptions } from '@tsparticles/engine'
import {

  MoveDirection,
  OutMode,
} from '@tsparticles/engine'
import Particles, { initParticlesEngine } from '@tsparticles/react'
// import { loadAll } from "@tsparticles/all"; // if you are going to use `loadAll`, install the "@tsparticles/all" package too.
// import { loadFull } from "@tsparticles"; // if you are going to use `loadFull`, install the "tsparticles" package too.
import { loadSlim } from '@tsparticles/slim' // if you are going to use `loadSlim`, install the "@tsparticles/slim" package too.
import { useEffect, useMemo, useState } from 'react'
// import { loadBasic } from "@tsparticles/basic"; // if you are going to use `loadBasic`, install the "@tsparticles/basic" package too.

export function ParticlesComponent() {
  const [init, setInit] = useState(false)

  // this should be run only once per application lifetime
  useEffect(() => {
    initParticlesEngine(async (engine) => {
      // you can initiate the tsParticles instance (engine) here, adding custom shapes or presets
      // this loads the tsparticles package bundle, it's the easiest method for getting everything ready
      // starting from v2 you can add only the features you need reducing the bundle size
      // await loadAll(engine);
      // await loadFull(engine);
      await loadSlim(engine)
      // await loadBasic(engine);
    }).then(() => {
      setInit(true)
    })
  }, [])

  const particlesLoaded = async (container?: Container): Promise<void> => {
    console.warn(container)
  }

  const options = useMemo<ISourceOptions>(
    () => ({

      fullScreen: {
        enable: false,

      },
      background: {
        color: {
          value: '#0e0e0e',
        },
      },
      fpsLimit: 120,
      interactivity: {
        events: {
          onClick: {
            enable: true,
            mode: 'push',
          },
          onHover: {
            enable: true,
            mode: 'repulse',
          },

        },
        modes: {
          push: {
            quantity: 10,
            size: 100,
            smooth: true,
            speed: 2,
            duration: 300,
          },
          repulse: {
            distance: 10,
            duration: 900,
            enable: true,
            speed: 5,
            smooth: true,
          },
          attract: {
            distance: 800,
            duration: 100,
            enable: true,
            speed: 5,
            smooth: true,
          },
        },
      },
      particles: {
        color: {
          value: 'hsla(0, 100%, 100%, 0.9)',
        },
        links: {
          color: 'hsla(165, 100%, 50%, 0.9)',
          distance: 100,
          enable: true,
          opacity: 1,
          width: 1.5,

        },
        move: {
          direction: MoveDirection.none,
          enable: true,
          outModes: {
            default: OutMode.bounce,
          },
          random: true,
          speed: 2,
          straight: false,
          smooth: true,
        },
        number: {
          density: {
            enable: false,
          },
          value: 100,
        },
        opacity: {
          value: 0.4,
        },
        shape: {
          type: 'square',
        },
        size: {
          value: { min: 0.5, max: 1.5 },
        },
      },
      detectRetina: true,
    }),
    [],
  )

  if (init) {
    return (
      <Particles
        id="tsparticles"
        particlesLoaded={particlesLoaded}
        options={options}
      />
    )
  }

  return <></>
}

export default ParticlesComponent
