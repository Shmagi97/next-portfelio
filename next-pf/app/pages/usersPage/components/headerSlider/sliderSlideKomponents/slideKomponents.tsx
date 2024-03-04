'use client'

import OnclickBtn from '@/app/components/button/onClickBtn/onClickBtn'
import style from './sliderSlide.module.scss'


const SlidesInSliderH1 = ( ) => {

    return <div className={style.slidesStartStopH1 }>
     
     <h1> shmagi narsavidze frontAnd developer</h1>
     <article className={style.articleLine}></article>
    </div>
}

const SlidesInSliderArticle = ( ) => {

    return <div className={style.slidesStartStopArticle }>
     
     <article>
       <p>პროფესია: </p>
       <p> -: descrifshen adddd ddadadd dadddd   addadd</p>
     </article>
    
    </div>
}

const MoreInfoSlide = () => {

    return <div className={style.moreInfoDiv}>
         <OnclickBtn className={style.moreInfoButton}>
            Show More Info
         </OnclickBtn>
    </div>
}



export { SlidesInSliderH1, SlidesInSliderArticle, MoreInfoSlide }