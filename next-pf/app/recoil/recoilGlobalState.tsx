'use client'

import axios from "axios";
import { atom, selector, useRecoilState } from "recoil"

  export const servisPageMapWidthState = atom( { 
   
    key : 'servisPageMapWidthKey',
    default : false,

   } )

  
   // სელექტორით აქსიოსი გამოყენება 

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

   //paginations changes animSlides

   export const animSlidesState = atom ({
    key: 'animSlidesState',
    default: false,
   })

   // combined recoil states

   export const useRecoilUserInfo = () =>{ 
    const [ userInfoID , setUserInfoID ] = useRecoilState(userInfoIDState)
    const [ meClick, setMeclick ] = useRecoilState(meClickState)
    const [ animSlides , setAnimSlides ] = useRecoilState(animSlidesState)

    return {
      userInfoID , setUserInfoID,
      meClick, setMeclick,
      animSlides , setAnimSlides,

    }
  
  };

   
