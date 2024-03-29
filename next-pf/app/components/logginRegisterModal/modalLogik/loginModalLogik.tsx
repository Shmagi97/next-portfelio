'use client'

import { useGlobalContext } from "@/app/context/context"
import style from './logikModal.module.scss'
import { LogginModal } from "../login/loggin"
import { RegisterAnt } from "../antRegister/registerAnt"
import OnclickBtn from "../../button/onClickBtn/onClickBtn"
import { LeftOutlined, RightOutlined } from "@ant-design/icons"
import { UserInfo } from "../../registerUserInfo/userInfo"

export const LoginModalLogik = () => {

    const { clickModal, getRegister, setGetregister , registerUserInfo } = useGlobalContext()

    function modalChaildCheing () { 
      
      setGetregister(!getRegister) 

      if (registerUserInfo && getRegister) {

        const leaveUserRegister = window.confirm('პერსონალური ინფორმაციის დარეგისტრირება აუცილებელია თუმცა შესაძლებელია მოგვიანებით, ნამდვილად გსურთ გამოტოვება')
        if(!leaveUserRegister){
          setGetregister(true) 
        } else  false
      } else false
    
    }

     return <section className={ clickModal  ? style.loginModalLogikSection : style.loginModalLogikSectionNone  }>
            
               <div className={ style.buttonsDiv }>

                 <OnclickBtn onClick={modalChaildCheing}  className={style.onclickBtm}>
                    {
                        !getRegister ? <>რეგისტრაცია <RightOutlined className={style.antLeftRight}/> </> 
                        : <> <LeftOutlined className={style.antLeftRight}/> შესვლა</>
                    } 
                   
                 </OnclickBtn>

               </div>
              { 
                !getRegister ?  <LogginModal/>  : getRegister && !registerUserInfo ? <RegisterAnt/> 
                : registerUserInfo && getRegister ?  <UserInfo/> : false
                
              }

          </section>


   
}