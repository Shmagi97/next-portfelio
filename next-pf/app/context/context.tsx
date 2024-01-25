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
  ReactNode,
} from "react";

type DataType = {
  img : StaticImageData;
};

interface ContextProps {

    imgnumber: number,
    setImagenumber: Dispatch <SetStateAction <number> >,
    dataimg : DataType [],
    setDataimg : Dispatch <SetStateAction < DataType [] >>,
    chekDelay : boolean,
    setChekDelay : Dispatch <SetStateAction <boolean> >,

    globalChildSection : RefObject < HTMLDivElement | null > ,
    setGlobalChildSection : Dispatch < SetStateAction < RefObject < HTMLDivElement | null > > >,

    clickModal : boolean,
    setClickModal : Dispatch < SetStateAction < boolean > >,

    clickBtnNumber : number [] ,
    setClickBtnNumber : Dispatch < SetStateAction < number []  > >,
    clickGlobalDinamikChild : number [],
    setClickGlobalDinamikChild : Dispatch < SetStateAction < number [] > >,
    
}


const GlobalContext = createContext<ContextProps>({
    
    imgnumber : 0,
    setImagenumber : () : number => 0,
    dataimg : [],
    setDataimg : () : DataType [] => [],
    chekDelay : false,
    setChekDelay : () : boolean => false,

    globalChildSection : { current: null } ,
    setGlobalChildSection : () : RefObject < HTMLDivElement | null > => ({ current: null }),

    clickModal : false,
    setClickModal : () : boolean => false,

    clickBtnNumber : [0,0,0,0],
    setClickBtnNumber : () : number [] => [0,0,0,0],
    clickGlobalDinamikChild : [0,0],
    setClickGlobalDinamikChild : () : number [] => [0,0],
  
})



export const GlobalContextProvider = ( props : { children : ReactNode }) => {
    const [imgnumber, setImagenumber] = useState(0)
    const [dataimg, setDataimg] = useState < [] | DataType [] > ([]); 
    const [chekDelay, setChekDelay] = useState (false)
    const [clickModal , setClickModal ] = useState (false)

    
    const [clickBtnNumber, setClickBtnNumber ] = useState < [] | number []  > ([0,0,0,0])
    const [clickGlobalDinamikChild, setClickGlobalDinamikChild] = useState < [] | number [] > ([0,0])
    
    const initialGlobalChildSection = useRef<HTMLDivElement | null>(null);
    const [globalChildSection, setGlobalChildSection] = useState (initialGlobalChildSection);
    

   
    return (

        <GlobalContext.Provider value={{
            imgnumber, setImagenumber, dataimg, setDataimg , 
            chekDelay, setChekDelay, globalChildSection,
            setGlobalChildSection,  clickBtnNumber, setClickBtnNumber, clickModal, setClickModal, 
            clickGlobalDinamikChild, setClickGlobalDinamikChild,
            
            }}>

            {props.children}

        </GlobalContext.Provider>
    )
}

export const useGlobalContext = () => useContext(GlobalContext);