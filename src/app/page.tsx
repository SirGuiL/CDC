'use client'

import { GreenLine } from '@/components/molecules/GreenLine'
import { AboutUs } from '@/components/organisms/AboutUs'
import { Header } from '@/components/organisms/Header'
import { Hero } from '@/components/organisms/Hero'
import { Services } from '@/components/organisms/Services'
import { WhoWeAre } from '@/components/organisms/WhoWeAre'
import { useState } from 'react'

export default function Home() {
  const [scroll, setScroll] = useState(false);

  const scrollHidden = (payload: boolean) => {
    setScroll(payload)
  }

  return (
    <body className={scroll ? 'overflow-hidden' : ''}>
      <Header setScroll={scrollHidden} />
      <Hero />
      <GreenLine />
      <AboutUs />
      <Services />
      <WhoWeAre />
    </body>
  )
}
