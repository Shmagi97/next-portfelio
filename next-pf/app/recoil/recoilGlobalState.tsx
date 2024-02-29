'use client'

import axios from "axios";
import { atom, selector, useRecoilState } from "recoil"

// sacdeli

// export const recoilSacdeli = atom({
//     key : 'sacdeli' ,
//     default : ''
// })

// export const vcadeFunqcia = selector({
//     key: 'charCountState', // unique ID (with respect to other atoms/selectors)
//     get: ({get}) => {
//       const text = get(recoilSacdeli);
  
//       return text.length;
//     },
//   });

//   export const clickGlobalNavigate = atom({

//     key: 'clickGlobalNavigate',
//     default : Array(4).fill(0)
//   })

  // children page global states

  export const servisPageMapWidthState = atom( { 
   
    key : 'servisPageMapWidthKey',
    default : false,

   } )

  
   // სელექტორით აქსიოსი გამოყენება 

   export const userIDCheckSucessState = atom < string | null > ({
    key: 'userIDCheckSucess',
    default: '',
   })

   export const userInfoIDState = atom < string | null > ({
    key: 'userInfo',
    default: '',
   })

   export const getUserInfoAxios = selector({
    key: 'geuUserInfoAxios',
    get:  ({get})=> {
      const userId = get(userInfoIDState)
       
      if (userId) {

      try{

        const response = axios.get(`http://localhost:4000/users/${userId}`)
        return response

      } catch(err){
        console.error(err);
        
      }
    }
    }
   })

   // Me click sign Out modall change

   export const meClickState = atom ({
    key: 'meClickState',
    default: false,
   })



   // combined recoil states

   export const useRecoilUserInfo = () =>{ 
    const [ userInfoID , setUserInfoID ] = useRecoilState(userInfoIDState)
    const [ userIDCheckSucess , setUserIDCheckSucess ] = useRecoilState(userIDCheckSucessState)
    const [ meClick, setMeclick ] = useRecoilState(meClickState)

    return {
      userInfoID , setUserInfoID,
      userIDCheckSucess , setUserIDCheckSucess,
      meClick, setMeclick,
    }
  
  };

   
