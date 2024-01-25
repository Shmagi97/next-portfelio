'use client'

import styles from './page.module.scss'
import { PaginationSerivise  } from './paginationServise/paginationServise'



const HomePage = () => {


    return <section className={styles.section}>
         
          <PaginationSerivise/>
            
    </section>


      
       
     
    
}

export default HomePage
