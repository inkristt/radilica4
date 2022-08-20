import React from 'react'
import Image from 'next/image'
import crowd from '../assets/crowdfundingedited.png'
import rocket from '../assets/rocket-edited.png'
import { motion } from 'framer-motion'
import styled from 'styled-components'


const Naslov = styled.h1`
font-family:'Josefin Sans';
font-size:70px;
font-weight:400;
text-align:center;
margin-top:30px;

`
const H3 = styled.div`
width:30%;
position:absolute;
left:35%;
z-index:99;
top:30%;
transform:scale(1.5);
span{
    font-size:25x
}
@media screen and (max-width:800px){
    width:50%;
    left:25%;
    background-color:rgba(255,255,255,0.5);
}
`

const SecondHero = () => {
    return (
        <div className='sc-main'>
            <Naslov data-scroll data-scroll-speed="-2" data-scroll-direction="horizontal">
                Polecemo
            </Naslov>        
            <H3>
                <span>
                Mi pokušavamo da iz svakog našeg klijnta izvučemo ono najbolje, kako bi mogao i on da bude ispred drugih. 
                U agresivnom svetu tehnologije moras da se izdvojis iz mase, te mi stupamo na scenu sa inovatnim idejama.
                Pusti da drugi rade za tebe. 
                </span> 

            </H3>
            
            <div className='sc-relative'>
            
                <div>
                    <motion.div
                        whileInView={{ translateY: '-140px' }}
                        transition={{ duration: 0.5 ,delay:0.3}}
                        key='sc-rocket'
                        className='sc-rocket'>
                        <Image src={rocket} width='500' height='500' />
                    </motion.div>
                </div>

                <div className="sc-crowd">
                    <Image src={crowd} width='500' height='500' />
                </div>
            </div>
          


        </div>
    )
}

export default SecondHero