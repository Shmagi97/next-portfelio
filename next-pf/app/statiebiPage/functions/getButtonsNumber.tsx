'use client'



export default  ( value :number, getFunctions : Function ) => {

   getFunctions((prevNumbers : number [])=> {

    const ubdateArray = [...prevNumbers]
    ubdateArray.fill(0)
    ubdateArray[value] = 1
    return ubdateArray
   })
}