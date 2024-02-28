'use client'

import {  DollarOutlined, DownOutlined, HomeOutlined, MessageOutlined, NotificationOutlined, SearchOutlined, UsergroupAddOutlined } from '@ant-design/icons'
import style from './header.module.scss'
import Image from 'next/image'
import img1 from '@/public/image/myImage1.webp'
import { useState } from 'react'
import OnclickBtn from '@/app/components/button/onClickBtn/onClickBtn'
import { useRecoilUserInfo } from '@/app/recoil/recoilGlobalState'
import { useRouter } from 'next/navigation'

 const Header = () => {

    const [meClick, setMeclick] = useState( false )

    const [userInfo] = useRecoilUserInfo()

    const signOutRouter = useRouter()
    const viewProfile = useRouter()
    const usersHomePage = useRouter()
    
//    console.log(userInfo);  

    return <section className={style.headerSection}>

        <nav className={style.navTeg}>
              <div className={style.navDiv}>
                <article onClick={()=> {
                    usersHomePage.push('/pages/usersPage')
                    setMeclick(false)
                }}>
                   <HomeOutlined className={style.iqons}/>
                   <p>Home</p> 
                    
                </article>

                <article>
                   <UsergroupAddOutlined  className={style.iqons}/>
                   <p>My Network</p>
                </article>

                <article>
                  <DollarOutlined className={style.iqons}/>
                  <p>Jobs</p>
                </article>
                
                <article>
                  <MessageOutlined className={style.iqons}/>
                  <p>Messaging</p>
                </article>

                <article>
                  <NotificationOutlined className={style.iqons}/>
                  <p>Notifications</p>
                </article>
                
              </div>
              
              <div className={style.usersAndNames}>
                  <p>{userInfo.companyName}</p>
              </div>

              <div className={style.seracDiv}>

                <div>
                    <input type="search" placeholder='search...'/>
                    <SearchOutlined
                    className={style.searchIqon}
                    />
                </div>

                <div>
                    
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
                            <h1>{userInfo.nameAndSurname}</h1>
                        </div>
                        <OnclickBtn className={style.btnProfile}
                                    onClick={()=> {
                                       const getUserId = localStorage.getItem('registerEdUserId')
                                       viewProfile.push(`/pages/usersPage/${getUserId}`)
                                       setMeclick(false)
                                    }}
                        >
                            view profile
                        </OnclickBtn>
                        <OnclickBtn 
                            className={style.btnProfile} 
                            onClick={()=> {
                                signOutRouter.push('/')
                                localStorage.removeItem('registerEdUserId')
                            }}
                            >
                           Sign Out
                        </OnclickBtn>
                     
                    </div>
            
                </div> 
                
              </div>
        </nav>
         
    </section>
}

export default Header