'use client'

import style from './loggin.module.scss'

export const LogginModal = () => {

    return <section className={style.modalSection}>

        <div>
            <h2>შესვლა</h2>
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

    </section>
}

