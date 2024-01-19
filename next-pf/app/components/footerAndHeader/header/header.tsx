'use client'

import { Navigate } from "../../navigate/navigate"
import FixedImage from "../../fixedImage/fixedImage"
import style from './header.module.scss'
import OnclickBtn from "../../button/onClickBtn/onClickBtn"
import { MyLink } from "../../button/hoverMyLink/myLink"
import { SearchOutlined, ShareAltOutlined } from "@ant-design/icons"
import { useGlobalContext } from "@/app/context/context"
import { ImageCont } from "../../fixedImage/imageCont"

const Header = () => {
    
   const {globalChildSection, setClickedSearch} = useGlobalContext()

     const clickFn = () => {

      globalChildSection.current?.classList.replace('sectionNone', 'searchSection')
      setClickedSearch(true)    
   
       }
  

    return <header className={style.layoutHeader}>

       {/* <FixedImage
       click = {'active'}
       /> */}

         <ImageCont
         click = {'active'}
         />

       <Navigate/>

       <div className={style.shareBtnDiv}>

        <OnclickBtn className={style.btnHeader}> 
          <ShareAltOutlined/>
            <MyLink className={style.myLink}/>
         </OnclickBtn>

        <OnclickBtn className={style.btnHeader} onClick={clickFn}> 
           <SearchOutlined/>
        </OnclickBtn>
  

       </div>

    </header>
}

export default Header