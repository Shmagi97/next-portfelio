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

type SelectProfesionTP = [
   {selectedProfesion: string []},
]

interface ContextProps {

    imgnumber: number,
    setImagenumber: Dispatch <SetStateAction <number> >,

    identifier: string,
    setIdentifier: Dispatch < SetStateAction < string > >,

    dataimg : DataType [],
    setDataimg : Dispatch <SetStateAction < DataType [] >>,
    clickGlobaldNumber : DataGlobalClickNumber ,
    setClickGlobaldNumber : Dispatch < SetStateAction < DataGlobalClickNumber > >,
    selectProfesionUser : SelectProfesionTP  ,
    setSelectProfesionUser : Dispatch < SetStateAction < SelectProfesionTP  > >

    chekDelay : boolean,
    setChekDelay : Dispatch <SetStateAction <boolean> >,
    clickModal : boolean,
    setClickModal : Dispatch < SetStateAction < boolean > >,
    getRegister : boolean,
    setGetregister : Dispatch < SetStateAction < boolean > >,
    headerFooter: boolean,
    setHeaderFooter: Dispatch < SetStateAction < boolean > >,
    registerUserInfo: boolean,
    setRegisterUserInfo: Dispatch < SetStateAction < boolean > >,

    globalChildSection : RefObject < HTMLDivElement | null > ,
    setGlobalChildSection : Dispatch < SetStateAction < RefObject < HTMLDivElement | null > > >,

    
}


const GlobalContext = createContext<ContextProps>({
    
    imgnumber : 0,
    setImagenumber : () : number => 0,

    identifier: '',
    setIdentifier: () : string => '',

    dataimg : [],
    setDataimg : () : DataType [] => [],
    clickGlobaldNumber : [ {globalNavigateNumber :[0,0,0,0]},  {globalSectionChildren :  [0,0] }, {servisPageAnimNavigate :  [0,0,0,0,0,0] } ],
    setClickGlobaldNumber : () : DataGlobalClickNumber [] => [ [{globalNavigateNumber :[0,0,0,0]},  {globalSectionChildren :  [0,0] }, {servisPageAnimNavigate :  [0,0,0,0,0,0] }] ],
    selectProfesionUser : [  {selectedProfesion:  []} ],
    setSelectProfesionUser : () : SelectProfesionTP [] => [ [ { selectedProfesion:  []} ] ],

    chekDelay : false,
    setChekDelay : () : boolean => false,
    clickModal : false,
    setClickModal : () : boolean => false,
    getRegister : false,
    setGetregister : () : boolean => false,
    headerFooter: true,
    setHeaderFooter : () : boolean => true,
    registerUserInfo: false,
    setRegisterUserInfo: () : boolean => false,

    globalChildSection : { current: null } ,
    setGlobalChildSection : () : RefObject < HTMLDivElement | null > => ({ current: null }),
  
})



export const GlobalContextProvider = ( props : { children : ReactNode }) => {
    const [imgnumber, setImagenumber] = useState(0)

    const [identifier, setIdentifier] = useState ('')
    
    const [chekDelay, setChekDelay] = useState (false)
    const [clickModal , setClickModal ] = useState (false)
    const [getRegister, setGetregister] = useState (false)
    const [headerFooter, setHeaderFooter] = useState (true)
    const [registerUserInfo, setRegisterUserInfo ] = useState (false)

    const [clickGlobaldNumber, setClickGlobaldNumber] = useState < DataGlobalClickNumber > 
    ( [ {globalNavigateNumber :[0,0,0,0]},  {globalSectionChildren :  [0,0] }, {servisPageAnimNavigate :  [0,0,0,0,0,0] } ] )
    const [dataimg, setDataimg] = useState < [] | DataType [] > ([]); 
    const [selectProfesionUser, setSelectProfesionUser] = useState < SelectProfesionTP > ( [   {selectedProfesion:  []}  ] )

    
    const initialGlobalChildSection = useRef<HTMLDivElement | null>(null);
    const [globalChildSection, setGlobalChildSection] = useState (initialGlobalChildSection);
    

   
    return (

        <GlobalContext.Provider value={{
            imgnumber, setImagenumber, dataimg, setDataimg , 
            chekDelay, setChekDelay, globalChildSection,
            setGlobalChildSection,  clickModal, setClickModal, 
            clickGlobaldNumber, setClickGlobaldNumber, 
            getRegister, setGetregister, headerFooter, setHeaderFooter,
            registerUserInfo, setRegisterUserInfo,
            selectProfesionUser, setSelectProfesionUser, identifier, setIdentifier,
            
            }}>

            {props.children}

        </GlobalContext.Provider>
    )
}

export const useGlobalContext = () => useContext(GlobalContext);