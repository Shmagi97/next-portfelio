'use client'

import ShareClickBtn from './components/button/shareButtons/shareBrn'
import styles from './page.module.css'

export default function Home() {

  return (
 
    <section className={styles.section}>

      <ShareClickBtn
      left={'left'}
      antIcon = {'left'}
      />
      
      <h1>Web Development `Next.js and TypeScript` </h1>

      <ShareClickBtn
      right={'right'}
      antIcon = {'right'}
      />

 
    </section>
 
  )
}
