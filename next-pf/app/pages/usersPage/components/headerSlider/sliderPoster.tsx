'use client'

import Image from 'next/image'
import style from './sliderPoster.module.scss'
import image1 from '@/public/image/images2.webp'
import image2 from '@/public/image/images6.webp'
import image3 from '@/public/image/image7.webp'
import { useEffect, useState } from 'react'
import { MoreInfoSlide, SlidesInSliderArticle, SlidesInSliderH1 } from './sliderSlideKomponents/slideKomponents'
import PaginationSlider from './paginationSlider/pagination'
import { sliderAd } from './sliderAdMasiv/sliderAd'

 const SliderPoster = () => {

    const [usefectRerender, setUsefectRerender] = useState(0)
    const [animSlides , setAnimSlides] = useState(false)
    const [sliderStop, setSliderStop] = useState(false)
     
    useEffect(()=> {

        setAnimSlides(true)
        
        // const container = document.querySelector(`.${style.silderDiv}`)
    
        // if (sliderStop){
            
        //     const nodeChildren = container?.childNodes

        //     if (nodeChildren ) {
            
        //         const visibleChildren = nodeChildren[1].childNodes
            
        //         if (visibleChildren[3] instanceof HTMLElement  ) {
                       
        //              visibleChildren[3].classList.add(`${style.visibleChildren3}`)
                
        //         }
 
        //     }
        // }

        if (sliderStop){
            // gasaweria   <MoreInfoSlide/> -is animacia 
        }

        const clearTimeaut = setTimeout(()=> {
           
        // if(!sliderStop) {

        //     const last = container?.firstChild;
        //     last?.remove();
          
        //     if(last) {
        //         container.appendChild(last) 
        //         setAnimSlides(false)
        //         setUsefectRerender(usefectRerender < 1 ? usefectRerender + 1 : usefectRerender - 1)
        //      } 
        // } 

        if(!sliderStop){

            const last = sliderAd.shift()
            
            if(last) {
              sliderAd.push(last)
              setAnimSlides(false)
              setUsefectRerender(usefectRerender < 1 ? usefectRerender + 1 : usefectRerender - 1)
            }
        }
        
        }, 10 * 1000)

        return ()=> {
            clearTimeout(clearTimeaut)
            
        }
        
    }, [usefectRerender, sliderStop ])

    return <section className={style.sliderPosterSection} >

        <div className={style.silderDiv}
             onMouseEnter={()=>  setSliderStop(true) } 
             onMouseLeave={()=>  setSliderStop(false) } 
             >

             {
                sliderAd.map((el , index)=> 
                 
                 <div  className={style.sliderItem} key={index}>
                    <Image
                    alt={'imagesSliderPoster'}
                    src={el.image}
                    className={style.sliderItemImage}
                    />
                    { animSlides ? <>
                        <SlidesInSliderH1 /> 
                        <SlidesInSliderArticle />
                        <MoreInfoSlide/>
                    </>  : null }         
                 </div>
                
                )
             }   

            {/* <div  className={style.sliderItem}>
                <Image
                alt={'imagesSliderPoster'}
                src={image1}
                className={style.sliderItemImage}
                />
                { animSlides ? <>
                    <SlidesInSliderH1 /> 
                    <SlidesInSliderArticle />
                    <MoreInfoSlide/>
                </>  : null }         
            </div>

            <div  className={style.sliderItem}>
                <Image
                alt={'imagesSliderPoster'}
                src={image2}
                className={style.sliderItemImage}
                />
                   { animSlides ? <>
                    <SlidesInSliderH1 /> 
                    <SlidesInSliderArticle />
                    <MoreInfoSlide/>
                </>  : null }
            </div>

            <div  className={style.sliderItem}>
                <Image
                alt={'imagesSliderPoster'}
                src={image3}
                className={style.sliderItemImage}
                />
                    { animSlides ? <>
                    <SlidesInSliderH1 /> 
                    <SlidesInSliderArticle />
                    <MoreInfoSlide/>
                </>  : null }
            </div> */}

        </div>

        <PaginationSlider/>

    </section>
}

export default SliderPoster