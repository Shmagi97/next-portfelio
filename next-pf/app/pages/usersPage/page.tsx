'use client'

import headerFooterNone from '@/app/components/functionsFN/headerFooterNone'
import style from './page.module.scss'
import { useEffect } from 'react'
import { useRecoilUserInfo } from '@/app/recoil/recoilGlobalState'
import SliderPoster from './components/headerSlider/sliderPoster'
import { useGlobalContext } from '@/app/context/context'
import NewUserProjects from './components/newUsersProjects/newUserProjects'
import PopularProjects from './components/popularProjects/populatProjects'

const Users = () => {

    // საჭიროა სურათების სწორად ატვირთვა და წამოღება განიხილე ჩატჯიპიტის შემპთავაზება

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
        <NewUserProjects/> 
        <PopularProjects/>
    </section> : null
}
export default Users