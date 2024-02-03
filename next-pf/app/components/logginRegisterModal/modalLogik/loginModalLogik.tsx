'use client'

import { useGlobalContext } from "@/app/context/context"
import style from './logikModal.module.scss'
import { LogginModal } from "../login/loggin"
import { RegisterAnt } from "../antRegister/registerAnt"
import { useEffect, useState } from "react"
import OnclickBtn from "../../button/onClickBtn/onClickBtn"
import { LeftOutlined, RightOutlined } from "@ant-design/icons"

export const LoginModalLogik = () => {

    const { clickModal } = useGlobalContext()
     
    const [changeClas, setChangeClass] = useState(style.loginModalLogikSection2)
    const [getRegister, setGetregister] = useState (false)

    function modalChaildCheing () {  setGetregister(!getRegister) }
     
    useEffect(()=> {
      
        if (clickModal) {
            setChangeClass(style.loginModalLogikSection)
        } else {
    
            setChangeClass(style.loginModalLogikSection2)
        }

        return () => setChangeClass('')

    }, [clickModal])

     return <section className={changeClas}>
            
               <div className={style.buttonsDiv}>

                 <OnclickBtn onClick={modalChaildCheing}  className={style.onclickBtm}>
                    {
                        !getRegister ? <>რეგისტრაცია <RightOutlined className={style.antLeftRight}/> </> 
                        : <> <LeftOutlined className={style.antLeftRight}/> შესვლა</>
                    } 
                   
                 </OnclickBtn>

               </div>
               
              { 
                !getRegister ? <LogginModal/> :  <RegisterAnt/>
              }

          </section>


   
}