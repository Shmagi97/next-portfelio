'use client'

import { useGlobalContext } from "@/app/context/context"
import Button from "../button/buttonLink/buttonLink"
import style from './navigate.module.scss'
import { GlobalOutlined, LeftOutlined  } from "@ant-design/icons"

const Navigate = () => {

    const servises = [
       { service: '1', statia: '4' , portfelio: '7'} ,
       { service: '2', statia: '5' , portfelio: '8'} ,
       {service: '3', statia: '6' , portfelio: '9'} ,
    ]

    const { clickModal , setClickModal,  } = useGlobalContext() 

    function logginModalFn () {  setClickModal(!clickModal) }

    return <div className={style.cont} >
     <GlobalOutlined className={style.logginAntIcon} onClick={logginModalFn}/>
     <Button title = 'მთავარი'   activeClass hrefProp = '/' />
     <Button title = 'სერვისები' activeClass hrefProp = '/servisePage'  dropDown = 'first' getServises = {servises}/>
     <Button title = 'სტატიები' activeClass   hrefProp = '/statiebiPage'  dropDown = 'second' getServises = {servises}/>
     <Button title = 'პორტფელიო' activeClass  propGlobalSection  getServises = {servises}/>
    
    
    </div>
      
}

const NavigateGlobalSection = () => {

    
  const {  setClickBtnNumber } = useGlobalContext()

    function leftElseInfoFN () {
         const getElseNumbers = [0, 0, 0, 0]
        setClickBtnNumber(getElseNumbers)
    }

    return <div className={style.contGlobalSection}>

    <LeftOutlined className={style.leftElseInfo} onClick={leftElseInfoFN} suppressHydrationWarning/>
    <Button title = 'განათლება' activeClass  clickNumber = {0} propGlobalSection/>
    <Button title = 'დიპლომი'   activeClass clickNumber = {1} propGlobalSection/>
    <Button title = 'რეზიუმე'  activeClass clickNumber = {2} propGlobalSection/>
    <Button title = 'გამოცდილება'  activeClass clickNumber = {3} propGlobalSection/>

   </div>
}

export  { Navigate, NavigateGlobalSection };