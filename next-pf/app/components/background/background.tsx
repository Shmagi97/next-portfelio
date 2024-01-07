'use client'

import Image from "next/image"
import backGround from '@/public/image/backGround.jpg'
import img2 from '@/public/image/img2.jpg'
import photo1 from '@/public/image/photo1.jpg'
import style from './background.module.css'
import { useGlobalContext } from '@/app/context/context';
import { useState } from "react"

const Background = () => {

    const {  imgnumber } = useGlobalContext ()
  
    const backImageMasiv = [backGround, img2, photo1]
  
    return <>

    {backImageMasiv.map((el, index)=> {

      if ( index == imgnumber ){

        return <>
        
        <Image
              key={index}
              className={` ${style.backgroundImage} ${style.position1}`}
              alt="imageBackground"
              src={el}
              priority= {true}
    
         />
        
        </>

      }
        
    })}
    
    
    
    </>
}

export default Background