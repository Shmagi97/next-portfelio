'use client'

import { useGlobalContext } from "@/app/context/context";
import { useEffect, useState } from "react";

export const setIntervalFn = () => {
  const [delay, setDelay] = useState(5);
  const {  setImagenumber , chekDelay, usefectRerender } = useGlobalContext ()

  const limit = 8
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
        setDelay(10);
    }
}, [chekDelay])



    return null
};
