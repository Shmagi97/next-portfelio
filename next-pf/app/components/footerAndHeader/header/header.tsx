'use client'

import { Navigate } from "../../navigate/navigate"
import FixedImage from "../../fixedImage/fixedImage"
import style from './header.module.scss'
import OnclickBtn from "../../button/onClickBtn/onClickBtn"
import { MyLink } from "../../button/hoverMyLink/myLink"
import { SearchOutlined, ShareAltOutlined } from "@ant-design/icons"
import { useGlobalContext } from "@/app/context/context"
import  globalNumberSection  from "../../functionsFN/numberGlobalSection"

const Header = () => {
    
   const {globalChildSection, setClickGlobaldNumber,  setClickModal, setHeaderFooter } = useGlobalContext()
   
     const clickSearchFn = () => {

      globalChildSection.current?.classList.replace('sectionNone', 'searchSection')
      globalNumberSection(1, 'globalSectionChildren', 1, setClickGlobaldNumber)
      document.body.classList.add( 'bodyOverflovHidden')
      setClickModal(false) 
      setHeaderFooter(false)
       }

       const clickFixedImage = () => {

         globalChildSection.current?.classList.replace('sectionNone', 'searchSection') 
         globalNumberSection(1, 'globalSectionChildren', 0, setClickGlobaldNumber)
         document.body.classList.add( 'bodyOverflovHidden')
         setClickModal(false)
         setHeaderFooter(false)
         
       }

    return <header className={style.layoutHeader}>

       <FixedImage
       onClick = { clickFixedImage }
       />

       <Navigate/>

       <div className={style.shareBtnDiv}>

        <OnclickBtn className={style.btnHeader}> 
          <ShareAltOutlined/>
            <MyLink className={style.myLink}/>
         </OnclickBtn>

        <OnclickBtn className={style.btnHeader} onClick={clickSearchFn}> 
           <SearchOutlined/>
        </OnclickBtn>
  

       </div>

    </header>
}

export default Header