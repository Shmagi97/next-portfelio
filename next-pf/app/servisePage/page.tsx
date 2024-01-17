'use client'

import { Register } from '../components/logginRegisterModal/register'
import LoadingSpinner from '../components/sacdeli/sacdeli'
import styles from './page.module.css'

const HomePage = () => {

  // const {userId } = useGlobalContext ()

  // console.log( 'sacdeli')
    return <>

    {/* <LoadingSpinner/> */}
      
      <div className={styles.main}><Register/></div>
       
     
    </>
}

export default HomePage