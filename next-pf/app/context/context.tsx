"use client";

import { StaticImageData } from "next/image";
import {
  createContext,
  useContext,
  Dispatch,
  SetStateAction,
  useState,
  useRef,
  RefObject,
} from "react";

type DataType = {
  img : StaticImageData;
};

interface ContextProps {

    imgnumber: number,
    setImagenumber: Dispatch <SetStateAction <number> >
    dataimg : DataType [],
    setDataimg : Dispatch <SetStateAction < DataType [] >>,
    chekDelay : boolean,
    setChekDelay : Dispatch <SetStateAction <boolean> >,
    usefectRerender : number,
    setUsefectRerender : Dispatch < SetStateAction < number > >,
    searchsectionelement : RefObject <HTMLDivElement | null> ,
    setSectionelement : Dispatch < SetStateAction < RefObject <HTMLDivElement | null> > >,
}


const GlobalContext = createContext<ContextProps>({
    
    imgnumber : 0,
    setImagenumber : () : number => 0,
    dataimg : [],
    setDataimg : () : DataType [] => [],
    chekDelay : false,
    setChekDelay : () : boolean => false,
    usefectRerender : 0, 
    setUsefectRerender : () : number => 0,
    searchsectionelement : { current: null } ,
    setSectionelement : () : RefObject < HTMLDivElement | null > => ({ current: null }),
})



export const GlobalContextProvider = ({ children }) => {
    const [imgnumber, setImagenumber] = useState(0)
    const [dataimg, setDataimg] = useState < [] | DataType [] > ([]); 
    const [chekDelay, setChekDelay] = useState (false)
    const [usefectRerender, setUsefectRerender] = useState (0)
    
    const initialSearchSectionElementRef = useRef<HTMLDivElement | null>(null);
    const [searchsectionelement, setSectionelement] = useState (initialSearchSectionElementRef);
   
    return (

        <GlobalContext.Provider value={{imgnumber, setImagenumber, dataimg, setDataimg , 
         chekDelay, setChekDelay, usefectRerender, setUsefectRerender, searchsectionelement,  setSectionelement  }}>

            {children}

        </GlobalContext.Provider>
    )
}

export const useGlobalContext = () => useContext(GlobalContext);