'use client'

import Image from "next/image"
import style from './background.module.css'
import { useGlobalContext } from '@/app/context/context';
import { globalImageFn } from "../globalImage/globalImage";

const Background = () => {

    const { imgnumber,  dataimg, } = useGlobalContext ()
    
   globalImageFn()
 
    return <>
     
     

      {dataimg.map((el, index)=> {
        // console.log(el)
       if ( (index == imgnumber)  ){

           return <>
    
            <Image
               key={index}
               className={style.backgroundImage}
               alt="imageBackground"
                src={el.img}
               priority= {true}

             />
    
           </>

          }
    
       })}
    
    </>
}

export default Background