'use client'

import Image from "next/image"
import style from './background.module.css'
import { useGlobalContext } from '@/app/context/context';
import { globalImageFn } from "../globalImage/globalImage";

const Background = () => {

    const { imgnumber,  dataimg, } = useGlobalContext ()

    const selectImage = dataimg.find(( el , index )=> index == imgnumber)
    
   globalImageFn()

    return <>

      {
        
        selectImage &&  <Image
        
           className={style.backgroundImage}
           alt="imageBackground"
           src={selectImage.img} 
            
         />

      }

    </>
}

export default Background