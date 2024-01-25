'use client'

import Image from 'next/image'
import styles from './fixedImage.module.css'
import myImage1 from '@/public/image/myImage1.webp'

type fixedImageTP = {
    onClick? : () => void;
}

const FixedImage = (props : fixedImageTP) => {

    return <div className={styles.fixedimagediv}  onClick={props.onClick}>
       <Image
       
       alt='imageFixed'
       src={myImage1}
       width={100}
       suppressHydrationWarning 
       />
    </div>
}

export default FixedImage