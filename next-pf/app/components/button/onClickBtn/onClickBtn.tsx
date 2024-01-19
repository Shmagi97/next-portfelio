'use client'

import React, {  MouseEvent, ReactNode } from "react";
import stylle from './onClickBtn.module.scss'

interface CustomButtonProps  {

    onClick?: ( Event : MouseEvent < HTMLDivElement > ) => void;
    children: ReactNode;

}

 const OnclickBtn : React.FC < CustomButtonProps > = ( { onClick, children, ...restProps } ) => {

    return (

        <div onClick={ onClick } { ...restProps } className={stylle.onclickDiv}>

           {children}
         </div>
    )

}

export default OnclickBtn

// ამ ლოგიკით შესაძლებელი იყო globalDinamikChild სექციების children გამეხადა დინამიური if return 1 else if return 2 else return null