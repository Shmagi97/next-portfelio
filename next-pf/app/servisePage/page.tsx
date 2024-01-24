'use client'

import { ReactNode, useEffect, useState } from 'react'
import styles from './page.module.scss'
import { PaginationSerivise, PaginationSerivise2  } from './paginationServise/paginationServise'
import { useGlobalContext } from '../context/context'


const HomePage = () => {

  const { imgnumber, globalNodelistArray } = useGlobalContext()

  const childrenComponent = [  <PaginationSerivise /> , <PaginationSerivise2/>  ]

  const [masiv, setMasiv] = useState([])
  
  // const screenWidth = window.innerWidth;
  // console.log(globalNodelistArray);


  const [tvla2, setTvla2] = useState(0)
  //  console.log(tvla);

  useEffect(()=> {

  const clear =  setInterval(()=> {
      setTvla2(tvla2+1)
     }, 2000)

     return ()=> clearInterval(clear)

  }, [tvla2])



  useEffect(()=> {
    // console.log(globalNodelistArray, 'shemovida');
    globalNodelistArray?.forEach((el)=> {

      el.classList.replace('pagServiseDivAbsolute2', 'pagServiseDivAbsolute' )
    })

    if(masiv.length < 1 ) { 
     
      setMasiv( (prevMasiv)=> [...prevMasiv, ...childrenComponent] )
      
    } 

   const cleanedInterval = setTimeout(()=> {

   if (masiv.length > 1 ){
    
    
    
    // console.log(globalNodelistArray, 'shemovida');
      const rame = masiv.shift()
      setMasiv( (prevMasiv)=> [...prevMasiv, rame] )
      
  
    }
    
   }, 1500)
   
   
   return ()=> clearTimeout(cleanedInterval) 

  }, [imgnumber])


  // console.log(masiv);
  

    return <section className={styles.section}>
           
            {masiv}
            
    </section>


      
       
     
    
}

export default HomePage