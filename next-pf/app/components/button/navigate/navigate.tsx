'use client'

import Button from "../button"
import style from './navigate.module.css'

const Navigate = () => {

    const servises = [
       { service: '1', statia: '4' , portfelio: '7'} ,
       { service: '2', statia: '5' , portfelio: '8'} ,
       {service: '3', statia: '6' , portfelio: '9'} ,
    ]
    
  
    return <div className={style.cont}>
    
     <Button title = 'მთავარი'   activeClass  />
     <Button title = 'სერვისები' activeClass  dropDown = 'first' getServises = {servises}/>
     <Button title = 'სტატიები' activeClass dropDown = 'second' getServises = {servises}/>
     <Button title = 'პორტფელიო' activeClass dropDown = 'Three' getServises = {servises}/>

    
    </div>
}

export default Navigate