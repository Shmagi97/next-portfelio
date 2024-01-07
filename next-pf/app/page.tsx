'use client'

import ShareClickBtn from './components/button/shareButtons/shareBrn'
// import GlobalImage from './components/globalImage/globalImage'
import styles from './page.module.css'
import left from '@/public/icons/left.png'
import right from '@/public/icons/right.png'


// export const rame = (a : number, b : number ) => {

//   const jami = a + b
//   console.log(jami)
// }

export default function Home() {

  return (
 
    <section className={styles.section}>

      <ShareClickBtn
      img={left}
      left={'left'}
      />
      
      <h1>saxelebi</h1>

      <ShareClickBtn
      img={right}
      right={'right'}
      />

      {/* <GlobalImage/> */}
 
    </section>
 
  )
}
