'use client'

import { useGlobalContext } from "@/app/context/context"
import style from './loggin.module.scss'
import { LogginModal } from "./loggin"
import { RegisterAnt } from "./registerAnt"
import { useEffect, useState } from "react"
import OnclickBtn from "../button/onClickBtn/onClickBtn"

export const LoginModalLogik = () => {

    const { clickModal } = useGlobalContext()
     
    const [changeClas, setChangeClass] = useState([style.loginModalLogikSection2])
    const [getRegister, setGetregister] = useState (true)

      
    function ragaca () {  setGetregister(true)  }

    function modalChaildCheing () {  setGetregister(false) }
     
    useEffect(()=> {
      
        if (clickModal) {
            setChangeClass([style.loginModalLogikSection])
        } else {
    
            setChangeClass([style.loginModalLogikSection2])
        }

        return () => setChangeClass([])

    }, [clickModal])

       if ( clickModal && getRegister ) {

       
        return <section className={changeClas.join()}>

             <OnclickBtn >შესვლა</OnclickBtn>
             <OnclickBtn onClick={modalChaildCheing}>რეგისტრაცია</OnclickBtn>

              

                 <LogginModal/>

             
        </section>
        
       }  else if ( !clickModal ) {
   
            return <section className={changeClas.join()}>
            
      </section>   

       } else if ( !getRegister) {
       
       
       return <section className={changeClas.join()}>

             <OnclickBtn onClick={ragaca}>შესვლა</OnclickBtn>
             <OnclickBtn onClick={modalChaildCheing}>რეგისტრაცია</OnclickBtn>
              

                <RegisterAnt/>

             
        </section>
       }


   
}