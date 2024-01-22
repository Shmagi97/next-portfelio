'use client'

import { ReactNode } from 'react'
import styles from './page.module.css'
import { PaginationClick } from './paginationServise/paginationClick/paginationClick'

// const newPromis = new Promise<ReactNode>((res, rej)=>{
//   setTimeout(()=> {
//    res('yes')
//   }, 3000)
// })

const HomePage = () => {

    return <>

    {/* {newPromis} */}
      
      <PaginationClick/>
       
     
    </>
}

export default HomePage