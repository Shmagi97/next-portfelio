'use client'

import { CaretDownOutlined, MailOutlined, PhoneOutlined } from "@ant-design/icons"
import myContact from './myContact.module.css'

type antIqonTP = {
    antIcon1? : string ;
    antIcon2? : string ;
    antIcon3? : string ;

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
                <span>568 59 60 12</span>
              </div>
          
           </div>

}

export default MyContact
