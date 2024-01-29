'use client'

import React, { useState } from 'react';
import styles from './paggination.module.scss'
import styled from 'styled-components';
import OnclickBtn from '@/app/components/button/onClickBtn/onClickBtn';
import { LeftOutlined, RightOutlined } from '@ant-design/icons';
import AnimateDivChild from './AnimateDivChild';

 const AnimatedDiv = styled.div<{ $stop: string, $transform: number }>`
  width: fit-content;
  row-gap: 5px;
  display: grid;
  animation: loop 15s linear ${(props) => props.$stop} ;
  
  transform: translateY(${(props) => props.$transform}px);

  @keyframes loop {
      0% {
        transform: translateY(-30%);
      }
    
      100% {
        transform: translateY(0);
      }
`;


export const PaginationSerivise = () => {

  const [animStop, setAnimStop] = useState('infinite')
  const [animtransform, setAnimtransform] = useState (0)
  const [animHiden, setAnimHiden] = useState(false)
  
  function getEnter(){ setAnimStop('stop')} 

   function getLeave(){ setAnimStop('infinite') } 
 
    return <div className={!animHiden? styles.tagListHidden : styles.tagListVisible} onMouseEnter={getEnter} onMouseLeave={getLeave}>
     
     <OnclickBtn className={styles.onClickLeft}
                  onClick={ animtransform > -210? 
                 ()=>setAnimtransform(animtransform -30) 
                 : ()=>setAnimtransform(0)}>
        <LeftOutlined/>
     </OnclickBtn>
           
    <AnimatedDiv  $stop = {animStop} $transform = {animtransform}>

       <AnimateDivChild/>

    </AnimatedDiv>
    
    <OnclickBtn className={styles.onClickRight} 
                 onClick={ animtransform < 0? 
                  ()=>setAnimtransform(animtransform +30)
               : ()=>setAnimtransform(-210)}>
        <RightOutlined/>
    </OnclickBtn> 
    <OnclickBtn className={ animHiden? styles.paginLeft : styles.paginRight} onClick={()=> setAnimHiden(!animHiden)}>
      <LeftOutlined/>
    </OnclickBtn>

</div>

}

