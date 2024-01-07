'use client'

import Image from "next/image"
import backGround from '@/public/image/backGround.jpg'
import img2 from '@/public/image/img2.jpg'
import photo1 from '@/public/image/photo1.jpg'
import style from './background.module.css'
import { useGlobalContext } from '@/app/context/context';


const Background = () => {

    const {  imgnumber, dataimg, globalImageFn } = useGlobalContext ()
    console.log(imgnumber);
    
  
    globalImageFn()
   
    return <>

  

      {dataimg.map((el, index)=> {
        // console.log(el)
       if ( index == imgnumber ){

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