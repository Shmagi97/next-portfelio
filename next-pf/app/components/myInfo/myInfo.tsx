
import style from './myInfo.module.css'
import Image from 'next/image'
import myImage1 from '@/public/image/myImage1.jpg'
import globalMyinfo from '@/app/global.module.scss'
import { LeftOutlined } from '@ant-design/icons'
import { useGlobalContext } from '@/app/context/context'
import MySkils from './mySkils/mySkils'

const MyInfo = () => {

    const { globalChildSection } = useGlobalContext ()
 
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
                  priority = {true}
                 />

                 </div>

                 <div className={style.leftIconDiv} onClick={clickBack}>
                    <LeftOutlined/>
                 </div>

               <h1 className={globalMyinfo.colorNMyinfo}>შმაგი ნარსავიძე</h1>
             </div>

             <MySkils/>
             

            </div>
         
             
    </section>
}

export default MyInfo