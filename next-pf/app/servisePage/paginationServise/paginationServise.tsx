'use client'
import {  useEffect, useState, } from 'react'
import style from './paggination.module.scss'
import { useGlobalContext } from '@/app/context/context'

export const PaginationSerivise = () => {
    
     const { globalNodelistArray, setGlobalNodelistArray, imgnumber } = useGlobalContext()
     const [tvla, setTvla] = useState(0)
    //  console.log(tvla);

    const masiv = ['rame1', 'rame2', 'rame3']
    
    const nodeList = document.querySelectorAll('.pagServiseDivAbsolute2')
    const nodeListArray = Array.from(nodeList) as HTMLDivElement[];

    useEffect(()=> {

      setGlobalNodelistArray(nodeListArray)

      const clear =  setInterval(()=> {
          setTvla(tvla+1)
         }, 1500)
  
         return ()=> clearInterval(clear)
  
      }, [tvla])
    
  
    return(  

      masiv.map((el, index)=> {

        // console.log(index);
        
        return <div key={index}  className={`${style.pagServiseDiv} ${'pagServiseDivAbsolute2'}`}  >
      
        <span>{el} </span>
        <p>
          mesame
        </p>

      </div>

      })
        
        
    
 
    
    )
}

export const PaginationSerivise2 = () => {

  const masiv2 = ['rame4', 'rame5', 'rame6']

    return (

      masiv2.map((el, index)=> {
 
        return <div key={index} className={style.pagServiseDiv}>
       
        <span>{el} </span>
        <p>
          mesame
        </p>

  </div>
      })


    )
    
    
    
    
}

export const PaginationSerivise3 = () => {

    return <div className={style.pagServiseDiv}>
       
          <span>საპასუხო ვებ დიზაინი </span>
          <p>
            mesame
          </p>

    </div>
}