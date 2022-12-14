import React from 'react'
import styled from 'styled-components'
import Image from 'next/image'
import Logo from '../assets/logobeo.svg'
import {motion,AnimatePresence} from 'framer-motion'

const Container = styled(motion.div)`
    position:absolute;
    top:0;
    right:0;
    bottom:0;
    left:0;

    touch-action:none;
    overflow:hidden;

    width:100vw;
    height:100vh;

    z-index:6;

    display:flex;
    justify-content:center;
    align-items:center;
    flex-direction:column;

    background-color:black;
    color:white;
`

const codeVariant = {
  start: {
    opacity: 0,
  },
  middle: {
    opacity: 1,
    transition: {
      duration: 0.3,
    },
  },
  end: {
    opacity: 0,
    transition: {
      duration: 0.3,
    },
  },
};

const Loader = () => {
  return (

        <Container
        
        initial={{y:0,opacity:1}}
        exit={{y:"100%",opacity:0}}
        transition={{duration:2}}
        >
          <motion.div
            key="modal"
            variants={codeVariant}
            initial="start"
            animate="middle"
            exit="end"
          >
              <Image src={Logo} width='300' height='300' />
        </motion.div>
        <motion.h1
            initial={{opacity:0,scale:0}}
            animate={{scale:1,opacity:1}}
            transition={{duration:0.5}}
        > Inkrist </motion.h1>
        </Container>
  )
}

export default Loader