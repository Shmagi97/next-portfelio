'use client'

import {  useGlobalContext } from "@/app/context/context"
import {  ReactNode } from "react"

const WrapperHeader = ( props : { children: ReactNode } )=> {

    const { headerFooter } = useGlobalContext()
  
    return <>
        { headerFooter ? props.children : false}
    </>
}

const WrapperFooter = ( props : { children: ReactNode } )=> {

    const { headerFooter } = useGlobalContext()

    return <>
        { headerFooter ? props.children : false}
    </>
}

export { WrapperFooter, WrapperHeader }