'use client'

import Sacdeli from "../components/sacdeli/sacdeli"
import { recoilSacdeli, vcadeFunqcia } from "../recoil/recoilGlobalState"
import { useEffect } from "react"
import style from './page.module.css'
import { useRecoilState, useRecoilValue } from 'recoil';
import { clickGlobalNavigate } from '@/app/recoil/recoilGlobalState';
import getButtonsNumber from "./functions/getButtonsNumber"

const Statiebi = () => {
    
    const [sacdeli, setSacdeli] = useRecoilState(recoilSacdeli)
    // console.log(sacdeli);
    
    const count = useRecoilValue(vcadeFunqcia) 
    // console.log(count);
    const [ globalnavigateClick, setGlobalnavigateClick ] = useRecoilState(clickGlobalNavigate)

    function rame (e : any) {

        const takeValue = e.target.value

        getButtonsNumber(takeValue, setGlobalnavigateClick)

    }

    return <section className={style.section}>

           <input type="text" value={sacdeli} onChange={ (e)=> setSacdeli(e.target.value)} />

         <div> sacdeli : {sacdeli}</div> 
          <div> count : {count}</div> 
          <button onClick={rame} value={0} >click me</button>
          <button onClick={rame}  value={1} >click me</button>
          <button onClick={rame}  value={2} >click me</button>
          <button onClick={rame}  value={3} >click me</button>

       
    </section>
} 

export default Statiebi