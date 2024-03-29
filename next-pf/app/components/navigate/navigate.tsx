'use client'

import { useGlobalContext } from "@/app/context/context"
import style from './navigate.module.scss'
import { GlobalOutlined, LeftOutlined  } from "@ant-design/icons"
import OnclickButtonLink from "../button/buttonLink/onClickButtonLink"
import { MouseEvent } from "react"
import  globalNumberSection  from "../functionsFN/numberGlobalSection"
import { servises } from "./servises/servises"
import { useRouter } from "next/navigation"

const Navigate = () => {

    const { clickModal , setClickModal, globalChildSection, setClickGlobaldNumber, setHeaderFooter } = useGlobalContext() 

    function logginModalFn () {  setClickModal(!clickModal) }

    function clickPortfelio () {

        globalChildSection.current?.classList.replace('sectionNone', 'searchSection')
        globalNumberSection(1, 'globalSectionChildren', 0, setClickGlobaldNumber)
        document.body.classList.add( 'bodyOverflovHidden')
        setClickModal(false)
        setHeaderFooter(false)
    }

    const router = useRouter();

    return <div className={style.cont} >
     <GlobalOutlined  className={style.logginAntIcon} onClick={logginModalFn} suppressHydrationWarning/>

     <OnclickButtonLink onClick={ ()=> router.push('/') }>
          <p className={style.buttonLink}>მთავარი</p>
     </OnclickButtonLink>

     <OnclickButtonLink getServises = {servises} dropDown = 'servisebi' 
     onClick={()=> {
        setClickModal(false)
        router.push('/pages/servisePage')
     }}>
         <p className={style.buttonLink}>სერვისები</p>
     </OnclickButtonLink>

     <OnclickButtonLink  getServises = {servises} dropDown = 'statiebi' 
     onClick={()=> {
        setClickModal(false)
        router.push('/pages/statiebiPage')
     }}>
           <p className={style.buttonLink}>სტატიები</p>
     </OnclickButtonLink>
    
     <OnclickButtonLink onClick={clickPortfelio}>
           <article className={style.articlePortfelio}>პორტფელიო</article>
     </OnclickButtonLink>
    
    
    </div>
      
}

type propsTP = {
    clasName : string;
}

const NavigateGlobalSection = (props : propsTP) => {

    
  const {  setClickGlobaldNumber, clickGlobaldNumber } = useGlobalContext()

  type DataGlobalClickNumber = [
    {globalNavigateNumber : number []} ,
    { globalSectionChildren :  number []} ,
    { servisPageAnimNavigate :  number []} ,
];

    function leftElseInfoFN () {
         const getElseNumbers : DataGlobalClickNumber = [ ...clickGlobaldNumber ]
         getElseNumbers[0].globalNavigateNumber = [0, 0, 0, 0]
         setClickGlobaldNumber(getElseNumbers)
         
    }

    function getValue (event : MouseEvent < HTMLButtonElement >) {
     
     const valueNumber =  event.currentTarget.getAttribute('data-value')
     
      if(valueNumber) globalNumberSection(0, 'globalNavigateNumber', parseInt(valueNumber), setClickGlobaldNumber )

     
    }

    const dinamikClasName = `${style.contGlobalSection} ${props.clasName}`

    return <div className={dinamikClasName}>

    <LeftOutlined className={style.leftElseInfo} onClick={leftElseInfoFN} suppressHydrationWarning/>

    <OnclickButtonLink className={style.buttonGlobalNavigate}  data-value = {'0'} onClick={getValue} >
        განათლება
    </OnclickButtonLink>

    <OnclickButtonLink className={style.buttonGlobalNavigate} data-value = {'1'}  onClick={getValue}>
       დიპლომი
    </OnclickButtonLink>

    <OnclickButtonLink className={style.buttonGlobalNavigate} data-value = {'2'}  onClick={getValue}>
       რეზიუმე
    </OnclickButtonLink>

    <OnclickButtonLink className={style.buttonGlobalNavigate} data-value = {'3'}  onClick={getValue}>
       გამოცდილება
    </OnclickButtonLink>

   </div>
}

export  { Navigate, NavigateGlobalSection };