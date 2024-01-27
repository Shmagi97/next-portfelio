'use client'

import { useGlobalContext } from "@/app/context/context"
import image7 from '@/public/image/image7.webp'
import images6 from '@/public/image/images6.webp'
import images5 from '@/public/image/images5.webp'
import images4 from '@/public/image/images4.webp'
import images3 from '@/public/image/images3.webp'
import images2 from '@/public/image/images2.webp'
import img2 from '@/public/image/img2.webp'

import { useEffect } from "react"


export const globalImageFn = () => {

    const {setDataimg} = useGlobalContext()

    useEffect(()=> {
       setDataimg ([
           { img : img2},
           { img : images2},
           { img : images3},
           { img : images4},
           { img : images5},
           { img : images6},
           { img : image7},
         
       ])

       return () => setDataimg([])

   },[])
   
   return null

}
