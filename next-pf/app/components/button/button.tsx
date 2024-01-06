'use client'

import Link from 'next/link';
import style from './button.module.css'


type propsTp = {
    title : string;
    size? : string;
}

const Button = (props : propsTp) => {

    return <div className={style.buttonDiv}>


             <span></span>
    
             <Link href={'/'} className={style.buttonLink}>
                 {props.title}
              </Link>
    
           </div>
   
    
}

export default Button