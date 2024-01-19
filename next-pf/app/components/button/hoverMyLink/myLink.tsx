'use client'

import Link from "next/link"
import Image from 'next/image'
import styles from './myLink.module.scss'
import { GithubOutlined } from "@ant-design/icons"
import facebook from '@/public/icons/facebook.png'
import linkedin from '@/public/icons/linkedin.png'
import React from "react"

interface myLinkInterface {

    className : string;
}

export const MyLink : React.FC < myLinkInterface > = ( { className, ...restProps } ) => {

    const clasChange = ` ${styles.shareHoverDiv} ${ className || '' } `

    return <div className={clasChange} { ...restProps} >

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
}