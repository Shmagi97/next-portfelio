'use client'

import Link from 'next/link';
import style from './button.module.css'

interface Service {
    name : string;
    description : string;
}


type propsTp = {
    title : string;
    dropDown? : string;
    getServises? : Service[];
}

const Button = (props : propsTp) => {

    console.log(props.getServises)

    return <section className={style.buttonsSection}>
    
              <div className={style.buttonDiv}>


                <span></span>
    
                 <Link href={'/'} className={style.buttonLink}>
                   {props.title}
                 </Link>
    
               </div>

              { props.dropDown ?  (

               <div className={style.dropDown}>
                
                 <ul>
                    <li>
                        {/* {props.getServises.map((el)=> {
                            console.log(el, 'fffff')
                            <p></p>
                        })} */}
                        <p>hhhhhhhhh</p>
                    </li>
                   
                 </ul>

               </div>

               ) : false }
           </section>
    
}

export default Button