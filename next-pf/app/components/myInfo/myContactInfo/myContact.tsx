'use client'

import { CaretDownOutlined, MailOutlined, PhoneOutlined } from "@ant-design/icons"
import myContact from './myContact.module.scss'

type antIqonTP = {
    antIcon1? : string ;
    antIcon2? : string ;
    antIcon3? : string ;
    antIcon1Span? : string;
    antIcon2Span? : string;
    antIcon3Span? : string;

}

const MyContact = (props : antIqonTP ) => {

    const rame = "tel:568 59 60 12"

    return <div className={myContact.flexDiv}>
              <div>
                <a target="_blank" href = { props.antIcon1 ? props.antIcon1 : props.antIcon2 ? props.antIcon2 : 
                           props.antIcon3 ?  props.antIcon3 : undefined }>
                  { 
                  
                     props.antIcon1 ?  <PhoneOutlined/> : props.antIcon2 ? <MailOutlined/> :
                     props.antIcon3 ? <CaretDownOutlined/> : false
                  
                  }  
              
                </a>
                <span>{ props.antIcon1Span ? props.antIcon1Span : props.antIcon2Span ? props.antIcon2Span 
                        : props.antIcon3Span ? props.antIcon3Span : undefined }</span>
              </div>
          
           </div>

}

export default MyContact
