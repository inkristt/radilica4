
import { useEffect, useState } from 'react'
import FiveHero from '../commponents/FiveHero'
import Footer from '../commponents/Footer'
import FourHero from '../commponents/FourHero'
import Kuca from '../commponents/Kuca'
import SecondHero from '../commponents/SecondHero'
import ThirdHero from '../commponents/ThirdHero'
import { useStateContext } from '../context/StateContext'


export default function Home() {
  return (
    <div >
     <Kuca />
     <SecondHero />
     <ThirdHero />
     <FourHero />
     <FiveHero />
     <Footer />
    </div>
  )
}
