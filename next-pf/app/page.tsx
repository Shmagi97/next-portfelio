'use client'

import Background from './components/background/background'
import ShareClickBtn from './components/button/shareButtons/shareBrn'

import styles from './page.module.scss'

export default function Home() {

  return (
 
    <section className={styles.section}>

      <Background/>

      <ShareClickBtn
      left={'left'}
      antIcon = {'left'}
      btnActiveClass
      />
      
      <h1 className={styles.h1}>Web Development `Next.js and TypeScript` </h1>

      <ShareClickBtn
      right={'right'}
      antIcon = {'right'}
      btnActiveClass
      />

 
    </section>
 
  )
}
