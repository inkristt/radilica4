import React, { useEffect } from 'react'
import { HiOutlineMenuAlt4 } from 'react-icons/hi'
import { AiOutlineClose } from 'react-icons/ai'
import { useStateContext } from '../context/StateContext'
import Image from 'next/image'
import Logo from '../assets/logobeo.svg'
import { useLocomotiveScroll } from 'react-locomotive-scroll'
import { motion, AnimatePresence } from 'framer-motion'
import styled from 'styled-components'
import Kontakt from '../commponents/Kontakt'

const Margin = styled.div`
 margin-top:300px;
 display:flex;
 align-items:flex-end;
`
const Header = () => {
    const { pokaziMenu, setPokaziMenu, kontakt, setkontakt } = useStateContext()
    const { scroll } = useLocomotiveScroll()
    const goToSecondPart = (event, id) => {
        event.preventDefault()
        scroll && scroll.scrollTo(id)
    }

    return (
        <div className='heder' >
            {kontakt && <Kontakt />}
            <div className='heder-meni'>
                <div className='logo'>
                    <Image src={Logo} width='70' height='70' />
                    <p>Inkrist</p>
                </div>
                <div className='meni'>
                    <a href='#section2' onClick={(e) => goToSecondPart(e, '#section2')}
                    >
                        <p className='meni-text'>O nama</p>
                    </a>
                    <a
                        href='#section3' onClick={(e) => goToSecondPart(e, '#section3')}
                    >
                        <p className='meni-text'>Naši radovi</p>
                    </a>
                    <a
                        href='#section5' onClick={(e) => goToSecondPart(e, '#section5')}
                    >
                        <p className='meni-text'>Usluge</p>
                    </a>

                    <button type='button' className='kontaktbtn' onClick={() => setkontakt(true)}><span>Kontakt</span></button>
                </div>
                <div className='menifon'>
                    <AnimatePresence>
                        {!pokaziMenu ? <motion.p key='pomagac' initial={{ opacity: 0 }} whileHover={{ scale: 1.2, transition: { duration: 0.3 } }} animate={{ opacity: 1 }} exit={{ opacity: 0, rotate: 275 }} transition={{ duration: 0.5 }} onClick={() => setPokaziMenu(true)}><HiOutlineMenuAlt4 /> </motion.p> : <div className='menuwraper'>
                            <motion.div key='promena' initial={{ opacity: 0, scaleX: 0 }} animate={{ opacity: 1, scaleX: 1 }} exit={{ opacity: 0, scaleX: 0, transition: { duration: 0.5, ease: "easeInOut" }, }} transition={{ duration: 0.5 }} className='fonlinkcont'>
                                <p onClick={() => setPokaziMenu(false)}><AiOutlineClose /></p>
                                <h3>Menu</h3>
                                <a
                                    onClick={() => {
                                        scroll.scrollTo('#section2', {
                                            offset: '-100',
                                            duration: '2000',
                                            easing: [0.25, 0.0, 0.35, 1.0]
                                        }); setPokaziMenu(false); scroll.destroy();
                                    }}
                                >
                                    <p className='meni-text'>O nama</p>
                                </a>
                                <a
                                    onClick={() => {
                                        scroll.scrollTo('#section3', {
                                            offset: '-100',
                                            duration: '2000',
                                            easing: [0.25, 0.0, 0.35, 1.0]
                                        }); setPokaziMenu(false); scroll.destroy();
                                    }}
                                >
                                    <p className='meni-text'>Naši radovi</p>
                                </a>
                                <a
                                    onClick={() => {
                                        scroll.scrollTo('#section5', {
                                            offset: '-100',
                                            duration: '2000',
                                            easing: [0.25, 0.0, 0.35, 1.0]
                                        }); setPokaziMenu(false); scroll.destroy();
                                    }}
                                >
                                    <p className='meni-text'>Usluge</p>
                                </a>

                                <Margin>
                                    <button type='button' className='kontaktbtn' onClick={() => { setkontakt(true); setPokaziMenu(false) }}><span>Kontakt</span></button>
                                </Margin>
                            </motion.div>
                        </div>}
                    </AnimatePresence>
                </div>
            </div>
        </div >
    )
}


export default Header