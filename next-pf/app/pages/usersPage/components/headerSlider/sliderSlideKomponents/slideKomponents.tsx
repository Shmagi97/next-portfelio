'use client'

import style from './sliderSlide.module.scss'

type propsTP = {
    startAndStop: boolean;
}

const SlidesInSliderH1 = ( props:propsTP ) => {

    return <div className={props.startAndStop ? style.slidesStartStopH1 : style.slidesStartStopH1None}>
     
     <h1> shmagi narsavidze 111111</h1>
    
    </div>
}

const SlidesInSliderArticle = ( props:propsTP ) => {

    return <div className={props.startAndStop ? style.slidesStartStopArticle : style.slidesStartStopArticleNone}>
     
     <article>
       <p>პროფესია: </p>
       <p> -: descrifshen adddd ddadadd dadddd   addadd</p>
     </article>
    
    </div>
}



export { SlidesInSliderH1, SlidesInSliderArticle }