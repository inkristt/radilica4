
import { useEffect, useState } from 'react'
import Kuca from '../commponents/Kuca'
import { useStateContext } from '../context/StateContext'
import styles from '../styles/Home.module.css'

export default function Home() {
  return (
    <div className={styles.container}>
     <Kuca />
    </div>
  )
}
