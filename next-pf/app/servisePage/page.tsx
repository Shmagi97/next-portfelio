'use client'

import Sacdeli from '../components/sacdeli/sacdeli'
import styles from './page.module.scss'
import { PaginationSerivise  } from './paginationServise/paginationServise'



const HomePage = () => {

   function getEnter(){

    console.log('getEnter');
    
   } 

   function getLeave(){

    console.log('getLeave');
    
   } 

   function getMove(){

    console.log('getMove');
    
   } 



    return <section className={styles.homeSection}>

              <div className={styles.flexDiv} >
           
                <PaginationSerivise clasName = {styles.paginationComponent}
                         mouseEnter = {getEnter} mouseLeave = {getLeave} mouseMove = {getMove}/>
           
              </div>

              <section>
                <Sacdeli/>
              </section>

           </section>
    
    


      
       
     
    
}

export default HomePage
