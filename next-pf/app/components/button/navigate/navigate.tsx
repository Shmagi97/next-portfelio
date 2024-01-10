'use client'

import { StringDecoder } from "string_decoder"
import Button from "../button"
import style from './navigate.module.css'

const Navigate = () => {

    const servises = [{
        service1: '1', service2: '2',  service3: '3', 
    }]
    
  
    return <div className={style.cont}>
    
     <Button title = 'მთავარი'/>
     <Button title = 'სერვისები'  dropDown = 'yes' getServises = {servises}/>
     <Button title = 'სტატიები'  dropDown = 'yes' />
     <Button title = 'პორტფელიო'/>

    
    </div>
}

export default Navigate