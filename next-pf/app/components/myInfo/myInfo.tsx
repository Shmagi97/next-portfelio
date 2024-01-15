'use client'

import Image from 'next/image'
import myImage1 from '@/public/image/myImage1.jpg'
import { LeftOutlined } from '@ant-design/icons'
import { useGlobalContext } from '@/app/context/context'
import MySkils from './mySkils/mySkils'
import MyContact from './myContactInfo/myContact'
import style from './myInfo.module.scss'
import { NavigateGlobalSection } from '../button/navigate/navigate'
import { useEffect } from 'react'
import mySertificate from '@/public/sertifikati/mySertificate.png'

const MyInfo = () => {

    const { globalChildSection  , setClickedFixedImage, clickBtnNumber } = useGlobalContext ()
    
    useEffect(()=> {
      console.log(clickBtnNumber);
    }, [clickBtnNumber])
    
    function clickBack () {
        globalChildSection.current?.classList.replace('searchSection', 'sectionNone')
        setClickedFixedImage(false)
    }

 return <section className={style.hadSection}>

          <div className={style.hadSectionFirstDiv}>


             <div className={style.divWre}>

               <div className={style.fixedimagediv}>

                <Image
                  alt='myImage'
                  src={myImage1}
                  width={100}
                  priority = {true}
                 />

                 </div>

                 <div className={style.leftIconDiv} onClick={clickBack}>
                    <LeftOutlined/>
                 </div>

               <h1 className={style.h1} >შმაგი ნარსავიძე</h1>
             </div>

             <MySkils/>
             
             <div className={style.myContactDiv}>
               <MyContact
               antIcon1 = {'tel:568 59 60 12'}
               antIcon1Span = {'568 59 60 12'}
               />
               <MyContact
               antIcon2 = {'mailto:sh.narsa1997@gmail.com'}
               antIcon2Span = {'sh.narsa1997@gmail.com'}
               />
               <MyContact
               antIcon3 = {`https://www.google.com/maps/place/43%C2%B002'12.3%22N+42%C2%B041'28.1%22E/@43.036742,42.691133,17z/data=!3m1!4b1!4m4!3m3!8m2!3d43.036742!4d42.691133?entry=ttu`}
               antIcon3Span = {'Mestia / Fari'}
               />
             </div>

            </div>

            <section className={style.myInfoTextSection}>

              <div className={style.navigateDiv}>
                <NavigateGlobalSection/>
               </div>

               <div className={style.infoTextDiv}>
                
                {

                   clickBtnNumber[0] == 1  ? ( <>

                    <h2 className={style.h2}> ჩემს შესახებ </h2>

                   <p className={style.pHtml}>
    
                     2023 წელს დავიწყე სწავლა Smart Academy - ში, 
                     front-end development and seo- ს მიმართულებით.
                      რაც მოიცავს html, css და javascript- ის ცოდნას
                  
                   </p>

                   </>
                   ) :  clickBtnNumber[1] == 1 ? (
                    
                   <Image
                   className={style.mySertificate}
                    alt='mySertificate'
                    src={mySertificate}
                
                   />
                    
                    ) :
                   clickBtnNumber[2] == 1 ? ( <p>mesame</p> ) : clickBtnNumber[3] == 1 ? ( <p>meotxe</p> ) : ( <p>else</p> )

                }

               </div>
            </section>
                
    </section>
}

export default MyInfo