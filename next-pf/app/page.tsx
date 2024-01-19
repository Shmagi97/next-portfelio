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

  const {  setImagenumber , imgnumber , setChekDelay,
    setUsefectRerender, } = useGlobalContext ()


 function lefClicked () {
  setChekDelay(true)  

  if ( imgnumber > -1){
       
    setImagenumber((prevImgNumber) => prevImgNumber -1);
    setUsefectRerender((prevImgNumber) => prevImgNumber -1);

    if (imgnumber == 0){
        setImagenumber(7);
    }
} 
 }

 function rightClicked () {
  setChekDelay(true)
   
  if (imgnumber < 8 ){

    setImagenumber((prevImgNumber) => prevImgNumber +1)
    setUsefectRerender((prevImgNumber) => prevImgNumber +1)
    
    if (imgnumber == 7){
        setImagenumber(0);
    }
}
 }

  return (
 
    <section className={styles.section}>

      <Background/>

      <OnclickBtn className={styles.btnInpage} onClick={lefClicked}>
         <LeftOutlined/>
      </OnclickBtn>
      
          <h1 className={styles.h1}>Web Development `Next.js and TypeScript` </h1>

      <OnclickBtn className={styles.btnInpage} onClick={rightClicked}>
         <RightOutlined/>
      </OnclickBtn>

    </section>
 
  )
}
