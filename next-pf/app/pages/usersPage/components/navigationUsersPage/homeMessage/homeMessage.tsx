'use client'

import { useRouter } from 'next/navigation'
import style from './homeMessage.module.scss'

import { 
    DollarOutlined,
    HomeOutlined,
    MessageOutlined,
    NotificationOutlined,
    UsergroupAddOutlined } 
 from '@ant-design/icons'
 
import { useRecoilUserInfo } from '@/app/recoil/recoilGlobalState'

const HomeMessage = () => {

    const { setMeclick } = useRecoilUserInfo()

    const usersHomePage = useRouter()

   return <div className={style.navDiv}>

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
   
}

export default HomeMessage