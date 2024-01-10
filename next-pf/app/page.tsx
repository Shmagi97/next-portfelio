'use client'

import ShareClickBtn from './components/button/shareButtons/shareBrn'
import styles from './page.module.css'
import left from '@/public/icons/left.png'
import right from '@/public/icons/right.png'


export default function Home() {

  return (
 
    <section className={styles.section}>

      <ShareClickBtn
      img={left}
      left={'left'}
      />
      
      <h1>Web Development `Next.js and TypeScript` </h1>

      <ShareClickBtn
      img={right}
      right={'right'}
      />

 
    </section>
 
  )
}
