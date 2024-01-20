'use client'

import { useGlobalContext } from "@/app/context/context"
import style from './logikModal.module.scss'
import { LogginModal } from "./loggin"
import { RegisterAnt } from "./registerAnt"
import { useEffect, useState } from "react"
import OnclickBtn from "../button/onClickBtn/onClickBtn"

export const LoginModalLogik = () => {

    const { clickModal } = useGlobalContext()
     
    const [changeClas, setChangeClass] = useState('loginModalLogikSection2')
    const [getRegister, setGetregister] = useState (true)

      
    function takeRegister () {  setGetregister(true)  }

    function modalChaildCheing () {  setGetregister(false) }
     
    useEffect(()=> {
      
        if (clickModal) {
            setChangeClass('loginModalLogikSection')
        } else {
    
            setChangeClass('loginModalLogikSection2')
        }

        return () => setChangeClass('')

    }, [clickModal])

       if ( clickModal && getRegister ) {
 
        return <section className={changeClas}>
            
             <div className={style.buttonsDiv}>
                <OnclickBtn className={style.onclickBtm}>შესვლა</OnclickBtn>
                <OnclickBtn onClick={modalChaildCheing}  className={style.onclickBtm}>რეგისტრაცია</OnclickBtn>
             </div>
              <LogginModal/>
   
              </section>
        
       }  else if ( !clickModal ) { return <section className={changeClas}> </section>   

       } else if ( !getRegister) {
       
       
       return <section className={changeClas}>
               
               <div className={style.buttonsDiv}>
                 <OnclickBtn onClick={takeRegister}  className={style.onclickBtm}>შესვლა</OnclickBtn>
                 <OnclickBtn onClick={modalChaildCheing}  className={style.onclickBtm}>რეგისტრაცია</OnclickBtn>
              </div>
                <RegisterAnt/>

              </section>
              
       } else { false }


   
}