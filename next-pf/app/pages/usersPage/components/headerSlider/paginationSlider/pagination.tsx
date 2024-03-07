'use client'

import { useGlobalContext } from '@/app/context/context'
import { sliderAd } from '../sliderAdMasiv/sliderAd'
import style from './pagination.module.scss'
import { useRecoilUserInfo } from '@/app/recoil/recoilGlobalState'

const PaginationSlider = () => {

  const { sliderPosterNumber, setSliderPosterNumber } = useGlobalContext()
  const {  setAnimSlides } = useRecoilUserInfo()
    
    return <div className={style.paginationDiv}>
      
      {
        sliderAd.map(( _, index)=> (
           
            <article key={index} 
                    className={style.paginationArticle}
                    onClick={()=> { 
                      setSliderPosterNumber(index)
                      setAnimSlides(false)
                    }}
                    >
               {sliderPosterNumber == index ? 
                
                <article className={style.articlSelected}>
                   
                </article>

                : null}
            </article>
        ))
      }

    </div>
}

export default PaginationSlider