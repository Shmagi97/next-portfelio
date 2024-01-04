'use client'

import Link from 'next/link';
import style from './button.module.css'


type propsTp = {
    title : string;
    size? : string;
}

const Button = (props : propsTp) => {

    return <Link href={'/'} className={style.buttonDiv}>
             
             {props.title}

           </Link>
    
    
   
    
}

export default Button