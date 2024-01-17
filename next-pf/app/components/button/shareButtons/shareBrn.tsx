'use client'

import Image, { StaticImageData,  } from 'next/image';
import { useGlobalContext } from '@/app/context/context';
import { setIntervalFn } from '../../setInterval/setInterval';
import Link from 'next/link';
import facebook from '@/public/icons/facebook.png'
import linkedin from '@/public/icons/linkedin.png'
import { GithubOutlined, LeftOutlined, RightOutlined, SearchOutlined, ShareAltOutlined } from '@ant-design/icons';
import styles from './shareBtn.module.scss'
// import { MouseEvent } from 'react';

type propsTp = {
    antIcon? : string;
    left? : string;
    right? : string;
    hoverShare? : boolean;
    clickSearch? : string;
    btnActiveClass? : boolean;
}

const ShareClickBtn = (props: propsTp) => {

    setIntervalFn()
    
    const {  setImagenumber , imgnumber , setChekDelay,
             setUsefectRerender, globalChildSection, setClickedSearch } = useGlobalContext ()

    // const [clear, setClear] = useState <NodeJS.Timeout | null > ( null )
 
    // ტაიპსკრიპტში ბათონზე კლიკისას აზუსტებს ევენთის ტიპს

    // event : MouseEvent <HTMLButtonElement>
    
    function clicked ( ) {

        // const value = event.currentTarget.value;

        // setImageclickinfo(value)

        setChekDelay(true)

     
        if (props.left && imgnumber > -1){
            
            setImagenumber((prevImgNumber) => prevImgNumber -1);
            setUsefectRerender((prevImgNumber) => prevImgNumber -1);

            if (imgnumber == 0){
                setImagenumber(7);
            }
 
        } 
        
        
        if (props.right && imgnumber < 8 ){

            setImagenumber((prevImgNumber) => prevImgNumber +1)
            setUsefectRerender((prevImgNumber) => prevImgNumber +1)
            
            if (imgnumber == 7){
                setImagenumber(0);
            }
        }

        if (props.clickSearch){
            globalChildSection.current?.classList.replace('sectionNone', 'searchSection')
            setClickedSearch(true)
        }
      
    }
    

    return <>
    
     <div className={`${styles.btnStyle} ${props.btnActiveClass ? styles.btnStyleActive : false }`} onClick={ clicked }> 

    
         {
            props.antIcon === 'share' ?  <ShareAltOutlined suppressHydrationWarning/> : props.antIcon === 'search' ? 
            <SearchOutlined suppressHydrationWarning/> : props.antIcon === 'left' ? 
            <LeftOutlined suppressHydrationWarning/> : props.antIcon === 'right' ? 
            <RightOutlined suppressHydrationWarning/> : false

         }

        {
          props.hoverShare ? (

            <div className={styles.shareHoverDiv}>

                <ul className={styles.shareHoverUl}>
                    <li>
                         <Link href={'https://www.facebook.com/profile.php?id=100008644398321'} target='_blank'>
                           
                            <Image
                             alt='facebook'
                             src={facebook}
                             width={20}
                            />
                         </Link>
                     </li>
                </ul>

                <ul className={styles.shareHoverUl}>
                    <li> 
                        <Link href={'https://www.linkedin.com/in/shmagi-narsavidze-20a972273/'} target='_blank'>
                            <Image
                            alt='linkedln'
                            src={linkedin}
                            width={20}
                            />
                        </Link>
                 </li>
                </ul>
                <ul className={styles.shareHoverUl}>
                    <li> 
                        <Link href={'https://github.com/Shmagi97/next-portfelio'} target='_blank'>
                           <GithubOutlined/>
                        </Link>
                 </li>
                </ul>

            </div>
             
            

          ) : false
        
        }
    
     </div>
    
    </>
}

export default ShareClickBtn