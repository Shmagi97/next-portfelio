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
    usefectRerender : number,
    setUsefectRerender : Dispatch < SetStateAction < number > >,


}

const GlobalContext = createContext<ContextProps>({
    
    globalImageFn : Function,
    imgnumber : 0,
    setImagenumber : () : number => 0,
    dataimg : [],
    setDataimg : () : DataType [] => [],
    chekDelay : false,
    setChekDelay : () : boolean => false,
    usefectRerender : 0, 
    setUsefectRerender : () : number => 0,

})



export const GlobalContextProvider = ({ children }) => {
    const [imgnumber, setImagenumber] = useState(0)
    const [dataimg, setDataimg] = useState < [] | DataType [] > ([]); 
    const [chekDelay, setChekDelay] = useState (false)
    const [usefectRerender, setUsefectRerender] = useState (0)
   
    return (

        <GlobalContext.Provider value={{imgnumber, setImagenumber, dataimg, setDataimg, globalImageFn, chekDelay, setChekDelay, usefectRerender, setUsefectRerender   }}>

            {children}

        </GlobalContext.Provider>
    )
}

export const useGlobalContext = () => useContext(GlobalContext);