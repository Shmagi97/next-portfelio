'use client'

import { useState } from 'react'
import style from './loggin.module.scss'
import { notification } from 'antd'

export const LogginModal = () => {

    const [nameValue, setNameValue] = useState('')
    const [paswordValue, setPaswordValue] = useState('')
   
    const submitUser = async (e : any) => {
     e.preventDefault()
       
      const getUserResponse = await fetch(" http://localhost:4000/register ", {

      method: 'POST',
      headers: {
        'Content-Type': 'application/json',
       },
       body: JSON.stringify({ nameValue, paswordValue })
      })

      const getUser = await getUserResponse.json()

      if(getUserResponse.ok){
        
        notification.success({
          message: 'შესვლა ნებადართულია',
          description: `${getUser.loggin}`
        })
        
      } else {
     
        notification.error({
          message: 'შესვლა უარყოფილია',
          description: `${getUser.loggin}`
        })
        
      }

    }

    
    return <div className={style.logginModalDiv}>

            <form action="/register" method="post" className={style.formHtml}>
                 <div>
                   <input type="text" id="forLabel1" value={nameValue} onChange={(e)=> setNameValue(e.target.value)}
                    className={nameValue.length > 0 ? style.inputFocus : undefined}/>
                   <label htmlFor="forLabel1">მომხმარებელი</label>
                 </div>
                 <div>
                   <input type='password' id="forLabel2" value={paswordValue} onChange={(e)=> setPaswordValue(e.target.value)} 
                   className={paswordValue.length > 0 ? style.inputFocus2 : undefined}/>
                   <label htmlFor="forLabel2">პაროლი</label>
                 </div>
                 <button  onClick={submitUser}>
                  <span></span>
                  <span></span>
                  <span></span>
                  <span></span>
                  შესვლა
                </button>
            </form>
        </div>

      

   
}

