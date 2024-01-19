'use client'

import { CaretDownOutlined, MailOutlined, PhoneOutlined } from "@ant-design/icons"
import myContact from './myContact.module.scss'
import React, { MouseEvent, ReactNode } from "react"


interface MyContactInterface {

  className? : string;
  onClick? : ( Event : MouseEvent < HTMLDivElement > ) => void ;
  children : ReactNode;
  url : string;
  textIn : string;
}

const MyContact : React.FC < MyContactInterface > = ( {textIn, url, className, children, onClick, ...restProps } ) => {

  const clasChange = `${myContact.flexDiv} ${className || ''}`

    return <div className={clasChange}>
           
             <div>
                <a target="_blank" href = { url }>

                    {children}
                    
                </a>
                <span>{ textIn }</span>
              </div>
           </div>

}

export default MyContact
