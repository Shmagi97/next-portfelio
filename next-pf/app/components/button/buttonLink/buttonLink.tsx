'use client'

import Link from 'next/link';
import style from './buttonLink.module.scss'
import { useGlobalContext } from '@/app/context/context';
import { useEffect, useState } from 'react';

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
    clickNumber? : number;
    hrefProp? : string;
    propGlobalSection? : boolean;
    
}

const Button = (props : propsTp) => {
  
  const [href, setHref] = useState('')
  const {  setClickBtnNumber, globalChildSection, setClickedFixedImage , } = useGlobalContext()


  
  useEffect(()=> {
   
      if ( props.hrefProp !== undefined){
         
        setHref( props.hrefProp)

      } else { undefined }

      return () => setHref('')
    
  }, [href])

    function getGlobalDomPaint () {
  
      const forMasiv = [ 0, 0, 0, 0 ]
      console.log('rame');
      
      function ubdateArray ( index : number ){
  
        // forMasiv.fill(0)
        forMasiv[index] = 1
      }    
        
      if ( props.clickNumber !== undefined ){

        ubdateArray ( props.clickNumber )
        setClickBtnNumber (forMasiv)
        
      } else ( undefined )

      if ( props.propGlobalSection ){

        globalChildSection.current?.classList.replace('sectionNone', 'searchSection')
        setClickedFixedImage(true)

      } else {  false }
      
    
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
             
                 <Link href={ href } onClick={  props.propGlobalSection ? getGlobalDomPaint : undefined}  className={ `${style.buttonLink} 

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
                    : false
                    
                    }
            
                   </li>
                ))}
                   
                 </ul>

               </div>

               ) : false }
           </section>
    
}

export default Button