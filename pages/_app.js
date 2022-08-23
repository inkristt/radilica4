import '../styles/globals.css'

import React, { Children, useRef, useEffect, useState } from 'react'
import { StateContext } from '../context/StateContext'
import { motion, AnimatePresence } from 'framer-motion'
import Lea from '../commponents/Lea'

import { LocomotiveScrollProvider } from 'react-locomotive-scroll'
import 'locomotive-scroll/dist/locomotive-scroll.css'
import Loader from '../commponents/Loader'
import { useRouter } from 'next/router'

function MyApp({ Component, pageProps }) {
  const [loading, setloading] = useState(false)
  useEffect(() => {
    setTimeout(() => {
      setloading(true)
    }, 3000);
  }, [])

  const containerRef = useRef(null)
  const { route } = useRouter()
  return <StateContext>
    <LocomotiveScrollProvider
      options={{ smooth: true }}
      watch={[route]}
      containerRef={containerRef}
    >
      <Lea>
        <AnimatePresence>
          {loading ? null : <Loader />}
        </AnimatePresence>
        <AnimatePresence>
          <main data-scroll-container ref={containerRef}>
            <Component {...pageProps} />
          </main>
        </AnimatePresence>
      </Lea>
    </LocomotiveScrollProvider>

  </StateContext>
}

export default MyApp
