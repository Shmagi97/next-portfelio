'use client'

import style from './navigate.module.scss'

import { useRecoilValue } from 'recoil'
import { getUserInfoAxios } from '@/app/recoil/recoilGlobalState'

import HomeMessage from './homeMessage/homeMessage'
import Search from './searchUsers/search'
import MeModal from './meModalUsers/meModal'
import Image from 'next/image'

const Navigate = () => {

    const GetUserData = useRecoilValue(getUserInfoAxios)
    let userData
    if (GetUserData) userData = GetUserData.data.userData
    // console.log(userData?.newUploadPhoto[0].originFileObj.uid );
    

    return <nav className={style.navTeg}>

             <HomeMessage/>
                    
             <div className={style.usersAndNames}>
                <p>{userData?.companyName}</p>
             </div>
             {/* <div>
              <Image
              alt='myImage'
              src={ ` /registerEdUserInfo/usersPhotous${userData?.newUploadPhoto[0].originFileObj.uid} ` }
              width={40}
              height={40}
              />
             </div> */}

             <div className={style.seracDiv}>

               <Search/>

               <MeModal/>
                    
             </div>
            </nav>

   
}

export default Navigate