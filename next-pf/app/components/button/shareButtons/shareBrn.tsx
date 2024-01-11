'use client'

import Image, { StaticImageData,  } from 'next/image';
import styles from './clikButtons.module.css'
import { useGlobalContext } from '@/app/context/context';
import SetIntervalFn from '../../setInterval/setInterval';
import Link from 'next/link';
import facebook from '@/public/icons/facebook.png'
import linkedin from '@/public/icons/linkedin.png'
// import { MouseEvent } from 'react';

type propsTp = {
    img: StaticImageData ;
    left? : string;
    right? : string;
    hoverShare? : string;
}


const ShareClickBtn = (props: propsTp) => {
    
    const {  setImagenumber , imgnumber , setChekDelay, setUsefectRerender } = useGlobalContext ()

    // const [clear, setClear] = useState <NodeJS.Timeout | null > ( null )
 
    // ტაიპსკრიპტში ბათონზე კლიკისას აზუსტებს ევენთის ტიპს

    // event : MouseEvent <HTMLButtonElement>
      
    // console.log(props);
    
    function clicked ( ) {

        // const value = event.currentTarget.value;

        // setImageclickinfo(value)

        setChekDelay(true)

     
        if (props.left && imgnumber > -1){
            
            setImagenumber((prevImgNumber) => prevImgNumber -1);
            setUsefectRerender((prevImgNumber) => prevImgNumber -1);

            if (imgnumber == 0){
                setImagenumber(9);
            }
 
        } 
        
        
        if (props.right && imgnumber < 10 ){

            setImagenumber((prevImgNumber) => prevImgNumber +1)
            setUsefectRerender((prevImgNumber) => prevImgNumber +1)
            
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

        {
          props.hoverShare ? (

            <div className={styles.shareHoverDiv}>

                <ul className={styles.shareHoverUl}>
                    <li>
                         <Link href={'https://www.facebook.com/profile.php?id=100008644398321'} target='_blank'>
                           
                            <Image
                             alt='facebook'
                             src={facebook}
                             width={20}
                            />
                         </Link>
                     </li>
                </ul>

                <ul className={styles.shareHoverUl}>
                    <li> 
                        <Link href={'https://www.linkedin.com/in/shmagi-narsavidze-20a972273/'} target='_blank'>
                            <Image
                            alt='linkedln'
                            src={linkedin}
                            width={20}
                            />
                        </Link>
                 </li>
                </ul>

            </div>
             
            

          ) : false
        
    
        }
    
     </div>
    
    </>
}

export default ShareClickBtn