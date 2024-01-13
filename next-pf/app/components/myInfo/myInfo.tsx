
import style from './myInfo.module.css'
import Image from 'next/image'
import myImage1 from '@/public/image/myImage1.jpg'

const MyInfo = () => {

 return <section className={style.hadSection}>

         <div className={style.hadSectionFirstDiv}>

              <div className={style.fixedimagediv}>
                <Image
                  alt='myImage'
                  src={myImage1}
                  width={100}
                  priority = {true}
                 />
              </div>
              
         </div>
             
    </section>
}

export default MyInfo