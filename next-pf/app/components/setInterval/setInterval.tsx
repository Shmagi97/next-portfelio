'use client'

import { useGlobalContext } from "@/app/context/context";
import { useEffect, useState } from "react";

export const setIntervalFn = () => {
  const [delay, setDelay] = useState(10);
  const {  setImagenumber , chekDelay, imgnumber } = useGlobalContext ()

  const limit = 6

  useEffect(() => {
    const clear = setInterval(() => {

             setImagenumber(imgnumber +1)
          
          if ( imgnumber >= limit) { setImagenumber(0)  } 
     
    }, delay * 1000);

    return () => clearInterval(clear);

  }, [delay, imgnumber ]);

useEffect(()=> {
    if (chekDelay === true){
        setDelay(15);
    }
}, [chekDelay])



    return null
};
