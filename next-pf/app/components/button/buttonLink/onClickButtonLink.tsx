'use client'

import React, { MouseEvent, ReactNode } from "react"
import style from './btnLink.module.scss'

interface Service {
    service : string;
    statia : string;
   
  }

interface BtnLink {
    onClick? : ( Event : MouseEvent < HTMLButtonElement > ) => void;
    children : ReactNode;
    className? : string;
    getServises? : Service[];
    dropDown? : string;
    value? : number;
}

 const OnclickButtonLink : React.FC < BtnLink  > = ( { onClick, children, className, getServises, dropDown, value, ...restProps } ) => {

    const dinamikClasName = `${style.buttonDiv} ${className || ''}`
   
    return (
        
        <section className={style.buttonsSection}>

             <button onClick={onClick}  className={dinamikClasName}  {...restProps} value={value}>

             <span></span>

                  {children}

             </button>

        { dropDown ?  (

          <div className={style.dropDown}>
 
               <ul>
 
              {getServises?.map((el, index)=> (
   
                 <li key={index}>

                 { 

                   dropDown === 'servisebi' ?  <p>{el.service}</p> 
                   : dropDown === 'statiebi' ?  <p>{el.statia}</p> 
                   : false
     
                  }

                 </li>

                 ))}
    
                 </ul>

           </div>

                  ) : false }
             

    </section>
        
    )
}

export default OnclickButtonLink