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
               <span></span>
               <span></span>

            </div>
            <div  className={style.div2}>
               
               <label htmlFor="forLabel2">გვარი</label>
               <input type="text" id='forLabel2'/>
               <span></span>
               <span></span>

            </div>
            <div  className={style.div3}>
                 
               <label htmlFor="forLabel3">მომხმარებელი</label>
               <input type="text" id='forLabel3'/>
                 <span></span>
                 <span></span>
                 <span></span>
                 <span></span>

            </div>
            <div  className={style.div4}>
            
               <label htmlFor="forLabel4">ელ-ფოსტა</label>
               <input type="text" id='forLabel4'/>
                <span></span>
                <span></span>
                <span></span>

            </div>
            <div  className={style.div5}>

               <label htmlFor="forLabel5">პაროლი</label>
               <input type="text" id='forLabel5'/>
                <span></span>
                <span></span>
                <span></span>
                <span></span>

            </div>
            <div  className={style.div6}>

                <label htmlFor="forLabel6">გაიმეორეთ პაროლი</label>
                <input type="text" id='forLabel6'/>
                 <span></span>
                 <span></span>
                 <span></span>
                 <span></span>

            </div>
            <article  className={ `${style.article} ${style.di7Agaim}` }>

                <label htmlFor="fromLabel7">
                 
                   <input type='checkbox' id='fromLabel7'/>
                   <span></span>

                </label>

             <div>
                <p>
                ღილაკზე „რეგისტრაცია“ დაწკაპუნებით, თქვენ დაეთანხმებით ჩვენს
                </p>
                <Link href={'/'}>მოხმარების წესები</Link>
                 <span>"&"</span>
                 <Link href={'/'}>კონფიდენციალობის პოლიტიკა</Link>
             </div>    
                 
            </article>
             <button type='submit'>რეგისტრაცია</button>
         </form>

    </section>
}