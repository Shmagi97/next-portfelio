'use client'

import { Dispatch, SetStateAction } from "react"

export const numberGlobalSection = ( value : number, getFunction : Function ) => {

    getFunction ((prevNumber : number [] )=> {

        const UbdateArray = [ ...prevNumber ]

        UbdateArray.fill(0)

        if (value !== undefined) {
            UbdateArray[value]=1
            return UbdateArray
        }
    } )

}

type GlobalNumber = {
    globalNavigateNumber : number [] ,
    globalSectionChildren :  number [] ,
}

type DataGlobalClickNumber = [GlobalNumber, GlobalNumber]

export const globalNumberSection = (index : number, key : keyof GlobalNumber,
  value : number, getFN : Function ) => {

   

    getFN((prevNumber : DataGlobalClickNumber)=> {
         
        const UbdateArray = [ ...prevNumber ]

        UbdateArray[index][key].fill(0)
        
        if( value !== undefined ){
            UbdateArray[index][key][value]=1
            return UbdateArray
        }
    })
}

