'use client'

import { useGlobalContext } from "@/app/context/context"
import { useEffect } from "react"

export default (value: string)=> {
    const {setHeaderFooterLoclaStorage, headerFooterLoclaStorage} = useGlobalContext()

    useEffect(()=> {
        localStorage.setItem('headerFooterNone', headerFooterLoclaStorage)
        setHeaderFooterLoclaStorage(value)
      },[headerFooterLoclaStorage])
      
}