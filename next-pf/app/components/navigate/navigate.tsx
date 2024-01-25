'use client'

import { useGlobalContext } from "@/app/context/context"
import style from './navigate.module.scss'
import { GlobalOutlined, LeftOutlined  } from "@ant-design/icons"
import OnclickButtonLink from "../button/buttonLink/onClickButtonLink"
import Link from "next/link"
import buttonClickNumber from "../button/buttonLink/functions/buttonClickNumber"
import { MouseEvent } from "react"
import { numberGlobalSection } from "../functionsFN/numberGlobalSection"

const Navigate = () => {

    const servises = [
       { service: '1', statia: '4' } ,
       { service: '2', statia: '5' } ,
       {service: '3', statia: '6' } ,
    ]

    const { clickModal , setClickModal, globalChildSection, setClickGlobalDinamikChild } = useGlobalContext() 

    function logginModalFn () {  setClickModal(!clickModal) }

    function clickPortfelio () {

        globalChildSection.current?.classList.replace('sectionNone', 'searchSection')
        numberGlobalSection(0, setClickGlobalDinamikChild)
   
    }


    return <div className={style.cont} >
     <GlobalOutlined  className={style.logginAntIcon} onClick={logginModalFn} suppressHydrationWarning/>

     <OnclickButtonLink >
         <Link href={'/'}  className={style.buttonLink}>
            მთავარი
         </Link>
     </OnclickButtonLink>

     <OnclickButtonLink getServises = {servises} dropDown = 'servisebi'>
         <Link href={'/servisePage'}  className={style.buttonLink}>
         სერვისები
         </Link>
     </OnclickButtonLink>

     <OnclickButtonLink  getServises = {servises} dropDown = 'statiebi'>
         <Link href={'/statiebiPage'}  className={style.buttonLink}>
         სტატიები
         </Link>
     </OnclickButtonLink>
    
     <OnclickButtonLink onClick={clickPortfelio}>
           <article className={style.articlePortfelio}>პორტფელიო</article>
     </OnclickButtonLink>
    
    
    </div>
      
}

const NavigateGlobalSection = () => {

    
  const {  setClickBtnNumber } = useGlobalContext()

    function leftElseInfoFN () {
         const getElseNumbers = [0, 0, 0, 0]
        setClickBtnNumber(getElseNumbers)
    }

    function getValue (event : MouseEvent < HTMLButtonElement >) {
     
     const valueNumber =  event.currentTarget.getAttribute('data-value')
     
      if(valueNumber) buttonClickNumber(parseInt(valueNumber) , setClickBtnNumber)
     
    }

    return <div className={style.contGlobalSection}>

    <LeftOutlined className={style.leftElseInfo} onClick={leftElseInfoFN} suppressHydrationWarning/>

    <OnclickButtonLink className={style.buttonGlobalNavigate} data-value = {'0'} onClick={getValue} >
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