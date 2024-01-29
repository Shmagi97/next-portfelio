'use client'

import Image from "next/image"
import { contentMasiv } from "../contentMasiv/contentMasiv"
import style from './contentMap.module.scss'
import { useGlobalContext } from "@/app/context/context"
import { useEffect, useState } from "react"

export default ()=> {

    const {  clickGlobaldNumber } = useGlobalContext()
    const [indexMasiv, setIndexMasiv] = useState(0)
    const [loading, setLoading] = useState(true);
    const [contentLoaded, setContentLoaded] = useState(0);

    useEffect(()=> {
        
        clickGlobaldNumber[2].servisPageAnimNavigate.find((el, indexBtnClick)=> {   
        if(el == 1) {
            setIndexMasiv(indexBtnClick) 
            setContentLoaded(0) } 
        })
        
    }, [clickGlobaldNumber])

    useEffect(()=> {

     window.addEventListener('scroll', ()=> {

        if (filterEdMasiv && window.innerHeight + window.scrollY >= document.body.offsetHeight - 100){

            setLoading(false)
            setContentLoaded( contentLoaded < 3?  contentLoaded+1 : contentLoaded )
        }
        console.log(contentLoaded);
     })
    }, [contentLoaded])
    
    const filterEdMasiv = contentMasiv.find((el, index)=>  index == indexMasiv )

    const loadedFilter = filterEdMasiv?.filter((el, index)=> index <= contentLoaded)
   
    

    return <div className={style.returnDiv}>

           { loadedFilter?.map((el, index)=> <>
                  
              <div key={index} className={style.mapDiv}>

                    <h1> {el.title}</h1>
                    <p>{el.description}</p>
                
              </div>
              <div>
                <Image

                 alt={el.title}
                 src={el.img}
                 width={470}
                />
              </div>
            {loading && <span > Loading... </span>}
              </>

         )}

          {/* {filterEdMasiv && <>
          
            <div  className={style.mapDiv}>

                <h1> {filterEdMasiv.title}</h1>
                <p>{filterEdMasiv.description}</p>

                </div>
                <div>
                <Image

                alt={filterEdMasiv.title}
                src={filterEdMasiv.img}
                width={470}
                />
            </div>
           

          </>} */}
    


         </div>
}