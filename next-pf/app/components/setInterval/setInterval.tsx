'use client'

import { useGlobalContext } from "@/app/context/context";
import { useEffect, useState } from "react";

const SetIntervalFn = () => {
  const [delay, setDelay] = useState(1155);
  const {  setImagenumber , chekDelay, usefectRerender } = useGlobalContext ()

  const limit = 10
  let num = 0

  useEffect(() => {
    const clear = setInterval(() => {

           
              num += 1
  
             setImagenumber(num)
          
          if ( num >= limit) {
            
              num = 0
              setImagenumber(num)      
  
          }
     
     
    }, delay * 1000);

    return () => clearInterval(clear);

  }, [delay, usefectRerender ]);

useEffect(()=> {
    if (chekDelay === true){
        setDelay(1155);
    }
}, [chekDelay])



    return null
};

export default SetIntervalFn;