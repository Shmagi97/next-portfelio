'use client'

import { useGlobalContext } from "@/app/context/context";
import { useEffect, useState } from "react";

const SetIntervalFn = () => {
  const [delay, setDelay] = useState(5);
  const {  setImagenumber , chekDelay  } = useGlobalContext ()

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

  }, [delay]);

useEffect(()=> {
    if (chekDelay === true){
        setDelay(15);
    }
}, [chekDelay])



    return null
};

export default SetIntervalFn;