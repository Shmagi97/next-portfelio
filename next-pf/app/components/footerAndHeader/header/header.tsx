'use client'

import { Navigate } from "../../navigate/navigate"
import FixedImage from "../../fixedImage/fixedImage"
import style from './header.module.scss'
import OnclickBtn from "../../button/onClickBtn/onClickBtn"
import { MyLink } from "../../button/hoverMyLink/myLink"
import { SearchOutlined, ShareAltOutlined } from "@ant-design/icons"
import { useGlobalContext } from "@/app/context/context"
import { numberGlobalSection } from "../../functionsFN/numberGlobalSection"

const Header = () => {
    
   const {globalChildSection, setClickGlobalDinamikChild  } = useGlobalContext()

     const clickSearchFn = () => {

      globalChildSection.current?.classList.replace('sectionNone', 'searchSection')
      numberGlobalSection(1, setClickGlobalDinamikChild)
   
       }
  

    return <header className={style.layoutHeader}>

       <FixedImage
       onClick = { ()=> {
           
         globalChildSection.current?.classList.replace('sectionNone', 'searchSection') 
         numberGlobalSection(0, setClickGlobalDinamikChild)
        
       } }
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