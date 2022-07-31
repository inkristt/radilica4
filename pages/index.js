import Head from 'next/head'
import Image from 'next/image'
import Kuca from '../commponents/Kuca'
import styles from '../styles/Home.module.css'

export default function Home() {
  const data= [{
    name:'proba',
    id:1,
  },{
    name:'proba2',
    id:2,
  }]
  return (
    <div className={styles.container}>
     <Kuca />
    </div>
  )
}
