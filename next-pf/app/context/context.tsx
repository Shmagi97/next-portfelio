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

type DataGlobalClickNumber = [
    {globalNavigateNumber : number []} ,
    { globalSectionChildren :  number []} ,
    { servisPageAnimNavigate :  number []} ,
];

interface ContextProps {

    imgnumber: number,
    setImagenumber: Dispatch <SetStateAction <number> >,

    dataimg : DataType [],
    setDataimg : Dispatch <SetStateAction < DataType [] >>,
    clickGlobaldNumber : DataGlobalClickNumber ,
    setClickGlobaldNumber : Dispatch < SetStateAction < DataGlobalClickNumber > >,

    chekDelay : boolean,
    setChekDelay : Dispatch <SetStateAction <boolean> >,
    clickModal : boolean,
    setClickModal : Dispatch < SetStateAction < boolean > >,
    getRegister : boolean,
    setGetregister : Dispatch < SetStateAction < boolean > >,
    headerFooter: boolean,
    setHeaderFooter: Dispatch < SetStateAction < boolean > >,

    globalChildSection : RefObject < HTMLDivElement | null > ,
    setGlobalChildSection : Dispatch < SetStateAction < RefObject < HTMLDivElement | null > > >,
    
}


const GlobalContext = createContext<ContextProps>({
    
    imgnumber : 0,
    setImagenumber : () : number => 0,

    dataimg : [],
    setDataimg : () : DataType [] => [],
    clickGlobaldNumber : [ {globalNavigateNumber :[0,0,0,0]},  {globalSectionChildren :  [0,0] }, {servisPageAnimNavigate :  [0,0,0,0,0,0] } ],
    setClickGlobaldNumber : () : DataGlobalClickNumber [] => [ [{globalNavigateNumber :[0,0,0,0]},  {globalSectionChildren :  [0,0] }, {servisPageAnimNavigate :  [0,0,0,0,0,0] }] ],

    chekDelay : false,
    setChekDelay : () : boolean => false,
    clickModal : false,
    setClickModal : () : boolean => false,
    getRegister : false,
    setGetregister : () : boolean => false,
    headerFooter: true,
    setHeaderFooter : () : boolean => true,

    globalChildSection : { current: null } ,
    setGlobalChildSection : () : RefObject < HTMLDivElement | null > => ({ current: null }),
  
})



export const GlobalContextProvider = ( props : { children : ReactNode }) => {
    const [imgnumber, setImagenumber] = useState(0)
    const [dataimg, setDataimg] = useState < [] | DataType [] > ([]); 
    const [chekDelay, setChekDelay] = useState (false)
    const [clickModal , setClickModal ] = useState (false)
    const [getRegister, setGetregister] = useState (false)
    const [headerFooter, setHeaderFooter] = useState (true)

    const [clickGlobaldNumber, setClickGlobaldNumber] = useState < DataGlobalClickNumber > 
    ( [ {globalNavigateNumber :[0,0,0,0]},  {globalSectionChildren :  [0,0] }, {servisPageAnimNavigate :  [0,0,0,0,0,0] } ] )

    
    const initialGlobalChildSection = useRef<HTMLDivElement | null>(null);
    const [globalChildSection, setGlobalChildSection] = useState (initialGlobalChildSection);
    

   
    return (

        <GlobalContext.Provider value={{
            imgnumber, setImagenumber, dataimg, setDataimg , 
            chekDelay, setChekDelay, globalChildSection,
            setGlobalChildSection,  clickModal, setClickModal, 
            clickGlobaldNumber, setClickGlobaldNumber, 
            getRegister, setGetregister, headerFooter, setHeaderFooter,
            
            }}>

            {props.children}

        </GlobalContext.Provider>
    )
}

export const useGlobalContext = () => useContext(GlobalContext);