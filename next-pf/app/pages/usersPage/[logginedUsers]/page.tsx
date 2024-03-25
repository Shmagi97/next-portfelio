'use client'

import {  useEffect, useState } from 'react'
import style from './page.module.scss'
import headerFooterNone from '@/app/components/functionsFN/headerFooterNone'
import axios from 'axios'
import UserProfile from '../components/userProfile/userProfile'

const LogginedUsers = () => {
    headerFooterNone('true')

    // const [ registerEdUserDataInfo, setRegisterEdUserDataInfo ] = useState (null)
    // console.log(registerEdUserDataInfo, 'user profile');

    // useEffect(()=> {

    //     const localUserInfoED = localStorage.getItem('registerEdUserId')

    //     axios.get(`http://localhost:4000/users/${localUserInfoED}`)
    //      .then((res)=> {
    //         setRegisterEdUserDataInfo(res.data)
        
            
    //      })
   
    // }, [])

    return <section className={style.logginedUsersSection}>
           <UserProfile/>
    </section>
}

export default LogginedUsers



