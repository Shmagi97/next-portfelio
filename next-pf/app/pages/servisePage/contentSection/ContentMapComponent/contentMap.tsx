'use client'

import Image from "next/image"
import { contentMasiv } from "../contentMasiv/contentMasiv"
import style from './contentMap.module.scss'
import { useGlobalContext } from "@/app/context/context"
import { useEffect, useState } from "react"
import { useRecoilState } from "recoil"
import { servisPageMapWidthState } from "@/app/recoil/recoilGlobalState"

export default ()=> {

    const {  clickGlobaldNumber } = useGlobalContext()  
    const [servisPageMapWidth] = useRecoilState(servisPageMapWidthState)

    const [indexMasiv, setIndexMasiv] = useState(0)
    const [loading, setLoading] = useState(true);
    const [contentLoaded, setContentLoaded] = useState(0);

    useEffect(()=> {
        
      clickGlobaldNumber[2].servisPageAnimNavigate.find((el, indexBtnClick)=> {   
        if(el == 1) {
 
           window.scrollTo( { 
             
            top : 0,
            // behavior : 'smooth',
           } )

            setLoading(true)
            setIndexMasiv(indexBtnClick) 
            setContentLoaded(0) 
          
          } 
        })

    }, [clickGlobaldNumber])

    useEffect(()=> {

     function scrollFN (){

       if (filterEdMasiv && window.innerHeight + window.scrollY >= document.body.offsetHeight - 100){

            setLoading(false)
            setContentLoaded( contentLoaded < 3 ?  contentLoaded+1 : contentLoaded )

        } else { null }
     }

     window.addEventListener ( 'scroll', scrollFN )

     return ()=> window.removeEventListener('scroll', scrollFN)

    }, [contentLoaded])

    const filterEdMasiv = contentMasiv.find((el, index)=>  index == indexMasiv )

    const loadedFilter = filterEdMasiv?.filter((el, index)=> index <= contentLoaded)

    return <div className={ servisPageMapWidth ? style.returnDiv : style.returnDivWidthChange}>

           { loadedFilter?.map((el, index)=> <section key={index}>

              <div className={style.imgDiv} >

               <h1> {el.title}</h1>
                  {el.img? 
                  <Image

                    alt={el.title}
                    src={el.img}
                    className={style.getImage}
                  /> : undefined
                  }

              </div>
                  
              <div className={style.mapDiv}>

                    <p>{el.description}</p>
                
              </div>

            {loading && <span className={style.spanLoading}> Loading... </span>}
              </section>

         )}

         </div>
}