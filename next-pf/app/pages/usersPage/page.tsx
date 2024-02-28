'use client'

import headerFooterNone from '@/app/components/functionsFN/headerFooterNone'
import style from './page.module.scss'
import { useEffect } from 'react'
import axios from 'axios'
import { useRecoilUserInfo } from '@/app/recoil/recoilGlobalState'
import SliderPoster from './components/headerSlider/sliderPoster'

const Users = () => {

    headerFooterNone('true')

    const [ , setUserInfo ] = useRecoilUserInfo()

    useEffect(()=> {

        const localUserInfoED = localStorage.getItem('registerEdUserId')

        axios.get(`http://localhost:4000/users/${localUserInfoED}`)
             .then((res)=> setUserInfo(res.data.userData))

    },[])

    return <section className={style.usersSection}>

        <SliderPoster/>
       
    </section>
}
export default Users