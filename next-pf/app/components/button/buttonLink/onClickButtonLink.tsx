'use client'

import React, { MouseEvent, ReactNode } from "react"
import style from './btnLink.module.scss'
import Link from "next/link";
import numberGlobalSection from "../../functionsFN/numberGlobalSection";
import { useGlobalContext } from "@/app/context/context";

interface Service {
    service? : string;
    statia? : string;
   
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
    
    const {  setClickGlobaldNumber } = useGlobalContext()

    function getValueLI(event : React.MouseEvent < HTMLLIElement >){

      const getValue = event.currentTarget.value
      numberGlobalSection(2, 'servisPageAnimNavigate', getValue, setClickGlobaldNumber)  
    }

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
   
                 <li key={index} value={index} onClick={getValueLI}>

                 { 

                   dropDown === 'servisebi' ?  
                   <Link href={'/servisePage'} className={style.dropDownLink}>
                     {el.service} 
                     </Link>

                   : dropDown === 'statiebi' && el.statia !== undefined ?  
                    <Link href={'/'} className={style.dropDownLink}> 
                    {el.statia} 
                    </Link> 

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