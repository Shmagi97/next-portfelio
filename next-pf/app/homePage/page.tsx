'use client'

import styles from './page.module.css'
import { useGlobalContext } from "@/app/context/context"

const HomePage = () => {

  // const {userId } = useGlobalContext ()

  // console.log(userId, 'sacdeli')
    return <>
      
      <div className={styles.main}>this is home page</div>
      
     
    </>
}

export default HomePage