import Image from 'next/image'
import style from './fixedImage.module.css'
import img2 from '@/public/image/img2.jpg'

const FixedImage = () => {
    return <div className={style.fixedimagediv}>
       <Image
       
       alt='imageFixed'
       src={img2}
       width={100}
       style={{objectFit: 'cover'}}
       priority = {true}
       />
    </div>
}

export default FixedImage