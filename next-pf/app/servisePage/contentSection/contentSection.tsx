'use client'

import ContentMap from './ContentMapComponent/contentMap';
import style from './contentSection.module.scss';

export default ()=> {
 
    return <section className={style.contentSection}>

       <ContentMap/>
         
    </section>
}