'use client'

import OnclickBtn from '@/app/components/button/onClickBtn/onClickBtn'
import style from './anim.module.scss'
import {  useEffect, useRef, useState } from 'react'
import Image from 'next/image'
import image1 from '@/public/servisPageImage/backAndFront.webp'


const AnimNavigate = () => {

    const [animStop, setAnimStop ] = useState(true)
    const [usefectRerender, setUsefectRerender] = useState(0)
    const [clickImage , setClickImage] = useState(true)

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



    function clickMeImage(){
      setClickImage(!clickImage)
      if ( clickImage ) userefObject.current?.classList.replace( style.anim3dDivAbsolute ,  style.anim3dDivAbsoluteChange )
       else userefObject.current?.classList.replace( style.anim3dDivAbsoluteChange ,  style.anim3dDivAbsolute )
    }


    return <>

         <div className={style.container} onMouseEnter={ stopAnimFN } onMouseLeave={ startAnim }>

          <OnclickBtn className={style.box}>
           <p>javasCript</p>
          </OnclickBtn>

          <OnclickBtn className={style.box}>
          <p>python</p>
          </OnclickBtn>

          <OnclickBtn className={style.box}>
          <p>typeScript</p>
          </OnclickBtn>

          <OnclickBtn className={style.box}>
          <p>java</p>
          </OnclickBtn>

          <OnclickBtn className={style.box}>
          <p>php</p>
          </OnclickBtn>

          <OnclickBtn className={style.box}>
          <p>ruby</p>
          </OnclickBtn>

        </div>

        <div className={style.anim3dDivRelative}>
            <div className={style.anim3dDivAbsolute} ref={userefObject} onClick={ clickMeImage }>
              <Image
              alt={'imageLeft3d'}
              src={image1}
              width={200}
              
              />
            </div>
        </div>
     
    </>
} 

export default AnimNavigate