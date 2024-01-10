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
    
     <Button title = 'მთავარი'/>
     <Button title = 'სერვისები'  dropDown = 'first' getServises = {servises}/>
     <Button title = 'სტატიები'  dropDown = 'second' getServises = {servises}/>
     <Button title = 'პორტფელიო' dropDown = 'Three' getServises = {servises}/>

    
    </div>
}

export default Navigate