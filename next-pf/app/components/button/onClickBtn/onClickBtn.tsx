'use client'

import React, {  MouseEvent, ReactNode } from "react";
import stylle from './onClickBtn.module.scss'
import { setIntervalFn } from "../../setInterval/setInterval";

interface CustomButtonProps  {

    onClick?: ( Event : MouseEvent < HTMLDivElement > ) => void;
    children: ReactNode;
    className? : string;

}

 const OnclickBtn : React.FC < CustomButtonProps > = ( { onClick, children, className, ...restProps } ) => {

    setIntervalFn()

    const buttonClasName = `${stylle.onclickDiv} ${className || ''}`

    return (

        <div onClick={ onClick } { ...restProps } className={buttonClasName}>

           {children}
         </div>
    )

}

export default OnclickBtn

// ამ ლოგიკით შესაძლებელი იყო globalDinamikChild სექციების children გამეხადა დინამიური if return 1 else if return 2 else return null