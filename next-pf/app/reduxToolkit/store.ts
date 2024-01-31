' use client '

import { PayloadAction, configureStore, createSlice } from "@reduxjs/toolkit";

type GlobalNumber = {

  globalNavigateNumber: number[] ;
  globalSectionChildren: number[] ;
  servisPageAnimNavigate: number[] ;
}

type RootState   = [  GlobalNumber  ]


const initialState: RootState = [

  { globalNavigateNumber: [], globalSectionChildren: [], servisPageAnimNavigate: [] },
  // { globalNavigateNumber: [], globalSectionChildren: [], servisPageAnimNavigate: [] },
  // { globalNavigateNumber: [], globalSectionChildren: [], servisPageAnimNavigate: [] },
]
    
const numberSlice = createSlice( { 

   name : 'number',
   initialState,

   reducers : {

    setGlobalNumber: ( state, action : PayloadAction < { masivObjectIndex : number, key : keyof GlobalNumber, masivIndex : number } > )=> {
       
      const { masivObjectIndex, key, masivIndex } = action.payload
      state[masivObjectIndex][key].fill(0)

      if (masivIndex !== undefined){

        state[masivObjectIndex][key][masivIndex]=1
      }

    }
   }

 } );

 export const { setGlobalNumber } = numberSlice.actions

 export const store = configureStore ( { 

    reducer: {

      numbers: numberSlice.reducer
    }
  } );

  export type { RootState };

  // gamoyenebis principi 

  //     const dispatch = useDispatch()
  //      const globalNumbers = useSelector((state: RootState)=> state)
  // (navigaciashi) if(valueNumber)  dispatch( setGlobalNumber( { masivObjectIndex : 0, key : 'globalNavigateNumber', masivIndex : parseInt(valueNumber) } ) )