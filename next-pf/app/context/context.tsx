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

    clickedFixedImage : boolean,
    setClickedFixedImage : Dispatch < SetStateAction < boolean > >,
    clickedSearch: boolean,
    setClickedSearch : Dispatch < SetStateAction < boolean > >,
    clickBtnNumber : number [] ,
    setClickBtnNumber : Dispatch < SetStateAction < number []  > >,
    clickModal : boolean,
    setClickModal : Dispatch < SetStateAction < boolean > >,

    globalNodelistArray : HTMLDivElement[],
    setGlobalNodelistArray : Dispatch < SetStateAction < HTMLDivElement[] > >
    
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

    clickedFixedImage : false ,
    setClickedFixedImage : () : boolean => false ,
    clickedSearch : false ,
    setClickedSearch : () : boolean => false ,
    clickBtnNumber : [0,0,0,0],
    setClickBtnNumber : () : number [] => [0,0,0,0],
    clickModal : false,
    setClickModal : () : boolean => false,

    globalNodelistArray : [],
    setGlobalNodelistArray : () : HTMLDivElement[]  => [],
  
})



export const GlobalContextProvider = ( props : { children : ReactNode }) => {
    const [imgnumber, setImagenumber] = useState(0)
    const [dataimg, setDataimg] = useState < [] | DataType [] > ([]); 
    const [chekDelay, setChekDelay] = useState (false)
    const [clickedFixedImage, setClickedFixedImage] = useState (false)
    const [clickedSearch, setClickedSearch] = useState (false)
    const [clickBtnNumber, setClickBtnNumber ] = useState < [] | number []  > ([0,0,0,0])
    const [clickModal , setClickModal ] = useState (false)

    const [globalNodelistArray , setGlobalNodelistArray] = useState < HTMLDivElement[] > ([])
    
    const initialGlobalChildSection = useRef<HTMLDivElement | null>(null);
    const [globalChildSection, setGlobalChildSection] = useState (initialGlobalChildSection);
    

   
    return (

        <GlobalContext.Provider value={{
            imgnumber, setImagenumber, dataimg, setDataimg , 
            chekDelay, setChekDelay, globalChildSection,
            setGlobalChildSection, clickedFixedImage, setClickedFixedImage, clickedSearch, setClickedSearch, 
            clickBtnNumber, setClickBtnNumber, clickModal, setClickModal, globalNodelistArray, setGlobalNodelistArray, 
            
            }}>

            {props.children}

        </GlobalContext.Provider>
    )
}

export const useGlobalContext = () => useContext(GlobalContext);