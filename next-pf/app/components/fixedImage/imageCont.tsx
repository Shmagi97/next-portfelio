'use client'

import { CaretDownOutlined, MailOutlined, PhoneOutlined } from '@ant-design/icons'
import MyContact from '../myInfo/myContactInfo/myContact'
import FixedImage from './fixedImage'
import style from './imageCont.module.scss'

type propsTP = {
    click : string;
}

export const ImageCont = (props : propsTP) => {


    return <section className={style.imageCont}>

               <MyContact className={`${style.myContact} ${style.myContact1}`} url ={'tel:568 59 60 12'} textIn = {'568 59 60 12'} >
                 <PhoneOutlined/>
               </MyContact>

               <MyContact className={`${style.myContact} ${style.myContact2}`} url={'mailto:sh.narsa1997@gmail.com'} textIn = {'sh.narsa1997@gmail.com'}>
                 <MailOutlined/>
               </MyContact>

               <MyContact className={`${style.myContact} ${style.myContact3}`} textIn = {' Mestia / Fari'} url={`https://www.google.com/maps/place/43%C2%B002'12.3%22N+42%C2%B041'28.1%22E/@43.036742,42.691133,17z/data=!3m1!4b1!4m4!3m3!8m2!3d43.036742!4d42.691133?entry=ttu`}>
                  <CaretDownOutlined/>
               </MyContact>

          <FixedImage
           click = {'active'}
          />

    </section>
}