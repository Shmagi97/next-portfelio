'use client'

import React, { useState } from 'react';
import styles from './paggination.module.scss'
import styled from 'styled-components';
import OnclickBtn from '@/app/components/button/onClickBtn/onClickBtn';
import { LeftOutlined, RightOutlined } from '@ant-design/icons';
import AnimateDivChild from './AnimateDivChild';




type propsTP = {

  clasName : string,
  // mouseEnter? : ( event : React.MouseEvent < HTMLDivElement , MouseEvent > ) => void,

}

 const AnimatedDiv = styled.div<{ $stop: string, $transform: number }>`
  width: fit-content;
  display: flex;
  gap: 1rem;

  animation: loop 15s linear ${(props) => props.$stop} ;

  transform: translateX(${(props) => props.$transform}px);

  @keyframes loop {
      0% {
        transform: translateX(0);
      }
    
      100% {
        transform: translateX(-50%);
      }
`;



export const PaginationSerivise = (props : propsTP) => {

  const [animStop, setAnimStop] = useState('infinite')
  const [animtransform, setAnimtransform] = useState (0)

  function getEnter(){ setAnimStop('stop')} 

   function getLeave(){ setAnimStop('infinite') } 

     const dinamikClass = `${styles.tagList} ${props.clasName}`
    
    return <div className={dinamikClass} onMouseEnter={getEnter} onMouseLeave={getLeave}>
     
     <OnclickBtn className={styles.onClickLeft}
                  onClick={ animtransform < 100? 
                 ()=>setAnimtransform(animtransform +100) 
                 : ()=>setAnimtransform(-3400)}>
        <LeftOutlined/>
     </OnclickBtn>
           
    <AnimatedDiv  $stop = {animStop} $transform = {animtransform}>

       <AnimateDivChild/>

    </AnimatedDiv>
    
    <OnclickBtn className={styles.onClickRight} 
                 onClick={ animtransform > -3400? 
                  ()=>setAnimtransform(animtransform -100)
               : ()=>setAnimtransform(100)}>
        <RightOutlined/>
    </OnclickBtn> 
       
</div>

}

