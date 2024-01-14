'use client'

import Link from 'next/link';
import style from './button.module.css'
import globalBtn from '@/app/global.module.scss'

interface Service {
  service : string;
  statia : string;
  portfelio: string;
}


type propsTp = {
    title : string;
    dropDown? : string;
    getServises? : Service[];
}

const Button = (props : propsTp) => {

    return <section className={style.buttonsSection}>
    
              <div className={style.buttonDiv}>

                <span></span>
    
                 <Link href={'/'} className={`${style.buttonLink} ${ globalBtn.colorBtn}`}>
                   {props.title}
                 </Link>
    
               </div>

              { props.dropDown ?  (

               <div className={style.dropDown}>
                
                 <ul>
                
                {props.getServises?.map((el, index)=> (
                  
                   <li key={index}>

                    { 

                     props.dropDown === 'first' ?  <p>{el.service}</p> 
                    :  props.dropDown === 'second' ?  <p>{el.statia}</p> 
                    : <p>{el.portfelio}</p>
                    
                    }
            
                   </li>
                ))}
                   
                 </ul>

               </div>

               ) : false }
           </section>
    
}

export default Button