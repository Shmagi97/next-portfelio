'use client'

import Link from 'next/link';
import style from './button.module.scss'
import { useEffect, useState } from 'react';
import { useGlobalContext } from '@/app/context/context';


interface Service {
  service : string;
  statia : string;
  portfelio: string;
}


type propsTp = {
    title : string;
    dropDown? : string;
    getServises? : Service[];
    activeClass? : boolean;
    globalDomPaint? : string;

    numberProp? : boolean;
    clickNumber? : number;
}

const Button = (props : propsTp) => {

  const {  setClickBtnNumber } = useGlobalContext()


    function getGlobalDomPaint () {

      const forMasiv = [ 0, 0, 0, 0 ]

      function ubdateArray ( index : number ){
  
        // forMasiv.fill(0)
        forMasiv[index] = 1
      }    
        
      if ( props.clickNumber !== undefined ){

        ubdateArray ( props.clickNumber )
        setClickBtnNumber (forMasiv)
        
      }
    
      }
   

  // function getGlobalDomPaint () {

  //   if (props.globalDomPaint === 'info') {
       
  //     setCda ( cda == 0 ? cda + 1 : 0 )
    
  //   }
  // }

// function veriosn2 () {
//   setCda ((prevNumber )=> {
//     return (     
//         prevNumber == 0 ? prevNumber + 1 : 0      
//     )       
  
//   })
//   console.log(cda, 'ifshi');
// }

// function veriosn3 () {
//   setCda ((prevNumber )=> (
       
//         prevNumber == 0 ? prevNumber + 1 : 0      
//   ))
//   console.log(cda, 'ifshi');
// }
  

    return <section className={style.buttonsSection}>
        
              <div className={style.buttonDiv}>

                <span></span>
             
                 <Link href={'/'} onClick={getGlobalDomPaint}  className={ `${style.buttonLink} 

                       ${props.activeClass ? style.buttonLinkActive : false }` }>
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