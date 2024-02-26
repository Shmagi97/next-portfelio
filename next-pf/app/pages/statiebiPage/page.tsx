'use client'

import AnimNavigate from './animNavigate/animNavigate'
import style from  './page.module.scss'
import StatSection from './statiebiSection/statSection'
import headerFooterNone from '@/app/components/functionsFN/headerFooterNone'

const Statiebi = () => {

  headerFooterNone('false')

    return <section className={style.section}>
     
        <AnimNavigate/>

        <StatSection/>
       
    </section>
} 

export default Statiebi