'use client'

import ContentSection from './contentSection/contentSection'
import styles from './page.module.scss'
import { PaginationSerivise  } from './paginationServise/paginationServise'



const HomePage = () => {

    return <section className={styles.homeSection}>

              <div className={styles.flexDiv} >
           
                <PaginationSerivise clasName = {styles.paginationComponent}/>
           
              </div>

             <ContentSection clasName = {styles.contentComponent}/>

           </section>   
    
}

export default HomePage
