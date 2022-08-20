import '../styles/globals.css'

import React, { Children, useRef, useEffect, useState } from 'react'
import { StateContext } from '../context/StateContext'
import { motion, AnimatePresence } from 'framer-motion'
import Lea from '../commponents/Lea'

import { LocomotiveScrollProvider } from 'react-locomotive-scroll'
import 'locomotive-scroll/dist/locomotive-scroll.css'
import Loader from '../commponents/Loader'

function MyApp({ Component, pageProps }) {
  const [loading, setloading] = useState(false)
  useEffect(() => {
    setTimeout(() => {
      setloading(true)
    }, 3000);
  }, [])

  const containerRef = useRef(null)
  return <StateContext>
    <Lea>
      <LocomotiveScrollProvider
        options={
          {
            smooth: true,
            // ... all available Locomotive Scroll instance options 
          }
        }
        watch={
          [
            //..all the dependencies you want to watch to update the scroll.
            //  Basicaly, you would want to watch page/location changes
            //  For exemple, on Next.js you would want to watch properties like `router.asPath` (you may want to add more criterias if the instance should be update on locations with query parameters)
          ]
        }
        containerRef={containerRef}
      >
        <AnimatePresence>
          {loading ? null : <Loader />}
        </AnimatePresence>

        <AnimatePresence>
          <main className='App' data-scroll-container ref={containerRef}>
            <Component {...pageProps} />
          </main>
        </AnimatePresence>
      </LocomotiveScrollProvider>
    </Lea>
  </StateContext>
}

export default MyApp
