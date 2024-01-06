'use client'

import ShareClickBtn from './components/button/shareButtons/shareBrn'
import styles from './page.module.css'
import left from '@/public/icons/left.png'
import right from '@/public/icons/right.png'
// import { useEffect } from 'react'
// import { useGlobalContext } from './context/context'


export default function Home() {

  // const {data, setData, userId, setUserId} = useGlobalContext();

  // useEffect(()=> {

  //   setUserId('2');

  //   setData([
  //     {firstName: 'pirveli'},
  //     {firstName: 'meore'},
  //     {firstName: 'mesame'},
  //   ])
    
    
  // },[])

  // console.log(userId, 'data')

  return (

  
   
    <section className={styles.section}>

      <ShareClickBtn
      img={left}
      clickInfo={'left'}
      />
      
      <h1>saxelebi</h1>

      <ShareClickBtn
      img={right}
      clickInfo={'right'}
      />
 
    </section>
 
  )
}
