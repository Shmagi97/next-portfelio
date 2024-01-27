'use client'

import { useGlobalContext } from "@/app/context/context"
import style from './navigate.module.scss'
import { GlobalOutlined, LeftOutlined  } from "@ant-design/icons"
import OnclickButtonLink from "../button/buttonLink/onClickButtonLink"
import Link from "next/link"
import { MouseEvent } from "react"
import  globalNumberSection  from "../functionsFN/numberGlobalSection"

const Navigate = () => {

    const servises = [
       { service: '1', statia: '4' } ,
       { service: '2', statia: '5' } ,
       {service: '3', statia: '6' } ,
    ]

    const { clickModal , setClickModal, globalChildSection, setClickGlobaldNumber } = useGlobalContext() 

    function logginModalFn () {  setClickModal(!clickModal) }

    function clickPortfelio () {

        globalChildSection.current?.classList.replace('sectionNone', 'searchSection')
        globalNumberSection(1, 'globalSectionChildren', 0, setClickGlobaldNumber)
   
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

type propsTP = {
    clasName : string;
}

const NavigateGlobalSection = (props : propsTP) => {

    
  const {  setClickGlobaldNumber, clickGlobaldNumber } = useGlobalContext()

  type DataGlobalClickNumber = [
    {globalNavigateNumber : number []} ,
    { globalSectionChildren :  number []} ,
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