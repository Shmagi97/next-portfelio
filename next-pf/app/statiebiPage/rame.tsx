'use client'

import Image from 'next/image'
import style from './rame.module.scss'
import {  useEffect, useRef, useState } from 'react'

// import image7 from '@/public/image/image7.webp'
// import images6 from '@/public/image/images6.webp'
// import images5 from '@/public/image/images5.webp'
// import images4 from '@/public/image/images4.webp'
// import images3 from '@/public/image/images3.webp'
// import images2 from '@/public/image/images2.webp'
// import img2 from '@/public/image/img2.webp'


const Sacdeli = () => {

    const [animStop, setAnimStop ] = useState(true)
    const [usefectRerender, setUsefectRerender] = useState(0)
    const [click , setClick] = useState(true)

    function stopAnimFN () { setAnimStop(false) }
    function startAnim () {  setAnimStop(true) }
   
    useEffect(() => {

      const container = document.querySelector(`.${style.container}`)
  
      const intervalId = setTimeout(() => {
        const last = container?.firstElementChild;
        animStop && last?.remove();
        if (last && animStop) container?.appendChild(last);
        
        setUsefectRerender(usefectRerender+1)

      }, 2500);
  

      return  () => { 
          clearTimeout(intervalId)  
          setUsefectRerender(0) 
         }

    }, [usefectRerender, animStop]);


   
    const userefObject = useRef < HTMLDivElement | null > (null)



    function clickMe(){
      setClick(!click)
       click && userefObject.current?.classList.replace( style.sacdeliDiv ,  style.axali )
       !click && userefObject.current?.classList.replace( style.axali ,  style.sacdeliDiv )
    }


    return <>

         <div className={style.container} onMouseEnter={ stopAnimFN } onMouseLeave={ startAnim }>
          <div className={style.box}>
             <h1>11111111</h1>
          </div>
          <div className={style.box}>
             <h1>2222222</h1>
          </div>
          <div className={style.box}>
              <h1>33333333</h1>
          </div>
          <div className={style.box}>
             <h1>4444444</h1>
          </div>
          <div className={style.box}>
              <h1>5555555</h1>
          </div>
          <div className={style.box}>
             <h1>66666666</h1>
          </div>
        </div>

        <div className={style.sacdeli}>
            <div className={style.sacdeliDiv} ref={userefObject} onClick={ clickMe }>
              <p style={{color: 'red',  fontSize: '40px'}}>click me</p>
            </div>
        </div>
     
    </>
} 

export default Sacdeli