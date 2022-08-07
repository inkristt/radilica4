import React from 'react'
import Image from 'next/image'
import crowd from '../assets/crowdfundingedited.png'
import rocket from '../assets/rocket-edited.png'
import { motion, AnimatePresence } from 'framer-motion'
const SecondHero = () => {
    return (
        <div className='sc-main'>
            <div className='sc-relative'>
                <AnimatePresence>
                    <motion.div
                       
                        whileInView={{ translateY: '-140px' }}
                        transition={{ duration: 0.5 }}
                        key='sc-rocket'
                        className='sc-rocket'>
                        <Image src={rocket} width='500' height='500' />
                    </motion.div>
                </AnimatePresence>

                <div className="sc-crowd">
                    <Image src={crowd} width='500' height='500' />
                </div>
            </div>

        </div>
    )
}

export default SecondHero