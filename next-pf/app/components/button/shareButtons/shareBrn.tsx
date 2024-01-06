'use client'

import Image, { StaticImageData,  } from 'next/image';
import styles from './clikButtons.module.css'
import { useGlobalContext } from '@/app/context/context';
import { useEffect } from 'react';
import { MouseEvent } from 'react';

type propsTp = {
    img: StaticImageData ;
    clickInfo?: string;
    
}


const ShareClickBtn = (props: propsTp) => {
   
    

    const { imgnumber , setImagenumber,   imgclickinfo, setImageclickinfo} = useGlobalContext ()
    console.log(imgnumber);
  
    // useEffect(()=> {
    //     setImgnumber(props.clickInfo)
    // },[props.clickInfo])

    // function clickLeftVrite () {

    //     setImgnumber(props.clickInfo)

    //     // if(props.left){
    //     //     console.log('left')
    //     // } else {console.log('right')}
    // }

    

    function cda (event : MouseEvent <HTMLButtonElement> ) {
        const value = event.currentTarget.value;
        setImageclickinfo(value)

        if (imgclickinfo === 'left' && imgnumber >= 1){
            
            setImagenumber((prevImgNumber) => prevImgNumber - 1);
            console.log(imgnumber);
           
        } 
        
        
        if (imgclickinfo === 'right' && imgnumber <= 1){

            setImagenumber((prevImgNumber) => prevImgNumber + 1)
            console.log(imgnumber);
        }
       
       
    }
    

    return <>
    
     <button className={styles.btnStyle} value = {props.clickInfo} onClick={ cda }> 
     
        <Image
       
         alt='search'
         src= {props.img}
         width={20}
        />
    
     </button>
    
    </>
}

export default ShareClickBtn