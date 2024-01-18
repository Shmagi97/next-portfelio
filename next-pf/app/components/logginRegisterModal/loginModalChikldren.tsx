'use client'

import React, { ReactNode } from "react"

interface LoginModalInterface {

    children : ReactNode; 
}

const LoginModalChildren : React.FC < LoginModalInterface > = ( { children, ...restProps } ) => {

    return <div {...restProps}>
         
         {children}

    </div>
}

export default LoginModalChildren