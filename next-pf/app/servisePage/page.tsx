'use client'


import { RegisterAnt } from '../components/logginRegisterModal/registerAnt'
import styles from './page.module.css'

const HomePage = () => {

  // const {userId } = useGlobalContext ()

  // console.log( 'sacdeli')
    return <>

    {/* <LoadingSpinner/> */}
      
      <div className={styles.main}> <RegisterAnt/> </div>
       
     
    </>
}

export default HomePage