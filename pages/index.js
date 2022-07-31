import Head from 'next/head'
import Image from 'next/image'
import Link from 'next/link'
import { useEffect, useState } from 'react'
import Kuca from '../commponents/Kuca'
import { useStateContext } from '../context/StateContext'
import styles from '../styles/Home.module.css'

export default function Home() {
 const {proba,setproba} = useStateContext()
  useEffect(() => {
    setproba('proba se ucitala i poslata je kucici')
  }, [])
  
  return (
    <div className={styles.container}>
     <Kuca />
     <Link href='/forma'> Klikni me</Link>
     <button type='button' onClick={() => setproba('proba promenjna')}>Promeni proba</button>
    </div>
  )
}
