'use client'

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

