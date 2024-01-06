'use client'

import Button from "../button"
import style from './navigate.module.css'
// import { useEffect } from "react"
// import { useGlobalContext } from "@/app/context/context"


const Navigate = () => {

    // const {userId, setUserId} = useGlobalContext ()

    // useEffect(()=> {
    //   setUserId('2')
    // }, [])

    

    return <div className={style.cont}>
    
     <Button title = 'მთავარი'/>
     <Button title = 'სერვისები' size = '20'/>
     <Button title = 'სტატიები'/>
     <Button title = 'პორტფელიო'/>

    
    </div>
}

export default Navigate