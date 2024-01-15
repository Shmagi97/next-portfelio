'use client'

import { useState } from "react"
import Button from "../button"
import style from './navigate.module.scss'

const Navigate = () => {



    const servises = [
       { service: '1', statia: '4' , portfelio: '7'} ,
       { service: '2', statia: '5' , portfelio: '8'} ,
       {service: '3', statia: '6' , portfelio: '9'} ,
    ]

 
    return <div className={style.cont}>
    
     <Button title = 'მთავარი'   activeClass   />
     <Button title = 'სერვისები' activeClass   dropDown = 'first' getServises = {servises}/>
     <Button title = 'სტატიები' activeClass    dropDown = 'second' getServises = {servises}/>
     <Button title = 'პორტფელიო' activeClass    dropDown = 'Three' getServises = {servises}/>

    
    </div>
      
}

const NavigateGlobalSection = () => {


    return <div className={style.contGlobalSection}>
    
    <Button title = 'ინფო' globalDomPaint = 'info' activeClass  clickNumber = {0} />
    <Button title = 'დიპლომი' globalDomPaint = 'diplomi'  activeClass clickNumber = {1} />
    <Button title = 'რეზიუმე'  globalDomPaint = 'reziume'  activeClass clickNumber = {2} />
    <Button title = 'გამოცდილება'  globalDomPaint = 'gamocdileba'  activeClass clickNumber = {3} />
   
   </div>
}

export  { Navigate, NavigateGlobalSection };