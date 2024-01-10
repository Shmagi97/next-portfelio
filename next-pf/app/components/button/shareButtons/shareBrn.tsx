'use client'

import Image, { StaticImageData,  } from 'next/image';
import styles from './clikButtons.module.css'
import { useGlobalContext } from '@/app/context/context';
import SetIntervalFn from '../../setInterval/setInterval';
// import { MouseEvent } from 'react';

type propsTp = {
    img: StaticImageData ;
    left? : string;
    right? : string;
}


const ShareClickBtn = (props: propsTp) => {
    
    const {  setImagenumber , imgnumber , setChekDelay } = useGlobalContext ()

    // const [clear, setClear] = useState <NodeJS.Timeout | null > ( null )
 
    // ტაიპსკრიპტში ბათონზე კლიკისას აზუსტებს ევენთის ტიპს

    // event : MouseEvent <HTMLButtonElement>


    function clicked ( ) {

        // const value = event.currentTarget.value;

        // setImageclickinfo(value)

        setChekDelay(true)

     
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
       <SetIntervalFn/>
        <Image
       
         alt='search'
         src= {props.img}
         width={20}
        />
    
     </div>
    
    </>
}

export default ShareClickBtn