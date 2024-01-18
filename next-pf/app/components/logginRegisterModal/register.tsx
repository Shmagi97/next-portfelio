'use client'

import Link from 'next/link'
import style from './register.module.scss'

export const Register = () => {


    return <section className={style.registerSection}>

             <h2>რეგისტრაცია</h2>

         <form action="#" method='#' className={style.registerForm}>
           
            <div className={style.div1}>

               <label htmlFor="forLabel1">სახელი</label>
               <input type="text" id='forLabel1'/>
               <article>
                 <span></span>
                 <span></span>
               </article>

            </div>
            <div  className={style.div2}>
               
               <label htmlFor="forLabel2">გვარი</label>
               <input type="text" id='forLabel2'/>
               <article>
                 <span></span>
                 <span></span>
               </article>

            </div>
            <div  className={style.div3}>
                 
               <label htmlFor="forLabel3">მომხმარებელი</label>
               <input type="text" id='forLabel3'/>
               <article>
                 <span></span>
                 <span></span>
                 <span></span>
                 <span></span>
               </article>
                

            </div>
            <div  className={style.div4}>
            
               <label htmlFor="forLabel4">ელ-ფოსტა</label>
               <input type="text" id='forLabel4'/>
               <article>
                 <span></span>
                 <span></span>
                 <span></span>
               </article>

            </div>
            <div  className={style.div5}>

               <label htmlFor="forLabel5">პაროლი</label>
               <input type="text" id='forLabel5'/>
               <article>
                 <span></span>
                 <span></span>
                 <span></span>
                 <span></span>
               </article>

            </div>
            <div  className={style.div6}>

                <label htmlFor="forLabel6">გაიმეორეთ პაროლი</label>
                <input type="text" id='forLabel6'/>
                <article>
                 <span></span>
                 <span></span>
                 <span></span>
                 <span></span>
               </article>

            </div>
            <article  className={ `${style.article} ${style.di7Agaim}` }>

                <label htmlFor="fromLabel7">
                 
                   <input className={style.checkbox} type='checkbox' id='fromLabel7'/>
                   <span className={style.checkboxSpan}></span>

                </label>

             <div className={style.textDiv}>
                <p>
                ღილაკზე „რეგისტრაცია“ დაწკაპუნებით, თქვენ დაეთანხმებით ჩვენს
                </p>
                <div className={style.linkDiv}>
                <Link className={style.linkTeg} href={'/'}>მოხმარების წესები</Link>
                 <span>"&"</span>
                 <Link className={style.linkTeg} href={'/'}>კონფიდენციალობის პოლიტიკა</Link>
                 </div>
             </div>    
                 
            </article>
            
                <button type='submit' className={style.buttonSubmit}>რეგისტრაცია</button>
         
         </form>

    </section>
}