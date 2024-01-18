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
    globalChildSection : RefObject < HTMLDivElement | null > ,
    setGlobalChildSection : Dispatch < SetStateAction < RefObject < HTMLDivElement | null > > >,
    clickedFixedImage : boolean,
    setClickedFixedImage : Dispatch < SetStateAction < boolean > >,
    clickedSearch: boolean,
    setClickedSearch : Dispatch < SetStateAction < boolean > >,
    clickBtnNumber : number [] ,
    setClickBtnNumber : Dispatch < SetStateAction < number []  > >
    clickModal : boolean,
    setClickModal : Dispatch < SetStateAction < boolean > >,
    
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
    globalChildSection : { current: null } ,
    setGlobalChildSection : () : RefObject < HTMLDivElement | null > => ({ current: null }),
    clickedFixedImage : false ,
    setClickedFixedImage : () : boolean => false ,
    clickedSearch : false ,
    setClickedSearch : () : boolean => false ,
    clickBtnNumber : [],
    setClickBtnNumber : () : number [] => [],
    clickModal : false,
    setClickModal : () : boolean => false,
  
})



export const GlobalContextProvider = ({ children }) => {
    const [imgnumber, setImagenumber] = useState(0)
    const [dataimg, setDataimg] = useState < [] | DataType [] > ([]); 
    const [chekDelay, setChekDelay] = useState (false)
    const [usefectRerender, setUsefectRerender] = useState (0)
    const [clickedFixedImage, setClickedFixedImage] = useState (false)
    const [clickedSearch, setClickedSearch] = useState (false)
    const [clickBtnNumber, setClickBtnNumber ] = useState < [] | number []  > ([])
    const [clickModal , setClickModal ] = useState (false)
    
    const initialGlobalChildSection = useRef<HTMLDivElement | null>(null);

    const [globalChildSection, setGlobalChildSection] = useState (initialGlobalChildSection);

   
    return (

        <GlobalContext.Provider value={{
            imgnumber, setImagenumber, dataimg, setDataimg , 
            chekDelay, setChekDelay, usefectRerender, setUsefectRerender, globalChildSection,
            setGlobalChildSection, clickedFixedImage, setClickedFixedImage, clickedSearch, setClickedSearch, 
            clickBtnNumber, setClickBtnNumber, clickModal, setClickModal, 
            
            }}>

            {children}

        </GlobalContext.Provider>
    )
}

export const useGlobalContext = () => useContext(GlobalContext);