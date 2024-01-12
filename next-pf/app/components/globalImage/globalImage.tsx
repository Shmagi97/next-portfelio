'use client'

import { useGlobalContext } from "@/app/context/context"

import backGround from '@/public/image/backGround.jpg'
import img2 from '@/public/image/img2.jpg'
import photo1 from '@/public/image/photo1.jpg'

import images2 from '@/public/image/images2.jpg'
import images3 from '@/public/image/images3.jpg'
import images4 from '@/public/image/images4.jpg'
import images5 from '@/public/image/images5.jpg'
import images6 from '@/public/image/images6.jpg'
import image7 from '@/public/image/image7.jpg'
import images1 from '@/public/image/images1.jpg'

import { useEffect } from "react"


export const globalImageFn = () => {

    const {setDataimg, imgnumber} = useGlobalContext()

    useEffect(()=> {
       setDataimg ([
           { img : backGround},
           { img : img2},
           { img : photo1},
           { img : images1},
           { img : images2},
           { img : images3},
           { img : images4},
           { img : images5},
           { img : images6},
           { img : image7},
         
       ])

   },[imgnumber])
   
   return null

}
