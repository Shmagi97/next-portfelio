'use client'

import FormDisabledDemo from "./formUserInfo/formUserInfoAnt"
import style from './userInfo.module.scss'

export const UserInfo = () => {


    return <section className={style.userInfoSection}>
         <FormDisabledDemo/>
    </section>
}