'use client'

import { useGlobalContext } from "@/app/context/context"
import style from './logikModal.module.scss'
import { LogginModal } from "../login/loggin"
import { RegisterAnt } from "../antRegister/registerAnt"
import OnclickBtn from "../../button/onClickBtn/onClickBtn"
import { LeftOutlined, RightOutlined } from "@ant-design/icons"
import { UserInfo } from "../../registerUserInfo/userInfo"

export const LoginModalLogik = () => {

    const { clickModal, getRegister, setGetregister , registerUserInfo} = useGlobalContext()

    function modalChaildCheing () {  setGetregister(!getRegister) }

     return <section className={ clickModal  && !registerUserInfo ? style.loginModalLogikSection 
            : !clickModal && !registerUserInfo ? style.loginModalLogikSectionNone : style.loginModalUserRegister }>
            
               <div className={ (clickModal  && !registerUserInfo )|| (!clickModal && !registerUserInfo) 
                    ? style.buttonsDiv : style.buttonsDivNone}>

                 <OnclickBtn onClick={modalChaildCheing}  className={style.onclickBtm}>
                    {
                        !getRegister ? <>რეგისტრაცია <RightOutlined className={style.antLeftRight}/> </> 
                        : <> <LeftOutlined className={style.antLeftRight}/> შესვლა</>
                    } 
                   
                 </OnclickBtn>

               </div>
               
              { 
                !getRegister ? <LogginModal/> : getRegister && !registerUserInfo ? <RegisterAnt/> 
                : registerUserInfo && getRegister ?  <UserInfo/> : false
                
              }

          </section>


   
}