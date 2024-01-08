'use client'

import Image from "next/image"
import style from './background.module.css'
import { useGlobalContext } from '@/app/context/context';
import { useState } from "react";


const Background = () => {

    const { imgnumber,  dataimg, setImagenumber, globalImageFn } = useGlobalContext ()
    const [numberauto , setNumberauto] = useState(0)
   
    
    globalImageFn()

    // console.log(imgnumber, 'end');
 
    return <>

  

      {dataimg.map((el, index)=> {
        // console.log(el)
       if ( (index == imgnumber)  ){

           return <>
    
            <Image
               key={index}
               className={` ${style.backgroundImage} ${style.position1}`}
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