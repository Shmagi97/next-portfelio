'use client'

import Image from 'next/image'
import myImage1 from '@/public/image/myImage1.webp'
import { CaretDownOutlined, LeftOutlined, MailOutlined, PhoneOutlined } from '@ant-design/icons'
import { useGlobalContext } from '@/app/context/context'
import MySkils from './mySkils/mySkils'
import MyContact from './myContactInfo/myContact'
import style from './myInfo.module.scss'
import { NavigateGlobalSection } from '../navigate/navigate'
import mySertificate from '@/public/sertifikati/mySertificate.webp'
import reziume from '@/public/reziume/reziume.png'


const MyInfo = () => {

    const { globalChildSection , clickGlobaldNumber } = useGlobalContext ()
     
    function clickBack () {
        globalChildSection.current?.classList.replace('searchSection', 'sectionNone')

      
    }

 return <section className={style.hadSection}>

          <div className={style.hadSectionFirstDiv}>

             <div className={style.divWre}>

               <div className={style.fixedimagediv}>

                <Image
                  alt='myImage'
                  src={myImage1}
                  width={100}
                  suppressHydrationWarning
                 />

                 </div>

                 <div className={style.leftIconDiv} onClick={clickBack}>
                    <LeftOutlined suppressHydrationWarning/>
                 </div>

               <h1 className={style.h1} >შმაგი ნარსავიძე</h1>
             </div>

             <MySkils/>
             
             <div className={style.myContactDiv}>
          
               <MyContact url ={'tel:568 59 60 12'} textIn = {'568 59 60 12'}>
                 <PhoneOutlined/>
               </MyContact>
               <MyContact url={'mailto:sh.narsa1997@gmail.com'} textIn = {'sh.narsa1997@gmail.com'}>
                 <MailOutlined/>
               </MyContact>
               <MyContact textIn = {' Mestia / Fari'} url={`https://www.google.com/maps/place/43%C2%B002'12.3%22N+42%C2%B041'28.1%22E/@43.036742,42.691133,17z/data=!3m1!4b1!4m4!3m3!8m2!3d43.036742!4d42.691133?entry=ttu`}>
                  <CaretDownOutlined/>
               </MyContact>
               
             </div>

            </div>

            <section className={style.myInfoTextSection}>

              <div className={style.navigateDiv}>
                <NavigateGlobalSection/>
               </div>

               <div className={style.infoTextDiv}>
                
                {

                  clickGlobaldNumber[0].globalNavigateNumber[0] == 1  ? ( <>

                    <h2 className={style.h2}> ჩემს შესახებ </h2>
                     <span className={style.spanLine}></span>
                   <p className={style.pHtml}>
    
                     2023 წელს დავიწყე სწავლა Smart Academy - ში, 
                     front-end development and seo- ს მიმართულებით.
                      რაც მოიცავს html, css და javascript- ის ცოდნას ამავე წლის მიწურულს
                      დავიწყე სწავლა 'MERN STACK' დეველოპმენტის მიმართულებით ამავე აკადემიაში რაც მოიცავს
                      M-mongoDB E-express R-react N-nodejs სრულ სტეკს ფრონტისა და ბექის მიმართულებით, 
                      მოიცავს როგორც ფრონტის ასევე ბექის ფრეიმვორკების ცოდნას და ასევე მონაცემთთა ბაზებთან მუშაობას, 
                      დამატებით შევისწავლი React Native აპლიკაციებზე ორიენტირებულ ფრეიმვორკს , დეოპსის ნაწილში საიტის
                      გამართვასა და დომეინის მიბმას, დამატებით შევისწავლი Next.Js , TypeScript -სა და Scss-ს. 

                      ვარდამწყები და მაქვს უზადოსურვილი დავეუფლო 'MERN STACK' დეველოპმენტის
                      პროფესიას მაქსმიმალურად სიღმისეულად, ამისათვის კი აუცილებელია პრაქტიკა.
                      მზადვარ ანაზრაურების გარეშე ვიმუშავო სტაჟიორად, ცოდნის პრაქტიკაში
                      გაღრმავებისათვის.
                  
                   </p>

                   <h2 className={style.h2}>განათლება</h2>
                   <span className={style.spanLine}></span>
                   <h2 className={style.h2}>სერტიფიკატი :
                   Smart Academy, / თბილისი / 2023 / 2024 წ.წ</h2>
                   <h2 className={style.h2}>2023 წ</h2>
                   <p className={style.pHtml}>
                   
                   ამა წლის 28 მაისს, დავიწყე სწავლა Smart Academy - ში, front-end development and
                   seo- ს მიმართულებით. რაც მოიცავს html, css და javascript- ის ცოდნას, კურსის
                   განმავლობაში ვისწავლე html - სტრუქტურის, სემანტიკური და არასემანტიკური
                   ტეგების სწორად გამართვა. css- სტილიზაციისთვსი სწორი ფროფერთების,
                   ბრაუზერებთან თავსებადობის შესაბამისად გამოყენება. საიტის responsiv- ზე, Media
                   Query- ების მინიმალური, ხოლო grid და flex ფროფერთების მაქსიმალური
                   გამოყენებით , ტაბლეტებისა და მობილურების ვერსიებზე გასწორება. ასევე მივიღე
                   მნიშვნელოვანი ცოდნა SEO-ს მიმართულებით და ვისწავლე თუ როგორ გავხადო
                   საიტი უფრო ადვილად ძებნადი ბრაუზერში. ასევე მივიღე საბაზისო ცოდნა javascript-
                   ში, როგორიცაა: ცვლადები, ფუნქციები და პარამეტრები, for() და while()-ციკლები, if()-
                   else() , else if() და switch კონსტრუქტორით საიტის ფუნქციონალისათვის შესაბამისი
                   ლოგიკის აწყობა და, ბოლოს რაც ყველაზე მნიშვნელოვანია ეს არის მასივებთან და
                   მის ობიექტებთან მუშაობა, შესაბამისი მეთოდების გამოყენებით წაშლა, დამატება
                   ამოღება და სხვ.. სერვერიდან (მასივის სახი) ინფორმაციის წამოღება, map(), forEach()
                   და სხვ.. მეთოდებითადა შაბლონის ლიტერალების გამოყენებით მისი დახატვა DOM
                   ელემენტებში, ასევე სერვერზე ინფორმაციის გაგზავნა, წამორება, დაედითება და
                   სხვა

                   </p>

                   <h2 className={style.h2}>2023 - 2024 წ.წ</h2>
                   <p className={style.pHtml}>

                    ამავე წელს დავიწყე სწავლა Smart Academy - ში, 'MERN STACK' დეველოპმენტის მიმართულებით

                   </p>
                   </>
                   ) :  clickGlobaldNumber[0].globalNavigateNumber[1] == 1  ? (
                    
                   <Image
                   className={style.mySertificate}
                    alt='mySertificate'
                    src={mySertificate}
                    suppressHydrationWarning
                   />
                    
                    ) :
                    clickGlobaldNumber[0].globalNavigateNumber[2] == 1 ? (

                    <Image
                    alt='pdfReziume'
                    src={reziume}
                    suppressHydrationWarning
                    className={style.mySertificate}
                    
                    />
                    
                    
                    ) :  clickGlobaldNumber[0].globalNavigateNumber[3] == 1 ? (
                      
                      <p className={style.pHtml}>ამჟამად ცარიელი</p> 
                      
                      ) : ( 
                      
                      <p className={style.pHtml}>დეტალები იხილეთ აქ</p>
                      
                      )

                }

               </div>
            </section>
                
    </section>
}

export default MyInfo