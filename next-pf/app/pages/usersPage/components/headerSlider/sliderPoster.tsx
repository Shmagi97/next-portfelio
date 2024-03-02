'use client'

import Image from 'next/image'
import style from './sliderPoster.module.scss'
import image1 from '@/public/image/img2.webp'
import image2 from '@/public/image/images6.webp'
import image3 from '@/public/image/images5.webp'
import { useEffect, useState } from 'react'
import { SlidesInSliderArticle, SlidesInSliderH1 } from './sliderSlideKomponents/slideKomponents'

 const SliderPoster = () => {

    const [usefectRerender, setUsefectRerender] = useState(0)
    const [animSlides , setAnimSlides] = useState(false)
    
    useEffect(()=> {

        setAnimSlides(true)

        const container = document.querySelector(`.${style.silderDiv}`)
        const clearTimeaut = setTimeout(()=> {
           
            const last = container?.firstChild;
            last?.remove();
            if(last) {
                container.appendChild(last) 
                setAnimSlides(false)
                setUsefectRerender(usefectRerender < 1 ? usefectRerender + 1 : usefectRerender - 1)
             } 

        }, 15 * 1000)

        return ()=> {
            clearTimeout(clearTimeaut)
            
        }
        
    }, [usefectRerender])

    return <section className={style.sliderPosterSection}>

        <div className={style.silderDiv}>

            <div  className={style.sliderItem}>
                <Image
                alt={'imagesSliderPoster'}
                src={image1}
                className={style.sliderItemImage}
                />
               <SlidesInSliderH1 startAndStop = {animSlides}/>
               <SlidesInSliderArticle startAndStop = {animSlides}/>
            </div>

            <div  className={style.sliderItem}>
                <Image
                alt={'imagesSliderPoster'}
                src={image2}
                className={style.sliderItemImage}
                />
               <SlidesInSliderH1 startAndStop = {animSlides}/>
               <SlidesInSliderArticle startAndStop = {animSlides}/>
            </div>

            <div  className={style.sliderItem}>
                <Image
                alt={'imagesSliderPoster'}
                src={image3}
                className={style.sliderItemImage}
                />
               <SlidesInSliderH1 startAndStop = {animSlides}/>
               <SlidesInSliderArticle startAndStop = {animSlides}/>
            </div>

        </div>

    </section>
}

export default SliderPoster