'use client'

import Image, { StaticImageData,  } from 'next/image';
import styles from './clikButtons.module.css'
import { useGlobalContext } from '@/app/context/context';
import SetIntervalFn from '../../setInterval/setInterval';
import Link from 'next/link';
import facebook from '@/public/icons/facebook.png'
import linkedin from '@/public/icons/linkedin.png'
import styleSearch from '@/app/components/serach/search.module.css'
import { LeftOutlined, RightOutlined, SearchOutlined, ShareAltOutlined } from '@ant-design/icons';
// import { MouseEvent } from 'react';

type propsTp = {
    antIcon? : string;
    left? : string;
    right? : string;
    hoverShare? : string;
    clickSearch? : string;
}

const ShareClickBtn = (props: propsTp) => {
    
    const {  setImagenumber , imgnumber , setChekDelay, setUsefectRerender, searchsectionelement} = useGlobalContext ()

    // const [clear, setClear] = useState <NodeJS.Timeout | null > ( null )
 
    // ტაიპსკრიპტში ბათონზე კლიკისას აზუსტებს ევენთის ტიპს

    // event : MouseEvent <HTMLButtonElement>
      
    // console.log(props);
    
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
            searchsectionelement.current?.classList.replace(styleSearch.sectionNone, styleSearch.searchSection)
        }
      
    }
    

    return <>
    
     <div className={styles.btnStyle} onClick={ clicked }> 
       <SetIntervalFn/>
    
         {
            props.antIcon === 'share' ?  <ShareAltOutlined/> :  props.antIcon === 'search' ? 
            <SearchOutlined/> : props.antIcon === 'left' ?  <LeftOutlined/> : props.antIcon === 'right' ? 
            <RightOutlined/> : false

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

            </div>
             
            

          ) : false
        
    
        }
    
     </div>
    
    </>
}

export default ShareClickBtn