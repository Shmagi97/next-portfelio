'use client'

import React from "react"
import style from './layout.module.css'
import Header from "./components/headerAndFooter/headerUsersPage/header"

type childrenTP = {
   
    children: React.ReactNode
}

export default (props: childrenTP) => {

    return <section className={style.layoutSection}>
       <Header/>
        {props.children}
      
    </section>
}