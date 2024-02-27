'use client'

import { atom, selector, useRecoilState } from "recoil"

// sacdeli

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

  // children page global states

  export const servisPageMapWidthState = atom( { 
   
    key : 'servisPageMapWidthKey',
    default : false,

   } )

   export const userInfoState = atom ({
    key: 'userInfo',
    default: [],
   })

   export const useRecoilUserInfo = () => useRecoilState(userInfoState);


