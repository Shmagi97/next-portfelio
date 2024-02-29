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
    const { clickModal } = useGlobalContext()

    // გასაწერია პროგრამა თუ უზერი არ არის დალოგინებული და ისე მოხვდა ამ ფეიჯზე 
    
    useEffect(()=> {

        const localUserInfoED = localStorage.getItem('registerEdUserId')

        setUserInfoID(localUserInfoED)
    
    },[userInfoID])

    return !clickModal ?  <section className={style.usersSection}>

        <SliderPoster/>
       
    </section> : null
}
export default Users