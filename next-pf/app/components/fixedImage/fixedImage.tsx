import Image from 'next/image'
import styles from './fixedImage.module.css'
import img2 from '@/public/image/img2.jpg'

const FixedImage = () => {
    return <div className={styles.fixedimagediv}>
       <Image
       
       alt='imageFixed'
       src={img2}
       width={100}
      
       priority = {true}
       />
    </div>
}

export default FixedImage