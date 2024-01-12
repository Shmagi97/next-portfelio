'use client'

import Navigate from "../../button/navigate/navigate"
import ShareClickBtn from "../../button/shareButtons/shareBrn"
import FixedImage from "../../fixedImage/fixedImage"
import style from './header.module.css'

const Header = () => {

    return <header className={style.layoutHeader}>

       <FixedImage/>
       <Navigate/>

       <div className={style.shareBtnDiv}>

         <ShareClickBtn
          antIcon = {'share'}
          hoverShare = {'active'}
         />
           <ShareClickBtn
          clickSearch = {'active'}
          antIcon = {'search'}
         />

       </div>

    </header>
}

export default Header