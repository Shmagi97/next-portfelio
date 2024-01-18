'use client'

import style from './loggin.module.scss'

export const LogginModal = () => {

    
    return <div className='logginModalSection'  >
          
    
            <div className={style.logginModalDiv}>

               <div className={style.buttonsDiv}>

            
                </div>

               <form action="#" method="#" className={style.formHtml}>
               <div>
                   <input type="text" id="forLabel1"/>
                   <label htmlFor="forLabel1">მომხმარებელი</label>
               </div>
               <div>
                   <input type="text" id="forLabel2"/>
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

      

    </div>
}

