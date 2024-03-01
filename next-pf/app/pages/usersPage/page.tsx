'use client'

import headerFooterNone from '@/app/components/functionsFN/headerFooterNone'
import style from './page.module.scss'
import { useEffect } from 'react'
import { useRecoilUserInfo } from '@/app/recoil/recoilGlobalState'
import SliderPoster from './components/headerSlider/sliderPoster'
import { useGlobalContext } from '@/app/context/context'

const Users = () => {

    headerFooterNone('true')

    const  { userInfoID , setUserInfoID } = useRecoilUserInfo()
    const { clickModal , setClickModal } = useGlobalContext()
    
    useEffect(()=> {

        const localUserInfoED = localStorage.getItem('registerEdUserId')
        setUserInfoID(localUserInfoED)

         if(!localUserInfoED) setClickModal(true);
    
    },[userInfoID, clickModal])

    return !clickModal ?  <section className={style.usersSection}>

        <SliderPoster/>
       
    </section> : null
}
export default Users