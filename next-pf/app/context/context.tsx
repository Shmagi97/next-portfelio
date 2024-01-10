"use client";

import { StaticImageData } from "next/image";
import {
  createContext,
  useContext,
  Dispatch,
  SetStateAction,
  useState,
} from "react";

import { globalImageFn } from "../components/globalImage/globalImage";

type DataType = {
  img : StaticImageData;
};

interface ContextProps {
    
    globalImageFn : Function,
    imgnumber: number,
    setImagenumber: Dispatch <SetStateAction <number> >
    dataimg : DataType [],
    setDataimg : Dispatch <SetStateAction < DataType [] >>,
    chekDelay : boolean,
    setChekDelay : Dispatch <SetStateAction <boolean> >,


}

const GlobalContext = createContext<ContextProps>({
    
    globalImageFn : Function,
    imgnumber : 0,
    setImagenumber : () : number => 0,
    dataimg : [],
    setDataimg : () : DataType [] => [],
    chekDelay : false,
    setChekDelay : () : boolean => false,

})



export const GlobalContextProvider = ({ children }) => {
    const [imgnumber, setImagenumber] = useState(0)
    const [dataimg, setDataimg] = useState < [] | DataType [] > ([]); 
    const [chekDelay, setChekDelay] = useState (false)
   
    return (

        <GlobalContext.Provider value={{imgnumber, setImagenumber, dataimg, setDataimg, globalImageFn, chekDelay, setChekDelay  }}>

            {children}

        </GlobalContext.Provider>
    )
}

export const useGlobalContext = () => useContext(GlobalContext);