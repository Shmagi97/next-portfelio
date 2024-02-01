'use client'

import { useRecoilState, useRecoilValue } from 'recoil'
import ContentSection from './contentSection/contentSection'
import styles from './page.module.scss'
import { PaginationSerivise  } from './paginationServise/paginationServise'

const HomePage = () => {

    return <section className={styles.homeSection}>

            <div className={styles.fixedHeaderDiv}></div>
            <PaginationSerivise />

             <ContentSection />

           </section>   
    
}

export default HomePage
