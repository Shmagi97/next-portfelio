'use client'

import { RefObject, useEffect, useRef } from 'react'
import style from './loggin.module.scss'
import { useGlobalContext } from '@/app/context/context'

export const LogginModal = () => {

    const {  globalModalSection, setGlobalModalSection } = useGlobalContext()
    
    const useRefModalElement : RefObject < HTMLDivElement > = useRef (null)

    useEffect(()=> {
        
        setGlobalModalSection(useRefModalElement)
 
    }, [globalModalSection])

    return <section className='logginModalSectionNone'  ref={ useRefModalElement }>

        <div className={style.logginModalDiv}>
            <h2>შესვლა</h2>
            <form action="#" method="#" className={style.formHtml}>
               <div>
                   <input type="text" id="forLabel1"/>
                   <label htmlFor="forLabel1">მომხმარებელი</label>
               </div>
               <div>
                   <input type="text" id="forLabel2"/>
                   <label htmlFor="forLabel2">პაროლი</label>
               </div>
               <button type="submit">
                  <span></span>
                  <span></span>
                  <span></span>
                  <span></span>
                  შესვლა
              </button>
            </form>
        </div>

    </section>
}

