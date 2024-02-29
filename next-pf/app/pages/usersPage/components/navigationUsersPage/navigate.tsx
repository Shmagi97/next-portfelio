'use client'

import style from './navigate.module.scss'

import { useRecoilValue } from 'recoil'
import { getUserInfoAxios } from '@/app/recoil/recoilGlobalState'

import HomeMessage from './homeMessage/homeMessage'
import Search from './searchUsers/search'
import MeModal from './meModalUsers/meModal'

const Navigate = () => {

    const GetUserData = useRecoilValue(getUserInfoAxios)
    let userData
    if (GetUserData) userData = GetUserData.data.userData

    return <nav className={style.navTeg}>

             <HomeMessage/>
                    
             <div className={style.usersAndNames}>
                <p>{userData?.companyName}</p>
             </div>

             <div className={style.seracDiv}>

               <Search/>

               <MeModal/>
                    
             </div>
            </nav>

   
}

export default Navigate