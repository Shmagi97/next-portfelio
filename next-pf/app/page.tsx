'use client'

import { LeftOutlined, RightOutlined } from '@ant-design/icons'
import Background from './components/background/background'
import OnclickBtn from './components/button/onClickBtn/onClickBtn'

import styles from './page.module.scss'
import { useGlobalContext } from './context/context'

export default function Home() {


  // ტაიპსკრიპტში ბათონზე კლიკისას აზუსტებს ევენთის ტიპს
 // event : MouseEvent <HTMLButtonElement>
 // const [clear, setClear] = useState <NodeJS.Timeout | null > ( null )

  const {  setImagenumber , imgnumber , setChekDelay, headerFooter, } = useGlobalContext ()

  const limit = 6;

 function lefClicked () {
  setChekDelay(true)  

  if ( imgnumber > -1){ setImagenumber((prevImgNumber) => prevImgNumber -1);

    if (imgnumber == 0){ setImagenumber(limit); }
} 
 }

 function rightClicked () {
  setChekDelay(true)
   
  if (imgnumber < 8 ){ setImagenumber((prevImgNumber) => prevImgNumber +1)
    
    if (imgnumber == limit){ setImagenumber(0); }
}
 }

  return (
 
    <section className={styles.section}>
   
      <Background/>

      <OnclickBtn className={ headerFooter ? styles.btnInpage : styles.btnInpageNone} onClick={lefClicked}>
         <LeftOutlined/>
      </OnclickBtn>
      
          <h1 className={headerFooter ? styles.h1 : styles.h1None}>Web Development `Next.js and TypeScript` </h1>

      <OnclickBtn className={ headerFooter ? styles.btnInpage : styles.btnInpageNone} onClick={rightClicked}>
         <RightOutlined/>
      </OnclickBtn>
   
    </section>
 
  )
}
