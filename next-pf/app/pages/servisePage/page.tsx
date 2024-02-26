'use client'

import ContentSection from './contentSection/contentSection'
import styles from './page.module.scss'
import { PaginationSerivise  } from './paginationServise/paginationServise'
import headerFooterNone from '@/app/components/functionsFN/headerFooterNone'

const HomePage = () => {

  headerFooterNone('false')

    return <section className={styles.homeSection}>

            <div className={styles.fixedHeaderDiv}></div>
            <PaginationSerivise />

             <ContentSection />

           </section>   
    
}

export default HomePage
