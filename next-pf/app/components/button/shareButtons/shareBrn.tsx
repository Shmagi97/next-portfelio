'use client'

import Image, { StaticImageData,  } from 'next/image';
import styles from './clikButtons.module.css'
import { useGlobalContext } from '@/app/context/context';
import { useEffect } from 'react';
// import { MouseEvent } from 'react';

type propsTp = {
    img: StaticImageData ;
    clickInfo?: string;
    left? : string;
    right? : string;
}


const ShareClickBtn = (props: propsTp) => {
   
    
    const {  setImagenumber  } = useGlobalContext ()

    // ტაიპსკრიპტში ბათონზე კლიკისას აზუსტებს ევენთის ტიპს

    // event : MouseEvent <HTMLButtonElement>
 
    function cda ( ) {

        // const value = event.currentTarget.value;

        // setImageclickinfo(value)
     
        if (props.left ){
            
            setImagenumber((prevImgNumber) => prevImgNumber -1);
 
        } else {   setImagenumber((prevImgNumber) => prevImgNumber +1)    }
        

        // if (props.right ){

        //     setImagenumber((prevImgNumber) => prevImgNumber +1)        
        // }
      
    }
    

    return <>
    
     <div className={styles.btnStyle} onClick={ cda }> 
     
        <Image
       
         alt='search'
         src= {props.img}
         width={20}
        />
    
     </div>
    
    </>
}

export default ShareClickBtn