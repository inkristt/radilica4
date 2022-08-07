
import { useEffect, useState } from 'react'
import Kuca from '../commponents/Kuca'
import SecondHero from '../commponents/SecondHero'
import { useStateContext } from '../context/StateContext'


export default function Home() {
  return (
    <div >
     <Kuca />
     <SecondHero />
    </div>
  )
}
