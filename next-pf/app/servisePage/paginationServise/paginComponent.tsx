'use client'

import OnclickBtn from '@/app/components/button/onClickBtn/onClickBtn'
import style from './pagComponent.module.scss'


export const PaginationComponent = () => {

    return <div className={style.paginationDiv}>

         <OnclickBtn>
             btn1
         </OnclickBtn>
         <OnclickBtn>
             btn1
         </OnclickBtn>
         <OnclickBtn>
             btn1
         </OnclickBtn>
         

    </div>
}