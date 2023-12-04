'use client'

import React, { useCallback } from 'react'
import style from './particles.module.scss'
import Particles from 'react-particles'
import { loadFull } from 'tsparticles'
import options from './data/particles4.json'

function ParticlesBackground() {
  const particlesInit = useCallback(async (engine: any) => {
    console.log(engine)
    await loadFull(engine)
  }, [])

  const particlesLoaded = useCallback(async (container: any) => {
    console.log(container)
  }, [])

  return <Particles id="tsparticles" init={particlesInit} loaded={particlesLoaded} options={options as any} className={style.tsparticles}></Particles>
}
export default React.memo(ParticlesBackground)
