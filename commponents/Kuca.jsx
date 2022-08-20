import React from 'react'
import styled from 'styled-components'
import { motion } from 'framer-motion'

const Text1 = styled.div`
display: flex;
font-size:70px;
h2{
  font-weight: 400 ;
}
`
const Hero = styled.div`
display:flex;
flex-direction:column;
gap:50px;
justify-content:center;
align-items:center;
color:white;
width:100vw;
height:100vh;
background-color:rgba(0,0,0,0.5)
`
const H4 = styled.h3`
  margin-top:50px;
  text-align:center
`
const Kuca = () => {
  return (
    <div className='glavni'>
      <div className='hero'>
        <Hero>
          <motion.div
            initial={{opacity:0,scale:0}}
            animate={{opacity:1,scale:1}}
            transition={{delay:0.75,ease:'easeInOut',duration:0.5,delayChildren:2,staggerChildren:0.5}}
          >
            <Text1>
              <motion.h2 data-scroll data-scroll-delay="0.22" data-scroll-speed="4" >I</motion.h2>
              <motion.h2 data-scroll data-scroll-delay="0.18" data-scroll-speed="4">n</motion.h2>
              <motion.h2 data-scroll data-scroll-delay="0.14" data-scroll-speed="4">k</motion.h2>
              <motion.h2 data-scroll data-scroll-delay="0.10" data-scroll-speed="4">r</motion.h2>
              <motion.h2 data-scroll data-scroll-delay="0.6" data-scroll-speed="4">s</motion.h2>
              <motion.h2 data-scroll data-scroll-delay="0.2" data-scroll-speed="4">t</motion.h2>
            </Text1>
            <H4>Pusti druge da rade za tebe</H4>
          </motion.div>
        </Hero>
      </div>
    </div>
  )
}

export default Kuca