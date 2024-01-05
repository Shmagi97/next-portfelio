'use client'


import Image, { StaticImageData,  } from 'next/image';

import styles from './clikButtons.module.css'


type propsTp = {
    img: StaticImageData ;
    
}


const ShareClickBtn = (props: propsTp) => {

    console.log(props.img);
    
    return <>
    
     <div className={styles.btnStyle}> 
        <Image
         alt='search'
         src= {props.img}
         width={15}
        />
    
     </div>
    
    </>
}

export default ShareClickBtn