'use client'

import Image from 'next/image'
import style from './sliderPoster.module.scss'
import { RefObject, useEffect, useRef, useState } from 'react'
import { MoreInfoSlide, SlidesInSliderArticle, SlidesInSliderH1 } from './sliderSlideKomponents/slideKomponents'
import PaginationSlider from './paginationSlider/pagination'
import { sliderAd } from './sliderAdMasiv/sliderAd'
import { useGlobalContext } from '@/app/context/context'
import { useRecoilUserInfo } from '@/app/recoil/recoilGlobalState'


 const SliderPoster = () => {

    const { sliderPosterNumber,  setSliderPosterNumber } = useGlobalContext()
    const { animSlides , setAnimSlides } = useRecoilUserInfo()

    const [sliderStop, setSliderStop] = useState(false)
    
    const useRefElement : RefObject < HTMLDivElement > = useRef(null)

    useEffect( ()=> {
        setAnimSlides(true)

        const clearTimeaut = setTimeout(()=> { 

        if(!sliderStop){

            const last = sliderAd.shift()
       
            if(last ) {

              sliderAd.push(last)
              setAnimSlides(false)
              setSliderPosterNumber(  sliderPosterNumber < sliderAd.length -1 ? sliderPosterNumber + 1 : 0)
            }
        }
        
        }, 10 * 1000)

        return ()=>  clearTimeout(clearTimeaut)
        
    }, [sliderPosterNumber, sliderStop])

    const elementSelected = sliderAd.find((_, index)=> sliderPosterNumber == index)

    const userefDiv = useRefElement.current
    const divLastChild =  useRefElement.current?.lastChild

    function userefDivStyleEnter (){

        setSliderStop(true)
        userefDiv?.classList.add(`${style.getLastAnim}`)

        if(userefDiv){ 
            userefDiv.style.transform = 'scale(1.2)';
            userefDiv.style.transition = '2s'
        }

        if(divLastChild instanceof HTMLDivElement ) divLastChild.classList.add(`${style.visibleChildren}`)
    }

    function userefDivStyleLeave() {

        setSliderStop(false)
        userefDiv?.classList.remove(`${style.getLastAnim}`)

        if(userefDiv){ 
            userefDiv.style.transform = 'scale(1)';
            userefDiv.style.transition = '2s'
        }
    }

    return <section className={style.sliderPosterSection} >

        <div className={style.silderDiv}
             onMouseEnter={ userefDivStyleEnter }
             onMouseLeave={ userefDivStyleLeave } 
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