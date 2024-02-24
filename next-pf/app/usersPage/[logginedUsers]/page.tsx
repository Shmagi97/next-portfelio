'use client'

import { useState } from 'react'
import style from './page.module.scss'

const LogginedUsers = () => {

    const [userData, setUserData] = useState (null)

    const userId = '65d8b1cfca245fe918e15a22'

    // useEffect(()=> {

    //     axios.get(`http://localhost:4000/users/${userId}`)
    //      .then((res)=> {
    //         setUserData(res.data)
    //         console.log(res);
            
    //      })

        
    // }, [])

    return <section className={style.logginedUsersSection}>
   
    </section>
}

export default LogginedUsers



