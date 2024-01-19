'use client'

import MyContact from '../myInfo/myContactInfo/myContact'
import FixedImage from './fixedImage'
import style from './imageCont.module.scss'

export const ImageCont = () => {


    return <section className={style.imageCont}>
        
          <div className={style.myContact}>
            <MyContact/>
          </div>
         
          <FixedImage/>

    </section>
}