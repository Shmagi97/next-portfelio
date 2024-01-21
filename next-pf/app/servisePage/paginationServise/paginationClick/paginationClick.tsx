'use client'

import OnclickBtn from "@/app/components/button/onClickBtn/onClickBtn"
import { PaginationComponent } from "../paginComponent"
import style from './pagClick.module.scss'

export const PaginationClick = () => {
    

    return <section className={style.pagClickSection}>

        <OnclickBtn>
            marcxena
        </OnclickBtn>
         
         <div>
           <PaginationComponent/>
         </div>
          

        <OnclickBtn>
            marjvena
        </OnclickBtn>

    </section>
}