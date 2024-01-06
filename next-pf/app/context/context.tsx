"use client";

import {
  createContext,
  useContext,
  Dispatch,
  SetStateAction,
  useState,
} from "react";

type DataType = {
  firstName: String,
};

interface ContextProps {
    imgnumber: number,
    setImagenumber: Dispatch <SetStateAction <number> >
    imgclickinfo : string,
    setImageclickinfo : Dispatch <SetStateAction <string> > ,
    data : DataType [],
    setData : Dispatch<SetStateAction<DataType[]>>,
}

const GlobalContext = createContext<ContextProps>({
    imgnumber : 0,
    setImagenumber : () : number => 0,
    imgclickinfo : '',
    setImageclickinfo : () : string => '',
    data : [],
    setData : () : DataType[] => [],

})

export const GlobalContextProvider = ({ children }) => {
    const [imgclickinfo, setImageclickinfo] = useState ('');
    const [imgnumber, setImagenumber] = useState(0)
    const [data, setData] = useState < [] | DataType[] > ([]);

    return (

        <GlobalContext.Provider value={{imgnumber, setImagenumber, imgclickinfo, setImageclickinfo, data, setData}}>

            {children}

        </GlobalContext.Provider>
    )
}

export const useGlobalContext = () => useContext(GlobalContext);