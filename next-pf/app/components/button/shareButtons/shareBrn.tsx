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
    const [delay, setDelay] = useState(3)
    const [chek, setChek] = useState (false)
    const [clear, setClear] = useState <NodeJS.Timeout | null > ( null )
    
  
    // console.log(delay, 'start')
 
    // ტაიპსკრიპტში ბათონზე კლიკისას აზუსტებს ევენთის ტიპს

    // event : MouseEvent <HTMLButtonElement>

     //@@@@@@@@@@@@@

    //  useEffect(() => {
    //     const interval = setTimeout(() => { 
    //       setImagenumber((prevImgNumber) => {
    //         let newImgNumber = prevImgNumber + 1;
    //         if (newImgNumber >= 10) {
    //           newImgNumber = 0;
    //         }
    //         return newImgNumber;
    //       });
    //     }, delay * 1000);

    //     console.log(delay,'ahaa');

    //     return () => clearInterval(interval);

    //   }, [delay, imgnumber]);

     //@@@@@@@@@@@@@

    function clicked ( ) {

        // const value = event.currentTarget.value;

        // setImageclickinfo(value)
        
        
        setDelay(5)
        

         if (delay == 5){
            setDelay(25)
            console.log(delay, 'click')
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