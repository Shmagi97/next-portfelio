'use client'

import AnimNavigate from './animNavigate/animNavigate'
import style from  './page.module.scss'
import StatSection from './statiebiSection/statSection'

const Statiebi = () => {




    return <section className={style.section}>
     
        <AnimNavigate/>

        <StatSection/>
       
    </section>
} 

export default Statiebi