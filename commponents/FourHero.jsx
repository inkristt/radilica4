import React from 'react'
import styled from 'styled-components'
import Image from 'next/image'
import pexels from '../assets/support-team.png'

const Section = styled.div`
    min-height:100vh;
    width:80vw;
    margin: 0 auto;

    display:flex;
    flex-direction:column;
    justify-content:center;
    align-items:center;
    gap:50px;

    color:white;

`
const Baner = styled.div`
    box-shadow: #d16309 2px 2px 22px;
    background-color:#d16309;
    span{
        font-size:90px;
        padding:10px;
        font-family:Josefin Sans;
        display:flex;
        justify-content:center;
        align-items:center;
        text-align:center;
        @media screen and (max-width:800px){
            font-size:70px;
        }
    }

`
const FourHero = () => {
  return (
    <div>
        <Section>
            <Baner data-scroll data-scroll-direction='horizontal' data-scroll-speed='6' >
                <span  >Pusti druge</span>
            </Baner>
            <Baner data-scroll data-scroll-direction='horizontal' data-scroll-speed='-6'>
                <span>da rade</span>
            </Baner>
            <Baner data-scroll data-scroll-direction='horizontal' data-scroll-speed='6'>
                <span>za tebe</span>
            </Baner>
            
        </Section>
    </div>
  )
}

export default FourHero