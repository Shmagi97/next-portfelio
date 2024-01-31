'use client'

import { store } from "@/app/reduxToolkit/store"
import { ReactNode } from "react"
import { Provider } from "react-redux"

export default ( props : { children : ReactNode } )=> {
 

    return (

        <Provider store={store}>
            { props.children }
        </Provider>
    )

}