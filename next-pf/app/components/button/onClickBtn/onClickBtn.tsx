'use client'

import React, {  MouseEvent, ReactNode } from "react";

interface CustomButtonProps  {

    onClick?: ( Event : MouseEvent < HTMLButtonElement > ) => void;
    children: ReactNode;

}

 const OnclickBtn : React.FC < CustomButtonProps > = ( { onClick, children, ...restProps } ) => {

    return (

        <button onClick={ onClick } { ...restProps }>

           {children}
         </button>
    )

}

export default OnclickBtn

// ამ ლოგიკით შესაძლებელი იყო globalDinamikChild სექციების children გამეხადა დინამიური if return 1 else if return 2 else return null