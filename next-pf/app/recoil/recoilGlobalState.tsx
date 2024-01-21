'use client'

import { atom, selector } from "recoil"

export const recoilSacdeli = atom({
    key : 'sacdeli' ,
    default : ''
})

export const vcadeFunqcia = selector({
    key: 'charCountState', // unique ID (with respect to other atoms/selectors)
    get: ({get}) => {
      const text = get(recoilSacdeli);
  
      return text.length;
    },
  });


  export const clickGlobalNavigate = atom({

    key: 'clickGlobalNavigate',
    default : Array(4).fill(0)
  })

//   export const functionClickglobalNavigate  = selector ({

//     key : 'functionClickglobalNavigate',
//     get : ({ get })=> {

//         const getClickFn = get(clickGlobalNavigate)
        
//         // console.log(getClickFn, 'getClickFn');
        
      
//         return getClickFn
//     },

 
    
    
//   })

