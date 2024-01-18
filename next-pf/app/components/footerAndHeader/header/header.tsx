'use client'

import { Navigate } from "../../navigate/navigate"
import ShareClickBtn from "../../button/shareButtons/shareBrn"
import FixedImage from "../../fixedImage/fixedImage"
import style from './header.module.css'

const Header = () => {

    return <header className={style.layoutHeader}>

       <FixedImage
       click = {'active'}
       />
       <Navigate/>

       <div className={style.shareBtnDiv}>

         <ShareClickBtn
          antIcon = {'share'}
          hoverShare 
         
         />
           <ShareClickBtn
          clickSearch = {'active'}
          antIcon = {'search'}
          btnActiveClass
         
         />

       </div>

    </header>
}

export default Header