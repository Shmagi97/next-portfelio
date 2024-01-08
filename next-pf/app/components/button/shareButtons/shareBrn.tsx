'use client'

import Image, { StaticImageData,  } from 'next/image';
import styles from './clikButtons.module.css'
import { useGlobalContext } from '@/app/context/context';
import { useEffect, useMemo, useState } from 'react';
// import { MouseEvent } from 'react';

type propsTp = {
    img: StaticImageData ;
    clickInfo?: string;
    left? : string;
    right? : string;
}


const ShareClickBtn = (props: propsTp) => {
   
    
    const {  setImagenumber , imgnumber } = useGlobalContext ()
    const [delay, setDelay] = useState(2)
    const [clear, setClear] = useState <NodeJS.Timeout | null > ( null )

    // console.log(delay, 'start')
 
    // ტაიპსკრიპტში ბათონზე კლიკისას აზუსტებს ევენთის ტიპს

    // event : MouseEvent <HTMLButtonElement>

   useEffect(()=> {

     if (clear){
       clearInterval(clear)
       setClear(null)
       console.log( clear, 'clear');
       
     }
    
     const newClear = setInterval (autoClick, delay * 1000)
     setClear(newClear)
     console.log(newClear, 'daseta');
     return () => {

        if(newClear){
            clearInterval(newClear)  
        }
    }

   },[delay])

    const limit = 10
    let num = 0

    function autoClick () {

            
            num += 1

           setImagenumber(num)
        
        if ( num >= limit) {
          
            num = 0
            setImagenumber(num)      

        }
 
        
     }

    function clicked ( ) {

        // const value = event.currentTarget.value;

        // setImageclickinfo(value)
        
        
        setDelay(25)
         console.log(delay, 'click')
        
        if (props.right){
            
        }
     
        if (props.left && imgnumber > -1){
            
            setImagenumber((prevImgNumber) => prevImgNumber -1);

            if (imgnumber == 0){
                setImagenumber(9);
            }
 
        } 
        
        
        if (props.right && imgnumber < 10 ){

            setImagenumber((prevImgNumber) => prevImgNumber +1)
            
            if (imgnumber == 9){
                setImagenumber(0);
            }
        }
      
    }
    

    return <>
    
     <div className={styles.btnStyle} onClick={ clicked }> 
     
        <Image
       
         alt='search'
         src= {props.img}
         width={20}
        />
    
     </div>
    
    </>
}

export default ShareClickBtn