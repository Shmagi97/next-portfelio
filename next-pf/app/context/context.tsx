"use client";

import { StaticImageData } from "next/image";
import {
  createContext,
  useContext,
  Dispatch,
  SetStateAction,
  useState,
} from "react";

// type DataType = {
//   img: StaticImageData,
// };

interface ContextProps {
    imgnumber: number,
    setImagenumber: Dispatch <SetStateAction <number> >
    // imgclickinfo : string,
    // setImageclickinfo : Dispatch <SetStateAction <string> > ,
    dataimg : StaticImageData [],
    setDataimg : Dispatch<SetStateAction<StaticImageData []>>,
}

const GlobalContext = createContext<ContextProps>({
    imgnumber : 0,
    setImagenumber : () : number => 0,
    // imgclickinfo : '',
    // setImageclickinfo : () : string => '',
    dataimg : [],
    setDataimg : () : StaticImageData [] => [],

})

export const GlobalContextProvider = ({ children }) => {
    // const [imgclickinfo, setImageclickinfo] = useState ('');
    const [imgnumber, setImagenumber] = useState(0)
    const [dataimg, setDataimg] = useState < [] | StaticImageData [] > ([]);

    return (

        <GlobalContext.Provider value={{imgnumber, setImagenumber, dataimg, setDataimg}}>

            {children}

        </GlobalContext.Provider>
    )
}

export const useGlobalContext = () => useContext(GlobalContext);