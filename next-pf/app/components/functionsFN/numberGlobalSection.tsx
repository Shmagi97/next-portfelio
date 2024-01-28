'use client'

type GlobalNumber = {
    globalNavigateNumber : number [] ,
    globalSectionChildren :  number [] ,
    servisPageAnimNavigate :  number [] ,
}

type DataGlobalClickNumber = [GlobalNumber, GlobalNumber]

export default (index : number, key : keyof GlobalNumber,
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

