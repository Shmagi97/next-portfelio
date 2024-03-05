'use client'

import Image from 'next/image'
import style from './sliderPoster.module.scss'
import { RefObject, useEffect, useRef, useState } from 'react'
import { MoreInfoSlide, SlidesInSliderArticle, SlidesInSliderH1 } from './sliderSlideKomponents/slideKomponents'
import PaginationSlider from './paginationSlider/pagination'
import { sliderAd } from './sliderAdMasiv/sliderAd'
import { useRecoilUserInfo } from '@/app/recoil/recoilGlobalState'


 const SliderPoster = () => {

    const {  sliderPosterNumber, setSliderPosterNumber } = useRecoilUserInfo()
    // gasasworebelia roca viyeneb globalur steits animacia ar gadaecema userefDiv?.classList.add(`${style.getLastAnim}`)
    // const [  sliderPosterNumber, setSliderPosterNumber ] = useState(0)
    const [animSlides , setAnimSlides] = useState(false)
    const [sliderStop, setSliderStop] = useState(false)
    
    const useRefElement : RefObject < HTMLDivElement > = useRef(null)

    useEffect(()=> {
        setAnimSlides(true)
        const userefDiv = useRefElement.current
        userefDiv?.classList.add(`${style.getLastAnim}`)

        if (sliderStop && animSlides){
            const divLastChild =  useRefElement.current?.lastChild
            if(divLastChild instanceof HTMLDivElement) divLastChild.classList.add(`${style.visibleChildren}`)
            
        }

        const clearTimeaut = setTimeout(()=> { 

        if(!sliderStop){

            const last = sliderAd.shift()
       
            if(last) {

              sliderAd.push(last)
              userefDiv?.classList.remove(`${style.getLastAnim}`)
              setAnimSlides(false)
              setSliderPosterNumber(  sliderPosterNumber < sliderAd.length -1 ? sliderPosterNumber + 1 : 0)
            }
        }
        
        }, 10 * 1000)

        return ()=>  clearTimeout(clearTimeaut)
        
    }, [sliderPosterNumber, sliderStop ])

    const elementSelected = sliderAd.find((_, index)=> sliderPosterNumber == index)

    return <section className={style.sliderPosterSection} >

        <div className={style.silderDiv}
             onMouseEnter={()=>  setSliderStop(true) } 
             onMouseLeave={()=>  setSliderStop(false) } 
             >

             {
                elementSelected && <div className={style.sliderItem} ref={useRefElement}>
                    <Image
                    alt={'imagesSliderPoster'}
                    src={elementSelected.image}
                    className={style.sliderItemImage}
                    priority
                    />
                    { animSlides ? <>
                        <SlidesInSliderH1 /> 
                        <SlidesInSliderArticle />
                        <MoreInfoSlide/>
                    </>  : null }         
                 </div>           
             }  

        </div>

        <PaginationSlider/>

    </section>
}

export default SliderPoster