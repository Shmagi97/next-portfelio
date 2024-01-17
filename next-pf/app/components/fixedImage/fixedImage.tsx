'use client'

import Image from 'next/image'
import styles from './fixedImage.module.css'
import myImage1 from '@/public/image/myImage1.jpg'
import { useGlobalContext } from '@/app/context/context';

type fixedImageTP = {
    click? : string;
}

const FixedImage = (props : fixedImageTP) => {

    const {globalChildSection, setClickedFixedImage } = useGlobalContext()
  
    function clickImgFixed () {
      
        if (props.click) { 
            
            globalChildSection.current?.classList.replace('sectionNone', 'searchSection') 
            setClickedFixedImage(true)
           
        }  else { undefined }
    }

    return <div className={styles.fixedimagediv}  onClick={clickImgFixed}>
       <Image
       
       alt='imageFixed'
       src={myImage1}
       width={100}
       suppressHydrationWarning 
       />
    </div>
}

export default FixedImage