'use client'

import { sliderAd } from '../sliderAdMasiv/sliderAd'
import style from './pagination.module.scss'

const PaginationSlider = () => {
    
    return <div className={style.paginationDiv}>
      
      {
        sliderAd.map(( _, index)=> (
           
            <article key={index} className={style.paginationArticle}>

            </article>
        ))
      }

    </div>
}

export default PaginationSlider