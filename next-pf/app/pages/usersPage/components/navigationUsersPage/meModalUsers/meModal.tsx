'use client'

import style from './meModal.module.scss'

import Image from 'next/image'
import img1 from '@/public/image/myImage1.webp'
import OnclickBtn from '@/app/components/button/onClickBtn/onClickBtn'
import { getUserInfoAxios, useRecoilUserInfo } from '@/app/recoil/recoilGlobalState'
import { useRouter } from 'next/navigation'
import {   DownOutlined }  from '@ant-design/icons'
import { useRecoilValue } from 'recoil'

const MeModal = () => {

    const { meClick, setMeclick } = useRecoilUserInfo()

    const signOutRouter = useRouter()
    const viewProfile = useRouter()

    const GetUserData = useRecoilValue(getUserInfoAxios)
    let userData
    if (GetUserData) userData = GetUserData.data.userData

    return <div>
                    
            <div onClick={()=> {
            setMeclick(!meClick)
            }}>

                <p>Me</p>
                <DownOutlined
                className={style.downIqon}
                />
            </div>

                <Image
                alt='myImage'
                src={img1}
                width={30}
                className={style.usersImage}
                />

            <div className={ meClick ?  style.MeButtonModal : style.MeButtonModalNone}>
                <div>
                    <Image
                    alt='myImage'
                    src={img1}
                    width={50}
                    className={style.usersImageMeModal}
                    />
                    <h1>{userData?.nameAndSurname}</h1>
                </div>
                <OnclickBtn className={style.btnProfile}
                            onClick={()=> {
                                viewProfile.push(`/pages/usersPage/${localStorage.getItem('registerEdUserId')}`)
                                setMeclick(false)
                            }}
                >
                    view profile
                </OnclickBtn>

                <OnclickBtn className={style.btnProfile}>
                   Upload your ad
                </OnclickBtn>

                <OnclickBtn 
                    className={style.btnProfile} 
                    onClick={()=> {
                        setMeclick(false)
                        signOutRouter.push('/')
                        localStorage.removeItem('registerEdUserId')
                    }}
                    >
                    Sign Out
                </OnclickBtn>
            
            </div>

    </div>
}

export default MeModal