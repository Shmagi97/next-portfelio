'use client'

import { useState } from 'react'
import style from './loggin.module.scss'

export const LogginModal = () => {

    const [stringLenght, setStringLenght] = useState(0)
    const [stringLenght2, setStringLenght2] = useState(0)

    function inputFocus (event : React.ChangeEvent < HTMLInputElement >){  
      
      const unputLengs = event.target.value
      setStringLenght(unputLengs.length)
     
    }

    function inputFocus2 (event : React.ChangeEvent < HTMLInputElement > ){

        const unputLengs2 = event.target.value
        setStringLenght2(unputLengs2.length)
    }

    
    return <div className={style.logginModalDiv}>

            <form action="#" method="#" className={style.formHtml}>
                 <div>
                   <input type="text" id="forLabel1" onChange={inputFocus} className={stringLenght > 0 ? style.inputFocus : undefined}/>
                   <label htmlFor="forLabel1">მომხმარებელი</label>
                 </div>
                 <div>
                   <input type="text" id="forLabel2" onChange={inputFocus2} className={stringLenght2 > 0 ? style.inputFocus2 : undefined}/>
                   <label htmlFor="forLabel2">პაროლი</label>
                 </div>
                 <button type="submit">
                  <span></span>
                  <span></span>
                  <span></span>
                  <span></span>
                  შესვლა
                </button>
            </form>
        </div>

      

   
}

